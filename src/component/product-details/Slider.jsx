import React from "react";
// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { TbRotate3D } from "react-icons/tb";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        // pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img
              src="https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-5.jpg"
              className="w-[100%] block my-0 mx-auto object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-4.jpg"
              className="w-[100%] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-3.jpg"
              className="w-[100%] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-2.jpg"
              className="w-[100%] object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-full flex justify-center">
        <TbRotate3D className="text-[35px] secondary-text-color mt-3" />
      </div>
    </div>
  );
};

export default Slider;
