import React from "react";
import { FaRegEdit } from "react-icons/fa";

const Profile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full mt-5 shadow-lg p-3 rounded-lg">
      <div className="flex justify-end">
        <FaRegEdit className="cursor-pointer text-[20px]" />
      </div>
      <form
        action="#"
        onSubmit={handleSubmit}
        className="w-full space-y-6 py-5"
      >
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="firstName"
              className="block text-sm text-gray-700 font-semibold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full text-base border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label
              htmlFor="lastName"
              className="block text-sm text-gray-700 font-semibold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full text-base border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="contactNumber"
              className="block text-sm text-gray-700 font-semibold mb-2"
            >
              Contact Number
            </label>
            <input
              type="number"
              id="contactNumber"
              className="w-full text-base border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label
              htmlFor="email"
              className="block text-sm text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full text-base border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full">
            <label
              htmlFor="birthdate"
              className="block text-sm text-gray-700 font-semibold mb-2"
            >
              Birthdate
            </label>
            <input
              type="date"
              id="birthdate"
              className="w-full text-base border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <p className="text-sm text-gray-700 font-semibold">Gender</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                id="male"
                className="text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="male" className="text-sm text-gray-700">
                Male
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                id="female"
                className="text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="female" className="text-sm text-gray-700">
                Female
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                id="other"
                className="text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="other" className="text-sm text-gray-700">
                Other
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 text-sm font-semibold text-white bg-black rounded-md  focus:outline-none "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
