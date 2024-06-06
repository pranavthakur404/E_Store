import React, { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { removeToWhishList } from "../features/WishList";
import { useDispatch } from "react-redux";
import { addItem } from "../features/Cart";

import Container from "../utils/Container";
import InnerBanners from "../utils/InnerBanners";

const Favourite = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.wishList;
  });

  const handleDelete = (id) => {
    dispatch(removeToWhishList(id));
  };

  const moveToCart = (id) => {
    const dataToMove = data.find((list) => {
      return list.id == id;
    });
    dispatch(removeToWhishList(id));
    dispatch(addItem(dataToMove));
  };

  return (
    <div className="w-full">
      <InnerBanners text={"WISHLIST"} />
      <Container>
        <div className="w-[100%] md:w-[100%]  mx-auto mb-[100px] mt-[50px]">
          {data.length == 0 ? (
            <p className="text-gray-700 text-xl font-semibold bg-white p-4 rounded-md shadow-lg">
              No items found!
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="md:max-w-full  bg-white text-center min-w-[800px] md:w-full overflow-x-scroll">
                <thead>
                  <tr>
                    <th className="py-3 px-6 bg-gray-100 text-gray-700 font-bold uppercase text-sm ">
                      Product
                    </th>
                    <th className="py-3 px-6 bg-gray-100 text-gray-700 font-bold uppercase text-sm ">
                      Stock Status
                    </th>
                    <th className="py-3 px-6 bg-gray-100 text-gray-700 font-bold uppercase text-sm ">
                      Price
                    </th>
                    <th className="py-3 px-6 bg-gray-100 text-gray-700 font-bold uppercase text-sm ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((list) => {
                    return (
                      <tr
                        key={list.id}
                        className="border-b border-gray-200 hover:bg-gray-100"
                      >
                        <td className="py-4 px-6 text-sm text-gray-700">
                          <div className="flex justify-evenly items-center">
                            <FaDeleteLeft
                              className="text-[18px] cursor-pointer"
                              onClick={() => {
                                handleDelete(list.id);
                              }}
                            />
                            <div className="flex justify-between items-center">
                              <img
                                src={list.img}
                                className="w-[80px] h-[100px]"
                                alt=""
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
                        <td className="py-4 px-6 text-sm text-gray-700">
                          {list.stock != 0 ? (
                            <button className="bg-green-500 text-white text-xs font-bold py-1 px-3 rounded-full hover:bg-green-600">
                              In Stock
                            </button>
                          ) : (
                            <button className="bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-full hover:bg-red-600">
                              Out of Stock
                            </button>
                          )}
                        </td>
                        <td className="py-4 px-6  text-gray-700 font-[500] text-lg">
                          ₹ {list.price}
                        </td>
                        <td className="py-4 px-6 text-sm">
                          <button
                            className="bg-blue-500 text-white text-[12px] font-semibold py-1 px-4 rounded-md hover:bg-blue-600 shadow-md transition duration-300"
                            onClick={() => {
                              moveToCart(list.id);
                            }}
                          >
                            Move To Cart
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Favourite;
