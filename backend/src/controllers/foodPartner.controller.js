const foodModel = require("../models/food.model");
const foodPartnerModel = require("../models/foodpartner.model");

async function getFoodPartnerDetails(req, res) {
  const { id } = req.params;
  const foodPartner = await foodPartnerModel.findById(id).select("-password");

  if (!foodPartner) {
    return res.status(404).json({
      message: "foodPartner not found",
    });
  }

  const foodByFoodPartner = await foodModel.find({ foodPartner: id });
  if (!foodByFoodPartner) {
    return res.status(404).json({
      message: "food not found",
    });
  }

  res.status(200).json({
    message: "Food partner found",
    foodPartner:{
        ...foodPartner.toObject(),
        allFood: foodByFoodPartner,
    }
    
  });
}

module.exports = { getFoodPartnerDetails };
