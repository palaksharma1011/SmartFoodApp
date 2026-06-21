const express = require("express");
const foodController = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

// protected
router.post(
  "/",
  authMiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  foodController.createFood,
);

// for all
router.get('/allFoods',authMiddleware.authUserMiddleware,foodController.getAllFoods)

module.exports = router;
