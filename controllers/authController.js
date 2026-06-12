import User from "../models/User.js";

export const getRegister = (req, res) => {
  res.render("auth/register");
};

export const getLogin = (req, res) => {
  res.render("auth/login");
};
export const registerUser = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({
      email
    });

    if (existingUser) {
      return res.send("User already exists");
    }

    await User.create({
      name,
      email,
      password
    });

    res.redirect("/login");

  } catch (error) {
    console.log(error);
  }
};