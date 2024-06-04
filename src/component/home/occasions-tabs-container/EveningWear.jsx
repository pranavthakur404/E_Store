import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../../../utils/ProductCard";

const EveningWear = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full mt-10">
      <Carousel responsive={responsive}>
        {data.map((list) => {
          return <ProductCard key={list.id} width={100} {...list} />;
        })}
      </Carousel>
    </div>
  );
};

export default EveningWear;

const data = [
  {
    id: 1,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FFSKNTP1232BLST_2.jpg%3Fv%3D1710149795&w=1920&q=75",
  },
  {
    id: 2,
    title: "Oversized Cargo Joggers",
    price: 999,
    total: 1999,
    offerPrice: 1000,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FCM006BRWN_2.jpg%3Fv%3D1700304731&w=1920&q=75",
  },
  {
    id: 3,
    title: "Boyfriend Authentic Classic Fit..",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FTP500BKPR_2.jpg%3Fv%3D1694755021&w=1920&q=75",
  },
  {
    id: 4,
    title: "Believe in Yourself Oversized T...",
    price: 599,
    total: 999,
    offerPrice: 400,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FSH175RYBL_2.jpg%3Fv%3D1684571278&w=1920&q=75",
  },
  {
    id: 5,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FFSDR1105BTGR_2.jpg%3Fv%3D1712578935&w=1920&q=75",
  },
  {
    id: 6,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FFSDR1062BLUE_2.jpg%3Fv%3D1704259343&w=1920&q=75",
  },
  {
    id: 7,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FTR178BLAC_2.jpg%3Fv%3D1700545028&w=1920&q=75",
  },
  {
    id: 8,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FDR823WHBK_2.jpg%3Fv%3D1695884394&w=1920&q=75",
  },
  {
    id: 9,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FFSDR1096BLAC_2.jpg%3Fv%3D1700544932&w=1920&q=75",
  },
];
