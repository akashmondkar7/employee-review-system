import  mongoose from 'mongoose'

const connectDB= async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDb is connected")

    } catch (error) {
    console.log("Database Connection Error:", error.message);
    process.emit(1);
    }
}

export default connectDB;