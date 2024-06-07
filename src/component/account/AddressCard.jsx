import React from "react";
import { FaRegEdit } from "react-icons/fa";

const AddressCard = ({
  id,
  status,
  firstName,
  LastName,
  addressLine1,
  addressLine2,
  company,
  pinCode,
  ContactNumber,
  city,
  country,
}) => {
  return (
    <div
      className={`w-[200px] h-[200px] shadow-md flex flex-col justify-center rounded-2xl p-3 py-5 cursor-pointer mb-10 relative ${
        status && "defaultAddressCard"
      }`}
    >
      <div className="flex justify-end">
        <FaRegEdit />
      </div>
      <p className="text-[13px]">
        {firstName} {LastName}
      </p>
      <p className="text-[13px]">{addressLine1}</p>
      <p className="text-[13px]">{addressLine2}</p>
      <p className="text-[13px]">{pinCode}</p>
      <p className="text-[13px]">{country}</p>
      <p className="text-[13px]">{ContactNumber}</p>
    </div>
  );
};

export default AddressCard;
