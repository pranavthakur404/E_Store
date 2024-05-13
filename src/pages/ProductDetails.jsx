import React from "react";

import Container from "../utils/Container";
import Slider from "../component/product-details/Slider";
import DetailBox from "../component/product-details/DetailBox";

const ProductDetails = () => {
  return (
    <Container>
      <div className="md:w-[80%] my-0 mx-auto flex justify-between my-[100px]">
        <div className="w-[35%] ">
          <Slider />
        </div>
        <div className="w-[60%]">
          <DetailBox />
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
