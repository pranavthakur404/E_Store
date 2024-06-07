import React from "react";

const AddressForm = ({ setIsFormOpen }) => {
  console.log(setIsFormOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormOpen(false);
  };

  return (
    <form
      action="#"
      onSubmit={handleSubmit}
      className="w-full space-y-6 py-5 mt-5"
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
            htmlFor="addressLine1"
            className="block text-sm text-gray-700 font-semibold mb-2"
          >
            Address Line 1
          </label>
          <input
            type="text"
            id="addressLine1"
            className="w-full text-base border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <div className="w-full md:w-1/2">
          <label
            htmlFor="addressLine2"
            className="block text-sm text-gray-700 font-semibold mb-2"
          >
            Address Line 2
          </label>
          <input
            type="text"
            id="addressLine2"
            className="w-full text-base border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/2">
          <label
            htmlFor="country"
            className="block text-sm text-gray-700 font-semibold mb-2"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            className="w-full text-base border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <div className="w-full md:w-1/2">
          <label
            htmlFor="city"
            className="block text-sm text-gray-700 font-semibold mb-2"
          >
            City
          </label>
          <input
            type="text"
            id="city"
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

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 text-sm font-semibold text-white bg-black rounded-md  focus:outline-none"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
