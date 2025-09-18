import React from "react";
import { Search, User, ShoppingCart, Menu } from "lucide-react"; // Added Menu icon
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 shadow-md md:px-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold md:text-4xl">kapee.</h1>

      {/* Search bar (hidden on mobile, visible from md) */}
      <div className="hidden w-1/2 md:flex">
        <input
          type="text"
          placeholder="Search for products, categories, brands..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-l"
        />
        <button className="px-4 bg-yellow-400 rounded-r">
          <Search />
        </button>
      </div>

      {/* Right side icons */}
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Search Icon (mobile only) */}
        <button className="p-2 md:hidden">
          <Search className="w-6 h-6" />
        </button>

        {/* User */}
        <Link to="/login">
        <div className="hidden cursor-pointer md:flex md:items-center md:space-x-1 hover:text-yellow-400">
          <User />
          <span className="text-sm">
            HELLO,
            <br />
            <span className="font-semibold">SIGN IN</span>
          </span>
        </div>
        </Link>

        {/* Shopping Cart */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <ShoppingCart />
          <span className="hidden text-sm md:inline">$0.00</span>
        </div>

        {/* Hamburger Menu (mobile only) */}
        <button className="p-2 md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
