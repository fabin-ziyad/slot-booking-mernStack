const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking");
router.post("/createBooking", bookingController.createBooking);

module.exports = router;
