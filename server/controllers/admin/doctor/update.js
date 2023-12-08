const Doctor = require("../../../models/Doctors");
const Slot = require("../../../models/Slots");
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    } else {
        await Doctor.findByIdAndUpdate(id, req.body);
        // rest of codes not added becz the admin panel is not required in this task
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
