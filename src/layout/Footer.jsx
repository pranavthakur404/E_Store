import React from "react";
import SocialLinks from "../utils/SocialLinks";

import Container from "../utils/Container";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between flex-wrap my-[50px]">
          <div className="sm:w-[50%] md:w-[40%] text-center sm:text-left pr-5 mb-8 md:mb-0">
            <h3 className="text-[20px] font-bold">
              <img
                src="https://www.fablestreet.com/logo.svg"
                className="w-[150px]"
                alt=""
              />
            </h3>
            <p className="text-[14px] my-5 text-[#262b2c]">
              Praesent eget tortor sit risus egestas nulla pharetra ornare quis
              bibendum est bibendum sapien proin nascetur
            </p>
            <SocialLinks />
          </div>
          <div className="w-full sm:w-[50%] md:w-[20%] text-center sm:text-left mb-5 md:mb-0">
            <h3 className="text-[16px] font-bold">Shop</h3>
            {shop.map((list) => {
              return (
                <p key={list.id} className="text-[14px] my-2 text-[#262b2c]">
                  {list.title}
                </p>
              );
            })}
          </div>
          <div className="w-full sm:w-[50%] md:w-[20%] text-center sm:text-left mb-5 md:mb-0">
            <h3 className="text-[16px] font-bold">About</h3>
            {about.map((list) => {
              return (
                <p key={list.id} className="text-[14px] my-2 text-[#262b2c]">
                  {list.title}
                </p>
              );
            })}
          </div>
          <div className="w-full sm:w-[50%] md:w-[20%] text-center sm:text-left  md:mb-0">
            <h3 className="text-[16px] font-bold">Need Help</h3>
            {needHelp.map((list) => {
              return (
                <p key={list.id} className="text-[14px] my-2 text-[#262b2c]">
                  {list.title}
                </p>
              );
            })}
          </div>
        </div>
      </Container>
      <FooterBottom />
    </>
  );
};

export default Footer;

const shop = [
  {
    id: 1,
    title: "Shop Men",
  },
  {
    id: 2,
    title: "Shop Women",
  },
  {
    id: 3,
    title: "Lookbook",
  },
  {
    id: 4,
    title: "Gift Card",
  },
  {
    id: 5,
    title: "Sale",
  },
];

const about = [
  {
    id: 1,
    title: "Our Story",
  },
  {
    id: 2,
    title: "Our Materials",
  },
  {
    id: 3,
    title: "Our Values",
  },
  {
    id: 4,
    title: "Sustainability",
  },
  {
    id: 5,
    title: "Manufacture",
  },
];

const needHelp = [
  {
    id: 1,
    title: "FAQs",
  },
  {
    id: 2,
    title: " Shipping & Returns",
  },
  {
    id: 3,
    title: "Shoe Care",
  },
  {
    id: 4,
    title: "Size Chart",
  },
  {
    id: 5,
    title: "Conact Us",
  },
];
