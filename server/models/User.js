const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    mail: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  phone: {
    type: Number,
    required: true,
  },
  passwordHash: {
    type: String,
  },
  image: {
    type: String,
    required: false,
  },
  slots: {
    type: Schema.Types.ObjectId,
    ref: "Slot",
  },
});
module.exports = model("User", UserSchema);
