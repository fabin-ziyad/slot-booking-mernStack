const { Schema, model } = require("mongoose");
const SlotSchema = new Schema({
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
  slots: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      availables: {
        type: Number,
        required: true,
      },
      timings: [
        {
          time: {
            type: String,
            required: false,
          },
          booked: {
            type: Boolean,
            default: false,
          },
        },
      ],
    },
  ],
});
module.exports = model("Slot", SlotSchema);
