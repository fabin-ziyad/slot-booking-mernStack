const Doctor = require("../../../models/Doctors");
const Slot = require("../../../models/Slots");
module.exports = async (req, res) => {
  try {
    const { doctorName, speciality, clinic, fees, tags, slots, clinicAddress } = req.body;
    if (!doctorName || !speciality || !clinic || !fees || !tags || !slots) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const newDoctor = new Doctor({
      name: doctorName,
      speciality,
      clinic,
      fees,
      Tags:tags,
      slots,
      clinicAddress
    });
    if (!newDoctor) {
      return res.status(400).json({
        success: false,
        message: "Doctor not created",
      });
    } else {
      const newSlot = new Slot({
        slots: slots,
        doctor: newDoctor._id,
      });
      if (!newSlot) {
        return res.status(400).json({
          success: false,
          message: "Slot not created",
        });
      } else {
        newDoctor.slots = newSlot._id;
        await newDoctor.save();
        await newSlot.save();
        return res.status(200).json({
          success: true,
          message: "Doctor created",
          data: newDoctor,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
