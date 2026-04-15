import { sendEmail } from "./sendEmail.js";
import mjml2html from "mjml";

interface AdminNewMemberEmailData {
  memberName: string;
  memberEmail: string;
  memberNo: string;
}

const generateAdminNewMemberEmailTemplate = (
  data: AdminNewMemberEmailData,
): string => {
  const mjmlMarkup = `
  <mjml>
  <mj-head>
    <mj-title>Welcome Aboard Friends United</mj-title>
    <mj-font name="Poppins" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" />
    <mj-attributes>
      <mj-all font-family="'Poppins', Helvetica, Arial, sans-serif" />
      <mj-body background-color="#F7F4EF" />
    </mj-attributes>
    <mj-style>
      .welcome-box {
        background-color: rgba(255,255,255,0.93);
        border: 2.5px solid #2D2D2D;
        border-radius: 14px;
      }
      .friend-box {
        border: 2px solid #1A1A1A;
        border-radius: 4px;
      }
      .friend-divider {
        border-right: 2px solid #1A1A1A;
      }
    </mj-style>

    <mj-style inline="inline">
  @media only screen and (max-width:480px) {
    .hero-title {
      font-size: 24px !important;
      letter-spacing: 1px !important;
    }

    .body-text {
      font-size: 13px !important;
    }

    .small-text {
      font-size: 11px !important;
    }

    .friend-number {
      font-size: 14px !important;
    }

    .button-text {
      font-size: 12px !important;
    }

    .padding-mobile {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }
  }
</mj-style>
  </mj-head>

  <mj-body background-color="#F7F4EF">

    <!-- HERO IMAGE -->
    <mj-section padding="20px 10px 0" background-color="#F7F4EF">
      <mj-column padding="0">
        <mj-image
          src="https://res.cloudinary.com/dmpzfswwa/image/upload/v1776233111/istockphoto-1093935162-612x612_dq91fw.jpg"
          width="400px"
          alt="Diverse hands coming together"
          padding="0"
          border-radius="0"
          fluid-on-mobile="true"
        />
      </mj-column>
    </mj-section>    

    <!-- SPACER -->
    <mj-section padding="0" background-color="#F7F4EF">
      <mj-column>
        <mj-spacer height="28px" />
      </mj-column>
    </mj-section>

    <!-- "We're thrilled..." TEXT -->
    <mj-section padding="0 44px" background-color="#F7F4EF">
      <mj-column padding="0">
        <mj-text
          font-size="15px"
          color="#3A3A3A"
          line-height="1.6"
          font-weight="400"
          align="center"
          padding="0"
        >
          NEW MEMBER REGISTRATION

        </mj-text>
      </mj-column>
    </mj-section>

    <!-- SPACER -->
    <mj-section padding="0" background-color="#F7F4EF">
      <mj-column>
        <mj-spacer height="14px" />
      </mj-column>
    </mj-section>



    <!-- SPACER -->
    <mj-section padding="0" background-color="#F7F4EF">
      <mj-column>
        <mj-spacer height="16px" />
      </mj-column>
    </mj-section>

    <!-- TOGETHER LINE -->
    <mj-section padding="0 28px" background-color="#F7F4EF">
      <mj-column padding="0">
        <mj-text
          font-size="12px"
          font-weight="700"
          color="#1A1A1A"
          align="center"
          line-height="1.5"
          padding="0"
        >
          <span style="font-family: 'Poppins', Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 700; color: #1A1A1A; letter-spacing: 1.2px; text-transform: uppercase;">A new member has joined the Friends United family.</span>
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- SPACER -->
    <mj-section padding="0" background-color="#F7F4EF">
      <mj-column>
        <mj-spacer height="10px" />
      </mj-column>
    </mj-section>

    <!-- FRIEND NUMBER BOX -->
    <mj-section padding="0px 20px">
  <mj-column>

    <mj-wrapper
      css-class="card-box"
      padding="18px"
      border="2px solid #b8912d"
      background-color="#ffffff"
      border-radius="10px"
    >

      <mj-text padding="6px 0">
        <strong>Member Name:</strong> ${data.memberName}
      </mj-text>

      <mj-divider border-color="#ffffff" padding="0" />

      <mj-text padding="6px 0">
        <strong>Member Email:</strong> ${data.memberEmail}
      </mj-text>
      
      <mj-divider border-color="#ffffff" padding="0" />

      <mj-text padding="6px 0">
        <strong>Member Number:</strong> ${data.memberNo}
      </mj-text>
      
      <mj-divider border-color="#ffffff" padding="0" />

      <mj-text padding="6px 0">
        <strong>Date Joined:</strong> ${new Date().toLocaleString()}
      </mj-text>

    </mj-wrapper>

  </mj-column>
</mj-section>
<mj-section padding="0" background-color="#F7F4EF">
      <mj-column>
        <mj-spacer height="10px" />
      </mj-column>
    </mj-section>

  </mj-body>
</mjml>
  `;

  const result = mjml2html(mjmlMarkup);

  if (result.errors.length > 0) {
    console.warn("MJML Parsing Errors:", result.errors);
  }

  return result.html;
};

export const sendAdminNewMemberEmail = async (
  data: AdminNewMemberEmailData,
): Promise<void> => {
  const html = generateAdminNewMemberEmailTemplate(data);

  await sendEmail({
    to: [
      process.env.CLIENT_EMAIL || "hello@friendsunited.com.au",
      process.env.CLIENT_EMAIL_TWO || "gusmacri@gmail.com",
    ],
    subject: `New Member Joined – #${data.memberNo}`,
    html,
  });

  console.log(`✅ Admin notified of new member: ${data.memberEmail}`);
};
