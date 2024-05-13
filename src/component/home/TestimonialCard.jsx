import React from "react";

import Rating from "../../utils/Rating";

const TestimonialCard = ({ comment, img, name, rating }) => {
  return (
    <div className="w-full text-left py-3 px-3 border border-gray-200">
      <p>
        <Rating rating={rating} />
      </p>
      <p className="py-3 content font-[600]">"{comment}"</p>
      <div className="flex items-center gap-3 mt-3">
        <img src={img} className="rounded-[100%]" alt="" />
        <h4 className="content font-[500] primary-text-color">{name}</h4>
      </div>
    </div>
  );
};

export default TestimonialCard;
