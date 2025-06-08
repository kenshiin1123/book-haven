import React from "react";

const initialClass = "px-5 active:scale-97 select-none";

export default function Button({
  children,
  type = "button",
  onClick = () => {},
  classExtension,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-black text-white ${initialClass} ${classExtension}`}
    >
      {children}
    </button>
  );
}

export const ButtonOutlined = ({
  children,
  type = "button",
  onClick = () => {},
  classExtension,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${initialClass} inset-ring ${classExtension}`}
    >
      {children}
    </button>
  );
};
