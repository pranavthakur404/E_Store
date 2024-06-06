import React from "react";
import FilterAccordion from "../component/products/FilterAccordion";
import Container from "../utils/Container";
import ProductsContainer from "../component/products/ProductsContainer";
import InnerBanners from "../utils/InnerBanners";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams] = useSearchParams();

  return (
    <Container>
      <InnerBanners text={searchParams.get("type") || "All"} />
      <div className="flex justify-between flex-wrap md:flex-nowrap my-[50px] mt-0 relative">
        {/* filter */}
        <div className="relative  w-[100%] md:w-[20%] pb-[50px] md:pb-[150px]">
          <div className="sticky top-[100px] ">
            <p className="text-[20px] mb-3">Filter</p>
            <FilterAccordion />
          </div>
        </div>

        {/* products */}
        <div className="w-[100%] md:w-[80%] px-2 md:px-5">
          <ProductsContainer />
        </div>
      </div>
    </Container>
  );
};

export default Products;
