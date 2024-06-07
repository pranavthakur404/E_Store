import React from "react";

const CartList = ({ id, img, title, price }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-4 px-6 text-center">
        <img
          src={img}
          alt={title}
          className="w-12 h-12 object-cover rounded-full my-0 mx-auto"
        />
      </td>
      <td className="py-4 px-6 text-center">
        <span
          title={title}
          className="text-sm font-medium text-gray-900 truncate inline-block w-[150px]"
        >
          {title}
        </span>
      </td>
      <td className="py-4 px-6 text-center">
        <span className="text-sm text-gray-700">₹{price}</span>
      </td>
    </tr>
  );
};

export default CartList;
