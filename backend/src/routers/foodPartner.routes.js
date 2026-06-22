const express = require("express");
const foodController = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const foodPartnerController = require("../controllers/foodPartner.controller");

const Router = express.Router();

Router.get(
  "/:id",
  authMiddleware.authUserMiddleware,
  foodPartnerController.getFoodPartnerDetails,
);

module.exports=Router
