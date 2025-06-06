import React from "react";

export default function Button({
  children,
  type = "button",
  onClick = () => {},
}) {
  return (
    <button onClick={onClick} type={type} className="px-5 bg-black text-white">
      {children}
    </button>
  );
}

export const ButtonOutlined = ({
  children,
  type = "button",
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="border px-5 active:scale-97 select-none"
    >
      {children}
    </button>
  );
};
