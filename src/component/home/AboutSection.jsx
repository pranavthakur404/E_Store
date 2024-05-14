import React from "react";

import Container from "../../utils/Container";
import Button from "../../utils/Button";

const AboutSection = () => {
  return (
    <div className="mt-[50px]">
      <Container>
        <div className="w-full flex flex-wrap justify-between">
          <div className="w-[100%] md:w-[48%] object-cover">
            <img
              src="https://b1853233.smushcdn.com/1853233/wp-content/uploads/2020/06/eCommerce-product-photography-hero-4-1.jpg?lossy=0&strip=0&webp=1"
              className="w-[100%] md:w-[80%] mb-10 md:mb-0 my-0 mx-auto"
              alt=""
            />
          </div>
          <div className="w-[100%] md:w-[48%] flex flex-col justify-center secondary-text-color">
            <h5 className="primary-text-color ">About Us</h5>
            <h3 className="section-heading font-[500] my-2">
              Selected materials designed for comfort and sustainability
            </h3>
            <p className="secondary-text-color">
              Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget
              auctor nec sed elit nunc, magna non urna amet ac neque ut quam
              enim pretium risus gravida ullamcorper adipiscing at ut magna.
            </p>
            <button className="bg-transparent w-[150px] border-2 border-[#000] mt-5 hover:bg-[#000] hover:text-[#fff] transition px-3 py-2 rounded text-[14px] font-[500]">
              Read More
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
