import { createSlice } from "@reduxjs/toolkit";
import books from "../data/books";
import Fuse from "fuse.js";

const initialState = {
  books: books,
  searchedBooks: [],
  filteredBooks: [...books],
};

function mapRatingLabelToStars(ratingLabel) {
  switch (ratingLabel) {
    case "rating-1":
      return 5;
    case "rating-2":
      return 4;
    case "rating-3":
      return 3;
    case "rating-4":
      return 2;
    case "rating-5":
      return 1;
    default:
      return 0; // or null/undefined to indicate an invalid rating
  }
}

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    filterBookBySearch(state, action) {
      const options = {
        keys: ["title", "author", "description"],
        threshold: 0.3,
        ignoreLocation: true,
        minMatchCharLength: 2,
      };
      const fuse = new Fuse(state.books, options);
      const result = fuse.search(action.payload);
      state.searchedBooks = result;
    },
    filterBook(state, action) {
      const { rating, author, category } = action.payload;

      const filteredPayload = {
        rating:
          rating.indexOf("Default") !== 0
            ? mapRatingLabelToStars(rating)
            : undefined,
        category: category.indexOf("Default") !== 0 ? category : undefined,
        author: author.indexOf("Default") !== 0 ? author : undefined,
      };

      const options = {
        threshold: 0.3,
        ignoreLocation: true,
        minMatchCharLength: 2,
      };

      const books = state.books;
      let result = books;

      if (filteredPayload.rating) {
        result = result.filter((book) => {
          return book.rating <= filteredPayload.rating;
        });
      }

      if (filteredPayload.category) {
        const fuse = new Fuse(result, { ...options, keys: ["category"] });
        result = fuse.search(filteredPayload.category).map((r) => r.item);
      }

      if (filteredPayload.author) {
        const fuse = new Fuse(result, { ...options, keys: ["author"] });
        result = fuse.search(filteredPayload.author).map((r) => r.item);
      }

      // console.log(result);
      state.filteredBooks = result;
    },
    resetFilterBook(state) {
      state.filteredBooks = state.books;
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice.reducer;
