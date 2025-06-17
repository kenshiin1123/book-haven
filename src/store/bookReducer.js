import { createSlice } from "@reduxjs/toolkit";
import books from "../data/books";
import Fuse from "fuse.js";

const initialState = {
  books: books,
  searchedBooks: [],
};

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
      console.log(action.payload, result);
      state.searchedBooks = result;
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice.reducer;
