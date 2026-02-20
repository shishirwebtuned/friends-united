import { sendEmail } from "./sendEmail.js";

interface AdminNewMemberEmailData {
  memberName: string;
  memberEmail: string;
  memberNo: number;
}

const generateAdminNewMemberEmailTemplate = (
  data: AdminNewMemberEmailData,
): string => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Staatliches&display=swap');

      body {
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
        color: #212529;
      }

      .email-wrapper {
        width: 100%;
        background-color: #f5f5f5;
        padding: 40px 20px;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 40px 30px;
        text-align: center;

      }

      .logo {
        text-align: center;
        margin-bottom: 30px;
      }

      .logo img {
        width: 220px;
        height: auto;
        display: inline-block;
      }

      .heading {
        text-align: center;
        font-family: "Staatliches", Arial, sans-serif;
        font-size: 24px;
        margin-bottom: 30px;
        color: #1a1a1a;
        text-transform: uppercase;

      }
      .intro-text {
        font-size: 16px;
        line-height: 1.7;
        margin: 30px auto;
        max-width: 520px;
        color: #212529;
      }

      .info-box {
        border: 2px solid #b8912d;
        padding: 20px;
        margin-top: 20px;
        font-size: 16px;
        line-height: 1.6;
      }

      .info-row {
        margin-bottom: 10px;
      }

      .label {
        font-weight: 700;
        color: #000;
      }

      .footer {
        margin-top: 30px;
        font-size: 14px;
        text-align: center;
        color: #888;
      }

    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="container">

        <div class="logo">
          <img src="https://res.cloudinary.com/dmpzfswwa/image/upload/v1770809942/logo_kfowoq.png" alt="Friends United Logo" />
        </div>

        <div class="heading">
          NEW MEMBER REGISTRATION
        </div>

        <p class="intro-text">A new member has joined the Friends United family.</p>

        <div class="info-box">
          <div class="info-row">
            <span class="label">Member Name:</span> ${data.memberName}
          </div>

          <div class="info-row">
            <span class="label">Member Email:</span> ${data.memberEmail}
          </div>

          <div class="info-row">
            <span class="label">Member Number:</span> ${data.memberNo}
          </div>

          <div class="info-row">
            <span class="label">Date Joined:</span> ${new Date().toLocaleString()}
          </div>
        </div>

        <div class="footer">
          This is an automated notification from Friends United.
        </div>

      </div>
    </div>
  </body>
  </html>
  `;
};

export const sendAdminNewMemberEmail = async (
  data: AdminNewMemberEmailData,
): Promise<void> => {
  const html = generateAdminNewMemberEmailTemplate(data);

  await sendEmail({
    to: (process.env.CLIENT_EMAIL as string) || "hello@friendsunited.com.au",
    subject: `New Member Joined – #${data.memberNo}`,
    html,
  });

  console.log(`✅ Admin notified of new member: ${data.memberEmail}`);
};
