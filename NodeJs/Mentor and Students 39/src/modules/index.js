import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
// mongoose.connect(`mongodb://localhost:27017/Mentor_Details`)
export default mongoose