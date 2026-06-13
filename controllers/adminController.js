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
};