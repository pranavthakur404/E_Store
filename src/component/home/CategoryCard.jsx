import React from "react";

const CategoryCard = ({ id, title, img, width }) => {
  return (
    <div
      className="w-[100%] sm:w-[49%] md:w-[24%] category-card h-[40vh] sm:h-[50vh] md:h-[60vh] flex justify-start items-end p-2  text-white cursor-pointer"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <p className="static z-[1]">{title}</p>
    </div>
  );
};

export default CategoryCard;
