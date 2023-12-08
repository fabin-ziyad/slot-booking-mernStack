const { Schema, model } = require("mongoose");
const BookingSchema = new Schema({
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  data: {
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  status: {
    type: String,
    enum: ["booked", "cancelled"],
    default: "booked",
  },
});

module.exports = model("Booking", BookingSchema);
