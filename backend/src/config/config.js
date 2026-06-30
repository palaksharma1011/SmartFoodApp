const dotenv = require("dotenv");

dotenv.config();

const config = {
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT,

  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,

  IMAGEKIT_PUBLIC_KEY: process.env.IMAGEKIT_PUBLIC_KEY,

  IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,

  IMAGEKIT_URL_ENDPOINT: process.env.IMAGEKIT_URL_ENDPOINT,

  CLIENT_URL: process.env.CLIENT_URL,
};

module.exports = config;
