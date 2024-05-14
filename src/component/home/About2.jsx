import React from "react";

import Container from "../../utils/Container";

const About2 = () => {
  return (
    <Container>
      <div className="w-full flex flex-wrap justify-between my-[100px]">
        <div className="w-full md:w-[50%] flex justify-between md:block  relative">
          <img
            src="https://myrite.co/cdn/shop/files/people_gut_health_360x.jpg?v=1711524519"
            alt=""
            className="w-[50%] md:w-[300px] md:absolute left-5 z-0"
          />
          <img
            src="https://myrite.co/cdn/shop/files/gummies_and_gut_health_360x.jpg?v=1711524535"
            alt=""
            className="w-[50%] md:w-[300px] md:absolute right-5 bottom-0 z-[-1]"
          />
        </div>
        <div className="w-full md:w-[50%] p-2 md:p-5">
          <h3 className="text-[24px] font-[700]">
            Everything you need. Nothing you don't.
          </h3>
          <p className="text-[14px] mt-3 font-[500]">The rite way:</p>
          <ul className="text-[13px] list-disc ml-6 leading-7">
            <li>Vegan, 100% Halal</li>
            <li>Natural colours & flavours</li>
            <li>Sugar-Free & Gluten-Free</li>
            <li>Made in France</li>
            <li>Plant-based ingredients</li>
          </ul>
          <p className="text-[14px] mt-3 font-[500]">The wrong way:</p>
          <ul className="text-[13px] list-disc ml-6 leading-7">
            <li>Gelatin</li>
            <li>Artificial colours & flavours</li>
            <li>Fillers</li>
            <li>Coated sugar</li>
            <li>Poor quality ingredients</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default About2;
