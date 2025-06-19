import { createSlice } from "@reduxjs/toolkit";
import userData from "../data/userData";

const initialState = {
  ...userData,
};

const cartReducers = {
  removeCart(state, action) {
    const itemId = action.payload;
    const filteredCart = state.cart.filter((item) => item._id !== itemId);
    state.cart = filteredCart;
  },
  addToCart(state, action) {
    const { _id, quantity } = action.payload;
    state.cart.unshift({ _id, quantity });
  },
  checkoutCart(state) {
    state.checkout = state.cart;
  },
  checkoutBook(state, action) {
    const { _id, quantity } = action.payload;
    state.checkout = [{ _id, quantity }];
  },
  setItemQuantity(state, actions) {
    const { _id, quantity } = actions.payload;
    const item = state.cart.find((item) => item._id === _id);
    if (item) {
      item.quantity = quantity;
    }
  },
};

const preferencesReducers = {
  toggleTheme(state) {
    state.preferences.darkTheme = !state.preferences.darkTheme;
  },
  toggleNotification(state) {
    state.preferences.notification = !state.preferences.notification;
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ...preferencesReducers,
    ...cartReducers,
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
