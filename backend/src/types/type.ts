import type { Document, Types } from "mongoose";

export interface IUser extends Document {
  name: string;
  _id: Types.ObjectId;
  email: string;
  password: string;
  role: string;
  phone: string;
  address: string;
  status: boolean;
  otp: string | null;
  otpExpiry: Date | null;
  bookings: Types.ObjectId[];
  createdBy: "user" | "admin";
}
