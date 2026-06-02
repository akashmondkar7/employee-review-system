const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register Page
exports.registerPage = (req, res) => {
  res.render("register");
};

// Login Page
exports.loginPage = (req, res) => {
  res.render("login");
};

// Register User
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.redirect("/login");
  } catch (error) {
    console.log(error);
  }
};

// Login User
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.send("Invalid Email");
    }

    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (!match) {
      return res.send("Wrong Password");
    }

    req.session.user = {
      id: user._id,
      name: user.name,
      role: user.role
    };

    if (user.role === "admin") {
      return res.redirect("/admin/dashboard");
    }

    res.redirect("/employee/dashboard");
  } catch (error) {
    console.log(error);
  }
};

// Logout
exports.logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};