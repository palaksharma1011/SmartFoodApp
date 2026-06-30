require("dotenv").config();
const mongoose = require("mongoose");
const config =require('../config/config');

function connectDB() {
  try {
    mongoose.connect(config.MONGO_URL);
    console.log("Connected DB");
  } catch (err) {
    console.log("error connecting to DB");
  }
}

module.exports = connectDB;
