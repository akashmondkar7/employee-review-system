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
export const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.send("Invalid Credentials");
    }

    const isMatch =
      await user.comparePassword(password);

    if (!isMatch) {
      return res.send("Invalid Credentials");
    }

    req.session.userId = user._id;

    req.session.isAdmin = user.isAdmin;

    if (user.isAdmin) {
      return res.redirect("/admin/dashboard");
    }

    res.redirect("/employee/dashboard");

  } catch (error) {
    console.log(error);
  }
};

export const logout = (req, res) => {

  req.session.destroy(() => {

    res.redirect("/login");

  });

};