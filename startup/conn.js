const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/polldata",{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("connected.....")
}).catch(()=>{
    console.log("not connected");
})