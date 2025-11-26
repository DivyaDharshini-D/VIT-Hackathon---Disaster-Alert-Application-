import express from "express";
import { calculateRiskNow, getHistory } from "../controllers/riskController.js";

const router = express.Router();

router.get("/calculate", calculateRiskNow);
router.get("/history", getHistory);

export default router;
