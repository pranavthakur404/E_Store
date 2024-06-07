import React, { useEffect, useState } from "react";
import { LiaUserClockSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { BsHandbagFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearchengin } from "react-icons/fa6";
import { GiThreeFriends } from "react-icons/gi";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";

const NavSection = ({ activeTab, setActiveTab }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="w-full shadow-xl rounded-3xl pb-3">
      {/* top section */}
      <div className="top-section flex gap-5 px-5 py-5 shadow-xl rounded-b-[25px]">
        <span className="w-[50px] h-[50px] bg-gray-400 text-[20px] font-[700] text-gray-900 flex justify-center items-center rounded-full">
          PT
        </span>
        <div className="info">
          <p className="text-[18px] text-gray-900 font-[600] space-x-2 tracking-wide">
            Pranav Thakur
          </p>
          <p className="text-[13px] flex items-center gap-2">
            <LiaUserClockSolid className="text-[16px]" />
            {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}{" "}
            {time.getHours() < 12 ? "AM" : "PM"}
          </p>
        </div>
      </div>

      {/* Nav lists */}
      <div
        className={`w-full flex py-1 pl-5 my-1 items-center gap-3  mt-5 cursor-pointer ${
          activeTab == "profile"
            ? "border-l-4 border-gray-800 font-[700]"
            : null
        }`}
        onClick={() => {
          setActiveTab("profile");
        }}
      >
        <FaRegUser className="text-[14px]" />
        My Profile
      </div>

      <div
        className={`w-full flex justify-between items-center py-1 pl-5 my-1 pr-3 gap-3 cursor-pointer ${
          activeTab == "address"
            ? "border-l-4 border-gray-800 font-[700]"
            : null
        }`}
        onClick={() => {
          setActiveTab("address");
        }}
      >
        <span className="flex items-center gap-3">
          <FiMapPin className="text-[14px]" />
          Delivery Address
        </span>
        <span className="text-[13px] bg-gray-400 font-[700] w-[20px] h-[20px] flex justify-center items-center t rounded">
          0
        </span>
      </div>

      <hr className="bg-gray-200 h-[1px] my-3" />

      <div
        className={`w-full flex justify-between items-center py-2 pl-5 my-1 pr-3 gap-3  cursor-pointer ${
          activeTab == "order" ? "border-l-4 border-gray-800 font-[700]" : null
        }`}
        onClick={() => {
          setActiveTab("order");
        }}
      >
        <span className="flex items-center gap-3">
          <BsHandbagFill className="text-[14px]" />
          My Order
        </span>
        <span className="text-[13px] bg-gray-400 font-[700] w-[20px] h-[20px] flex justify-center items-center t rounded">
          0
        </span>
      </div>

      <hr className="bg-gray-200 h-[1px] my-3" />

      <div
        className={`w-full flex justify-between items-center py-1 pl-5 my-1  pr-3 gap-3 cursor-pointer ${
          activeTab == "wishList"
            ? "border-l-4 border-gray-800 font-[700]"
            : null
        }`}
        onClick={() => {
          setActiveTab("wishList");
        }}
      >
        <span className="flex items-center gap-3">
          <FaRegHeart className="text-[14px]" />
          My Wishlist
        </span>
        <span className="text-[13px] bg-gray-400 font-[700] w-[20px] h-[20px] flex justify-center items-center t rounded">
          0
        </span>
      </div>

      <div
        className={`w-full flex justify-between items-center py-1 pl-5 my-1 pr-3 gap-3 cursor-pointer ${
          activeTab == "cart" ? "border-l-4 border-gray-800 font-[700]" : null
        }`}
        onClick={() => {
          setActiveTab("cart");
        }}
      >
        <span className="flex items-center gap-3">
          <FiShoppingCart className="text-[14px]" />
          My Cart
        </span>
        <span className="text-[13px] bg-gray-400 font-[700] w-[20px] h-[20px] flex justify-center items-center t rounded">
          0
        </span>
      </div>

      <div
        className={`w-full flex py-1 pl-5 my-1 items-center gap-3 cursor-pointer ${
          activeTab == "recentlyViewed"
            ? "border-l-4 border-gray-800 font-[700]"
            : null
        }`}
        onClick={() => {
          setActiveTab("recentlyViewed");
        }}
      >
        <FaSearchengin className="text-[14px]" />
        Recently Viewed
      </div>

      <hr className="bg-gray-200 h-[1px] my-3" />

      <div
        className={`w-full flex py-1 pl-5 my-1 items-center gap-3 cursor-pointer ${
          activeTab == "refer" ? "border-l-4 border-gray-800 font-[700]" : null
        }`}
        onClick={() => {
          setActiveTab("refer");
        }}
      >
        <GiThreeFriends className="text-[14px]" />
        Refer Friend
      </div>

      <hr className="bg-gray-200 h-[1px] my-3" />

      <div
        className={`w-full flex py-1 pl-5 my-1 items-center gap-3 cursor-pointer ${
          activeTab == "changePassword"
            ? "border-l-4 border-gray-800 font-[700]"
            : null
        }`}
        onClick={() => {
          setActiveTab("changePassword");
        }}
      >
        <RiLockPasswordFill className="text-[14px]" />
        Change Password
      </div>

      <div className="w-full flex py-1 pl-5 my-1 items-center gap-3 mt-6 cursor-pointer">
        <BiLogOutCircle className="text-[20px] text-red-900" />
        Logout
      </div>
    </div>
  );
};

export default NavSection;
