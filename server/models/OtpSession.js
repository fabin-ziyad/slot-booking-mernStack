const { Schema, model } = require("mongoose");
const defaultExpiry = () => {
  const currentTime = new Date();
  const twentyFourHoursLater = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);
  return twentyFourHoursLater;
};
const OtpSessionSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  expiry: {
    type: Date,
    default: defaultExpiry
  },
});
module.exports = model("OtpSession", OtpSessionSchema);
