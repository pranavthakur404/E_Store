import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks = () => {
  const navItems = [
    {
      id: 1,
      title: "Home",
      to: "/",
    },
    {
      id: 2,
      title: "Category",
      to: "/",
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
    {
      id: 5,
      title: "Account",
      to: "/account",
    },
  ];

  return (
    <nav>
      <ul className="flex gap-10 items-center">
        {navItems.map((items) => {
          return (
            <li key={items.id}>
              <NavLink to={items.to} className="content main-navigation-links">
                {items.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navlinks;
