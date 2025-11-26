import WeatherData from "../models/WeatherData.js";
import RiskResult from "../models/RiskResult.js";
import { calculateRisk } from "../services/mlEngine.js";

export const calculateRiskNow = async (req, res) => {
  const latest = await WeatherData.find().sort({ date: -1 }).limit(1);
  const risk = calculateRisk(latest[0]);

  await RiskResult.create(risk);

  res.json(risk);
};

export const getHistory = async (req, res) => {
  const history = await RiskResult.find().sort({ timestamp: -1 });
  res.json(history);
};
