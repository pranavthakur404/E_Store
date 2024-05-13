import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggle } from "../features/ToggleOver";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

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
      className={`w-[300px] fixed ${
        isMobileOpen ? "left-0" : "left-[-300px]"
      } top-0 left-0 h-[100vh] overflow-y-auto transition-all duration-300 bg-[#fff] z-[3]`}
    >
      <div className="w-full flex justify-end">
        <IoMdClose
          className="text-[30px] m-2 cursor-pointer"
          onClick={handleClick}
        />
      </div>
      <div className="w-full p-2">
        {navLinks.map((list) => {
          return (
            <p
              key={list.id}
              className="text-[18px] font-[500] my-3"
              onClick={handleClick}
            >
              <NavLink to={list.to}>{list.title}</NavLink>
            </p>
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
    title: "Home",
    to: "/",
  },
  {
    id: 2,
    title: "Category",
    to: "/category",
  },
  {
    id: 3,
    title: "About",
    to: "/about",
  },
  {
    id: 4,
    title: "Contact",
    to: "/contact",
  },
  {
    id: 5,
    title: "Blog",
    to: "/blog",
  },
];
