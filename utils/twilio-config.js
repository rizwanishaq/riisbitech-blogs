import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_Account_SID,
  process.env.TWILIO_Auth_Token
);

export const sendSMS = async ({ body }) => {
  try {
    const message = await client.messages.create({
      body: body,
      to: process.env.TWILIO_PHONE_TO_NUMBER,
      from: process.env.TWILIO_PHONE_NUMBER,
    });
    return message;
  } catch (error) {
    return error;
  }
};

export default client;
