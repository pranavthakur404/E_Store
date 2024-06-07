import React from "react";
import { useState } from "react";

import Container from "../utils/Container";
import NavSection from "../component/account/NavSection";
import RightContainer from "../component/account/RightContainer";

const Account = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <Container>
      <div className="md:w-[80%] flex justify-between  my-0 mx-auto py-10">
        {/* left navigation */}
        <div className="w-[30%] relative">
          <NavSection activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* right account defailts */}
        <div className="w-[68%]">
          <RightContainer activeTab={activeTab} />
        </div>
      </div>
    </Container>
  );
};

export default Account;
