import React from "react";
import FilterAccordion from "../component/products/FilterAccordion";
import Container from "../utils/Container";

const Products = () => {
  return (
    <Container>
      <div className="flex justify-between my-[50px]">
        {/* filter */}
        <div className="w-[20%]">
          <p className="text-[20px] mb-3">Filter</p>
          <FilterAccordion />
        </div>

        {/* products */}
        <div className="w-[80%]"></div>
      </div>
    </Container>
  );
};

export default Products;
