const Doctor = require("../../../models/Doctors");
module.exports = async (req, res) => {
  try {
    const doctor = await Doctor.find();
    if (!doctor || doctor.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Doctors not found",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Doctors List",
        data: doctor,
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
