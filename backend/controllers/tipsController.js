import { getSafetyTip } from "../utils/ageTips.js";

export const safetyTip = async (req, res) => {
  const { age } = req.body;

  res.json({ tip: getSafetyTip(age) });
};
