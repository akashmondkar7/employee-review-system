import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import connectDB from "./config/mongoose.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

connectDB();

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// Register session middleware before routes and ensure a default secret for local dev
app.use(
  session({
    secret: process.env.SESSION_SECRET || "dev_session_secret",
    resave: false,
    saveUninitialized: false
  })
);

app.use("/", authRoutes);

const PORT = process.env.PORT || 4800;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});