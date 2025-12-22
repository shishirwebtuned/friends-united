import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import userRoutes from "./routes/user.routes.js";

import { errorHandler } from "./middleware/error.middleware.js";
import { createContact } from "./controllers/contact.controller.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Routes
const baseApi = "/api/v1/en";

app.use(`${baseApi}/users`, userRoutes);
app.use(`${baseApi}/contact`, createContact);

// Error handler
app.use(errorHandler);

export default app;
