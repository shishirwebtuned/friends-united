import type { Document, Types } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  phoneNumber: string;
  address: string;
  status: "pending" | "verified";
  otp: string | null;
  otpExpiry: Date | null;
  bookings: Types.ObjectId[];
}
