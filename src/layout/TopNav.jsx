import React from "react";

import SocialLinks from "../utils/SocialLinks";
import Container from "../utils/Container";
import Language from "./Language";

const TopNav = () => {
  return (
    <div className="w-full primary-bg">
      <Container>
        <div className="w-full flex justify-between text-white items-center py-2">
          <div>
            <SocialLinks />
          </div>
          {/* notification */}
          <div>
            <p className="content font-bold">
              New : Here ! You can write your notification alert.
            </p>
          </div>
          <div>
            <Language />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
