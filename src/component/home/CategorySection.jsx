import React from "react";

const CategorySection = () => {
  return (
    <div className="flex justify-between mt-[100px] px-2">
      <div className="w-[49.5%] overflow-hidden relative category-section">
        <img
          src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-men-image-thumbnail.jpg"
          alt=""
        />
        <div className="category-button">
          <h3 className="section-heading font-bold">MEN</h3>
          <button className="border-[2px] border-[#fff] px-4 py-2 content mt-5">
            SHOP MEN
          </button>
        </div>
      </div>
      <div className="w-[49.5%] overflow-hidden relative category-section">
        <img
          src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-women-image-tumbnail.jpg"
          alt=""
        />
        <div className="category-button">
          <h3 className="section-heading font-bold">WOMEN</h3>
          <button className="border-[2px] border-[#fff] px-4 py-2 content mt-5">
            SHOP MEN
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
