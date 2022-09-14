import React from "react";

const Button = ({ styles, children }) => {
  return (
    <button
      className={` bg-[#3671E9] text-white px-5 py-3 rounded-full ${styles} `}
    >
      {children}
    </button>
  );
};

export default Button;
