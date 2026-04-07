import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
interface EmailOptions {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  attachments?: any[];
}

export const sendEmail = async ({
  to,
  subject,
  text,
  html,
  attachments,
}: EmailOptions) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      logger: true,
      debug: true,
    });

    await transporter.verify();
    console.log("SMTP connection successful");

    const info = await transporter.sendMail({
      from: `"Friends United" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
      attachments,
    });

    console.log("Email sent: %s", info.messageId);
    return info;
  } catch (error: any) {
    console.error("SMTP FULL ERROR:");
    console.error(error);
    console.error("CODE:", error?.code);
    console.error("RESPONSE:", error?.response);
    console.error("COMMAND:", error?.command);
    throw error;
  }
};
