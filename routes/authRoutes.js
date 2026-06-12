import express from "express";

import {
  getRegister,
  getLogin,
  registerUser,
  loginUser,
  logout
} from "../controllers/authController.js";

const router = express.Router();

router.get("/register", getRegister);

router.post("/register", registerUser);

router.get("/login", getLogin);

router.post("/login", loginUser);

router.get("/logout", logout);

export default router;