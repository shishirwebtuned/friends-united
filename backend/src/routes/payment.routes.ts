import express from "express";
import {
  createMember,
  getMemberPaymentStatus,
  squareWebhook,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.post(
  "/webhook/square",
  express.raw({ type: "application/json" }),
  squareWebhook,
);
router.post("/member", createMember);
router.get("/member/status", getMemberPaymentStatus);

export default router;
