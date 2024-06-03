import React from "react";

import Banner from "../component/home/Banner";
import AboutSection from "../component/home/AboutSection";
import ProductListings from "../utils/ProductListings";
import Container from "../utils/Container";
import CategorySection from "../component/home/CategorySection";
import TwoCategorySection from "../component/home/TwoCategorySection";
import FeatureSection from "../component/home/FeatureSection";
import ContactBanner from "../component/home/ContactBanner";
import About5 from "../component/home/About5";
import BestSeller from "../component/home/BestSeller";

const Home = () => {
  return (
    <>
      <Banner />
      <CategorySection />
      <AboutSection />
      <BestSeller />

      {/* Below to be removed */}
      <About5 />
      <TwoCategorySection />
      <FeatureSection />
      <ContactBanner />
    </>
  );
};

export default Home;
