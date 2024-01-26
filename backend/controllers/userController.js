const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc     Register new user
// @route    POST /api/users
// @access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all required fields");
  }

  // check if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // check if user has been created successfully
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }

  res.json({ message: "Register user" });
});

// @desc     Authenticate a user
// @route    POST /api/users/login
// @access   Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

// @desc     Get user data
// @route    GET /api/users/me
// @access   Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "Get user data" });
});

module.exports = { registerUser, loginUser, getMe };