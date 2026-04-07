import express from "express";
import { getMemberById, getMembers } from "../controllers/member.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/all", protect, getMembers);
router.get("/memberId/:id", protect, getMemberById);

export default router;
