import { createSlice } from "@reduxjs/toolkit";
import books from "../data/books";

const initialState = {
  books: books,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
