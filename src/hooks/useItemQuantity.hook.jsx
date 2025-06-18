import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userReducer";

export default function useItemQuantity(book, initialQuantity) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(
        userActions.setItemQuantity({
          _id: book._id,
          quantity: parseInt(quantity) - 1,
        })
      );
      setQuantity((q) => parseInt(q) - 1);
    }
  };

  const handleIncrement = () => {
    dispatch(
      userActions.setItemQuantity({
        _id: book._id,
        quantity: parseInt(quantity) + 1,
      })
    );
    setQuantity((q) => parseInt(q) + 1);
  };
  return {
    quantity,
    handleDecrement,
    handleIncrement,
    setQuantity,
  };
}
