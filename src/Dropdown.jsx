import React, { useState } from "react";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false); // Close dropdown on item click
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        onMouseEnter={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
      >
        {selectedItem ? selectedItem : "Select an option"}
      </button>
      {isOpen && (
        <ul className="absolute bg-white border border-gray-300 rounded-md mt-2 shadow-md w-48 z-10">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
