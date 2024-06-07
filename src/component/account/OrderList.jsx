import React from "react";

const OrderList = ({ img, id, title, price, status }) => {
  return (
    <>
      <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="py-4 px-6">
          <img
            src={img}
            alt={title}
            className="w-12 h-12 object-cover rounded-full"
          />
        </td>
        <td className="py-4 px-6">
          <span
            title={title}
            className="text-sm font-medium text-gray-900 truncate inline-block w-[150px]"
          >
            {title}
          </span>
        </td>
        <td className="py-4 px-6">
          <span className="text-sm text-gray-700">₹{price}</span>
        </td>
        <td className="py-4 px-6 text-center">
          <span
            className={`text-sm font-medium text-white py-1 px-5 rounded-2xl  ${
              status == "Process"
                ? "bg-blue-500"
                : status == "Delivered"
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {status}
          </span>
        </td>
      </tr>
    </>
  );
};

export default OrderList;
