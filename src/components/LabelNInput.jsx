import { useRef } from "react";
import PasswordInput from "./PasswordInput";

export default function idNInput({
  type = "text",
  name,
  classNameExtension,
  id,
  ref = null,
}) {
  const capitalizedFirstLetter = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className={`flex flex-col w-full ${classNameExtension}`}>
      <label htmlFor={name} className="font-semibold">
        {capitalizedFirstLetter}
      </label>
      {type === "password" ? (
        <PasswordInput name={name} id={id} ref={ref} />
      ) : (
        <input
          ref={ref}
          type={type}
          id={id || name}
          className="border w-full py-1 px-1"
        />
      )}
    </div>
  );
}

export const QuantityInput = ({
  quantity,
  handleDecrement,
  handleIncrement,
  setQuantity,
}) => {
  const Button = ({ type, onClick }) => {
    return (
      <button
        className={`-translate-y-0.5 absolute w-8 h-full flex justify-center items-center text-2xl active:text-xl ${
          type === "+" ? "right-0" : "left-0"
        }`}
        onClick={onClick}
      >
        {type}
      </button>
    );
  };

  return (
    <div className="flex w-fit gap-2 items-center">
      <label htmlFor="quantity" className="text-sm font-medium">
        Quantity
      </label>
      <div className="flex border relative min-w-29 rounded-xs h-7 ">
        <Button type={"+"} onClick={handleIncrement} />
        <input
          type="number"
          id="quantity"
          className="w-29 text-center focus:outline-0 px-7"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Button type={"-"} onClick={handleDecrement} />
      </div>
    </div>
  );
};
