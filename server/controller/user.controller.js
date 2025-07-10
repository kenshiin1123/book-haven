import User from "../model/user.model.js";
import { validateUserField } from "../validations/user.js";

// modify user information by field type
const patchUserInformation = async (req, res) => {
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
};

export { patchUserInformation };
