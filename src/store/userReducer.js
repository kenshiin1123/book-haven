import { createSlice } from "@reduxjs/toolkit";
import userData from "../data/userData";

const initialState = {
  ...userData,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.preferences.darkTheme = !state.preferences.darkTheme;
    },
    toggleNotification(state) {
      state.preferences.notification = !state.preferences.notification;
    },
    removeCart(state, action) {
      const itemId = action.payload;
      const filteredCart = state.cart.filter((item) => item._id !== itemId);
      console.log(filteredCart);
      state.cart = filteredCart;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
