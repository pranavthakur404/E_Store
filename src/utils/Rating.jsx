import React from "react";

import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Rating = ({ rating }) => {
  const start = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      start.push(<FaStar className="primary-text-color" />);
    } else {
      start.push(<CiStar />);
    }
  }
  return <span className="flex">{start}</span>;
};

export default Rating;
