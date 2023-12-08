const express = require("express");
const router = express.Router();
const DcotorController = require("../controllers/admin/doctor");
router.post("/createDoctor", DcotorController.createDoctor);
router.post("/updateDoctor/:id", DcotorController.updateDoctor);
router.post("/getDoctor/:id", DcotorController.getDoctor);
module.exports = router;
