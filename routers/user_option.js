const express=require('express');
const router=express.Router();
const Data=require('../models/questionSchema');

router.post('/createpoll',async (req,res)=>{
    try
    {
       const userdata=new Data(req.body);
       const savedata=await userdata.save();
       res.status(200).json(savedata);
    }catch(err){
       res.json(400).send(savedata);
    }
})
router.get('/poll/:id',async(req,res)=>{
   try
   {
     const user=await Data.findById(req.params.id);
     res.status(200).send(user);
   }
   catch(e){
      console.log(e);
   }
})
module.exports=router;
