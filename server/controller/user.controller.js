import User from "../model/user.model.js";
import { validateUserField } from "../validations/user.js";
import { getUserId } from "../util/util.js";
import { isValidHash, hashAString } from "../util/util.js";

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

  let dataToValidate = newInfo;

  if (fieldtype === "picture") {
    dataToValidate = req.file;
  } else if (fieldtype === "password") {
    // Assuming the newInfo is an object that has two properties, oldPassword and newPassword
    dataToValidate = newInfo.newPassword;
  }

  const validatedResult = validateUserField(fieldtype, dataToValidate);
  if (!validatedResult.success) {
    return res.status(422).json({
      message: validatedResult.message,
      success: validatedResult.success,
      data: { userInfo: newInfo },
    });
  }

  // This user data will be used to store in the database
  let userData = validatedResult.validatedField.data;
  if (fieldtype === "picture") {
    userData = {
      buffer: req.file.buffer,
      mimetype: req.file.mimetype,
    };
  }

  const user = await User.findById(userId);

  // If fieldtype === password, compare the inputted oldPassword and stored password
  if (fieldtype === "password") {
    const validPass = await isValidHash(
      newInfo.oldPassword,
      user.hashedPassword
    );
    // if the password is invalid, return a response
    if (!validPass) {
      return res.status(401).json({
        message: "You have entered an invalid password!",
        success: false,
      });
    }
    // Store the newPassword when the comparison is valid.
    userData = await hashAString(newInfo.newPassword);
  }

  if (fieldtype === "password") {
    user["hashedPassword"] = userData;
  } else {
    user[fieldtype] = userData;
  }

  // Modify in database
  await user.save();

  // Converts image buffer data into a base64 string, suitable for direct use in an <img> tag's src attribute.
  if (fieldtype === "picture") {
    userData = `data:${
      user.picture.mimetype
    };base64,${user.picture.buffer.toString("base64")}`;
  }

  return res.json({
    message: `Successfully updated your ${fieldtype}!`,
    success: true,
    data: {
      [fieldtype]: fieldtype === "password" ? newInfo.newPassword : userData,
    },
  });
};

export { patchUserInformation, getUserInformation };
