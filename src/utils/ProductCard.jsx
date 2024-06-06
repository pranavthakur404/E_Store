import React from "react";
import { NavLink } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { IoIosHeartEmpty } from "react-icons/io";

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
    <NavLink to="/product/123">
      <div className={`w-[${width}] mb-10 mx-1  relative`}>
        <div className="relative overflow-hidden productCardImg group">
          <img
            src={img}
            alt=""
            className="w-[100%] productImage h-[300px] md:h-[350px] my-0 mx-auto rounded-lg"
          />
          <span className="productOverlay"></span>
          <div className="flotingContainer text-[18px] text-white p-2">
            <button className="py-1 px-3 bg-white rounded shadow-xl">
              <GrCart className="text-[#000]" />
            </button>
            <br />
            <button className="py-1 px-3 bg-white rounded">
              <IoIosHeartEmpty className="text-[#000] shadow-xl" />
            </button>
          </div>
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
              <span className="text-[#008c2d] font-[600]">
                ₹{offerPrice} Off
              </span>
            </p>
            <p className="text-[14px] text-[#008c2d] font-[600]">{offerText}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
