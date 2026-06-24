const express = require("express");
const foodController = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

// protected : for foodPartner
router.post(
  "/",
  authMiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  foodController.createFood,
);

// for all users 
router.get('/allFoods',authMiddleware.authUserMiddleware,foodController.getAllFoods)

router.post("/like",authMiddleware.authUserMiddleware,foodController.likeFood);
router.post("/save",
  authMiddleware.authUserMiddleware,
  foodController.saveFood
)

module.exports = router;
