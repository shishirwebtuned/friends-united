import dotenv from "dotenv";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { sendEmail } from "../utils/sendEmail.js";
import { sendResponse } from "../utils/sendResponse.js";
import { Contact } from "../models/contact.model.js";

dotenv.config();

export const createContactemail = catchAsync(async (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  if (!firstName || !lastName || !email || !phoneNumber || !message) {
    throw new AppError("All fields are requird", 400);
  }

  const subject = "New Contact Form Submission";

  const html = `
  <div style="margin:0; padding:0; background-color:#f4f6f9; font-family: Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9; padding:30px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 6px 18px rgba(0,0,0,0.08);">

            <!-- Header with Logo -->
            <tr>
              <td style="background:#ca7b28; padding:15px; text-align:center;">
                  <div class="logo" style="background-color:#ffffff; display:inline-block; padding:10px 20px; border-radius:6px; margin-bottom:10px;">
                    <img src="https://res.cloudinary.com/dmpzfswwa/image/upload/v1770809942/logo_kfowoq.png" alt="Friends United Logo" style="max-width:180px;" />
                  </div>
                <h2 style="color:#ffffff; margin:0; font-size:22px; letter-spacing:0.5px;">
                  New Contact Form Submission
                </h2>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:20px;">
                
                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  
                  <tr>
                    <td style="padding:14px 0; border-bottom:1px solid #eee;">
                      <strong style="color:#ca7b28;">Full Name</strong><br/>
                      <span style="color:#333;">${firstName} ${lastName}</span>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0; border-bottom:1px solid #eee;">
                      <strong style="color:#ca7b28;">Email Address</strong><br/>
                      <span style="color:#333;">${email}</span>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0; border-bottom:1px solid #eee;">
                      <strong style="color:#ca7b28;">Phone Number</strong><br/>
                      <span style="color:#333;">+${phoneNumber}</span>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:20px 0;">
                      <strong style="color:#ca7b28;">Message</strong>
                      <div style="margin-top:12px; padding:18px; background:#fff7ed; border-left:4px solid #ca7b28; border-radius:6px; color:#333; line-height:1.6;">
                        ${message}
                      </div>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#fafafa; padding:15px; text-align:center; font-size:13px; color:#777;">
                This message was sent from the <strong>Contact Us</strong> form on your website.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </div>
`;

  await Contact.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
  });

  await sendEmail({
    to: [
      process.env.CLIENT_EMAIL as string,
      process.env.CLIENT_EMAIL_TWO as string,
    ],
    subject,
    html,
  });

  // await sendEmail({
  //   to: process.env.CLIENT_EMAIL_TWO as string,
  //   subject,
  //   html,
  // });

  sendResponse(res, {
    success: true,
    message: "Your message has been sent successfully.",
    data: {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    },
    statusCode: 201,
  });
});

export const getAllContacts = catchAsync(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  const contacts = await Contact.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  const total = await Contact.countDocuments();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: contacts.length
      ? "Contacts Fetched Successfully"
      : "No Contacts found",
    data: {
      contacts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    },
  });
});

export const getContactById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id).lean();

  if (!contact) throw new AppError("Contact not found", 404);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Contact Fetched Successfully",
    data: {
      contact,
    },
  });
});
