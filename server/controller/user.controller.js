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
    "firstname lastname email phone birthday address picture cart purchases -_id"
  );

  if (!user) {
    return res
      .status(404)
      .json({ message: "User not found.", success: false, data: null });
  }

  // ✅ Convert picture buffer to Base64 (if exists)
  let userData = user.toObject();
  if (user.picture && user.picture.buffer) {
    userData.picture = `data:${
      user.picture.mimetype
    };base64,${user.picture.buffer.toString("base64")}`;
  }

  return res.status(200).json({
    message: "Successfully retreived user data",
    success: true,
    data: userData,
  });
};

// modify user information by field type
const patchUserInformation = async (req, res) => {
  const userId = getUserId(req);
  const { fieldtype, newInfo } = req.body;

  const validatedResult = validateUserField(
    fieldtype,
    fieldtype === "picture" ? req.file : newInfo
  );

  if (!validatedResult.success) {
    return res.status(422).json({
      message: validatedResult.message,
      success: validatedResult.success,
      data: { userInfo: newInfo },
    });
  }

  const update = {
    [fieldtype]:
      fieldtype === "picture"
        ? {
            buffer: req.file.buffer,
            mimetype: req.file.mimetype,
          }
        : validatedResult.validatedField.data,
  };

  const user = await User.findByIdAndUpdate(userId, update, { new: true });
  await user.save();
  return res.json({
    message: `Successfully updated your ${fieldtype}!`,
    success: true,
  });
};

export { patchUserInformation, getUserInformation };
