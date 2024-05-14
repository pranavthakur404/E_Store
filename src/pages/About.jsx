import React from "react";

import InnerBanners from "../utils/InnerBanners";
import Feature from "../component/about/Feature";
import AboutSection from "../component/about/AboutSection";
import TeamSection from "../component/about/TeamSection";
import BlogSection from "../component/about/BlogSection";

const About = () => {
  return (
    <div className="full">
      <InnerBanners
        text={"About Us"}
        subText={
          "We’re a team of people passionate about wellness & beauty based in the UAE, who believe that beauty and wellness start from within. We think it should be easy, fun & delicious to take care of ourselves!"
        }
      />
      <AboutSection />
      <Feature />
      <TeamSection />
      <BlogSection />
    </div>
  );
};

export default About;
