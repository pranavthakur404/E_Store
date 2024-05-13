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
              src="https://themewagon.github.io/ultras/images/single-image1.jpg"
              className="w-[100%] md:w-[80%] mb-10 md:mb-0 my-0 mx-auto"
              alt=""
            />
          </div>
          <div className="w-[100%] md:w-[48%] flex flex-col justify-center">
            <h3 className="section-heading font-[500] my-2 text-[#262b2c]">
              How Was Our Store Started?
            </h3>
            <p className="secondary-text-color">
              Risus augue curabitur diam senectus congue velit et. Sed vitae
              metus nibh sit era. Nulla adipiscing pharetra pellentesque
              maecenas odio eros at. Et libero vulputate amet duis erat volutpat
              vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing
              pharetra pellentesque maecenas odio eros at. Sed vitae metus nibh
              sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros
              at. Et libero vulputate amet duis erat volutpat vitae eget. Quam
              libero etiam et in ac at quis. Risus augue curabitur diam senectus
              congue velit et.
            </p>
            {/* <button className="bg-[#fdbb52] hover:bg-[#353447] hover:text-[#fff] transition px-3 py-2 rounded text-[14px] mt-5 font-[500] w-[150px]">
              Read More
            </button> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
