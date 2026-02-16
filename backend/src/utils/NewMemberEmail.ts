import { sendEmail } from "./sendEmail.js";

interface MemberWelcomeEmailData {
  memberName: string;
  memberEmail: string;
  memberNo: number;
}

const generateMemberWelcomeEmailTemplate = (
  data: MemberWelcomeEmailData,
): string => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Staatliches&display=swap');
      
      .staatliches-regular {
        font-family: "Staatliches", Arial, Helvetica, sans-serif;
      }

      .poppins-regular {
        font-family: "Poppins", Arial, Helvetica, sans-serif;
      }

      .poppins-bold {
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        font-weight: 700;
      }

      body {
        font-family: "Staatliches", Arial, Helvetica, sans-serif;
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
        padding: 50px 40px;
        text-align: center;
      }
      .logo {
        margin-bottom: 40px;
      }
      .logo img {
        width: 280px;
        height: auto;
        display: inline-block;
      }
      .main-heading {
        font-size: 28px;
        font-weight: 700;
        line-height: 1.3;
        margin: 30px 0;
        text-transform: uppercase;
      }
    .main-heading .gold {
        background: linear-gradient(to bottom, #000000, #8b6914);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: #b8912d; /* Fallback for email clients that don't support gradients */
      }
      .main-heading .black {
        color: #1a1a1a;
      }
      .intro-text {
        font-size: 16px;
        line-height: 1.7;
        margin: 30px auto;
        max-width: 520px;
        color: #212529;
      }
      .lucky-country {
        font-size: 18px;
        line-height: 1.6;
        margin: 25px 0;
      }
      .lucky-country .emphasis {
        font-weight: 700;
        color: #b8912d;
      }
      .thanks-text {
        font-size: 16px;
        font-weight: 700;
        margin: 30px 0;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .thanks-text .supporting {
        color: #b8912d;
      }
      .member-box {
        border: 2px solid #1a1a1a;
        padding: 18px 20px;
        margin: 35px auto;
        max-width: 480px;
        font-size: 18px;
        color: #1a1a1a;
      }
      .member-box .member-no {
        font-weight: 700;
      }
      .social-icons {
        margin: 35px 0 30px;
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 0 32%;
        align-items: center;
        gap: 25px;
        color: white;
      }
      .social-icons a img{
       width:50px;
       height:50px;
       margin: 0 4px;
      }
  
      .footer-tagline {
        margin-top: 40px;
        font-size: 14px;
        font-weight: 700;
        color: #b8912d;
        letter-spacing: 6px;
        text-transform: uppercase;
      }
      
      /* Responsive */
      @media only screen and (max-width: 600px) {
        .container {
          padding: 40px 25px;
        }
        .main-heading {
          font-size: 24px;
        }
        .intro-text {
          font-size: 15px;
        }
        .logo img {
          width: 220px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="container">
        <!-- Logo -->
        <div class="logo">
          <img src="https://res.cloudinary.com/dmpzfswwa/image/upload/v1770809942/logo_kfowoq.png" alt="Friends United Logo" />
        </div>

        <!-- Main Heading -->
        <div class="main-heading">
          <div class="gold">WE ARE PLEASED TO HAVE YOU JOIN</div>
          <div class="black">FRIENDS UNITED FAMILY OF FRIENDS</div>
        </div>

        <!-- Intro Text -->
        <div class="intro-text">
          As a Friends United family Friend<br/>
          we are on a journey to having Australia restored<br/>
          to its former glory of being the
        </div>

        <!-- Lucky Country Statement -->
        <div class="lucky-country">
          <span class="emphasis">Lucky Country</span> and the <span class="emphasis">Envy of the World.</span>
        </div>

        <!-- Thanks Text -->
        <div class="thanks-text">
          FRIENDS UNITED THANKS YOU FOR <span class="supporting">SUPPORTING THE MOVEMENT</span>
        </div>

        <!-- Member Number Box -->
        <div class="member-box">
          You are Family Member No. <span class="member-no">${data.memberNo}</span>
        </div>

        <!-- Social Icons -->
        <div class="social-icons">
          <a href="https://friendsunited.com.au">
            <img src="https://res.cloudinary.com/dmpzfswwa/image/upload/v1770984091/website_vnavfm.png" alt="Website">
          </a>

          <a href="mailto:hello@friendsunited.com.au">
            <img src="https://res.cloudinary.com/dmpzfswwa/image/upload/v1770984091/maill_qhmymf.png" alt="Email">
          </a>

          <a href="https://twitter.com/friendsunited">
            <img src="https://res.cloudinary.com/dmpzfswwa/image/upload/v1770984091/twitter_sugnub.png" alt="Contact">
          </a>
        </div>

        <!-- Footer Tagline -->
        <div class="footer-tagline">
          I T ' S &nbsp; T I M E &nbsp; F O R &nbsp; R E V I V A L
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
};

export const sendMemberWelcomeEmail = async (
  data: MemberWelcomeEmailData,
): Promise<void> => {
  const html = generateMemberWelcomeEmailTemplate(data);
  await sendEmail({
    to: data.memberEmail,
    subject: "Welcome to Friends United Family.",
    html,
  });
  console.log(`✅ Welcome email sent to ${data.memberEmail}`);
};
