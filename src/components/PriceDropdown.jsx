import React, { useState } from "react";

const PriceDropdown = () => {
  const [openIndex, setOpenIndex] = useState(null); // null means none open

  const nameTag = [
    { name: "Price", options: ["Under $50", "$50 - $100", "$100+"] },
    { name: "Sizes", options: ["xl", "lg", "md", "sm"] },
    {
      name: "Labels",
      options: ["Nike", "Loui Vuitton", "Jordans", "Balenciaga"],
    },
    {
      name: "Locations",
      options: ["Tokyo", "Australia", "United States", "California"],
    },
    { name: "Gender", options: ["Male", "Female", "Rather not say"] },
    { name: "Style", options: ["Modern", "Sleek", "Smooth"] },

  ];

  const toggleDropdown = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="xl:mx-auto mx-6 mt-5 max-w-6xl md:flex gap-4 grid grid-cols-2 sm:grid-cols-3  justify-center place-items-center md:justify-between">
      {nameTag.map((item, index) => (
        <div key={index} className="relative">
          <button
            onClick={() => toggleDropdown(index)}
            className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-full shadow hover:bg-gray-200 focus:outline-none"
          >
            {item.name} <span className="ml-1">▾</span>
          </button>

          {openIndex === index && (
            <div className=" absolute z-10 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {item.options.map((option, i) => (
                  <button
                    key={i}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PriceDropdown;
