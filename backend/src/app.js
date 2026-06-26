// /create server
const express = require("express");
const authRoutes = require("./routers/auth.routes");
const cookieParser = require("cookie-parser");
const foodRoutes = require("./routers/food.routes");
const foodPartnerRoutes = require("./routers/foodPartner.routes");
const cors = require("cors");

const app = express();

// midllewares
app.use(express.json());

app.use(
  cors({
    origin: ["https://smartfoodapp-frontend.onrender.com"],

    credentials: true,
  }),
);
app.use(cookieParser());

// health check
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/auth/", authRoutes);
app.use("/api/food/", foodRoutes);
app.use("/api/foodPartner/", foodPartnerRoutes);

module.exports = app;
