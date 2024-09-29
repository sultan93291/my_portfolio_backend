const nodemailer = require("nodemailer");

const mailSender = async ({ name, emailAdress, subject, body }) => {
  // Create a transporter object using SMTP transport
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.HOST_MAIL,
        pass: process.env.HOST_MAIL_PASS,
      },
    });

    // Define the email options
    const mailOptions = {
      from: "abib.web.dev@gmail.com",
      to: "abibdipto@gmail.com",
      subject: `  ${subject}`,
      email: emailAdress,
      html: `
    <div style="font-family: 'Arial', sans-serif; max-width: 700px; margin: auto; background-color: #f4f4f4; border-radius: 10px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05); overflow: hidden;">
      <!-- Header -->
      <div style="background-color: #2ecc71; padding: 30px; text-align: center; color: white;">
        <h1 style="margin: 0; font-size: 30px; font-weight: bold;">New Message Received</h1>
        <p style="font-size: 16px; margin-top: 10px;">You have a new message from your website contact form.</p>
      </div>

      <!-- Content Section -->
      <div style="padding: 40px 30px; background-color: #ffffff;">
        <!-- Greeting -->
        <p style="font-size: 18px; color: #333; margin-bottom: 10px;">Hi Abib,</p>
        <p style="font-size: 16px; color: #555; margin-bottom: 20px;">
          Below are the details of the message you’ve received:
        </p>
        
        <!-- Contact Information -->
        <div style="margin-bottom: 20px; padding: 20px; background-color: #e8f8f5; border-radius: 8px; border-left: 4px solid #27ae60;">
          <h2 style="color: #27ae60; margin-bottom: 10px;">Sender Information</h2>
          <p style="font-size: 16px; color: #555; margin: 5px 0;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 16px; color: #555; margin: 5px 0;"><strong>Email:</strong> ${emailAdress}</p>
        </div>

        <!-- Message Section -->
        <div style="margin-bottom: 30px; padding: 20px; background-color: #f9f9f9; border-radius: 8px; border: 1px solid #ddd;">
          <h2 style="color: #27ae60; margin-bottom: 10px;">Message</h2>
          <p style="font-size: 16px; color: #555; line-height: 1.6; margin-top: 10px;">"${body}"</p>
        </div>

        <!-- Call to Action -->
        <p style="font-size: 16px; color: #555;">You can reply directly to this email to get in touch with the sender.</p>
      </div>

      <!-- Footer -->
      <footer style="background-color: #2ecc71; padding: 20px; text-align: center; color: white;">
        <p style="margin: 0; font-size: 14px;">Need help? <a href="mailto:abib.web.dev@gmail.com" style="color: #e8f8f5; text-decoration: underline;">Contact Support</a></p>
        <p style="margin: 10px 0 0; font-size: 12px;">&copy; ${new Date().getFullYear()} @web dev abib. All rights reserved.</p>
      </footer>
    </div>
  `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.log(error.code);
  }
};

module.exports = { mailSender };
