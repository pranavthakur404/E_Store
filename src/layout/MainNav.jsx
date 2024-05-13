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
        <div className="w-full py-1 flex justify-between items-center">
          <div>
            {/* <img
              src="https://e7.pngegg.com/pngimages/531/692/png-clipart-logo-graphic-design-art-online-shop-angle-text.png"
              className="w-[120px]"
              alt=""
            /> */}
            <p className="text-[35px] font-bold">
              <span className="text-[#2d3a4b]">E-STORE</span>
            </p>
          </div>

          <div className="mainNav">
            <Navlinks />
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <ImCart className="cursor-pointer" />
              <span className="absolute top-[-17px] right-[0px]"></span>
            </div>
            <div>
              <IoMdSearch className="text-[20px] header-main-btn  cursor-pointer" />
            </div>
            <span className="">
              <NavLink to={"/login"}>
                <FaUser />
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
