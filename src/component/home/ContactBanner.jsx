import React from "react";

import Container from "../../utils/Container";
import Button from "../../utils/Button";

const ContactBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-slate-50 to-slate-300">
      <Container>
        <div className="w-full flex text-center justify-center items-center py-[7%] ">
          <div>
            <h3 className="text-[45px] font-[700] text-[#262b2c]">
              Get In Touch
            </h3>
            <input
              type="text"
              class="w-full py-2 px-4 rounded-lg bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 my-5"
              placeholder="Enter your Email..."
            />
            <Button text={"Submit"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactBanner;
