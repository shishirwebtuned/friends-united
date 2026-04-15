import mjml2html from "mjml";
import { sendEmail } from "./sendEmail.js";

interface MemberWelcomeEmailData {
  memberName: string;
  memberEmail: string;
  memberNo: string;
}

const generateMemberWelcomeEmailNewTemplate = (
  data: MemberWelcomeEmailData,
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
          src="https://res.cloudinary.com/dmpzfswwa/image/upload/v1776244704/hands3_b3rde7.png"
          width="560px"
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
We&rsquo;re thrilled to have you join our movement that
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- SPACER -->
    <mj-section padding="0" background-color="#F7F4EF">
      <mj-column>
        <mj-spacer height="14px" />
      </mj-column>
    </mj-section>

    <!-- 'DEMANDS BETTER' -->
    <mj-section padding="0 20px" background-color="#F7F4EF">
      <mj-column padding="0">
        <mj-text
          font-size="34px"
          font-weight="900"
          color="#D48A28"
          align="center"
          letter-spacing="1.5px"
          line-height="1.2"
          padding="0"
          css-class="hero-title"
        >
          <span class="hero-title" style="font-family: 'Poppins', Helvetica, Arial, sans-serif; font-size: 34px; font-weight: 900; color: #ca7b28; letter-spacing: 1.5px; text-transform: uppercase;">&lsquo;DEMANDS BETTER&rsquo;</span>
        </mj-text>
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
          <span style="font-family: 'Poppins', Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 700; color: #1A1A1A; letter-spacing: 1.2px; text-transform: uppercase;">Together, We Will Make Our Politicians Deliver Results</span>
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- SPACER -->
    <mj-section padding="0" background-color="#F7F4EF">
      <mj-column>
        <mj-spacer height="40px" />
      </mj-column>
    </mj-section>

    <!-- FRIEND NUMBER BOX -->
    <mj-section padding="0 30px" background-color="#F7F4EF">
      <mj-column padding="0">
        <mj-table padding="0" css-class="friend-box">
          <tr style="border: 1px solid #1A1A1A; border-radius: 4px;">
            <td class="friend-number" width="62%" style="padding: 10px 12px; border: 1px solid #1A1A1A; border-right: 1px solid #1A1A1A; font-family: 'Poppins', Helvetica, Arial, sans-serif; font-size: 15px; font-weight: 700; color: #D48A28; line-height: 1.3;">
              You are &lsquo;Friend&rsquo; Number
            </td>
            <td class="friend-number" style="padding: 10px 12px; border: 1px solid #1A1A1A; text-align: center; font-family: 'Poppins', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; color: #D48A28; letter-spacing: 2px;">
             ${data.memberNo}
            </td>
          </tr>
        </mj-table>
      </mj-column>
    </mj-section>

    <!-- SPACER -->
    <mj-section padding="0" background-color="#F7F4EF">
      <mj-column>
        <mj-spacer height="28px" />
      </mj-column>
    </mj-section>

    <!-- CTA BUTTON -->
    <mj-section padding="0 44px" background-color="#F7F4EF">
      <mj-column padding="0">
        <mj-button
          href="https://www.friendsunited.com.au"
          background-color="#ca7b28"
          color="#FFFFFF"
          font-size="14px"
          font-weight="500"
          border-radius="28px"
          inner-padding="13px 36px"
          padding="0"
          align="center"
        >
          www.friendsunited.com.au
        </mj-button>
      </mj-column>
    </mj-section>

    <!-- BOTTOM SPACER -->
    <mj-section padding="0" background-color="#F7F4EF">
      <mj-column>
        <mj-spacer height="40px" />
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

export const sendMemberWelcomeNewEmail = async (
  data: MemberWelcomeEmailData,
): Promise<void> => {
  try {
    const html = generateMemberWelcomeEmailNewTemplate(data);

    await sendEmail({
      to: data.memberEmail,
      subject: "Welcome to Friends United Family.",
      html,
    });

    console.log(`✅ MJML Welcome email sent to ${data.memberEmail}`);
  } catch (error) {
    console.error(`❌ Failed to send email to ${data.memberEmail}:`, error);
  }
};
