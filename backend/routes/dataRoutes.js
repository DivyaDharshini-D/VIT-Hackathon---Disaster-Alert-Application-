import express from "express";
import { addWeatherData, getLatestWeather } from "../controllers/dataController.js";

const router = express.Router();

router.post("/add", addWeatherData);
router.get("/latest", getLatestWeather);

export default router;
