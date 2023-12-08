const { Schema, model } = require("mongoose");
const DoctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  clinic: {
    type: String,
    required: true,
  },
  clinicAddress: {
    type: String,
    required: true,
  },
  fees: [
    {
      fee: {
        type: Number,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
    },
  ],
  Tags: [
    {
      type: String,
      required: true,
    },
  ],
  slots: {
    type: Schema.Types.ObjectId,
    ref: "Slot",
  },
  image: {
    type: String,
    required: false,
  },
});

module.exports = model("Doctor", DoctorSchema);
