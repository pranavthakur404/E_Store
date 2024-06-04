import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../../../utils/ProductCard";

const Formals = () => {
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

export default Formals;

const data = [
  {
    id: 1,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FTP999NAVY_2.jpg%3Fv%3D1704259582&w=1920&q=75",
  },
  {
    id: 2,
    title: "Oversized Cargo Joggers",
    price: 999,
    total: 1999,
    offerPrice: 1000,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FTR188FCSH_1.jpg%3Fv%3D1694857134&w=1920&q=75",
  },
  {
    id: 3,
    title: "Boyfriend Authentic Classic Fit..",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Fproducts%2Fsh11wh-z1.jpg%3Fv%3D1613125941&w=1920&q=75",
  },
  {
    id: 4,
    title: "Believe in Yourself Oversized T...",
    price: 599,
    total: 999,
    offerPrice: 400,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Fproducts%2Fstylish_jacket_with_pockets_b2.jpg%3Fv%3D1668667458&w=1920&q=75",
  },
  {
    id: 5,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FFSTP1018WHBK_2.jpg%3Fv%3D1691753142&w=1920&q=75",
  },
  {
    id: 6,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FFSJK189VERM_1.jpg%3Fv%3D1709018054&w=1920&q=75",
  },
  {
    id: 7,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Fproducts%2FTR037BLAC_M3.jpg%3Fv%3D1690362854&w=1920&q=75",
  },
  {
    id: 8,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FFSDR1057RUST_2.jpg%3Fv%3D1694167568&w=1920&q=75",
  },
  {
    id: 9,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FFSTP1011WHBK_2.jpg%3Fv%3D1691753591&w=1920&q=75",
  },
];
