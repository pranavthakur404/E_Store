import React from "react";
import { useState } from "react";
import { FaBoxOpen } from "react-icons/fa6";
import OrderList from "./OrderList";

const OrderContainer = () => {
  const [data, setData] = useState([
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
    {
      id: 3,
      title: "Boyfriend Authentic Classic Fit..",
      price: 499,
      total: 999,
      offerPrice: 500,
      status: "cancelled",
      offerText: "Lowest price in last 30 days",
      img: "https://nobero.com/cdn/shop/files/WhatsAppImage2024-02-02at3.34.16PM_165fe357-5ac0-46d6-b3bf-fa69163561de_1_1.jpg?v=1713533485&width=360",
    },
    {
      id: 4,
      title: "Believe in Yourself Oversized T...",
      price: 599,
      total: 999,
      offerPrice: 400,
      status: "Process",
      offerText: "Lowest price in last 30 days",
      img: "https://nobero.com/cdn/shop/products/Roger-3.jpg?v=1666016205&width=360",
    },
    {
      id: 5,
      title: "Free Your Mind Classic Fit T-s...",
      price: 499,
      total: 999,
      offerPrice: 500,
      status: "Process",
      offerText: "Lowest price in last 30 days",
      img: "https://nobero.com/cdn/shop/files/periwinkle_51d72746-a271-4276-92f0-5a34e94c009a.jpg?v=1716012900&width=360",
    },
  ]);

  return (
    <div className="w-full mt-5 shadow-lg p-3 rounded-lg flex flex-wrap gap-2 justify-evenly mb-3">
      {data && data.length > 0 ? (
        <div className="w-full  py-5">
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
                <th className="py-3 px-6 text-center text-xs font-medium uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((list) => {
                return <OrderList key={list.id} {...list} />;
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full  text-center py-10">
          <FaBoxOpen className="text-gray-500  text-[100px] my-0 mx-auto" />
          <p className="text-[16px] mt-5">
            You haven't placed any orders yet. <br /> We can't wait to have you
            as a customer.
          </p>
          <p className="font-bold mt-5">Take a look at our products here</p>
        </div>
      )}
    </div>
  );
};

export default OrderContainer;
