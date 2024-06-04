import React from "react";
import Container from "../../utils/Container";
import ProductCard from "../../utils/ProductCard";

const BestSeller = () => {
  return (
    <div className="w-full my-[50px]">
      <Container>
        <div className="w-full text-center">
          <p className="text-[22px] font-[500]">Out Bestseller</p>
          <p className="text-[16px] text-gray-500">
            Don't miss out Top Selling Styles
          </p>
        </div>
        <div className="w-full  best-seller-productContainer  mt-10">
          {data.map((list) => {
            return <ProductCard key={list.id} {...list} width={100} />;
          })}
        </div>
        <button className="bg-transparent block  w-[250px] rounded-xl text-gray-900  border-2 border-gray-900 mt-5 hover:bg-gray-900 hover:text-[#fff] transition px-3 py-2  text-[14px] font-[500] my-0 mx-auto">
          Shop All Product
        </button>
      </Container>
    </div>
  );
};

export default BestSeller;

const data = [
  {
    id: 1,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/files/4_730be9b8-c9c4-439c-8074-4a40005984ff.jpg?v=1711972339&width=360",
  },
  {
    id: 2,
    title: "Oversized Cargo Joggers",
    price: 999,
    total: 1999,
    offerPrice: 1000,
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/files/authentic_9efd4bb2-6dda-4b4b-81a7-0eee06a3e9e4.jpg?v=1715675835&width=360",
  },
  {
    id: 3,
    title: "Boyfriend Authentic Classic Fit..",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/files/WhatsAppImage2024-02-02at3.34.16PM_165fe357-5ac0-46d6-b3bf-fa69163561de_1_1.jpg?v=1713533485&width=360",
  },
  {
    id: 4,
    title: "Believe in Yourself Oversized T...",
    price: 599,
    total: 999,
    offerPrice: 400,
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/products/Roger-3.jpg?v=1666016205&width=360",
  },
  {
    id: 5,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/files/periwinkle_51d72746-a271-4276-92f0-5a34e94c009a.jpg?v=1716012900&width=360",
  },
  {
    id: 6,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/files/WhatsAppImage2024-01-05at10.51.50AM_8_7_1.jpg?v=1713533149&width=360",
  },
  {
    id: 7,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-16at12.52.36PM_7_e9894328-6392-4ef9-8e2d-b6541c01e07e.jpg?v=1715856098&width=360",
  },
  {
    id: 8,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-16at12.52.36PM_7_e9894328-6392-4ef9-8e2d-b6541c01e07e.jpg?v=1715856098&width=360",
  },
];
