import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";

const BlogCard = () => {
  return (
    <div className="w-full">
      <img
        src="https://template.hasthemes.com/shome/shome/assets/img/blog/1.webp"
        alt=""
        className="w-full object-cover rounded-lg"
      />
      <div className="flex gap-2 my-3">
        <span className="flex items-center gap-1 text-[14px]">
          <SlCalender className="text-[#f6aa28]" />
          27,Jun 2023
        </span>
        <span className="flex items-center gap-1 text-[14px]">
          <FaUser className="text-[#f6aa28]" />
          Oaklee Odom
        </span>
      </div>
      <h2 className="font-bold text-[14px] md:text-[18px] my-3">
        Lorem ipsum dolor ametcons adipisicing elit sed{" "}
      </h2>
      <button className="text-[14px] text-[#fff] py-2 px-5 bg-[#262b2c]">
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
