import app from "express";
const router = app.Router();

import authMiddleware from "../middleware/authMiddleware.js";
import userCartRoute from "./user_cart.route.js";
import userPurchasesRoute from "./user_purchases.routes.js";

// User Controller
import { patchUserInformation } from "../controller/user.controller.js";

// This is used to validate the token
router.use(authMiddleware);

// modify user information by field type
router.patch("/:userId", patchUserInformation);

// User cart routes
router.use("", userCartRoute);

// User purchases routes
router.use("", userPurchasesRoute);

export default router;
