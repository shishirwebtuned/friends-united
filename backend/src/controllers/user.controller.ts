import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { generateToken } from "../utils/generateToken.js";
import { sendResponse } from "../utils/sendResponse.js";
import crypto from "crypto";
import { sendEmail } from "../utils/sendEmail.js";

export const loginUser = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new AppError("Invalid email", 401);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new AppError("Incorrect Password", 401);

  const token = generateToken((user._id as string).toString(), user.role);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Login Successful",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
      },
      token,
    },
  });
});

export const registerUser = catchAsync(async (req, res) => {
  const { name, email, password, phoneNumber, address } = req.body;

  if (!name || !email || !password || !phoneNumber || !address)
    throw new AppError("All fields are  required", 400);

  const existingUser = await User.findOne({ email });
  if (existingUser)
    throw new AppError("User with this email already exists", 401);

  const otp = Math.floor(100000 + Math.random() * 900000);

  const hashedOtp = crypto
    .createHash("sha256")
    .update(String(otp))
    .digest("hex");

  const otpExpires = Date.now() + 10 * 60 * 1000;

  const user = new User({
    name,
    email,
    password,
    phoneNumber,
    address,
    role: "member",
    otp: hashedOtp,
    otpExpiry: otpExpires,
  });

  await user.save();

  const subject = "Your Friends United OTP Verification Code";

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Welcome to Friends United, ${name}!</h2>
      <p>Your One-Time Password (OTP) is:</p>
      <h1 style="color: #007bff;">${otp}</h1>
      <p>This code will expire in <strong>10 minutes</strong>.</p>
      <p>If you didn’t request this, you can ignore this email.</p>
    </div>
  `;

  await sendEmail({ to: email, subject, html });

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Registration Successful!",
    data: {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phoneNumber: user.phoneNumber,
        address: user.address,
        status: user.status,
      },
    },
  });
});

export const verifyOtp = catchAsync(async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) throw new AppError("Email and OTP are required", 400);

  const user = await User.findOne({ email });
  if (!user) throw new AppError("User not found", 404);

  const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");

  if (user.otp !== hashedOtp) throw new AppError("Invalid OTP", 400);

  if (user.otpExpiry && user.otpExpiry.getTime() < Date.now())
    throw new AppError("OTP expired", 400);

  user.status = "verified";
  user.otp = null;
  user.otpExpiry = null;
  await user.save();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Email verified successfully!",
  });
});

export const getUsers = catchAsync(async (req, res) => {
  const users =
    (await User.find({ role: "member" })
      .select("-password")
      .sort({ createdAt: -1 })
      .lean()) || [];

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: users.length ? "Users Fetched Successfully" : "No Users found",
    data: {
      users,
    },
  });
});

export const getUserById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).select("-password");

  if (!user) throw new AppError("User not found", 404);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "User Fetched Successfully",
    data: {
      user,
    },
  });
});
