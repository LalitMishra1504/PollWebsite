const express=require('express');
const router=express.Router();
const Data=require('../models/questionSchema');

router.post('/createpoll',async (req,res)=>{
    try
    {
       const userdata=new Data(req.body);
       const savedata=await userdata.save();
       res.status(200).json({message:"Saved Succesfull"});
    }catch(err){
       res.json(400).json({message:"Error Occured"});
    }
})
module.exports=router;