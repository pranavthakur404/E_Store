import React from "react";
import RecentlyViewCard from "./RecentlyViewCard";

const RecentlyViewedContainer = () => {
  return (
    <>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="py-3 px-6 text-center text-xs font-medium uppercase tracking-wider">
              Image
            </th>
            <th className="py-3 px-6 text-center text-xs font-medium uppercase tracking-wider">
              Title
            </th>
            <th className="py-3 px-6 text-center text-xs font-medium uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {address &&
            address.map((list) => {
              return <RecentlyViewCard key={list.id} {...list} />;
            })}
        </tbody>
      </table>
    </>
  );
};

export default RecentlyViewedContainer;

const address = [
  {
    id: 1,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    status: "Process",
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/files/4_730be9b8-c9c4-439c-8074-4a40005984ff.jpg?v=1711972339&width=360",
  },
  {
    id: 2,
    title: "Oversized Cargo Joggers",
    price: 999,
    total: 1999,
    offerPrice: 1000,
    status: "Delivered",
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/files/authentic_9efd4bb2-6dda-4b4b-81a7-0eee06a3e9e4.jpg?v=1715675835&width=360",
  },
];
