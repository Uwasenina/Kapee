import React, { useState } from "react";
import { Search, User, ShoppingCart, Menu, Heart, X } from "lucide-react";
import { useCart, type CartItem } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);

  const { isAuthenticated, user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (loading) {
    return (
      <nav className="flex items-center justify-between px-4 py-3 shadow-md md:px-6">
        <h1 className="text-2xl font-bold md:text-4xl">kapee.</h1>
        <div className="text-sm text-gray-500">Loading...</div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 mx-auto md:px-6 max-w-7xl">
        {/* Logo */}
        <h1 className="text-2xl font-bold md:text-4xl">kapee.</h1>

        {/* Desktop Search */}
        <div className="flex-1 hidden mx-4 md:flex">
          <input
            type="text"
            placeholder="Search for products, categories, brands..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="px-4 transition-colors bg-yellow-400 rounded-r-md hover:bg-yellow-500">
            <Search />
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Mobile Search Toggle */}
          <button
            className="p-2 md:hidden"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          >
            <Search className="w-6 h-6" />
          </button>

          {/* Mobile Search Input */}
          {mobileSearchOpen && (
            <div className="absolute left-0 w-full px-4 top-16 md:hidden">
              <div className="flex items-center w-full bg-white border border-gray-300 rounded-md shadow-md">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="flex-1 px-3 py-2 rounded-l-md focus:outline-none"
                />
                <button className="px-4 transition-colors bg-yellow-400 rounded-r-md hover:bg-yellow-500">
                  <Search />
                </button>
              </div>
            </div>
          )}

          {/* User/Auth */}
          {!isAuthenticated ? (
            <Link to="/login">
              <div className="items-center hidden space-x-1 md:flex hover:text-yellow-400">
                <User />
                <span className="text-sm">
                  HELLO,<br />
                  <span className="font-semibold">SIGN IN</span>
                </span>
              </div>
            </Link>
          ) : (
            <div className="items-center hidden space-x-2 md:flex">
              <span className="text-sm text-gray-700">
                Hello, {user?.fullName || user?.username || "User"}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center px-3 py-2 space-x-1 text-sm text-white transition-colors bg-yellow-500 rounded-lg shadow hover:bg-yellow-600"
              >
                Logout
              </button>
            </div>
          )}

          {/* Wishlist */}
          <Link to="/wishlist">
            <div className="hidden cursor-pointer md:flex hover:text-yellow-400">
              <Heart size={25} />
            </div>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="flex items-center space-x-1 hover:text-yellow-400">
            <ShoppingCart />
            <span className="hidden text-sm md:inline">Cart {totalItems}</span>
          </Link>

          {/* Hamburger Menu (mobile) */}
          <button
            className="p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white border-t shadow-md md:hidden">
          <Link
            to="/home"
            className="block px-4 py-3 border-b hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="block px-4 py-3 border-b hover:bg-gray-100"
          >
            Shop
          </Link>
          <Link
            to="/pages"
            className="block px-4 py-3 border-b hover:bg-gray-100"
          >
            Pages
          </Link>
          <Link
            to="/blog"
            className="block px-4 py-3 border-b hover:bg-gray-100"
          >
            Blog
          </Link>
          <Link
            to="/elements"
            className="block px-4 py-3 border-b hover:bg-gray-100"
          >
            Elements
          </Link>
          {!isAuthenticated && (
            <Link
              to="/login"
              className="block px-4 py-3 border-b hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="w-full px-4 py-3 text-left border-b hover:bg-gray-100"
            >
              Logout
            </button>
          )}
          <Link
            to="/wishlist"
            className="block px-4 py-3 border-b hover:bg-gray-100"
          >
            Wishlist
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
