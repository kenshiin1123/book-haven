import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userReducer";

export default function useItemQuantity(book, initialQuantity) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(initialQuantity || 1);

  const handleDecrement = (event) => {
    event.stopPropagation();

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

  const handleIncrement = (event) => {
    event.stopPropagation();

    dispatch(
      userActions.setItemQuantity({
        _id: book._id,
        quantity: parseInt(quantity) + 1,
      })
    );
    setQuantity((q) => parseInt(q) + 1);
  };

  const handleChange = (event) => {
    setQuantity(parseInt(event.target.value));
    dispatch(
      userActions.setItemQuantity({
        _id: book._id,
        quantity: parseInt(event.target.value),
      })
    );
  };

  return {
    quantity,
    handleDecrement,
    handleIncrement,
    handleChange,
  };
}
