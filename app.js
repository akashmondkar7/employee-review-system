import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import connectDB from "./config/mongoose.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});