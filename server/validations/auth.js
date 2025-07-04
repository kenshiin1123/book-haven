import { signupValidator, loginValidator } from "./userFields.js";
import User from "../model/user.js";

const validateFields = (body, fields) => {
  const errors = {};
  const data = {};
  fields.forEach((field) => {
    const key = Object.keys(field)[0];
    const value = Object.values(field)[0];
    const validatedField = value.safeParse(body[key]);

    if (!validatedField.success) {
      errors[key] =
        validatedField.error.errors[0]?.message || `${key} is invalid`;
    } else {
      data[key] = validatedField.data;
    }
  });
  return { data, errors };
};

export const validateSignup = async (body) => {
  const { data, errors } = validateFields(body, signupValidator);
  const existingError = Object.keys(errors).length > 0;

  let message = "Successful Validation";
  let success = true;
  let responseData = data;

  // Check for existing email
  const existingEmail = await User.findOne({ email: data.email });
  if (existingEmail) {
    message = "Email already exists.";
    errors["email"] = "Email already exist.";
    success = false;
    responseData = errors;
  }

  // Check if other credentials are valid
  if (existingError) {
    message = `Encountered ${
      Object.keys(data).length > 1 ? "errors" : "an error"
    } in validation`;
    success = false;

    // if it encountered an error, the response data will be replaced by an error message.
    responseData = errors;
  }

  return {
    message,
    success,
    responseData,
  };
};

export const validateLogin = async (body) => {
  const { data, errors } = validateFields(body, loginValidator);

  let message = "Successful Validation";
  let success = true;
  let responseData = data;

  if (!body.email || !body.password) {
    message = "Please input all fields";
    success = false;
    responseData = errors;
  }

  if (Object.keys(errors).length > 0) {
    message =
      message === "Please input all fields"
        ? "Please input all fields"
        : "Validation Failed";
    success = false;
    responseData = errors;
  }

  return {
    message,
    success,
    responseData,
  };
};
