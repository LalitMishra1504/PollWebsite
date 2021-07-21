const express=require('express');
const option=require('../routers/user_option');

module.exports=function(app)
{
    app.use(express.json());
    app.use('/api/quesopt',option);
}