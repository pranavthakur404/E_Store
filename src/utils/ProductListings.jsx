import React from "react";
import ProductCard from "./ProductCard";

const ProductListings = ({ title, products }) => {
  return (
    <div className="w-full my-[100px]">
      <div className="flex justify-between">
        <p className="text-[25px] font-[500]">{title}</p>
        <p className="content underline decoration-[#f6aa28] cursor-pointer">
          VIEW ALL {title}
        </p>
      </div>
      <div className="mt-[50px] best-seller-product-listing">
        {producs.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default ProductListings;

const producs = [
  {
    id: 1,
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019-400x400.jpg",
    title: "Men's Classic Blue",
    rating: "3",
    price: "79.90",
    offerPrice: "69.00",
  },
  {
    id: 2,
    img: "https://myrite.co/cdn/shop/files/GutHealthStarterpack_15_460x.jpg?v=1715076901",
    title: "Men's Classic Blue",
    rating: "3",
    price: "79.90",
    offerPrice: "69.00",
  },
  {
    id: 3,
    img: "https://myrite.co/cdn/shop/files/Rite-Gummies-Balance-Fruit_460x.jpg?v=1706354271",
    title: "Men's Classic Blue",
    rating: "3",
    price: "79.90",
    offerPrice: "69.00",
  },
];
