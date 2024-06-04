import React from "react";
import { NavLink } from "react-router-dom";

import Rating from "./Rating";

const ProductCard = ({
  img,
  title,
  offerPrice,
  total,
  price,
  offerText,
  width,
}) => {
  return (
    <div className={`w-[${width}] mb-10 mx-1`}>
      <div className="relative overflow-hidden group">
        <img
          src={img}
          alt=""
          className="w-[100%] h-[300px] md:h-[400px] my-0 mx-auto"
        />
      </div>
      <div className="flex py-2 justify-between items-center">
        <div>
          <p className="text-[14px] secondary-text-color">{title}</p>
          <p className="secondary-text-color">
            <span>₹{price}</span>{" "}
            <span className="text-gray-500 line-through text-[12px]">
              ₹{total}
            </span>
            &nbsp;
            <span className="text-[#008c2d] font-[600]">₹{offerPrice} Off</span>
          </p>
          <p className="text-[14px] text-[#008c2d] font-[600]">{offerText}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
