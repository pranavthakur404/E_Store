import React from "react";

import Banner from "../component/home/Banner";
import BrandLogos from "../component/home/BrandLogos";
import AboutSection from "../component/home/AboutSection";
import ProductListings from "../utils/ProductListings";
import Container from "../utils/Container";
import CategorySection from "../component/home/CategorySection";
import TestimonialSection from "../component/home/TestimonialSection";
import TwoCategorySection from "../component/home/TwoCategorySection";
import FeatureSection from "../component/home/FeatureSection";
import ContactBanner from "../component/home/ContactBanner";
import About2 from "../component/home/About2";
import About3 from "../component/home/About3";
import About4 from "../component/home/About4";

const Home = () => {
  return (
    <>
      <Banner />
      <BrandLogos />
      <AboutSection />
      <Container>
        <ProductListings title={"Best Seller"} />
      </Container>
      <CategorySection />

      <Container>
        <ProductListings title={"New Arrivals"} />
      </Container>
      <About3 />
      <About2 />
      <ContactBanner />
      <About4 />

      <TestimonialSection />
      <TwoCategorySection />
      <FeatureSection />
    </>
  );
};

export default Home;
