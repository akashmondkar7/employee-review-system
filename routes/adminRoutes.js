import express from "express";

import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

import {
  getEmployees
} from "../controllers/adminController.js";

const router = express.Router();

router.get(
  "/admin/employees",
  auth,
  admin,
  getEmployees
);

export default router;