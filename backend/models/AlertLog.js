import mongoose from "mongoose";

const alertLogSchema = new mongoose.Schema({
  type: String, // Flood, Cyclone, etc
  message: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("AlertLog", alertLogSchema);
