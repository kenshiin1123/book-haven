import app from "express";
import { validateSignup } from "../validations/auth.js";
const router = app.Router();
import User from "../model/user.js";
import bcrypt from "bcrypt";

router.post("/api/auth/signup", async (req, res) => {
  try {
    const data = await validateSignup(req.body);
    if (data.success) {
      const hashedPassword = await bcrypt.hash(data.responseData.password, 12);
      const newUser = new User({ ...data.responseData, hashedPassword });
      await newUser.save();
      return res.status(201).json({
        message: "Successful Validation",
        success: true,
        data: newUser,
      });
    }
    return res.status(422).json({ ...data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false, data: {} });
  }
});

router.post("/api/auth/login", (req, res) => {
  console.log(req.body);
  res.json({ message: "You have successfully logged in." });
});

export default router;
