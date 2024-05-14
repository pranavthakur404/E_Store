import React from "react";
import { FaMinus } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Container from "../../utils/Container";
import Rating from "../../utils/Rating";

const LargeTestimonial = () => {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-300 p-2 px-3">
      <Container>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((list) => {
            return (
              <SwiperSlide key={list.id}>
                <div className="w-full flex flex-wrap justify-between mt-[20px] bg-gradient-to-r from-slate-50 to-slate-300 p-2 px-3">
                  <div className="w-full sm:w-[50%] flex justify-center items-center p-1 ">
                    <div>
                      <Rating rating={4} />
                      <p className="text-[22px] md:text-[30px] font-[500] secondary-text-color my-5">
                        {list.comment}
                      </p>
                      <p className="text-[18px] flex gap-2 items-center mt-5 secondary-text-color">
                        <FaMinus /> {list.user}
                      </p>
                    </div>
                  </div>
                  <div className="w-full sm:w-[50%] flex justify-center items-center p-1">
                    <img src={list.img} className="w-[70%] rounded-lg" alt="" />
                  </div>
                </div>
                <div className="mt-[50px]"></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default LargeTestimonial;

const data = [
  {
    id: 1,
    comment:
      "Amazing gummies works wonder for my hair growth. I was a bit hesitate at first to try it but amazing reuslt!",
    user: "Zakia",
    img: "https://myrite.co/cdn/shop/files/Zakia_glow_gummies_540x.png?v=1694269998",
  },
  {
    id: 2,
    comment:
      "I am a big fan of these 1 Glose & Balance gummies, they are working so well for a radiant skin & support gut health !",
    user: "Sama",
    img: "https://myrite.co/cdn/shop/files/zainab-homepage_540x.jpg?v=1694962133",
  },
  {
    id: 3,
    comment: "Love my Hair vitamins! And the tate OMG its so yummy.",
    user: "Lina",
    img: "https://myrite.co/cdn/shop/files/Rabeb_540x.jpg?v=1711525070",
  },
];
