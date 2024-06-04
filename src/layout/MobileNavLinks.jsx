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
        <div className={`navChild ${show ? "" : "hideNavChild"}`}>
          {children &&
            children.map((childLinks) => {
              return (
                <p className="text-[14px]">
                  <NavLink to={childLinks.to} onClick={handleClick}>
                    {childLinks.title}
                  </NavLink>
                </p>
              );
            })}
        </div>
      )}
    </p>
  );
};

export default MobileNavLinks;
