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

    return {
      success,
      message,
      validatedField,
    };
  } catch (error) {
    console.log(error);
  }
};
