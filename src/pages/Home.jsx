import React from "react";

import Banner from "../component/home/Banner";
import CategorySection from "../component/home/CategorySection";

import BestSeller from "../component/home/BestSeller";
import ShopByOcasion from "../component/home/ShopByOcasion";
import BottomOfferBanner from "../component/home/BottomOfferBanner";
import MainCategorySection from "../component/home/MainCategorySection";
import NewArrivalSection from "../component/home/NewArrivalSection";

const Home = () => {
  return (
    <>
      <Banner />
      <CategorySection />
      <NewArrivalSection />
      <BestSeller />
      <ShopByOcasion />
      <BottomOfferBanner />
      <MainCategorySection />
    </>
  );
};

export default Home;
