import app from "express";
const router = app.Router();

import { signup, login } from "../controller/auth.js";

router.post("/signup", signup);
router.post("/login", login);

export default router;
