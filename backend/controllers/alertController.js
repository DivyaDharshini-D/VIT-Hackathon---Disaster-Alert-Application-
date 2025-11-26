import { sendSMS } from "../services/smsService.js";

export const sendAlert = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  sendSMS(message);

  return res.json({ success: true, msg: "Alert sent to admins" });
};
