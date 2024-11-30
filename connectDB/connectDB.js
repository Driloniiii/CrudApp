import mongoose from "mongoose";
const connectDB = async()=>{
   const connect = await mongoose.connect('mongodb+srv://drilonzeqiri011:GjbQBEa*uE79_7e@cluster0.dinbcfp.mongodb.net/Crud');
   if(connect){
    console.log('connection successfull...')
   }else{
    console.log("connection failed...")
   }
}


export default connectDB;