import User from "../models/User.js";

export const getEmployees = async (req, res) => {
  try {

    const employees = await User.find();

    res.render("admin/employees", {
      employees
    });

  } catch (error) {
    console.log(error);
  }

  export const getAddEmployee = (req, res) => {
  res.render("admin/addEmployee");
  };

  export const addEmployee = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res.send("User already exists");
    }

    await User.create({
      name,
      email,
      password
    });

    res.redirect("/admin/employees");

  } catch (error) {
    console.log(error);
  }
};
};