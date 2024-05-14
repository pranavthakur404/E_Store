import React from "react";
import { ImCart } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

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
    <div className="w-full bg-[#fff]">
      <Container>
        <div className="w-full py-4 flex justify-between items-center">
          <div className="mainNav">
            <Navlinks />
          </div>

          <div>
            <p className="font-bold main-logo">
              <span className="text-[#2d3a4b]">E-STORE</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="">
              <NavLink to={"/login"}>
                <FaUser className="text-[18px]" />
              </NavLink>
            </span>
            <div>
              <IoMdSearch className="text-[22px] header-main-btn  cursor-pointer" />
            </div>
            <div className="relative">
              <ImCart className="cursor-pointer text-[18px]" />
              <span className="absolute top-[-17px] right-[0px]"></span>
            </div>

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
