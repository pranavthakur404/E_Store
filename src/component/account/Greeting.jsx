import React from "react";

const Greeting = () => {
  const date = new Date();
  const time = date.getHours();
  const getGreeting = (time) => {
    if (time < 12) {
      return "Good Morning!";
    } else if (time >= 12 && time < 18) {
      return "Good Afternoon!";
    } else if (time >= 18) {
      return "Good Evening!";
    } else {
      return "";
    }
  };
  return <p className="text-[22px] text-center font-[600]">{getGreeting(time)} Pranav Thakur</p>;
};

export default Greeting;
