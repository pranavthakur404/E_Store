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
                <div className="text-[#fff] relative z-[2] ml-[7%]">
                  <p className="text-[20px] md:text-[45px]">EXCLUSIVE</p>
                  <h1 className="text-[25px] md:text-[55px] font-bold mb-5">
                    {data.title}
                  </h1>
                  <Button text={"SHOP NOW"} />
                </div>
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
      "https://previews.123rf.com/images/kritchanut/kritchanut1811/kritchanut181100357/114004200-black-shopping-basket-full-of-food-and-groceries-in-suppermarket-aisle-banner-background-with-copy.jpg",
    title: "NEW SHOES",
  },
  {
    id: 2,
    image:
      "https://t4.ftcdn.net/jpg/02/30/72/41/360_F_230724124_ZWlHSZBIvqvdJQj9at15WaKRqAtCUKTu.jpg",
    title: "NEW SHOES",
  },
];
