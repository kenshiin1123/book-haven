import app from "express";
const router = app.Router();

import authMiddleware from "../middleware/authMiddleware.js";
import validateBook from "../validations/validateBook.js";

// Controller
import {
  fetchBooks,
  patchBook,
  postBook,
  deleteBook,
} from "../controller/book.controller.js";

router.get("", fetchBooks);

// This is used to validate the token
router.use(authMiddleware);

// Create book
router.post("", validateBook, postBook);

// Update book
router.patch("", validateBook, patchBook);

// Delete book
router.delete("", validateBook, deleteBook);

export default router;
