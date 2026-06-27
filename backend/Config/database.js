const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-com")
let ecom=mongoose.connection
ecom.on("error",(error)=>{
    console.log(error);
    
})
ecom.once("open",()=>{
    console.log("Database Connected");
    
})