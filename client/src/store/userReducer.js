import { createSlice } from "@reduxjs/toolkit";
import userData from "../data/userData";
import { toast } from "sonner";
import { deleteAuthToken, getAuthToken } from "../utils/auth.js";

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
  const token = getAuthToken();
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

export const modifyProfile = (payload) => {
  const token = getAuthToken();
  const { type, newInfo } = payload;

  if (token === "EXPIRED") {
    toast.error("Token expired");
    return deleteAuthToken();
  }

  if (!payload || !payload.type || !payload.newInfo) {
    return toast.error("Both field type and value are required.");
  }

  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ fieldtype: type, newInfo }),
    };

    if (type === "picture") {
      config.headers = { Authorization: "Bearer " + token };
      const formData = new FormData();
      formData.append("fieldtype", "picture");
      formData.append("newInfo", newInfo);
      config.body = formData;

      // return dispatch({ type: "picture", newInfo });
    }

    const patchProfile = async () => {
      const response = await fetch("http://localhost:3000/api/users/profile", {
        method: "PATCH",
        ...config,
      });

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      return data;
    };

    try {
      const data = await patchProfile();

      if (data.success == false) {
        return toast.error(data.message);
      }

      if (data.success) {
        toast.success(data.message);
        dispatch(userActions.replaceInfo(data.data));
      }
    } catch (error) {
      console.log(error);
      return toast.error("Encountered an error while updating " + type);
    }
  };
};

export const userActions = userSlice.actions;

export default userSlice.reducer;
