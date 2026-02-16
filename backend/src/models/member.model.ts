import mongoose, { Schema } from "mongoose";

const memberSchema = new Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    memberId: { type: Number, unique: true, required: true },
    phoneNumber: { type: String, required: true },
    streetAddress: { type: String },
    suburb: { type: String, default: false },
    state: { type: String, default: null },
    country: { type: String, default: null },
    zip: { type: String, default: null },
    dateOfBirth: { type: Date },
    amount: { type: Number },
    squarePaymentId: { type: String },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    supportType: { type: String, enum: ["monthly", "annual"] },
  },
  { timestamps: true },
);

export const Member = mongoose.model("Member", memberSchema);
export type Member = mongoose.InferSchemaType<typeof memberSchema>;
