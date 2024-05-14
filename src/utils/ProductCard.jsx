import React from "react";
import { NavLink } from "react-router-dom";

import Rating from "./Rating";

const ProductCard = ({ img, title, offerPrice, price, rating }) => {
  return (
    <div className="w-full ">
      <div className="relative overflow-hidden group">
        <img src={img} alt="" className="w-[100%] my-0 mx-auto" />
        <NavLink to={"/product-details"}>
          <button className="absolute bottom-[-50px] py-2 w-[100%] bg-[rgba(0,0,0,0.9)] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bottom-0">
            Quick View
          </button>
        </NavLink>
      </div>
      <div className=" py-3 px-2 flex justify-between items-center">
        <div>
          <p className="font-bold secondary-text-color">{title}</p>
          <p className="secondary-text-color">
            <span className="text-gray-500 line-through">${offerPrice}</span>
            &nbsp;
            <span>${price}</span>
          </p>
          <p>
            <Rating rating={rating} />
          </p>
        </div>
        <button className="text-[13px] secondary-background-color text-[#fff] py-3   px-3 rounded-xl">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
