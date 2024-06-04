import React, { useState } from "react";
import Container from "../../utils/Container";
import Casuals from "./occasions-tabs-container/Casuals";
import Formals from "./occasions-tabs-container/Formals";
import EveningWear from "./occasions-tabs-container/EveningWear";

const ShopByOcasion = () => {
  const [tabs, setTabs] = useState("formals");

  return (
    <div className="w-full my-[50px]">
      <Container>
        <div className="w-full text-center">
          <p className="text-[22px] font-[500]">Shop by Occasion</p>
          <div className="border-b inline-block  border-gray-400 mt-5">
            <button
              className={`px-4 py-2 text-[14px] ${
                tabs == "casuals" ? "border-b-2 border-gray-800 " : null
              }`}
              onClick={() => {
                setTabs("casuals");
              }}
            >
              CASUALS
            </button>
            <button
              className={`px-4 py-2 mx-5 text-[14px] ${
                tabs == "formals" ? "border-b-2 border-gray-800 " : null
              }`}
              onClick={() => {
                setTabs("formals");
              }}
            >
              FORMALS
            </button>
            <button
              className={`px-4 py-2 text-[14px] ${
                tabs == "eveningWear" ? "border-b-2 border-gray-800 " : null
              }`}
              onClick={() => {
                setTabs("eveningWear");
              }}
            >
              EVENING WEAR
            </button>
          </div>
        </div>

        {/* tabs container */}
        {tabs == "casuals" && <Casuals />}
        {tabs == "formals" && <Formals />}
        {tabs == "eveningWear" && <EveningWear />}

        <button className="bg-transparent block   rounded text-gray-900  border-2 border-gray-900 mt-5 hover:bg-gray-900 hover:text-[#fff] transition  py-2 px-5  text-[14px] font-[500] my-0 mx-auto">
          View All
        </button>
      </Container>
    </div>
  );
};

export default ShopByOcasion;
