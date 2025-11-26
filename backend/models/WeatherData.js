import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  rainfall: Number,
  windSpeed: Number,
  temperature: Number,
  humidity: Number,
  riverLevel: Number,
  soilMoisture: Number,
  pressure: Number
});

export default mongoose.model("WeatherData", weatherSchema);
