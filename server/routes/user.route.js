import app from "express";
const router = app.Router();

import authMiddleware from "../middleware/authMiddleware.js";
import userCartRoute from "./user_cart.route.js";

// User Controller
import { patchUserInformation } from "../controller/user.controller.js";

// This is used to validate the token
router.use(authMiddleware);

// modify user information by field type
router.patch("/:userId", patchUserInformation);

// User cart routes
router.use("", userCartRoute);
export default router;
