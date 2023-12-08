const User = require("../../models/User");
const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');
const { generateOTP } = require("../../utils/otpGenerator");
require("dotenv").config();
const register = async (req, res) => {
  try {
    const { firstName, lastName, password, email, isMailVerified, phone } = req.body;

    if (!firstName || !password || !email || !lastName || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    } else if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    } else if (!isMailVerified) {
      return res.status(400).json({ message: "Email is not verified" });
    }

    const name = firstName + " " + lastName;
    const Email = {
      mail: email,
      isVerified: isMailVerified,
    };

    // Check if user already exists
    const existingUser = await User.findOne({ name });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      passwordHash: hashedPassword,
      email: Email,
      phone,
    });

    await newUser.save();
    return res.status(200).json({ message: "Registration successful", newUser });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Registration failed",
      error: error.message,
    });
  }
};

module.exports = register;