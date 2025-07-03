import { z } from "zod";

export const Firstname = z
  .string()
  .min(2, "Firstname must be at least 2 characters long.")
  .trim();
export const Lastname = z
  .string()
  .min(2, "Lastname must be at least 2 characters long.")
  .trim();
export const Email = z
  .string()
  .email("Please enter a valid email address.")
  .trim();
export const Birthday = z.coerce
  .date({
    errorMap: () => ({
      message: "Please provide a valid date in YYYY-MM-DD format.",
    }),
  })
  .max(new Date(), { message: "Birthday cannot be in the future." })
  .refine(
    (date) => {
      const now = new Date();
      const age = now.getFullYear() - date.getFullYear();
      const monthDiff = now.getMonth() - date.getMonth();
      const dayDiff = now.getDate() - date.getDate();

      if (
        age < 13 ||
        (age === 13 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))
      ) {
        return false;
      }

      return true;
    },
    {
      message: "You must be at least 13 years old.",
    }
  );
export const Phone = z
  .string()
  .regex(
    /^(?:\+?\d{1,3}[-.\s()]*)?(?:0)?(?:\d{2,4}[-.\s()]*){2,4}\d{2,4}$/,
    "Please enter a valid phone number."
  )
  .trim();
export const Address = z
  .string()
  .min(5, "Address must be at least 5 characters long.")
  .trim();
export const Password = z
  .string()
  .min(8, "Password must be at least 8 characters.")
  .max(64, "Password must not exceed 64 characters.")
  .trim();
export const PicBuffer = z.string().trim();

export default [
  { firstname: Firstname },
  { lastname: Lastname },
  { email: Email },
  { password: Password },
  { birthday: Birthday },
  { phone: Phone },
  { address: Address },
  // { picBuffer: PicBuffer }, // This is not required
];
