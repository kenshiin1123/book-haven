import { useState } from "react";
import PasswordInput from "./PasswordInput";
import { LuPencil, LuPencilOff } from "react-icons/lu";
import Button from "./Button";

export default function LabelNInput({
  type = "text",
  name,
  classNameExtension,
  id,
  ref = null,
  disabled = false,
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
          className="border w-full py-1 px-1 disabled:border-0 disabled:border-b"
          disabled={disabled}
        />
      )}
    </div>
  );
}

export const EditableLabelNInput = ({
  type = "text",
  name,
  classNameExtension,
  id,
  ref = null,
  disabled = false,
  updateFunc,
}) => {
  const [disabledState, setDisabledState] = useState(disabled);
  const capitalizedFirstLetter = name.charAt(0).toUpperCase() + name.slice(1);

  const handleEdit = () => {
    setDisabledState((prev) => {
      // this is used to focus on the input when the edit button is clicked
      if (prev) {
        setTimeout(() => {
          if (ref && ref.current) {
            ref.current.focus();
          }
        }, 0);
      }
      return false;
    });
  };

  const handleSave = () => {
    const result = updateFunc(name, ref.current.value); // if this returns false, the user cannot click the save button
    setDisabledState(result);
  };

  return (
    <div className={`flex flex-col w-full ${classNameExtension} relative`}>
      {disabledState ? (
        <button onClick={handleEdit}>
          <LuPencil className="absolute right-4 top-4" />
        </button>
      ) : (
        <Button
          onClick={handleSave}
          classExtension={"absolute right-2 top-1 py-2"}
        >
          Save
        </Button>
      )}
      <label htmlFor={name} className="font-semibold indent-3">
        {capitalizedFirstLetter}
      </label>
      {type === "password" ? (
        <PasswordInput name={name} id={id} ref={ref} />
      ) : (
        <input
          ref={ref}
          type={type}
          id={id || name}
          className={`w-full py-1 px-1 focus:outline-0 border-b indent-3 pr-24 truncate ${
            !disabledState && "border-b-4 border-b-red-400"
          }`}
          disabled={disabledState}
        />
      )}
    </div>
  );
};

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
