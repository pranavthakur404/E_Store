import React, { useState, useEffect } from "react";
import { LuMapPin } from "react-icons/lu";
import TextTransition, { presets } from "react-text-transition";

const AboutSection = () => {
  const [count, setCount] = useState(0);

  const TEXTS = ["Sakte Delhi", "Waked Pune", "Kurla Mumbai"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="mt-[50px]">
      <div className="w-full flex flex-wrap text-center justify-between">
        <div className="w-[100%] md:w-[48%] object-cover">
          <img
            src="https://shopify.fablestreet.com/cdn/shop/files/phoenix_mall_1_800x.jpg?v=1716549258"
            className="w-[100%]  mb-10 md:mb-0 my-0 mx-auto"
            alt=""
          />
        </div>
        <div className="w-[100%] md:w-[48%] flex flex-col justify-center secondary-text-color text-center">
          <p className="font-[400] my-2 text-[45px]">
            Our Stores are now open in
          </p>
          <LuMapPin className="my-0 mx-auto text-[50px]" />
          <p className="text-[30px] my-0 mx-auto">
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </p>
          <button className="bg-gray-900 text-[#fff] w-[150px] text-#fff border-2 border-gray-900 mt-5 hover:bg-transparent hover:text-gray-900  transition px-3 py-2 rounded text-[14px] font-[500] my-0 mx-auto">
            Locate Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
