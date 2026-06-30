// /create server
const express = require("express");
const authRoutes = require("./routers/auth.routes");
const cookieParser = require("cookie-parser");
const foodRoutes = require("./routers/food.routes");
const foodPartnerRoutes = require("./routers/foodPartner.routes");
const cors = require("cors");
const config = require("./config/config");

const app = express();

// midllewares
app.use(
  cors({
    // origin: ["https://smartfoodapp-frontend.onrender.com"],
    origin:config.CLIENT_URL,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// health check
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/auth/", authRoutes);
app.use("/api/food/", foodRoutes);
app.use("/api/foodPartner/", foodPartnerRoutes);

module.exports = app;
