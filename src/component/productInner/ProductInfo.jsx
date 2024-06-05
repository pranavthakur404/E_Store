import React, { useState } from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import SizeChartModal from "./SizeChartModal";
import DescriptionAccordion from "./DescriptionAccordion";
import { LuShoppingCart } from "react-icons/lu";

const ProductInfo = () => {
  const [productCount, setProductCounter] = useState(1);

  return (
    <>
      {/* <SizeChartModal /> */}
      <div className="w-full px-0 mt-10 sm:mt-0 sm:px-3">
        <p className="text-[32px] font-[500]">Abstract Print Shirt</p>
        <p className="mt-2 text-[20px]">
          Rs. 799{" "}
          <span className="text-[12px] text-gray-400 line-through inline-block ml-1">
            Rs. 1899
          </span>{" "}
          <span className="text-[12px] bg-black text-white px-2 inline-block ml-1">
            58% Off
          </span>
        </p>
        {/* size options */}

        <div>
          <p className="text-[13px] mt-5  text-gray-800">Select A Size</p>
          <div class="space-x-2 my-2">
            <button class="bg-transparent border border-black  text-black text-[14px] py-2 px-7 rounded-lg hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none focus:ring-2  focus:ring-opacity-75 transform transition-transform duration-300">
              S
            </button>
            <button class="bg-transparent text-black border border-black text-[14px] py-2 px-7 rounded-lg hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none focus:ring-2  focus:ring-opacity-75 transform transition-transform duration-300">
              M
            </button>
            <button class="bg-transparent text-black border border-black text-[14px] py-2 px-7 rounded-lg hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none focus:ring-2  focus:ring-opacity-75 transform transition-transform duration-300">
              L
            </button>
            <button class="bg-transparent text-black border border-black text-[14px] py-2 px-7 rounded-lg hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none focus:ring-2  focus:ring-opacity-75 transform transition-transform duration-300">
              XL
            </button>
          </div>
        </div>

        <div className="flex items-center">
          {/* counter */}
          <div className="flex items-center mt-5">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded-l"
              onClick={() =>
                setProductCounter((prevData) => {
                  if (prevData > 1) {
                    return prevData - 1;
                  }
                  return prevData;
                })
              }
            >
              -
            </button>
            <input
              type="text"
              value={productCount}
              className="w-12 text-center bg-gray-100 text-gray-700"
              readOnly
            />
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded-r"
              onClick={() =>
                setProductCounter((prevData) => {
                  return prevData + 1;
                })
              }
            >
              +
            </button>
          </div>
        </div>

        <button className="w-full border-2 bg-[#000] text-white hover:border-[#000] text-[14px] hover:text-[#000] py-2  my-4 flex justify-center items-center gap-2 hover:bg-transparent  transition-all duration-300">
          <LuShoppingCart />
          <span>Add To Cart </span>
        </button>

        <button className="w-full border-2 bg-translate text-[#000] border-[#000]  text-[14px] hover:text-[#fff] py-2  my-4 flex justify-center items-center gap-2 hover:bg-[#000]  transition-all duration-300">
          <IoIosHeartEmpty />
          <span>Add To Whishlist </span>
        </button>

        {/* description accordion */}
        <div className="w-full mt-5">
          <DescriptionAccordion />
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
