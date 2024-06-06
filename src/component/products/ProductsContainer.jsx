import React, { useEffect } from "react";
import { useState } from "react";

import ProductCard from "../../utils/ProductCard";

const ProductsContainer = () => {
  const [filter, setFilterBy] = useState("");

  return (
    <div className="w-full">
      <div className="w-full flex justify-end">
        <div className="w-[150px]">
          <label
            htmlFor="sortBy"
            className="text-sm font-medium text-gray-700 "
          >
            Sort By:
          </label>
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            value={filter}
            onChange={(e) => {
              setFilterBy(e.target.value);
            }}
          >
            <option value="featured" selected>
              Featured
            </option>
            <option value="bestSelling">Best Selling</option>
            <option value="lowToHigh">Price, low to high</option>
            <option value="newestFirst">Newest first</option>
          </select>
        </div>
      </div>

      {/* product list */}
      <div className="w-full main-product-listing-container py-5">
        {data &&
          data.map((list) => {
            return <ProductCard key={list.id} {...list} />;
          })}
      </div>

      {/* pagination */}
      <div class="flex justify-center mt-10">
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            href="#"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            1
          </a>
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 border rounded-r-md border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </nav>
      </div>
    </div>
  );
};

export default ProductsContainer;

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
