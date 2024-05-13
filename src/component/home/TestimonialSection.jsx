import React from "react";

import Container from "../../utils/Container";
import TestimonialCard from "./TestimonialCard";
import Rating from "../../utils/Rating";

const TestimonialSection = () => {
  return (
    <Container>
      <div className="w-full mt-[100px] text-center">
        <h1 className="section-heading font-[500] secondary-text-color">
          Our Customers speak for us
        </h1>
        <div className="mt-10 testimonial-section">
          {data.map((list) => {
            return <TestimonialCard key={list.id} {...list} />;
          })}
        </div>
        <p className="text-gray-500 font-[500] text-[14px] mt-10">
          4.8 Average rating from 1814 reviews
        </p>
      </div>
    </Container>
  );
};

const data = [
  {
    id: 1,
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-3.jpg",
    comment:
      "Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer",
    name: "JULIA KEYS",
    rating: 3,
  },
  {
    id: 2,
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-3.jpg",
    comment:
      "Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer",
    name: "JULIA KEYS",
    rating: 4,
  },
  {
    id: 3,
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-3.jpg",
    comment:
      "Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer",
    name: "JULIA KEYS",
    rating: 5,
  },
];
export default TestimonialSection;
