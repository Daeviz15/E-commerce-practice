import React, { useState } from 'react';

const PriceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-full shadow hover:bg-gray-200 focus:outline-none"
      >
        Price <span className="ml-1">▾</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Under $50
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              $50 - $100
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              $100+
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceDropdown;
