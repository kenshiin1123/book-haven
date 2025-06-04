import React from "react";

export default function Button({ children }) {
  return <button className="border px-5">{children}</button>;
}

export const ButtonOutlined = ({ children }) => {
  return (
    <button className="border px-5 active:scale-97 select-none">
      {children}
    </button>
  );
};
