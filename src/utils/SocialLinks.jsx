import React from "react";
import { FaYoutube, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-3 justify-center sm:justify-start">
      <FaFacebookF className="cursor-pointer" />
      <FaYoutube className="cursor-pointer" />
      <FaTwitter className="cursor-pointer" />
      <FaInstagram className="cursor-pointer" />
    </div>
  );
};

export default SocialLinks;
