import mongoose from "mongoose";

const riskSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  floodRisk: String,
  cycloneRisk: String,
  heatwaveRisk: String
});

export default mongoose.model("RiskResult", riskSchema);
