import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const MobileNavLinks = ({ title, to, children, handleClick }) => {
  const [show, setShow] = useState(false);
  return (
    <p className="text-[18px] font-[500] my-3">
      <span className="w-full flex justify-between items-center">
        <NavLink to={to} onClick={handleClick}>
          {title}
        </NavLink>
        {children && (
          <FaAngleDown
            className="cursor-pointer"
            onClick={() => {
              setShow(() => {
                return !show;
              });
            }}
          />
        )}
      </span>
      {children && (
        <span className={`navChild ${show ? "" : "hideNavChild"} block`}>
          {children &&
            children.map((childLinks, index) => {
              return (
                <span key={index} className="text-[14px] my-3 font-[400] block">
                  <NavLink to={childLinks.to} onClick={handleClick}>
                    {childLinks.title}
                  </NavLink>
                </span>
              );
            })}
        </span>
      )}
    </p>
  );
};

export default MobileNavLinks;
