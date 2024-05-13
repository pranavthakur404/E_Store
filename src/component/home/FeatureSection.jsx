import React from "react";
import { FaLock, FaTruck } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

import Container from "../../utils/Container";

const FeatureSection = () => {
  return (
    <Container>
      <div className="w-full flex flex-wrap justify-center py-8 border-b border-gray-200">
        <div className="w-full sm:w-[50%] md:w-[33%] gap-4 flex justify-center items-center p-5">
          <FaLock className="text-[18px]"></FaLock>
          <p className="font-[500]">Secure Payment</p>
        </div>

        <div className="w-full sm:w-[50%] md:w-[33%] gap-4 flex justify-center items-center p-5">
          <FaTruck className="text-[18px]" />
          <p className="font-[500]">Express Shipping</p>
        </div>

        <div className="w-full sm:w-[50%] md:w-[33%] gap-4 flex justify-center items-center p-5">
          <GiReturnArrow className="text-[18px]" />
          <p className="font-[500]">Free Return</p>
        </div>
      </div>
    </Container>
  );
};

export default FeatureSection;
