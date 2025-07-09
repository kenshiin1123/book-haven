import app from "express";
const router = app.Router();

import authMiddleware from "../middleware/authMiddleware.js";

// User Controller
import {
  deleteBookFromCart,
  patchUserInformation,
  postBookToCart,
} from "../controller/user.js";

// This is used to validate the token
router.use(authMiddleware);

// modify user information by field type
router.patch("/:userId", patchUserInformation);

// Add book to cart
router.post("/:userId/cart/:bookId", postBookToCart);

// Remove book from cart
router.delete("/:userId/cart/:bookId", deleteBookFromCart);

export default router;
