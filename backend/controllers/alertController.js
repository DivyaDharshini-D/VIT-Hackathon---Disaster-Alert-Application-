import { sendSMS } from "../services/smsService.js";
import { sendPushNotification } from "../services/notificationService.js";

export const sendAlert = async (req, res) => {
  const { message } = req.body;

  await sendSMS(message);
  await sendPushNotification(message);

  res.json({ message: "Alert broadcasted" });
};
