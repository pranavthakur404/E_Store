import React from "react";

import Overlay from "../utils/Overlay";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div>
      <MobileNav></MobileNav>
      <Overlay />
    </div>
  );
};

export default Header;
