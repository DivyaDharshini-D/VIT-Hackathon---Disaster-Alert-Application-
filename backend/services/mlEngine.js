export const calculateRisk = (data) => {
  const {
    rainfall,
    riverLevel,
    windSpeed,
    temperature,
    pressure,
    soilMoisture
  } = data;

  // Flood risk
  const floodScore =
    rainfall * 0.4 +
    riverLevel * 10 +
    soilMoisture * 0.3;

  const floodRisk =
    floodScore > 100 ? "High" :
    floodScore > 60 ? "Medium" : "Low";

  // Cyclone risk
  const cycloneRisk =
    windSpeed > 100 && pressure < 990 ? "High" :
    windSpeed > 60 ? "Medium" : "Low";

  // Heatwave risk
  const heatwaveRisk =
    temperature > 42 ? "High" :
    temperature > 35 ? "Medium" : "Low";

  return { floodRisk, cycloneRisk, heatwaveRisk };
};
