import User from "../model/user.model.js";
import express from "express";
const router = express.Router();

import {
  postBookToCart,
  deleteBookFromCart,
  patchBookFromCart,
  getCartItems,
} from "../controller/user_cart.controller.js";

// Get cart items
router.get("/:userId/cart/", getCartItems);

// Add book to cart
router.post("/:userId/cart/:bookId", postBookToCart);

// Remove book from cart
router.delete("/:userId/cart/:bookId", deleteBookFromCart);

// Modify book from cart
router.patch("/:userId/cart/:bookId", patchBookFromCart);

export default router;
