const mongoose=require('mongoose')

const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    video:{
        type:String,
    },
    description:{
        type:String
    },
    foodPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"foodPartners"
    }
})

const foodModel=mongoose.model("foods",foodSchema);

module.exports=foodModel;