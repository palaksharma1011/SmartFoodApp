const foodModel = require("../models/food.model");
const foodPartnerModel = require("../models/foodpartner.model");
const storageServices = require("../services/storage.service");
const { v4: uuid } = require("uuid");

async function createFood(req, res) {
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);
  const { name, video, description, foodPartner } = req.body;

  const fileUploadResult = await storageServices.uploadFile(
    req.file.buffer,
    uuid(),
  );

  const food = await foodModel.create({
    name: name,
    video: fileUploadResult.url,
    description: description,
    foodPartner: foodPartner,
  });

  const currfoodPartner = await foodPartnerModel.findById(foodPartner);

  console.log(req.body);
  res.status(201).json({
    message: "New Food Item created",
    food: {
      name: food.name,
      video: food.video,
      description: food.description,
      foodPartnerName: currfoodPartner.name,
    },
  });
}

async function getAllFoods(req, res) {
  const foods = await foodModel.find().populate("foodPartner");

  res.status(200).json({
    message: "All foods fetched",
    foods,
  });
}



module.exports = { createFood, getAllFoods };
