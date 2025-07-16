import { createSlice } from "@reduxjs/toolkit";
import userData from "../data/userData";
import { toast } from "sonner";

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
    state.cart.unshift({ _id, quantity, checked: false });
  },
  checkoutCart(state, action) {
    state.checkout = action.payload;
  },
  checkoutBook(state, action) {
    const { _id, quantity } = action.payload;
    state.checkout = [{ _id, quantity }];
  },
  checkItemInCart(state, action) {
    const { _id } = action.payload;
    const existingItem = state.cart.find((item) => item._id === _id);
    if (existingItem) {
      existingItem.checked = !existingItem.checked;
    }
  },
  setItemQuantity(state, actions) {
    const { _id, quantity } = actions.payload;
    const item = state.cart.find((item) => item._id === _id);
    if (item) {
      item.quantity = quantity;
    }
  },
  purchaseItem(state, action) {
    // Remove Checked Item in Cart
    const updatedCart = state.cart.filter((item) => !item.checked);
    state.cart = updatedCart;

    // Add the purchased item to purchased item list
    action.payload.forEach((book) => {
      state.purchases.unshift({
        ...book,
        status: "pending",
        datetime: Date.now(),
      });
    });
  },
};

const preferencesReducers = {
  toggleTheme(state) {
    localStorage.setItem("darkTheme", !state.preferences.darkTheme);
    state.preferences.darkTheme = !state.preferences.darkTheme;
  },
  toggleNotification(state) {
    state.preferences.notification = !state.preferences.notification;
  },
};

const profileReducers = {
  replaceInfo(state, action) {
    const updatedState = { ...state, ...action.payload };

    // Format the birthday properly
    if (updatedState.birthday.indexOf("T")) {
      updatedState.birthday = updatedState.birthday.slice(
        0,
        updatedState.birthday.indexOf("T")
      );
    }
    return updatedState;
  },
  updateInfo(state, action) {
    // the payload must have a type
    const { type, newInfo } = action.payload;
    state[type] = newInfo;
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ...preferencesReducers,
    ...cartReducers,
    ...profileReducers,
  },
});

export const fetchProfile = () => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    const getInfo = async () => {
      const response = await fetch("http://localhost:3000/api/users/profile", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        toast("Failed to fetch profile info.");
        return;
      }

      const resData = await response.json();
      return resData;
    };

    try {
      const resData = await getInfo();
      dispatch(userActions.replaceInfo(resData.data));
    } catch (error) {
      console.log(error);
      toast("Failed to fetch profile info.");
    }
  };
};

export const userActions = userSlice.actions;

export default userSlice.reducer;
