import app from "express";
const router = app.Router();

import authMiddleware from "../middleware/authMiddleware.js";
import userCartRoute from "./user_cart.route.js";
import userPurchasesRoute from "./user_purchases.routes.js";
import multerMiddleware from "../middleware/multerMiddleware.js";
// User Controller
import {
  patchUserInformation,
  getUserInformation,
} from "../controller/user.controller.js";

// This is used to validate the token
router.use(authMiddleware);

// Get user information
router.get("/profile", getUserInformation);

// modify user information by field type
router.patch("/profile", multerMiddleware, patchUserInformation);

// User cart routes
router.use("", userCartRoute);

// User purchases routes
router.use("", userPurchasesRoute);

export default router;
