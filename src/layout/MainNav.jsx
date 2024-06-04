import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

import Container from "../utils/Container";
import Navlinks from "./Navlinks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggle } from "../features/ToggleOver";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  const dispatch = useDispatch();
  const toggleOverlay = useSelector((state) => {
    return state.overlay.isOpen;
  });

  const handleClick = () => {
    dispatch(toggle());
  };

  return (
    <div className="w-full bg-[#fff] sticky main-nav top-0 shadow-xl z-[2]">
      <Container>
        <div className="w-full py-1 flex justify-between items-center">
          <div>
            <NavLink to="/">
              <img
                src="https://www.fablestreet.com/logo.svg"
                className="w-[150px]"
                alt=""
              />
            </NavLink>
          </div>

          <div className="mainNav">
            <Navlinks />
          </div>

          <div className="hidden md:block">
            <form
              action="#"
              className="border border-gray-300 rounded flex items-center px-2"
            >
              <IoMdSearch className="text-[22px] header-main-btn  cursor-pointer" />
              <input
                type="search"
                className="p-2  font-[400] outline-none text-[16px]"
                placeholder="Search"
              />
            </form>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative">
              <IoCartOutline className="cursor-pointer text-[22px]" />
              <span className="absolute bg-gray-700 rounded-[100px] text-[12px] w-[20px] h-[20px] flex justify-center items-center top-[-17px] right-[-5px] text-white">
                10
              </span>
            </div>
            <FaRegHeart className="text-[20px]" />
            <span className="">
              <NavLink to={"/login"}>
                <FaRegUser className="text-[18px]" />
              </NavLink>
            </span>

            <GiHamburgerMenu
              onClick={handleClick}
              className="text-[25px] hidden menu-toggle-btn cursor-pointer"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainNav;
