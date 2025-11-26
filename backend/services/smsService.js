import twilio from "twilio";

let client = null;

// Initialize only if real credentials exist
if (
  process.env.TWILIO_SID &&
  process.env.TWILIO_TOKEN &&
  process.env.TWILIO_SID !== "dummy" &&
  process.env.TWILIO_TOKEN !== "dummy"
) {
  client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
  console.log("Twilio initialized");
} else {
  console.log("⚠ SMS disabled – no Twilio credentials found.");
}

export const sendSMS = async (message) => {
  if (!client) {
    console.log("⚠ SMS skipped:", message);
    return;
  }

  await client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE,
    to: process.env.ADMIN_PHONE
  });

  console.log("📩 SMS Sent");
};
