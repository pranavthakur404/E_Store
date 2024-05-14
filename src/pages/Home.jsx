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
import LargeTestimonial from "../component/home/LargeTestimonial";
import About5 from "../component/home/About5";

const Home = () => {
  return (
    <>
      <Banner />
      <BrandLogos />
      <AboutSection />
      <Container>
        <ProductListings
          title={"Our best-selling vegan supplements"}
          subTitle="Discover our delicious gummies & powder drinks to help you feel better"
        />
      </Container>
      <CategorySection />
      <About2 />
      <About3 />
      <LargeTestimonial />
      <About4 />
      <Container>
        <ProductListings title={"New Arrivals"} />
      </Container>
      <About5 />
      {/* <TestimonialSection /> */}
      <TwoCategorySection />
      <FeatureSection />
      <ContactBanner />
    </>
  );
};

export default Home;
