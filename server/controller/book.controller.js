import Book from "../model/book.model.js";

const fetchBooks = async (_, res) => {
  try {
    const books = await Book.find();
    if (!books) {
      res.status(404).json({
        message: "Failed to retrieve books",
        success: false,
        data: null,
      });
    }

    res.status(200).json({
      message: "Successfully retrieved books",
      success: true,
      data: books,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not retrieve book.", success: false });
  }
};

const postBook = async (req, res) => {
  try {
    const book = req.body;
    const newBook = new Book({ ...book });
    await newBook.save();
    return res
      .status(201)
      .json({ message: "Book created", success: true, book: newBook });
  } catch (error) {
    res.status(500).json({ message: "Could not create book.", success: false });
  }
};

const patchBook = async (req, res) => {
  try {
    const book = req.body;
    const updatedBook = await Book.findByIdAndUpdate(book._id, book);

    if (!updatedBook) {
      return res
        .status(404)
        .json({ message: "Book not found!", success: false });
    }

    return res
      .status(201)
      .json({ message: "Successfully Modified The Book!", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not modify the book.", success: false });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = req.body;
    const deletedBook = await Book.findByIdAndDelete(book._id);

    if (!deletedBook) {
      return res
        .status(404)
        .json({ message: "Book not found!", success: false });
    }

    return res
      .status(200)
      .json({ message: "Successfully Deleted The Book!", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not delete the book.", success: false });
  }
};
export { fetchBooks, postBook, patchBook, deleteBook };
