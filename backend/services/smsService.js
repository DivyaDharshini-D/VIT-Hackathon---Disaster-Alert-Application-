import twilio from "twilio";

// Initialize Twilio Client
let client = null;

if (
  process.env.TWILIO_SID &&
  process.env.TWILIO_TOKEN &&
  process.env.TWILIO_SID !== "dummy" &&
  process.env.TWILIO_TOKEN !== "dummy"
) {
  client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
  console.log("Twilio initialized");
} else {
  console.log("⚠ SMS disabled – missing Twilio credentials");
}

// Function to send SMS
export const sendSMS = async (message) => {
  const ADMIN1 = process.env.ADMIN_PHONE_1;  // first admin number
  const ADMIN2 = process.env.ADMIN_PHONE_2;  // second admin number
  const FROM = process.env.TWILIO_PHONE;

  const numbers = [ADMIN1, ADMIN2];

  for (const to of numbers) {
    try {
      if (!client) {
        console.log(`⚠ SMS skipped (Twilio not initialized) → ${to}`);
        continue;
      }

      if (!to) {
        console.log(`⚠ Skipped: Admin phone number missing →`, to);
        continue;
      }

      await client.messages.create({
        body: message,
        from: FROM,
        to: to
      });

      console.log(`📩 SMS Sent to ${to}`);
      
    } catch (err) {
      console.log(`❌ Failed to send SMS to ${to}: ${err.message}`);
    }
  }
};
