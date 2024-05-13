import React from "react";
import InnerBanners from "../utils/InnerBanners";
import ContactSection from "../component/contact/ContactSection";

const ContactUs = () => {
  return (
    <div className="w-full">
      <InnerBanners text={"Contact Us"} />
      <ContactSection />
    </div>
  );
};

export default ContactUs;
