const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
router.post("/details", userController.getUser);

module.exports = router;
