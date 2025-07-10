import User from "../model/user.model.js";
import Book from "../model/book.model.js";

const getCartItems = async (req, res) => {
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
};

// Add book to cart
const postBookToCart = async (req, res) => {
  // Check for missing parameters
  if (!req.params || !req.params.userId || !req.params.bookId) {
    console.log(req.params);
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
// Required params: userId and bookId
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
    data: user.cart,
  });
};

// Update book cart. This allows the client to modify the quantity of the cart item they have,
// Whether it is to increment or decrement.
// Required params: userId and bookId
// Required body attribute: book quantity as quantity
const patchBookFromCart = async (req, res) => {
  // Check for missing parameters
  if (!req.params || !req.params.userId || !req.params.bookId) {
    return res.status(400).json({
      message: "Delete from cart failed due to missing parameters",
      success: false,
    });
  }

  if (!req.body || !req.body.quantity) {
    return res.status(400).json({
      message: "Delete from cart failed due to missing input",
      success: false,
    });
  }

  const { quantity } = req.body;
  const { userId, bookId } = req.params;

  const user = await User.findById(userId);

  // Check if user is available
  if (!user) {
    return res.status(404).json({
      message: "Could not found the user",
      success: false,
    });
  }

  // Map the book by id in user cart and modify the selectedBook

  user.cart = user.cart.map((book) => {
    if (book._id.toString() !== bookId) {
      return { ...book, quantity };
    } else {
      return book;
    }
  });

  await user.save();

  return res.status(201).json({
    message: "Successfully modified book from cart.",
    success: true,
    data: quantity,
  });
};

export { postBookToCart, deleteBookFromCart, patchBookFromCart, getCartItems };
