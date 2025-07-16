import User from "../model/user.model.js";
import { validateUserField } from "../validations/user.js";
import { getUserId } from "../util/util.js";

const getUserInformation = async (req, res) => {
  const userId = getUserId(req); // get user_id via token

  if (!userId || userId === null || userId === undefined) {
    return res
      .status(422)
      .json({ message: "User ID is required", success: false, data: null });
  }

  const user = await User.findById(userId).select(
    "firstname lastname email phone birthday address picture -_id"
  );

  if (!user) {
    return res
      .status(404)
      .json({ message: "User not found.", success: false, data: null });
  }

  return res.status(200).json({
    message: "Successfully retreived user data",
    success: true,
    data: user,
  });
};

// modify user information by field type
const patchUserInformation = async (req, res) => {
  const userId = getUserId(req);
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

export { patchUserInformation, getUserInformation };
