import React from "react";

import InnerBanners from "../utils/InnerBanners";
import Feature from "../component/about/Feature";
import AboutSection from "../component/about/AboutSection";
import TeamSection from "../component/about/TeamSection";
import BlogSection from "../component/about/BlogSection";

const About = () => {
  return (
    <div className="full">
      <InnerBanners text={"About Us"} />
      <AboutSection />
      <Feature />
      <TeamSection />

      <BlogSection />
    </div>
  );
};

export default About;
