import React from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../about/ContactForm";

import Container from "../../utils/Container";

const ContactSection = () => {
  return (
    <Container>
      <div className="w-full flex flex-wrap justify-between my-[100px]">
        <div className="w-[100%] md:w-[48%]">
          <h2 className="text-[26px] sm:text-[30px] font-bold text-[#262b2c]">
            Get In Touch
          </h2>
          <p className="mt-3 text-[14px] sm:text-[16px]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <ul className="mt-5">
            <li className="flex my-3 items-center gap-2 text-[14px] sm:text-[16px]">
              <FaPhoneAlt /> +1650-243-0000
            </li>
            <li className="flex my-3 items-center gap-2 text-[14px] sm:text-[16px]">
              <FaEnvelope /> info@yourcompany.com
            </li>
            <li className="flex my-3 items-center gap-2 text-[14px] sm:text-[16px]">
              <FaMapMarkerAlt />
              North Melbourne VIC 3051, Australia
            </li>
          </ul>
        </div>
        <div className="w-[100%] md:w-[48%] mt-5 md:mt-0">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
