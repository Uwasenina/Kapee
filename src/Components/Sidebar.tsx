import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 p-4 bg-gray-100 rounded-lg shadow">
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
  );
};

export default Sidebar;