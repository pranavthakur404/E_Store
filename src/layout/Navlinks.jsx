import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks = () => {
  return (
    <nav>
      <ul className="flex gap-7 items-center">
        <li className="relative py-4 main-nav-with-child">
          <NavLink to="/" className="text-[14px]  main-navigation-links">
            Shop
          </NavLink>
          <div className="absolute main-child-nav z-[2] bg-[#fff] min-w-max py-5 px-5 gap-10 top-[50px] shadow-xl">
            <div className="mr-10">
              <p className="text-[13px] my-2">Bestsellers</p>
              <p className="text-[13px] my-2">Workwear</p>
              <p className="text-[13px] my-2">Livin Pants</p>
              <p className="text-[13px] my-2">Tops & Shirts</p>
              <p className="text-[13px] my-2">Dresses</p>
              <p className="text-[13px] my-2">Trousers</p>
              <p className="text-[13px] my-2">Co-ords</p>
              <p className="text-[14px] my-2">Blazers</p>
              <p className="text-[13px] my-2">Tees</p>
              <p className="text-[13px] my-2">Jeans & Denims</p>
              <p className="text-[13px] my-2">Skirts, Skorts & Shorts</p>
              <p className="text-[13px] my-2">Plus Size</p>
              <p className="text-[13px] my-2">Camisoles</p>
              <p className="text-[13px] my-2">Special Prices</p>
            </div>
          </div>
        </li>
        <li className="py-4 main-nav-with-child">
          <NavLink to="/about" className="text-[14px]  main-navigation-links">
            New
          </NavLink>
          <div className="absolute main-child-nav z-[2] bg-[#fff] min-w-max py-5 px-5 gap-10 top-[50px] shadow-xl">
            <div className="mr-10">
              <p className="text-[13px] my-2">
                <NavLink to="/products?type=Summer 2024">Summer 2024</NavLink>
              </p>
              <p className="text-[13px] my-2">
                <NavLink to="/products?type=Whites">Whites</NavLink>
              </p>
              <p className="text-[13px] my-2">
                <NavLink to="/products?type=Modern Workwear">
                  Modern Workwear
                </NavLink>
              </p>
              <p className="text-[13px] my-2">
                <NavLink to="/products?type=Livin-Paints">Livin Pants</NavLink>
              </p>
              <p className="text-[13px] my-2">
                <NavLink to="/products?type=All">View All</NavLink>
              </p>
            </div>
          </div>
        </li>

        <li className="py-4">
          <NavLink to="/" className="text-[14px]  main-navigation-links">
            Occasion
          </NavLink>
          <div className="absolute main-child-nav z-[2] bg-[#fff] min-w-max py-5 px-5 gap-10 top-[50px] shadow-xl">
            <div className="mr-10">
              <p className="text-[13px] my-2">Work</p>
              <p className="text-[13px] my-2">Casual</p>
              <p className="text-[13px] my-2">Going Out</p>
            </div>
          </div>
        </li>
        <li className="py-4">
          <NavLink to="/about" className="text-[14px]  main-navigation-links">
            About
          </NavLink>
        </li>
        <li className="py-4">
          <NavLink to="/" className="text-[14px]  main-navigation-links">
            Help
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navlinks;
