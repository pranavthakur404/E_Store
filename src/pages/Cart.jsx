import React, { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { MdLayersClear } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  removeItem,
  incQuantity,
  decQuantity,
  clearCart,
} from "../features/Cart";

import Container from "../utils/Container";
import InnerBanners from "../utils/InnerBanners";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.cart;
  });

  const totalAmount = data.reduce((a, b) => {
    return a + b.quantity * b.price;
  }, 0);

  const handleIncreaseQuantity = (id) => {
    dispatch(incQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decQuantity(id));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-full">
      <InnerBanners text={"CART"} />
      <Container>
        <div className="w-[100%] md:w-[100%] mb-[100px] mt-[50px] mx-auto ">
          {data.length == 0 ? (
            <p className="text-gray-700 text-xl font-semibold bg-white p-4 rounded-md shadow-lg">
              No items found!
            </p>
          ) : (
            <div>
              {/* table Top buttons */}
              <div className="sm:flex sm:justify-end py-10">
                <button
                  className="px-5 py-2 border-2 border-black text-sm flex items-center justify-between gap-3 mt-5 sm:mt-0"
                  onClick={handleClearCart}
                >
                  Clear Cart <MdLayersClear className="text-[18px]" />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="md:max-w-full bg-white text-center min-w-[800px] md:w-full overflow-x-scroll">
                  <thead>
                    <tr>
                      <th className="py-3 px-6 bg-gray-100 text-gray-700 font-bold uppercase text-sm">
                        Product
                      </th>
                      <th className="py-3 px-6 bg-gray-100 text-gray-700 font-bold uppercase text-sm">
                        Price
                      </th>
                      <th className="py-3 px-6 bg-gray-100 text-gray-700 font-bold uppercase text-sm">
                        Quantity
                      </th>
                      <th className="py-3 px-6 bg-gray-100 text-gray-700 font-bold uppercase text-sm">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((list) => (
                      <tr
                        key={list.id}
                        className="border-b border-gray-200 hover:bg-gray-100 transition duration-150"
                      >
                        <td className="py-4 px-6 text-sm text-gray-700">
                          <div className="flex justify-evenly items-center ">
                            <FaDeleteLeft
                              className="text-[20px] cursor-pointer"
                              onClick={() => handleDelete(list.id)}
                            />
                            <div className="flex justify-center items-center">
                              <img
                                src={list.img}
                                className="w-[80px] h-[100px] object-cover rounded-md"
                                alt={list.title}
                              />
                              <p
                                title={list.title}
                                className="ml-5 w-40 truncate"
                              >
                                {list.title}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-700 font-medium text-lg">
                          ₹{list.price}
                        </td>
                        <td className="py-4 px-6 text-gray-700">
                          <div className="flex justify-center items-center space-x-2">
                            <button
                              className="bg-gray-500 text-white font-bold py-2 px-3 rounded-l-md hover:bg-gray-800"
                              onClick={() => handleDecreaseQuantity(list.id)}
                            >
                              -
                            </button>
                            <span className="w-12 inline-block text-center border-t border-b border-gray-300">
                              {list.quantity}
                            </span>
                            <button
                              className="bg-gray-500 text-white font-bold py-2 px-3 rounded-r-md hover:bg-gray-800"
                              onClick={() => handleIncreaseQuantity(list.id)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-6 font-medium text-lg">
                          ₹{list.quantity * list.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td
                        colSpan="3"
                        className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase text-right text-sm"
                      >
                        Total Amount
                      </td>
                      <td className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase text-lg">
                        ₹{totalAmount}
                      </td>
                    </tr>
                  </tfoot>
                </table>
                {/* table Bottom buttons */}
                <div className="flex justify-end py-10">
                  <NavLink to="/checkout">
                    <button className="px-5 py-2 bg-black text-white text-sm flex items-center justify-between gap-3">
                      Checkout
                      <MdShoppingCartCheckout className="text-[18px]" />
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Cart;
