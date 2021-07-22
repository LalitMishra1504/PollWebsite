const express=require('express');
const router=express.Router();
const Data=require('../models/questionSchema');

router.post('/createpoll',async (req,res)=>{
    try
    {
       const userdata=new Data(req.body);
       if(userdata)
       {
         const savedata=await userdata.save();
         res.status(200).send(savedata);
       }
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
router.put('/updatepoll/:userid/:optid',async(req,res)=>{
   const user=await Data.findById(req.params.userid);
   console.log("hi");
   for(i=0;i<user.choice.length;i++)
   {
      console.log(user.choice[i]._id);
     if(user.choice[i]._id.toString()===req.params.optid){
        user.choice[i].vote=user.choice[i].vote+1;
        await user.save();
        res.send({message:"Vote Updated"});
     }
   }
})
module.exports=router;
