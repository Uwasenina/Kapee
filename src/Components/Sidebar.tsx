import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Toggle button for mobile */}
      <button
        className="flex items-center p-2 mb-4 text-gray-700 rounded-md md:hidden hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
        <span className="ml-2 text-sm font-medium">
          {isOpen ? "Close" : "Categories"}
        </span>
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full md:block md:w-1/4 p-4 bg-gray-100 rounded-lg shadow`}
      >
        <h2 className="mb-4 text-lg font-bold">Shop By Categories</h2>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-yellow-500">Men's Clothing</a></li>
          <li><a href="#" className="hover:text-yellow-500">Women's Clothing</a></li>
          <li><a href="#" className="hover:text-yellow-500">Accessories</a></li>
          <li><a href="#" className="hover:text-yellow-500">Shoes</a></li>
          <li><a href="#" className="hover:text-yellow-500">Jewellery</a></li>
          <li><a href="#" className="hover:text-yellow-500">Bags & Backpacks</a></li>
          <li><a href="#" className="hover:text-yellow-500">Watches</a></li>
          <li><a href="#" className="hover:text-yellow-500">Dresses</a></li>
          <li><a href="#" className="hover:text-yellow-500">Shirts</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
