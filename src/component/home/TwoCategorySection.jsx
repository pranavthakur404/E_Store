import React from "react";

const TwoCategorySection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover", // Optional: Adjust the background size
        backgroundPosition: "center", // Optional: Adjust the background position
        // You can add more background-related styles as needed
      }}
      className="w-full h-[500px] mt-[100px] text-center flex justify-center items-center"
    >
      <div className="p-2">
        <h2 className="text-[25px] sm:text-[35px] md:text-[50px] font-[600] text-white">
          Better for People & the Planet
        </h2>
        <p className="text-[white]">
          Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est
          dictum in vulputate
        </p>
        <button className="bg-white secondary-text-color text-[12px] tracking-wide font-[500] py-2 px-5 m-3 mt-5">
          SHOP MEN
        </button>
        <button className="bg-white secondary-text-color text-[12px] tracking-wide font-[500] py-2 px-5 m-3 mt-5">
          SHOP WOMEN
        </button>
      </div>
    </div>
  );
};

export default TwoCategorySection;

const bgUrl =
  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-cta-image-bg.jpg";
