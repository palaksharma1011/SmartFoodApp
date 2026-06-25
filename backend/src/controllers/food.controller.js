const foodModel = require("../models/food.model");
const foodPartnerModel = require("../models/foodpartner.model");
const likesModel = require("../models/likes.model");
const saveModel = require("../models/save.model");
const storageServices = require("../services/storage.service");

const { v4: uuid } = require("uuid");

async function createFood(req, res) {
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);
  const { name, video, description } = req.body;

  const fileUploadResult = await storageServices.uploadFile(
    req.file.buffer,
    uuid(),
  );

  const food = await foodModel.create({
    name: name,
    video: fileUploadResult.url,
    description: description,
    foodPartner: req.foodPartner._id,
  });

  res.status(201).json({
    message: "New Food Item created",
    food: {
      name: food.name,
      video: food.video,
      description: food.description,
      foodPartnerName: req.foodPartner.name,
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
async function likeFood(req, res) {
  const { foodId } = req.body;
  const userId = req.user._id;

  const isAlreadyLiked = await likesModel.findOne({
    user: userId,
    food: foodId,
  });

  if (isAlreadyLiked) {
    await likesModel.deleteOne({
      user: userId,
      food: foodId,
    });

    await foodModel.findByIdAndUpdate(foodId, {
      $inc: { likeCount: -1 },
    });
    return res.status(200).json({
      message: "Food unliked successfully",
    });
  }

  const like = await likesModel.create({
    user: userId,
    food: foodId,
  });

  await foodModel.findByIdAndUpdate(foodId, {
    $inc: { likeCount: 1 },
  });

  res.status(201).json({
    message: "Food Liked successfully",
    like,
  });
}

async function saveFood(req, res) {
  const { foodId } = req.body;
  const userId = req.user._id;

  const isAlreadySaved = await saveModel.findOne({
    user: userId,
    food: foodId,
  });

  if (isAlreadySaved) {
    await saveModel.deleteOne({
      user: userId,
      food: foodId,
    });

    await foodModel.findByIdAndUpdate(foodId, {
      $inc: { saveCount: -1 },
    });
    return res.status(200).json({
      message: "Food unsaved successfully",
    });
  }

  const save = await saveModel.create({
    user: userId,
    food: foodId,
  });

  await foodModel.findByIdAndUpdate(foodId, {
    $inc: { saveCount: 1 },
  });

  res.status(201).json({
    message: "Food saved successfully",
    save,
  });
}
module.exports = { createFood, getAllFoods, likeFood, saveFood };
