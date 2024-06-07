import React from "react";

const RecentlyViewCard = ({ id, img, title }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-4 px-6">
        <img
          src={img}
          alt={title}
          className="w-12 h-12 object-cover my-0 mx-auto rounded-full"
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
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default RecentlyViewCard;
