import React from "react";

import Container from "./Container";

const RightContent = ({ img, title, para }) => {
  return (
    <div className="mt-[50px]">
      <Container>
        <div className="w-full flex flex-wrap justify-between">
          <div className="w-[100%] md:w-[48%] object-cover">
            <img
              src={img}
              className="w-[100%] md:w-[80%] mb-10 md:mb-0 my-0 mx-auto"
              alt=""
            />
          </div>
          <div className="w-[100%] md:w-[48%] flex flex-col justify-center">
            <h3 className="section-heading font-[500] my-2 text-[#262b2c]">
              {title}
            </h3>
            <p className="secondary-text-color">{para}</p>
            {/* <button className="bg-[#fdbb52] hover:bg-[#353447] hover:text-[#fff] transition px-3 py-2 rounded text-[14px] mt-5 font-[500] w-[150px]">
            Read More
          </button> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RightContent;
