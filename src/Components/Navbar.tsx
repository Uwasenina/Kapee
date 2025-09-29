import React from "react";
import { Search, User, ShoppingCart, Menu, Heart } from "lucide-react";
import { useCart, type CartItem} from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0);
  
  // Get authentication state
  const { isAuthenticated, user, logout, loading } = useAuth();
  const navigate = useNavigate();

  // Debug logging - remove this after fixing
  console.log('🔍 Navbar Debug:', {
    isAuthenticated,
    user,
    loading,
    userEmail: user?.email,
    userName: user?.email?.split('@')[0]
  });

  const handleLogout = () => {
    logout();
    navigate('/');
    console.log('User logged out successfully');
  };

  // Show loading state
  if (loading) {
    return (
      <nav className="flex items-center justify-between px-4 py-3 shadow-md md:px-6">
        <h1 className="text-2xl font-bold md:text-4xl">kapee.</h1>
        <div className="text-sm text-gray-500">Loading...</div>
      </nav>
    );
  }

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

        {/* Debug info - remove this after fixing */}
        <div className="hidden lg:block text-xs bg-gray-100 px-2 py-1 rounded">
          Auth: {isAuthenticated ? 'YES' : 'NO'} | User: {user?.fullName || user?.email || 'None'}
        </div>

        {/* User */}
        {!isAuthenticated ? (
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
        ) : (
          <div className="hidden md:flex md:items-center md:space-x-2">
            <div className="text-sm text-gray-700">
              <span>Hello, {user?.fullName || user?.username || 'User'}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="bg-yellow-500 shadow flex items-center space-x-1 text-white hover:bg-yellow-600 px-3 py-2 rounded-lg transition-colors text-sm"
            >
              Logout
            </button>
          </div>
        )}
              
        {/* Wishlist */}
        <Link to="/wishlist">
        <div className="hidden cursor-pointer md:flex md:items-center md:space-x-1 hover:text-yellow-400">
          <Heart size={25} />
        </div>
        </Link>

        {/* Shopping Cart */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <Link to="/cart" className="flex items-center space-x-1 hover:text-yellow-400">
          <button>
          <ShoppingCart />
          <span className="hidden text-sm md:inline">
            Cart {totalItems} 
          </span>
          </button>
          </Link>
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