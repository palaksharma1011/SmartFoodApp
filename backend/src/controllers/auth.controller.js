const express = require("express");
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const foodPartnerModel = require("../models/foodpartner.model");

async function registerUser(req, res) {
  const { username, email, password } = req.body;
  const userExists = await userModel.findOne({
    email,
  });

  if (userExists) {
    return res.status(400).json({
      message: "User Already Exists",
    });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username: username,
    email: email,
    password: hashedPass,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET_KEY,
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User Created successfully",
    user: {
      _id: user.id,
      fullname: user.username,
      email: user.email,
    },
  });
}

async function login(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });
  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET_KEY,
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "User Logged In Successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

async function logout(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "logged out successfully",
  });
}

async function registerFoodPartner(req, res) {
  const { name, email, password, contactName, phone, address } = req.body;

  const isExists = await foodPartnerModel.findOne({
    email: email,
  });

  if (isExists) {
    return res.status(409).json({
      message: "Food Partner with same name or email exists",
    });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const foodPartner = await foodPartnerModel.create({
    name: name,
    email: email,
    password: hashedPass,
    contactName: contactName,
    phone: phone,
    address: address,
  });

  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.JWT_SECRET_KEY,
  );

  res.cookie("token");

  res.status(201).json({
    message: "Food Partner registered",
    foodPartner: {
      id: foodPartner._id,
      name: foodPartner.name,
      email: foodPartner.email,
      contactName: foodPartner.contactName,
      phone: foodPartner.phone,
      address: foodPartner.address,
    },
  });
}

async function loginFoodPartner(req, res) {
  const { email, password } = req.body;

  const foodPartner = await foodPartnerModel.findOne({
    email: email,
  });

  if (!foodPartner) {
    return res.status(400).json({
      message: "Invalid Food Partner name/ email or password",
    });
  }

  const isValidPassword = bcrypt.compare(password, foodPartner.password);

  if (!isValidPassword) {
    return res.status(400).json({
      message: "Invalid Food Partner email or password",
    });
  }
  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.JWT_SECRET_KEY,
  );

  res.cookie("token", token);
  res.status(200).json({
    message: "Food Partner Logged in successfully",
    foodPartner: {
      id: foodPartner._id,
      name: foodPartner.name,
      email: foodPartner.email,
      contactName: foodPartner.contactName,
      phone: foodPartner.phone,
      address: foodPartner.address,
    },
  });
}

async function logoutFoodPartner(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "Food Partner Logged out successfully",
  });
}

module.exports = {
  registerUser,
  login,
  logout,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
};
