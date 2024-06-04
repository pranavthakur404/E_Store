import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../../../utils/ProductCard";

const Casuals = () => {
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
      <Carousel
        responsive={responsive}
        beforeChange={(next) => console.log(next)}
        afterChange={(next) => console.log(next)}
      >
        {data.map((list) => {
          return <ProductCard key={list.id} width={100} {...list} />;
        })}
      </Carousel>
    </div>
  );
};

export default Casuals;

const data = [
  {
    id: 1,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Fproducts%2Ftp174must-l2.jpg%3Fv%3D1613095590&w=1920&q=75",
  },
  {
    id: 2,
    title: "Oversized Cargo Joggers",
    price: 999,
    total: 1999,
    offerPrice: 1000,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Fproducts%2FTR144OLIV_M2_a151302f-b177-4571-bccb-7c69799cab55.jpg%3Fv%3D1679043519&w=1920&q=75",
  },
  {
    id: 3,
    title: "Boyfriend Authentic Classic Fit..",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FSH113GREN_2.jpg%3Fv%3D1686660106&w=1920&q=75",
  },
  {
    id: 4,
    title: "Believe in Yourself Oversized T...",
    price: 599,
    total: 999,
    offerPrice: 400,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FKNTS03MUST_2.jpg%3Fv%3D1708679021&w=1920&q=75",
  },
  {
    id: 5,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FFSDR1180BEGE_2.jpg%3Fv%3D1709624421&w=1920&q=75",
  },
  {
    id: 6,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FFSCO313VERM_2.jpg%3Fv%3D1706091099&w=1920&q=75",
  },
  {
    id: 7,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Fproducts%2Fboat_neck_houndstooth_print_top_z1_41df39e9-30b9-4f82-a007-859dc5b2b622.jpg%3Fv%3D1613087932&w=1920&q=75",
  },
  {
    id: 8,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FKNTR221BKST_2.jpg%3Fv%3D1704953345&w=1920&q=75",
  },
  {
    id: 9,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FJK135WHCK_2.jpg%3Fv%3D1706782237&w=1920&q=75",
  },
];
