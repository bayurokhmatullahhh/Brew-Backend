import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bayuurokhmatullah:bayurokhmatullahmonggo28@cluster0.plx67.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}