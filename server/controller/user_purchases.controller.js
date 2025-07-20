import User from "../model/user.model.js";
import Book from "../model/book.model.js";

const getPurchasesItems = async (req, res) => {
  if (!req.params || !req.params.userId) {
    return res.status(400).json({
      message:
        "Encountered an error while fetching purchases, user ID not found.",
      success: false,
      data: [],
    });
  }

  const { userId } = req.params;

  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({
      message: "Encountered an error while fetching purchases, user not found.",
      success: false,
      data: [],
    });
  }

  res.json({
    message: "Successfully retrieved purchased items",
    success: true,
    data: user.purchases,
  });
};

const postPurchasedItem = async (req, res) => {
  // Check for missing parameters
  if (!req.params || !req.params.userId || !req.params.bookId) {
    return res.status(400).json({
      message: "Adding to purchased items failed due to missing parameters",
      success: false,
    });
  }

  let quantity = req.body.quantity;

  // Check for missing body attributes
  if (!req.body || !req.body.quantity) {
    quantity = 1; // 1 is the default quantity if there are none provided
    req.body.quantity < 1 ? (quantity = 0) : 0; // if quantity is 0, make it 1
  }

  // Return if there are missing body attributes
  if (!req.body.status || !req.body.datetime) {
    return res.status(400).json({
      message: "Adding to purchased items failed due to missing fields",
      success: false,
    });
  }

  // Destructure body and params
  const { status, datetime } = req.body;
  const { userId, bookId } = req.params;

  // Check if book is available
  const book = await Book.findById(bookId);
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
    Check if the book already exists in the user's purchases.
    - If it exists, increment the quantity and update the status/datetime.
    - If it does not exist, add the new purchase to the top of the list.
  */
  const existingPurchaseseItem = user.purchases.find((item) => {
    return item._id.toString() === bookId;
  });

  if (existingPurchaseseItem) {
    // Remove the old entry from purchases
    user.purchases = user.purchases.map((item) => {
      if (item._id.toString() === bookId.toString()) {
        return {
          ...existingPurchaseseItem,
          quantity: existingPurchaseseItem.quantity + quantity,
          status,
          datetime,
        };
      } else {
        return item;
      }
    });
  } else {
    // Add new purchase to the top of the purchases list
    user.purchases.unshift({ _id: book._id, quantity, status, datetime });
  }
  // Save the updated user document
  await user.save();

  return res.status(201).json({
    message: "Successfully added book to purchases.",
    success: true,
    data: user.purchases,
  });
};

const deletePurchasedItem = async (req, res) => {
  // Check for missing parameters
  if (!req.params || !req.params.userId || !req.params.bookId) {
    return res.status(400).json({
      message: "Delete from purchases failed due to missing parameters",
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

  // Filter the book by id in user purchases
  user.purchases = user.purchases.filter(
    (book) => book._id.toString() !== bookId
  );

  await user.save();

  return res.status(201).json({
    message: "Successfully deleted book from purchases.",
    success: true,
    data: user.purchases,
  });
};

export { getPurchasesItems, postPurchasedItem, deletePurchasedItem };
