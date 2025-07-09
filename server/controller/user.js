import Book from "../model/book.js";
import User from "../model/user.js";
import { validateUserField } from "../validations/user.js";

// modify user information by field type
const patchUserInformation = async (req, res) => {
  const { userId } = req.params;
  const { fieldtype, newInfo } = req.body;

  const validatedResult = validateUserField(fieldtype, newInfo);

  if (!validatedResult.success) {
    res.status(422).json({
      message: validatedResult.message,
      success: validatedResult.success,
      userInfo: newInfo,
    });
  }

  const update = { [fieldtype]: validatedResult.validatedField.data };
  const user = await User.findByIdAndUpdate(userId, update, { new: true });
  res.json({
    message: "Successfully updated field!",
    success: true,
    [fieldtype]: user[fieldtype],
  });
};

// Add book to cart
const postBookToCart = async (req, res) => {
  // Check for missing parameters
  if (!req.params || !req.params.userId || !req.params.bookId) {
    return res.status(400).json({
      message: "Add to cart failed due to missing fields",
      success: false,
    });
  }

  let quantity = req.body.quantity;

  if (!req.body || !req.body.quantity) {
    quantity = 1; // 1 is the default quantity if there are none provided
    req.body.quantity < 1 ? (quantity = 0) : 0; // if quantity is 0, make it 1
  }

  const { userId, bookId } = req.params;

  const book = await Book.findById(bookId);

  // Check if book is available
  if (!book) {
    return res.status(404).json({
      message: "Could not found the book",
      success: false,
    });
  }

  const user = await User.findById(userId);

  // Check if user is available
  if (!user) {
    return res.status(404).json({
      message: "Could not found the user",
      success: false,
    });
  }

  /* 
   Check the book in user cart if its existing, if so,
   just increment the quantity and not create new item
  */

  const existingCartItem = user.cart.find(
    (item) => item._id.toString() === bookId
  );

  if (existingCartItem) {
    existingCartItem.quantity += quantity;
  } else {
    // unshift new book to user's cart
    user.cart.unshift({ _id: book._id, quantity, checked: false });
  }
  // save modifications.
  await user.save();

  return res.status(201).json({
    message: "Successfully added book to cart.",
    success: true,
    cart: user.cart,
  });
};

// Remove book from cart
const deleteBookFromCart = async (req, res) => {
  // Check for missing parameters
  if (!req.params || !req.params.userId || !req.params.bookId) {
    return res.status(400).json({
      message: "Delete from cart failed due to missing parameters",
      success: false,
    });
  }

  const { userId, bookId } = req.params;

  const user = await User.findById(userId);

  // Check if user is available
  if (!user) {
    return res.status(404).json({
      message: "Could not found the user",
      success: false,
    });
  }

  // Filter the book by id in user cart

  user.cart = user.cart.filter((book) => book._id.toString() !== bookId);

  await user.save();

  return res.status(201).json({
    message: "Successfully deleted book from cart.",
    success: true,
    user,
  });
};

export { patchUserInformation, postBookToCart, deleteBookFromCart };
