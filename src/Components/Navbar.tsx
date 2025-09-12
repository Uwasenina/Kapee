import React from "react";
import { Search, User, ShoppingCart } from "lucide-react"; // Install lucide-react

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 shadow-md">
      <h1 className="text-5xl font-bold text-normal">kapee.</h1>
      <div className="flex w-1/2">
        <input
          type="text"
          placeholder="Search for products, categories, brands..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-l"
        />
        <button className="px-4 bg-yellow-400 rounded-r">
          <Search />
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-1 cursor-pointer hover:text-yellow-400">
          <User />
          <span className="text-sm">HELLO,<br /> <span className="font-semibold bold">SIGN IN</span></span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <ShoppingCart />
          <span className="text-sm">$0.00</span>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;