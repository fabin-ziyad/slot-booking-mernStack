const OtpSession = require('../../models/OtpSession');
const User = require('../../models/User');
const { generateOTP } = require('../../utils/otpGenerator');
const sendOtp = require('../../utils/sendOtp');
module.exports = async (req, res) => { 
    try {
        const { email } = req.body;
        console.log(email)
        const checkMailExists = await OtpSession.findOne({ email });
        if (checkMailExists) {
            return res.status(404).json({
                success: false,
                message: 'Already sent otp to this email'
            });
        } else { 
            const otp = generateOTP();
            await sendOtp(otp, email);
            const addOtp = new OtpSession({
                email,
                otp
            });
            if (!addOtp) {
                return res.status(400).json({
                    success: false,
                    message: 'Failed to generate otp'
                });
            } else {
                await addOtp.save();
                return res.status(200).json({
                    success: true,
                    message: 'Otp sent successfully'
                });
            }
        }
    } catch (error) {
        
    }
}