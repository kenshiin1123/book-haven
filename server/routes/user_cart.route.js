import User from "../model/user.model.js";
import express from "express";
const router = express.Router();

import {
  postBookToCart,
  deleteBookFromCart,
  patchBookFromCart,
} from "../controller/user_cart.controller.js";

// Get cart items
router.get("/:userId/cart/", async (req, res) => {
  if (!req.params || !req.params.userId) {
    return res.status(400).json({
      message: "Encountered an error while fetching cart, user ID not found.",
      success: false,
      data: [],
    });
  }

  const { userId } = req.params;

  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({
      message: "Encountered an error while fetching cart, user not found.",
      success: false,
      data: [],
    });
  }

  res.json({
    message: "Successfully retrieved cart items",
    success: true,
    data: user.cart,
  });
});

// Add book to cart
router.post("/:userId/cart/:bookId", postBookToCart);

// Remove book from cart
router.delete("/:userId/cart/:bookId", deleteBookFromCart);

// Modify book from cart
router.patch("/:userId/cart/:bookId", patchBookFromCart);

export default router;
