const Slot = require("../../models/Slots");
const User = require("../../models/User");
const Doctor = require("../../models/Doctors");
const Booking = require("../../models/Booking");

module.exports = async (req, res) => {
  try {
    const { doctor, slotData, userId } = req.body;
    console.log(req.body);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const isDoctor = await Doctor.findById(doctor);
    if (!isDoctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }
    const slots = await Slot.findOne({ doctor: doctor});
    if (!slots) {
      return res.status(404).json({
        success: false,
        message: "Slot not found",
      });
    }
    const desiredSlot = slots.slots.filter((slot) => {
      return slot.date.getTime() === new Date(slotData.date).getTime();
    });
    const desiredTiming = desiredSlot[0].timings.find(
      (time) => time.time === slotData.time
    );

    if (!desiredSlot) {
      return res.status(400).json({
        success: false,
        message: "Slot not available",
      });
    }

    if (desiredTiming.booked) {
      return res.status(400).json({
        success: false,
        message: "Slot is already booked",
      });
    }

   
    const dataForBooking = {
      date: desiredSlot[0].date,
      time: desiredTiming.time,
    }
    const createNewBooking = new Booking({
      doctor: doctor,
      patient: user._id,
      slot: slots._id,
      data: dataForBooking,
    });

    if (!createNewBooking) {
      return res.status(400).json({
        success: false,
        message: "Booking not created",
      });
    } else {
      await createNewBooking.save();
      desiredTiming.booked = true;
      await slots.save();
      return res.status(200).json({
        success: true,
        message: "Booking created",
        data: createNewBooking,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
