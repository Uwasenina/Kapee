import React, { useState } from "react";
import { FolderOpen, Copy, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Topbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative text-xs text-black bg-yellow-400 md:text-sm">
      <div className="flex items-center justify-between px-4 py-2 md:px-6">
        {/* Left side: Language + Currency */}
        <div className="flex space-x-2 md:space-x-4">
          <select className="text-black bg-yellow-400 border-none focus:outline-none">
            <option>ENGLISH</option>
            <option>Française</option>
            <option>Deutsch</option>
          </select>
          <select className="text-black bg-yellow-400 border-none focus:outline-none">
            <option>$ DOLLAR</option>
            <option>₹ RUPEE (INR)</option>
            <option>£ Pound</option>
            <option>€ Euro</option>
          </select>
        </div>

        {/* Desktop menu */}
        <div className="items-center hidden space-x-4 md:flex">
          <span className="hidden lg:inline">WELCOME TO OUR STORE!</span>
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <FolderOpen size={14} />
            <span>BLOG</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <Copy size={14} />
            <span>FAQ</span>
          </a>
          <Link to="/Contact" className="hover:underline">
            CONTACT US
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="p-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute z-50 flex flex-col w-48 text-sm bg-yellow-300 rounded shadow-md top-full right-4 md:hidden animate-slide-down">
          <span className="px-4 py-2 border-b border-yellow-200">
            WELCOME TO OUR STORE!
          </span>
          <a
            href="#"
            className="flex items-center px-4 py-2 space-x-1 hover:bg-yellow-200"
          >
            <FolderOpen size={14} />
            <span>BLOG</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 space-x-1 hover:bg-yellow-200"
          >
            <Copy size={14} />
            <span>FAQ</span>
          </a>
          <Link
            to="/Contact"
            className="px-4 py-2 hover:bg-yellow-200"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      )}
    </div>
  );
};

export default Topbar;
