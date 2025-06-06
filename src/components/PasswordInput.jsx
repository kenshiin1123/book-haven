import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const PasswordInput = ({ name, id, classNameExtension, ref }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`border w-full  flex relative ${classNameExtension}`}>
      <input
        ref={ref}
        type={showPassword ? "text" : "password"}
        id={id || name}
        className="w-full h-full py-1 px-1"
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-2 top-0.5 text-2xl"
      >
        {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
      </button>
    </div>
  );
};

export default PasswordInput;
