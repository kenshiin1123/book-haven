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
export const Birthday = z.string().trim();
export const Phone = z
  .string()
  .regex(
    /^(?:\+?\d{1,3}[-.\s()]*)?(?:0)?(?:\d{2,4}[-.\s()]*){2,4}\d{2,4}$/,
    "Please enter a valid phone number."
  )
  .trim();
export const Address = z.string().trim();
export const Password = z
  .string()
  .min(8, "Password must be at least 8 characters.")
  .max(64, "Password must not exceed 64 characters.")
  .trim();
export const PicPath = z.string().trim();
