import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Button from "../../utils/Button";

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {bannerData.map((data) => {
          return (
            <SwiperSlide key={data.id} {...data}>
              <div
                className="w-full h-[50vh] md:h-[100vh] home-banner-image relative home-banner flex items-center"
                style={{
                  backgroundImage: `url(${data.image})`,
                  backgroundSize: "cover", // Optional: Adjust the background size
                  backgroundPosition: "center", // Optional: Adjust the background position
                  // You can add more background-related styles as needed
                }}
              >
                {/* <div className="text-[#fff] relative z-[2] ml-[7%]">
                  <p className="text-[20px] md:text-[45px]">EXCLUSIVE</p>
                  <h1 className="text-[25px] md:text-[55px] font-bold mb-5">
                    {data.title}
                  </h1>
                  <Button text={"SHOP NOW"} />
                </div> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;

const bannerData = [
  {
    id: 1,
    image:
      "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FbannerFile-1717178161585.jpg%3Fv%3D1717178166&w=1920&q=75",
    title: "NEW SHOES",
  },
  {
    id: 2,
    image:
      "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FbannerFile-1717224463879.png%3Fv%3D1717224468&w=1920&q=75",
    title: "NEW SHOES",
  },
];
