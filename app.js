const express=require('express');
const app=express();
require('./startup/conn');
require('./startup/routes')(app);
app.listen(8000,()=>{
    console.log("listening to port 8000");
})