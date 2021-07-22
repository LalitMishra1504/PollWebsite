const mongoose=require('mongoose');
const optSchema=new mongoose.Schema({
    question:{
        type:String
    },
    choice:
    [
     {  
        text:{type:String},
        vote:{type:Number}
     }
   ]
});
const Data=mongoose.model("Data",optSchema);
module.exports=Data;