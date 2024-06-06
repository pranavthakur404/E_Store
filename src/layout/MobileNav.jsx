import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggle } from "../features/ToggleOver";
import { IoMdClose } from "react-icons/io";

import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const dispatch = useDispatch();

  const isMobileOpen = useSelector((state) => {
    return state.overlay.isOpen;
  });

  const handleClick = () => {
    dispatch(toggle());
  };

  return (
    <div
      className={`w-[300px] fixed px-2 ${
        isMobileOpen ? "left-0" : "left-[-300px]"
      } top-0 left-0 h-[100vh] overflow-y-auto transition-all duration-300 bg-[#fff] z-[5]`}
    >
      <div className="w-full flex justify-between">
        <img
          src="https://www.fablestreet.com/logo.svg"
          className="w-[150px]"
          alt=""
        />
        <IoMdClose
          className="text-[30px] my-2 cursor-pointer"
          onClick={handleClick}
        />
      </div>
      <div className="w-full ">
        {navLinks.map((list) => {
          return (
            <MobileNavLinks key={list.id} {...list} handleClick={handleClick} />
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;

const navLinks = [
  {
    id: 1,
    title: "Shop",
    to: "/",
    children: [
      { title: "Bestseller", to: "" },
      { title: "Workwear", to: "" },
      { title: "Livin Pants", to: "" },
      { title: "Tops & Shirts", to: "" },
      { title: "Dress", to: "" },
      { title: "Trousers", to: "" },
      { title: "Co-ords", to: "" },
      { title: "Blazers", to: "" },
      { title: "Tees", to: "" },
      { title: "Jeans & Denims", to: "" },
      { title: "Skirts, Skorts & Shorts", to: "" },
      { title: "Plus Slize", to: "" },
      { title: "Camisoles", to: "" },
      { title: "Special Prices", to: "" },
    ],
  },
  {
    id: 2,
    title: "New",
    to: "/",
    children: [
      { title: "Summer 2024", to: "" },
      { title: "WorkwWhites", to: "" },
      { title: "Modern Workwear", to: "" },
      { title: "Livin Pants", to: "" },
      { title: " View Allear", to: "" },
    ],
  },
  {
    id: 3,
    title: "Occasion",
    to: "/",
  },
  {
    id: 4,
    title: "About",
    to: "/about",
  },
  {
    id: 5,
    title: "Help",
    to: "/",
  },
];
