import React, { useState } from "react";
import Rating from "../../utils/Rating";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const DetailBox = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="w-full">
      <h4 className="productDetails-heading text-[20px] mb-3">
        Rise Skinny Jeans
      </h4>
      <Rating rating={4} />
      <p className="mt-3 text-[22px]">$299</p>
      <div className="w-full flex justify-between border-t border-b border-gray-300 text-[13px] mt-3 secondary-text-color">
        <span>
          Brand : <span className="font-bold">Top Shop</span>
        </span>
        <span>
          Category : <span className="font-bold">Women</span>
        </span>
      </div>
      <p className="text-[14px] secondary-text-color mt-3">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text,
      </p>
      {/* quantity box */}
      <div className="flex w-[150px] items-center justify-center px-4 py-1 border rounded-lg shadow-md mt-3">
        <button
          className="w-8 h-8 flex items-center justify-center text-gray-700 bg-gray-200 rounded-full focus:outline-none hover:bg-gray-300"
          onClick={() => {
            setQuantity((prev) => {
              if (prev > 1) {
                return (prev -= 1);
              } else {
                return prev;
              }
            });
          }}
        >
          <FaMinus className="text-[13px]" />
        </button>
        <h3 className="mx-4 text-lg font-semibold">{quantity}</h3>
        <button
          className="w-8 h-8 flex items-center justify-center text-gray-700 bg-gray-200 rounded-full focus:outline-none hover:bg-gray-300"
          onClick={() => {
            setQuantity((prev) => {
              return (prev += 1);
            });
          }}
        >
          <FaPlus className="text-[13px]" />
        </button>
      </div>
    </div>
  );
};

export default DetailBox;
