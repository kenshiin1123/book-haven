import { allFields } from "./userFields.js";
export const validateUserField = (fieldtype, newInfo) => {
  try {
    const validatedField = allFields[fieldtype].safeParse(newInfo);
    let message = "Successful Validation";
    let success = true;

    if (!validatedField.success) {
      message = validatedField.error.issues[0].message;
      success = false;
    }

    console.log({
      success,
      message,
      validatedField,
    });

    return {
      success,
      message,
      validatedField,
    };
  } catch (error) {
    return res.status(422).json({
      message: `Failed to updated your ${fieldtype} due to validation error!`,
      success: false,
    });
  }
};
