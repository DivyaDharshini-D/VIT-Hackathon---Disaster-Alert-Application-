import cron from "node-cron";
import WeatherData from "../models/WeatherData.js";
import RiskResult from "../models/RiskResult.js";
import { calculateRisk } from "../services/mlEngine.js";

cron.schedule("0 * * * *", async () => {
  const latest = await WeatherData.find().sort({ date: -1 }).limit(1);
  if (!latest[0]) return;

  const risk = calculateRisk(latest[0]);
  await RiskResult.create(risk);

  console.log("⏳ Hourly Prediction Saved");
});
