import express from "express";
import { safetyTip } from "../controllers/tipsController.js";

const router = express.Router();

router.post("/get", safetyTip);

export default router;
