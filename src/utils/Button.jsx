import React from "react";
import { FaNapster } from "react-icons/fa";

const Button = ({ text, fn }) => {
  return (
    <button
      onClick={fn}
      className="bg-transparent border-2 border-[#fff] hover:bg-[#fff] hover:text-[#000] transition px-3 py-2 rounded text-[14px] font-[500]"
    >
      {text}
    </button>
  );
};

export default Button;
