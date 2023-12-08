const OtpSession = require("../../models/OtpSession");
const { generateOTP } = require("../../utils/otpGenerator");

module.exports = async (req, res) => {
  try {
    const { email, otp } = req.body;
    console.log(req.body)
    const checkMailExists = await OtpSession.findOne({ email });
    if (!checkMailExists) {
      return res.status(404).json({
        success: false,
        message: "Mail Not Found, Please try again later",
      });
    } else {
      if (checkMailExists.otp !== otp) {
        return res.status(400).json({
          success: false,
          message: "Invalid OTP",
        });
      }

      await OtpSession.findByIdAndUpdate(checkMailExists._id, {
        isVerified: true,
      });

      return res.status(200).json({
        success: true,
        message: "Email verified successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred",
      err: error.message,
    });
  }
};
