import express from "express";

import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

import {
  adminDashboard,
  employeeDashboard
} from "../controllers/dashboardController.js";

const router = express.Router();

router.get(
  "/admin/dashboard",
  auth,
  admin,
  adminDashboard
);

router.get(
  "/employee/dashboard",
  auth,
  employeeDashboard
);

export default router;