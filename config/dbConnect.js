import mongoose from "mongoose";

export const dbConnect = async (DB_URL) => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Database connected!")
    } catch (error) {
        console.log("Database connection error : ", error.message)
    }
}