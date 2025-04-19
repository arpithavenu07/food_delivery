import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://arpithavenu1:arpitha@cluster0.nc16g.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}

