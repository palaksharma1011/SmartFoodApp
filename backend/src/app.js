// /create server
const express = require("express");
const authRoutes = require("./routers/auth.routes");
const cookieParser = require("cookie-parser");
const foodRoutes = require("./routers/food.routes");
const cors=require('cors');

const app = express();

// midllewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

// health check
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/auth/", authRoutes);
app.use("/api/food/", foodRoutes);

module.exports = app;
