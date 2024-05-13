import React from "react";

const Language = () => {
  return (
    <select
      name="langSwitcher"
      id="langSwitcher"
      class="appearance-none border-none bg-red-600 text-white  px-2 rounded-md shadow-sm text-base cursor-pointer"
    >
      <option value="English" class="text-base">
        English
      </option>
      <option value="Hindi" class="text-base">
        हिन्दी
      </option>
    </select>
  );
};

export default Language;
