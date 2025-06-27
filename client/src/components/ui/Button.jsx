import { motion } from "motion/react";
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
      className={`bg-black text-white dark:bg-white dark:text-black rounded ${initialClass} ${classExtension}`}
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
      className={`${initialClass} color-3 border ${classExtension} dark:border-white`}
    >
      {children}
    </button>
  );
};

export const ButtonToggle = ({ active = false, onClick }) => {
  return (
    <button
      className="h-9 w-20 border rounded-full flex items-center p-1 dark:border-white"
      onClick={onClick}
      type="button"
    >
      <motion.div
        initial={false}
        animate={{ marginLeft: active ? "60%" : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="size-7 bg-black rounded-full dark:bg-white"
      />
    </button>
  );
};

export const ButtonWarning = ({
  children,
  type = "button",
  onClick = () => {},
  classExtension,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${initialClass} inset-ring-1 dark:inset-ring-white dark:inset-0 text-red-600  dark:text-red-500 color-3 ${classExtension}`}
    >
      {children}
    </button>
  );
};
