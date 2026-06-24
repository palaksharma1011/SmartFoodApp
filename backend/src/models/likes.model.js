const mongoose = require('mongoose')

const likesSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    food:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"foods",
        required:true
    }
},{
    timestamps:true
})

const likesModel=mongoose.model('likes',likesSchema);
module.exports=likesModel;