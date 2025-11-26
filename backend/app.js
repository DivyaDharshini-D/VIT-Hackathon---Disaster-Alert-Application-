import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import "./config/env.js";

import authRoutes from "./routes/authRoutes.js";
import dataRoutes from "./routes/dataRoutes.js";
import riskRoutes from "./routes/riskRoutes.js";
import alertRoutes from "./routes/alertRoutes.js";
import tipsRoutes from "./routes/tipsRoutes.js";

import "./cron/predictionJob.js"; // auto job

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);
app.use("/api/risk", riskRoutes);
app.use("/api/alert", alertRoutes);
app.use("/api/tips", tipsRoutes);

export default app;
