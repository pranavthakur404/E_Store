import React, { useEffect } from "react";

import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import toast from "react-hot-toast";

const ReferelContainer = () => {
  useEffect(() => {
    navigator.clipboard.writeText("https://www.snitch.co.in");
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("https://www.snitch.co.in");
    toast.success("Link Coppied !!", { duration: 1000 });
  };

  return (
    <div className="w-full mt-5  p-3 rounded-lg flex flex-wrap gap-2 justify-evenly mb-3">
      <div className=" shadow-md rounded-2xl p-1 cursor-pointer flex items-center">
        <p className="text-[12px] mx-3">https://www.snitch.co.in</p>
        <span
          className="text-[12px] block bg-black text-white px-3 py-1 rounded-2xl"
          onClick={handleCopy}
        >
          Copy
        </span>
      </div>
      <div className=" shadow-md rounded-2xl p-1 cursor-pointer flex items-center">
        <p className="text-[12px] mx-3">Share referral link via</p>
        <div className="px-3 flex items-center text-[20px] gap-2">
          <IoLogoWhatsapp className="text-green-600" />
          <FaFacebookSquare className="text-blue-600" />
          <FaShareNodes />
        </div>
      </div>
    </div>
  );
};

export default ReferelContainer;
