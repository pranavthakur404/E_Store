import React from "react";

const AddressForm = () => {
  return (
    <div className="w-full">
      {/* heading */}
      <p className="font-[500] text-[20px]">Billing Details</p>
      <form action="#" class="w-full space-y-6 py-5">
        <div className="flex justify-between space-x-4">
          <div className="w-1/2">
            <label
              for="firstName"
              className="block text-[12px] text-gray-700 font-semibold mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              id="firstName"
              className="w-full text-[14px] border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="w-1/2">
            <label
              for="lastName"
              className="block text-[12px] text-gray-700 font-semibold mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              id="lastName"
              className="w-full text-[14px] border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        <div>
          <label
            for="address"
            className="block text-[12px] text-gray-700 font-semibold mb-1"
          >
            Address
          </label>
          <input
            type="text"
            name="addressLine1"
            placeholder="House number and street name"
            id="addressLine1"
            className="w-full text-[14px] border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black mb-1"
          />
          <input
            type="text"
            name="addressLine2"
            placeholder="Apartment, suite, unit etc. (optional)"
            id="addressLine2"
            className="w-full text-[14px] border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label
            for="city"
            className="block text-[12px] text-gray-700 font-semibold mb-1"
          >
            Town / City
          </label>
          <input
            type="text"
            name="city"
            placeholder="Town / City"
            id="city"
            className="w-full text-[14px] border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label
            for="district"
            className="block text-[12px] text-gray-700 font-semibold mb-1"
          >
            District
          </label>
          <input
            type="text"
            name="district"
            placeholder="District"
            id="district"
            className="w-full text-[14px] border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label
            for="pinCode"
            className="block text-[12px] text-gray-700 font-semibold mb-1"
          >
            Pin Code
          </label>
          <input
            type="number"
            name="pinCode"
            placeholder="Pin Code"
            id="pinCode"
            className="w-full text-[14px] border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label
            for="phoneNumber"
            className="block text-[12px] text-gray-700 font-semibold mb-1"
          >
            Phone Number
          </label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            id="phoneNumber"
            className="w-full text-[14px] border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label
            for="email"
            className="block text-[12px] text-gray-700 font-semibold mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            className="w-full text-[14px] border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label
            for="orderNotes"
            className="block text-[12px] text-gray-700 font-semibold mb-1"
          >
            Order Notes (optional)
          </label>
          <textarea
            name="orderNotes"
            placeholder="Order Notes"
            id="orderNotes"
            className="w-full text-[14px] border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
