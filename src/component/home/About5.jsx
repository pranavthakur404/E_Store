import React from "react";

import Container from "../../utils/Container";

const About5 = () => {
  return (
    <div className="my-[100px]">
      <Container>
        <div className="w-full flex flex-wrap justify-between">
          <div className="w-[100%] md:w-[48%] object-cover">
            <img
              src="https://myrite.co/cdn/shop/files/gummies_and_gut_health_720x.jpg?v=1711524535"
              className="w-[100%] md:w-[80%] mb-10 md:mb-0 my-0 mx-auto"
              alt=""
            />
          </div>
          <div className="w-[100%] md:w-[48%] flex flex-col justify-center">
            <h3 className="section-heading secondary-text-color font-[500] my-2">
              Build your bundle and save up to 20% OFF
            </h3>
            <p className="secondary-text-color">
              rite. is on mission to simplify your wellness & beauty routine
              with clean, natural & delicious functional supplements.
              <br /> Tell us about yourself and we will help you find the right
              products!
            </p>
            <button className="bg-transparent w-[150px] border-2 border-[#000] mt-5 hover:bg-[#000] hover:text-[#fff] transition px-3 py-2 rounded text-[14px] font-[500]">
              Shop Know
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About5;
