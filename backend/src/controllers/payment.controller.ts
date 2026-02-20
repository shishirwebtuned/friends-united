import dotenv from "dotenv";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import crypto from "crypto";
import { Member } from "../models/member.model.js";
import { sendResponse } from "../utils/sendResponse.js";
import { sendMemberWelcomeEmail } from "../utils/NewMemberEmail.js";
import { sendAdminNewMemberEmail } from "../utils/NewMemberAdminEmail.js";

dotenv.config();

const WEBHOOK_SIGNATURE_KEY = process.env.WEBHOOK_SIGNATURE_KEY!;

const WEBHOOK_URL = process.env.WEBHOOK_URL!;

const generateUniqueMemberId = async () => {
  let memberId;
  let exists = true;

  while (exists) {
    memberId = Math.floor(100000 + Math.random() * 900000);

    const existingMember = await Member.exists({ memberId });

    if (!existingMember) {
      exists = false;
    }
  }

  return memberId;
};

export const createMember = catchAsync(async (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    phoneNumber,
    streetAddress,
    suburb,
    state,
    zip,
    country,
    dateOfBirth,
    supportType,
    amount,
  } = req.body;

  let member = await Member.findOne({ email });

  if (member) {
    if (member.paymentStatus === "completed") {
      throw new AppError("Member already exists with completed payment", 400);
    }

    const memberId = member.memberId ?? (await generateUniqueMemberId());

    member = await Member.findOneAndUpdate(
      { email },
      {
        memberId,
        firstName,
        middleName,
        lastName,
        phoneNumber,
        streetAddress,
        suburb,
        state,
        zip,
        country,
        dateOfBirth,
        supportType,
        amount,
        paymentStatus: "pending",
      },
      { new: true },
    );
  } else {
    const memberId = await generateUniqueMemberId();

    member = await Member.create({
      firstName,
      middleName,
      lastName,
      memberId,
      email,
      phoneNumber,
      streetAddress,
      suburb,
      state,
      zip,
      country,
      dateOfBirth,
      supportType,
      amount,
      paymentStatus: "pending",
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Member saved (pending payment)",
    data: member,
  });
});

export const squareWebhook = catchAsync(async (req, res) => {
  const signature = req.headers["x-square-hmacsha256-signature"];

  if (!signature || typeof signature !== "string") {
    throw new AppError("Missing webhook signature", 403);
  }

  const rawBody = req.body;

  const hmac = crypto.createHmac("sha256", WEBHOOK_SIGNATURE_KEY);
  hmac.update(WEBHOOK_URL);
  hmac.update(rawBody);

  const hash = hmac.digest("base64");

  const hashBuffer = Buffer.from(hash);
  const signatureBuffer = Buffer.from(signature);

  if (hashBuffer.length !== signatureBuffer.length) {
    throw new AppError("Invalid webhook signature", 403);
  }

  const isValid = crypto.timingSafeEqual(hashBuffer, signatureBuffer);

  if (!isValid) {
    throw new AppError("Invalid webhook signature", 403);
  }

  const event = JSON.parse(rawBody.toString());

  console.log("📬 Webhook received:", event.type);

  if (event.type === "payment.created" || event.type === "payment.updated") {
    const payment = event.data?.object?.payment;

    if (!payment) {
      console.error("❌ No payment data");
      return res.status(200).send("OK");
    }

    const squarePaymentId = payment.id;
    const status = payment.status;
    const amountMoney = payment.amountMoney;
    const buyerEmail = payment.buyerEmailAddress;
    const amountInDollars = (amountMoney?.amount ?? 0) / 100; // ✅ fixed NaN bug

    console.log(`💳 Payment ${squarePaymentId}: ${status}`);

    if (status === "COMPLETED") {
      try {
        const member = await Member.findOne({ email: buyerEmail });

        // ✅ fixed idempotency check order
        if (!member) {
          console.warn("⚠️ No member found:", buyerEmail);
          return res.status(200).send("OK");
        }

        if (member.squarePaymentId === squarePaymentId) {
          console.log("⚠️ Duplicate webhook ignored");
          return res.status(200).send("OK");
        }

        if (member.paymentStatus === "completed") {
          console.log("⚠️ Already processed");
          return res.status(200).send("OK");
        }

        member.paymentStatus = "completed";
        member.squarePaymentId = squarePaymentId;
        member.amount = amountInDollars;
        member.supportType = amountInDollars >= 100 ? "annual" : "monthly";

        await member.save();

        console.log(`✅ Member payment completed: ${member._id}`);

        try {
          await sendMemberWelcomeEmail({
            memberName: `${member.firstName} ${member.lastName}`,
            memberEmail: member.email,
            memberNo: member.memberId,
          });
          console.log("✅ Welcome email sent to:", member.email);
        } catch (err) {
          console.error("❌ Error sending welcome email:", err);
        }

        try {
          await sendAdminNewMemberEmail({
            memberName: `${member.firstName} ${member.lastName}`,
            memberEmail: member.email,
            memberNo: member.memberId,
          });
          console.log("✅ Admin notified for:", member.email);
        } catch (err) {
          console.error("❌ Error sending admin email:", err);
        }
      } catch (error) {
        console.error("❌ Member update failed:", error);
      }
    } else if (status === "FAILED") {
      try {
        const result = await Member.findOneAndUpdate(
          { email: buyerEmail, paymentStatus: "pending" },
          { paymentStatus: "failed" },
          { new: true },
        );

        if (!result) {
          console.warn(
            "⚠️ No pending member found to mark as failed:",
            buyerEmail,
          );
        } else {
          console.log("❌ Payment marked as failed for member:", result._id);
        }
      } catch (error) {
        console.error("❌ Error updating failed payment:", error);
      }
    } else if (status === "PENDING") {
      console.log("⏳ Payment pending...");
    } else {
      console.warn("⚠️ Unhandled payment status:", status);
    }
  } else {
    console.log("ℹ️ Unhandled event type:", event.type);
  }

  return res.status(200).send("OK");
});

export const getMemberPaymentStatus = catchAsync(async (req, res) => {
  const { email } = req.query;

  if (!email) throw new AppError("Email is required", 400);

  const member = await Member.findOne({ email });

  if (!member) {
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: "Member not found",
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: {
      paymentStatus: member.paymentStatus,
    },
    message: "Member payment status fetched successfully",
  });
});
