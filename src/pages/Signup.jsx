import React from "react";

import Container from "../utils/Container";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      <Container>
        <form
          className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md my-[100px]"
          action="#"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              E-Mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-1 text-white bg-[#262b2c] rounded hover:bg-[#f6aa28] focus:outline-none mt-5 focus:bg-[#f6aa2]"
            >
              Signup
            </button>
          </div>
          <p className="text-center text-[14px] underline mt-5 cursor-pointer">
            <NavLink to={"/login"}>New Customer ? Signup</NavLink>
          </p>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
