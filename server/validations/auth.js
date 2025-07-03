import fields from "./userFields.js";
import User from "../model/user.js";

/**
 * Validates specified fields in the request body using provided validation schemas.
 *
 * @param {Object} body - The request body containing values to validate.
 * @returns {{ data: Object, errors: Object }} An object containing validated data and any validation errors.
 */
const validateFields = (body) => {
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

/**
 * Validates the signup request body and checks for existing email.
 *
 * @async
 * @param {Object} body - The request body containing signup fields.
 * @returns {Promise<Object>} An object containing the validation message, success status, and response data (either validated data or errors).
 */
export const validateSignup = async (body) => {
  const { data, errors } = validateFields(body);
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
    responseData = errors;
  }

  return {
    message,
    success,
    responseData,
  };
};
