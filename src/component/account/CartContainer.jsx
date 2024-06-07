import React from "react";
import { useSelector } from "react-redux";
import CartList from "./CartList";

const CartContainer = () => {
  const data = useSelector((state) => {
    return state.cart;
  });

  if (data.length == 0) {
    return (
      <div className="w-full  text-center py-10">
        <p className="text-[16px] mt-5">No Items Found !</p>
      </div>
    );
  }

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
              </tr>
            </thead>
            <tbody>
              {data.map((list) => {
                return <CartList key={list.id} {...list} />;
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

export default CartContainer;
