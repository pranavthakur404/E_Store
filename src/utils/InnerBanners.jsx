import React from "react";

const InnerBanners = ({ text, subText }) => {
  const bannerImg =
    "https://png.pngtree.com/thumb_back/fh260/background/20210115/pngtree-white-elegant-texture-banner-background-image_519770.jpg";
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover", // Optional: Adjust the background size
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Optional: Adjust the background position
        // You can add more background-related styles as needed
      }}
      className="w-full flex justify-center items-center  md:h-[250px] text-center p-5"
    >
      <div className="w-[95%] sm:w-[75%] md:w-[50%] py-5">
        <p className="text-[35px] sm:text-[40px] font-bold text-[#262b2c]">
          {text}
        </p>
        <p className="secondary-text-color mt-5">{subText || ""}</p>
      </div>
    </div>
  );
};

export default InnerBanners;
