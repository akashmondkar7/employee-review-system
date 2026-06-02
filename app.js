import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();
connectDB();
const app = express()

const port = process.env.PORT;
const authRoutes = require("./routes/authRoutes");

app.use("/", authRoutes);

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
