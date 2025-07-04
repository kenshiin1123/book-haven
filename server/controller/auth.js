import User from "../model/user.js";
import { validateSignup, validateLogin } from "../validations/auth.js";
import { hashAString, isValidHash, createJSONToken } from "../util/util.js";

const signup = async (req, res) => {
  try {
    const data = await validateSignup(req.body);
    if (data.success) {
      const hashedPassword = await hashAString(data.responseData.password); // hashes the password
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
};

const login = async (req, res) => {
  // Validate Fields
  const data = await validateLogin(req.body);
  const { password, email } = data.responseData;

  // Return an error if the validation fails
  if (!data.success) {
    return res
      .status(401)
      .json({ message: data.message, success: false, token: null });
  }

  // Check if email is available
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res.status(401).json({
      message: "Login failed. User not found.",
      success: false,
      token: null,
    });
  }

  // Check if password is correct by comparing the found user's password based on the given email
  const passwordIsCorrect = await isValidHash(
    password,
    existingUser.hashedPassword
  );

  if (!passwordIsCorrect) {
    return res.status(401).json({
      message: "Login failed. Incorrect password.",
      success: false,
      token: null,
    });
  }

  // Create a token
  const token = createJSONToken(email);

  res.json({
    message: "You have successfully logged in.",
    success: true,
    token,
  });
};

export { signup, login };
