import React from "react";
import Button from "../../utils/Button";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full  bg-white">
      <h2 className="text-[26px] sm:text-[30px]  font-bold text-[#262b2c] mb-10">
        Send Us A Message
      </h2>
      <form action="#" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
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
            placeholder="Your Email Address"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Your Message"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <Button text={"Submit"} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
