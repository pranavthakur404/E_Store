import React from "react";

import Container from "../../utils/Container";
import Slider from "react-slick";

const CategorySection = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <div className="w-full overflow-hidden">
        <div className="w-full text-center secondary-text-color">
          <p className="text-[35px] font-[500]">{"Shop by SOLUTION"}</p>
          <p className="text-[20px] cursor-pointer">
            {"Find the best benefits that fit your needs!"}
          </p>
        </div>
        <div className="mt-10">
          <Slider {...settings}>
            {data.map((list) => {
              return (
                <div key={list.id} className="w-full overflow-hidden">
                  <img
                    src={list.img}
                    className="w-[90%] h-[250px]  block my-0 mx-auto"
                    alt={list.title}
                  />
                  <div className="text-center py-2">
                    <p className="text-[16px] my-2 font-[500]">{list.title}</p>
                    <button className="secondary-background-color text-[12px] text-[#fff] py-2 px-4 rounded-lg ">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="w-full flex justify-center items-center mt-5"></div>
      </div>
    </Container>
  );
};

export default CategorySection;

const data = [
  {
    id: 1,
    title: "Category 1",
    img: "https://myrite.co/cdn/shop/files/Bianca_5491a54e-8e9d-4817-b58a-effeb509c00f_540x.png?v=1694271227",
  },
  {
    id: 2,
    title: "Category 2",
    img: "https://myrite.co/cdn/shop/files/Balance_Category_square_460x.jpg?v=1675926965",
  },
  {
    id: 3,
    title: "Category 3",
    img: "https://myrite.co/cdn/shop/files/Gummies--Balance-6PCS_540x.jpg?v=1706354034",
  },
  {
    id: 4,
    title: "Category 4",
    img: "https://myrite.co/cdn/shop/files/Gift-Set--Balance_540x.jpg?v=1706354223",
  },
  {
    id: 5,
    title: "Category 1",
    img: "https://myrite.co/cdn/shop/files/Bianca_5491a54e-8e9d-4817-b58a-effeb509c00f_540x.png?v=1694271227",
  },
  {
    id: 6,
    title: "Category 2",
    img: "https://myrite.co/cdn/shop/files/Balance_Category_square_460x.jpg?v=1675926965",
  },
  {
    id: 7,
    title: "Category 3",
    img: "https://myrite.co/cdn/shop/files/Gummies--Balance-6PCS_540x.jpg?v=1706354034",
  },
  {
    id: 8,
    title: "Category 4",
    img: "https://myrite.co/cdn/shop/files/Gift-Set--Balance_540x.jpg?v=1706354223",
  },
];
