require("dotenv").config();
const nodemailer = require("nodemailer");
const sendOtp = async (otp, recipient) => {
  console.log("hello", otp);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "", //your gmail
        pass: "fubt xmbt cuoi hkyj", //your gooogle app pass
      },
    });
    const mailOptions = {
      from: "", // your gmail
      to: recipient,
      subject: "Your OTP to Verify Mail",
      text: otp,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {}
};

module.exports = sendOtp;