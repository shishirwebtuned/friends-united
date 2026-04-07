import express from "express";
import {
  createContactemail,
  getAllContacts,
  getContactById,
} from "../controllers/contact.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", createContactemail);
router.get("/all", protect, getAllContacts);
router.get("/:id", protect, getContactById);

export default router;
