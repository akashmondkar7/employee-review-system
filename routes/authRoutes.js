const express = require("express");

const router = express.Router();

const {
  registerPage,
  loginPage,
  registerUser,
  loginUser,
  logoutUser
} = require("../controllers/authController");

router.get("/register", registerPage);
router.post("/register", registerUser);

router.get("/login", loginPage);
router.post("/login", loginUser);

router.get("/logout", logoutUser);

module.exports = router;