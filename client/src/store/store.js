import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "./bookReducer";
import userReducer from "./userReducer";

const store = configureStore({
  reducer: { book: bookReducer, user: userReducer },
});

export default store;
