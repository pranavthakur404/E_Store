import React from "react";
import { FaTruck } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdLocalOffer } from "react-icons/md";
import { RiQuestionFill } from "react-icons/ri";

const Feature = () => {
  return (
    <div className=" justify-between px-2 md:px-10 py-10  items-center flex flex-wrap mt-[100px] bg-gray-100">
      {data.map((list) => {
        return (
          <div key={list.id} className="sm:w-[50%] md:w-[33%]  gap-2 p-5">
            <span className="text-[25px] block mb-3 my-0 mx-auto">
              {list.icon}
            </span>
            <p>
              <span className="font-bold">{list.title}</span> {list.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Feature;

const data = [
  {
    id: 1,
    icon: <FaTruck />,
    title: "Free shipping",
    text: "Over $200",
  },
  {
    id: 2,
    icon: <GiReturnArrow />,
    title: "Money back",
    text: "Return within 7 days",
  },

  {
    id: 4,
    icon: <RiQuestionFill />,
    title: "Any questions ? ",
    text: "experts are ready",
  },
];
