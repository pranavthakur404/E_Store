import React from "react";

import MainNav from "./MainNav";
import Overlay from "../utils/Overlay";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div>
      <MainNav />
      <MobileNav></MobileNav>
      <Overlay />
    </div>
  );
};

export default Header;
