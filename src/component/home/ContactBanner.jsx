import React from "react";

import Container from "../../utils/Container";
import Button from "../../utils/Button";

const ContactBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-slate-50 to-slate-300">
      <Container>
        <div className="w-full flex text-center justify-center items-center py-[7%] ">
          <div>
            <h3 className="text-[25px] sm:text-[35px] md:text-[45px] font-[700] text-[#262b2c]">
              Get In Touch
            </h3>
            <form action="#" className="flex items-center">
              <input
                type="text"
                class="w-full py-[6px] sm:py-[10px] px-4 rounded-l-lg bg-white border border-gray-300 placeholder-gray-500 focus:outline-none  focus:ring-blue-500 my-5"
                placeholder="Enter your Email..."
              />
              <button className="secondary-background-color text-[#fff] text-[12px] py-[9px] sm:py-[13px] px-5">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactBanner;
