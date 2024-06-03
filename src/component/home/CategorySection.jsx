import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../utils/Container";

import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

const CategorySection = () => {
  return (
    <div className="w-[80%] my-0 mx-auto my-10">
      <Container>
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.map((list) => {
            return (
              <SwiperSlide>
                <div key={list.id} className="w-full overflow-hidden">
                  <img
                    src={list.img}
                    className="w-[100%] block my-0 mx-auto"
                    alt={list.title}
                  />
                  <div className="text-center py-2">
                    <p className="text-[12px] my-2">{list.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default CategorySection;

const data = [
  {
    id: 1,
    title: "Livin",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2Flivin_70a0b973-4c89-4c27-92ec-5b2410f7e1e4_x300.png%3Fv%3D1710741112&w=1920&q=75",
  },
  {
    id: 2,
    title: "Tops",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2Ftops_a175344f-2aa8-4f52-af46-ebc24840208c_x300.png%3Fv%3D1710741112&w=1920&q=75",
  },
  {
    id: 3,
    title: "Dresses",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2Fdresses_5a1613a5-0c79-426f-bba4-22d448118e2a_x300.png%3Fv%3D1710741112&w=1920&q=75",
  },
  {
    id: 4,
    title: "Shirts",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FShirts_29b325eb-257c-4bff-a3dc-25581b4d7fd4_x300.png%3Fv%3D1710741112&w=1920&q=75",
  },
  {
    id: 5,
    title: "Tees",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2Ftees_af553117-e5a1-4dc1-98b1-2e63347cf0ac_x300.png%3Fv%3D1710741112&w=1920&q=75",
  },
  {
    id: 6,
    title: "Trousers",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2Ftrousers_5aa08997-c218-45f3-b899-a0a254c56dfd_x300.png%3Fv%3D1710741112&w=1920&q=75",
  },
  {
    id: 7,
    title: "Skirts",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2Fskirts_e535fc54-332c-4537-b0ac-046e2887d1fa_x300.png%3Fv%3D1710741113&w=1920&q=75",
  },
  {
    id: 8,
    title: "Shorts",
    img: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2Fskorts_00bc8e38-1bbe-464b-a502-e55ab0bf63b9_x300.png%3Fv%3D1710741112&w=1920&q=75",
  },
];
