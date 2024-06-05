import React from "react";
import Container from "../utils/Container";
import ImageGallary from "../component/productInner/ImageGallary";
import ProductInfo from "../component/productInner/ProductInfo";
import RelatedProducts from "../component/productInner/RelatedProducts";

const ProductInner = () => {
  return (
    <Container>
      <div className="w-full flex flex-wrap sm:flex-nowrap productInnerContainer justify-between sm:justify-evenly sm:w-[100%] md:w-[80%] my-0 mx-auto py-10">
        <div className="w-full sm:w-[40%]">
          <ImageGallary />
        </div>
        <div className="w-[100%] sm:w-[50%] pl-3">
          <ProductInfo />
        </div>
      </div>
      {/* more like this */}
      <RelatedProducts />
    </Container>
  );
};

export default ProductInner;
