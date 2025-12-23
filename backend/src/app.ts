import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import userRoutes from "./routes/user.routes.js";
import contactRoutes from "./routes/contact.routes.js";

import { errorHandler } from "./middleware/error.middleware.js";


dotenv.config();

const app = express();

// CORS Configuration
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  process.env.CLIENT_URL
].filter((origin): origin is string => Boolean(origin));

const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Routes
const baseApi = "/api/v1/en"; // Updated base API path

app.use(`${baseApi}/users`, userRoutes);
app.use(`${baseApi}/contacts`, contactRoutes);



// Error handler
app.use(errorHandler);

export default app;
