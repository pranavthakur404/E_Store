import React, { useState } from "react";
import { TbMapPinPlus } from "react-icons/tb";

import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";

const Address = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (isFormOpen) {
    return <AddressForm setIsFormOpen={setIsFormOpen} />;
  } else {
    return (
      <div className="w-full mt-5 shadow-md p-3 rounded-lg flex flex-wrap gap-2 justify-evenly mb-3">
        <div
          className="w-[200px] h-[200px] flex flex-col justify-center items-center shadow-md rounded-2xl p-1 cursor-pointer"
          onClick={() => {
            setIsFormOpen(true);
          }}
        >
          <TbMapPinPlus className="text-[24px]" />
          <span className="text-[12px] block bg-black text-white px-3 py-1 rounded-2xl mt-3">
            Add New Address
          </span>
        </div>
        {address &&
          address.map((list) => {
            return <AddressCard key={list.id} {...list} />;
          })}
      </div>
    );
  }
};

export default Address;

const address = [
  {
    id: 1,
    firstName: "Pranav",
    LastName: "Thakur",
    addressLine1: "Address line 1",
    addressLine2: "Address line 2",
    company: "Codeify It",
    pinCode: "110044",
    ContactNumber: "1245789548",
    city: "New delhi",
    country: "India",
    status: true,
  },
  {
    id: 2,
    firstName: "Pranav",
    LastName: "Thakur",
    addressLine1: "Address line 1",
    addressLine2: "Address line 2",
    company: "Codeify It",
    pinCode: "110044",
    ContactNumber: "1245789548",
    city: "New delhi",
    country: "India",
    status: false,
  },
];
