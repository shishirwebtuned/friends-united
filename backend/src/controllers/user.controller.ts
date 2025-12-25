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
  const { name, email, password, phone, address , role, createdBy  } = req.body;

  if (!name || !email || !password || !phone || !address || !role )
    throw new AppError("All fields are  required", 400);

 const existingUser = await User.findOne({ 
  $or: [
    { email: email }, 
    { phone: phone }
  ] 
});

if (existingUser) {
  // Check which field caused the conflict for a better error message
  const conflictField = existingUser.email === email ? "Email" : "Phone number";
  throw new AppError(`${conflictField} already exists`, 409);
}
  

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
    phone,
    address,
    role ,
    otp: hashedOtp,
    otpExpiry: otpExpires,
    createdBy
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

  if(createdBy !== "admin")
  {
    try {
      await sendEmail({ to: email, subject, html });
    } catch (emailError) {
      console.error("Failed to send OTP email:", emailError);
      // Continue with registration even if email fails
    }
  }

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
        phone: user.phone,
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

  user.status = true;
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
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;  
  const users =
    (await User.find({})
      .select("-password")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()) || [];

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: users.length ? "Users Fetched Successfully" : "No Users found",
    data: {
      users,pagination: {
        total: await User.countDocuments(),
        page,
        limit,
      },
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

export const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  if (!user) throw new AppError("User not found", 404);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "User Deleted Successfully",
  });
}
);

export const updateUserStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    throw new AppError("User not found", 404);
  }
  user.status = !user.status;
  await user.save();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "User status updated successfully",
    data: { user },
  });
});


export const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { name, phone, address,createdBy,email,password ,role } = req.body;
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new AppError("User not found", 404);
    }
    user.name = name || user.name;
    user.phone = phone || user.phone;
    user.address = address || user.address;
    user.createdBy = createdBy || user.createdBy;
    user.email = email || user.email;
    user.role = role || user.role;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }
    await user.save();
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "User updated successfully",
      data: { user },
    });

  } catch (error) {
    throw new AppError("Error updating user: " + (error as Error).message, 500);
  }
  
});