import WeatherData from "../models/WeatherData.js";

export const addWeatherData = async (req, res) => {
  const data = await WeatherData.create(req.body);
  res.json({ message: "Weather added", data });
};

export const getLatestWeather = async (req, res) => {
  const data = await WeatherData.find().sort({ date: -1 }).limit(1);
  res.json(data[0]);
};
