import bookSchema from "./bookScheme.js";

const validateBook = (req, res, next) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ message: "Book object is missing", success: false });
  }

  const book = req.body;

  if (req.method === "POST") {
    if (
      !book.title ||
      !book.author ||
      !book.description ||
      !book.price ||
      !book.discount ||
      !book.year ||
      !book.image
    ) {
      return res
        .status(400)
        .json({ message: "Book attribute is missing", success: false });
    }
  }

  if (req.method !== "POST") {
    const availableFields = [
      "title",
      "author",
      "description",
      "price",
      "discount",
      "year",
      "image",
    ];

    // Check if the Object attributes have the valid keys
    // let isValidKeys = true;
    // Object.keys(book).forEach((key) => {
    //   if (!availableFields.some(key)) {
    //     isValidKeys = false;
    //   }
    // });

    // if (!isValidKeys) {
    //   return res
    //     .status(400)
    //     .json({ message: "Book value is missing", success: false });
    // }
  }

  // Validate book id
  if (
    (req.method == "PATCH" && !book._id) ||
    (req.method == "DELETE" && !book._id)
  ) {
    console.log(book);
    return res
      .status(400)
      .json({ message: "Book ID is missing", success: false });
  }

  const requiredFields =
    req.method === "POST"
      ? ["title", "author", "description", "price", "discount", "year", "image"]
      : Object.keys(book);

  const errors = [];

  requiredFields.forEach((requiredField) => {
    if (requiredField === "_id") {
      return;
    }

    const validatedField = bookSchema[requiredField].safeParse(
      book[requiredField]
    );
    if (!validatedField.success) {
      errors.push(validatedField.error);
    } else {
      validatedField.data;
    }
  });

  if (errors.length > 0) {
    console.log(errors);
    return res
      .status(400)
      .json({ message: "Validation Error", success: false });
  }

  return next();
};

export default validateBook;
