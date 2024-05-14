import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks = () => {
  return (
    <nav>
      <ul className="flex gap-5 items-center">
        <li className="relative py-4 main-nav-with-child">
          <NavLink
            to="/"
            className="text-[14px] uppercase main-navigation-links"
          >
            Shop
          </NavLink>
          <div className="absolute main-child-nav z-[2] bg-[#fff] min-w-max flex justify-between py-5 px-5 gap-10 top-[50px] shadow-xl">
            <div className="mr-10">
              <h3 className="text-[14px] font-[600]">Shop By Solution</h3>
              <p className="text-[13px] my-2">View All</p>
              <p className="text-[13px] my-2">Hair & Beauty</p>
              <p className="text-[13px] my-2">Wellness</p>
              <p className="text-[13px] my-2">Gut & Weight</p>
              <p className="text-[13px] my-2">Calm & Sleep</p>
              <p className="text-[13px] my-2">Kids</p>
            </div>
            <div className="mr-10">
              <h3 className="text-[14px] font-[600]">Shop All Products</h3>
              <p className="text-[13px] my-2">View All</p>
              <p className="text-[13px] my-2">Gut Health Drink</p>
              <p className="text-[13px] my-2">Balance</p>
              <p className="text-[13px] my-2">Hair</p>
              <p className="text-[13px] my-2">Fit Plust</p>
              <p className="text-[13px] my-2">Glow</p>
              <p className="text-[13px] my-2">Calm</p>
              <p className="text-[13px] my-2">Energy</p>
              <p className="text-[13px] my-2">Immunity</p>
              <p className="text-[13px] my-2">Kids Multi</p>
              <p className="text-[13px] my-2">Bundles ( 10 to 20% off)</p>
              <p className="text-[13px] my-2">Gifts Sets</p>
              <p className="text-[13px] my-2">Accessories</p>
            </div>
          </div>
        </li>
        <li className="py-4">
          <NavLink
            to="/about"
            className="text-[14px] uppercase main-navigation-links"
          >
            About
          </NavLink>
        </li>
        <li className="py-4">
          <NavLink
            to="/"
            className="text-[14px] uppercase main-navigation-links"
          >
            Help
          </NavLink>
        </li>
        <li className="py-4">
          <NavLink
            to="/"
            className="text-[14px] uppercase main-navigation-links"
          >
            Reviews
          </NavLink>
        </li>
        <li className="py-4">
          <NavLink
            to="/"
            className="text-[14px] uppercase main-navigation-links"
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navlinks;
