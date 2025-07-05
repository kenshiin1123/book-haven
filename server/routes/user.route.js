import User from "../model/user.js";
import app from "express";
import { validateUserField } from "../validations/user.js";
const router = app.Router();

import authMiddleware from "../middleware/authMiddleware.js";

// This is used to validate the token
router.use(authMiddleware);

// modify user information by field type
router.patch("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { fieldtype, newInfo } = req.body;

  const validatedResult = validateUserField(fieldtype, newInfo);

  if (!validatedResult.success) {
    res.status(422).json({
      message: validatedResult.message,
      success: validatedResult.success,
      userInfo: newInfo,
    });
  }

  const update = { [fieldtype]: validatedResult.validatedField.data };
  const user = await User.findByIdAndUpdate(userId, update, { new: true });
  res.json({
    message: "Successfully updated field!",
    success: true,
    [fieldtype]: user[fieldtype],
  });
});

export default router;
