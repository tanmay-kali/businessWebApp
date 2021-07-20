const mongoose = require("mongoose");

//creating a database
mongoose.connect("mongodb+srv://admin:admin123@cluster0.tcbwb.mongodb.net/business?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:false
}).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log(err);
})





