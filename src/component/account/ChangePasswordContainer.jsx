import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";

const ChangePasswordContainer = () => {
  return (
    <div className="w-full mt-5 shadow  p-3 rounded-lg text-center mb-3">
      <RiLockPasswordLine className="text-[30px] my-o mx-auto" />
      <p className="text-[13px] mt-5">Update your password for</p>
      <p className="font-[700]">pranavufc@gmail.com</p>

      <div className="max-w-md mx-auto mt-8 p-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="new-password"
          >
            New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="new-password"
            type="password"
            placeholder="New Password"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordContainer;
