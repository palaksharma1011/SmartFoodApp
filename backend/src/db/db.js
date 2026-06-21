require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connected DB");
  } catch (err) {
    console.log("error connecting to DB");
  }
}

module.exports = connectDB;
