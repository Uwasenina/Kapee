import React, { useState } from "react";
import { FolderOpen, Copy, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Topbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-2 text-xs text-black bg-yellow-400 md:text-sm md:px-6">
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
      <div className="hidden space-x-4 md:flex">
        <span className="hidden lg:inline">WELCOME TO OUR STORE!</span>
        <a href="#" className="hover:underline flex items-center space-x-1">
          <FolderOpen size={14} />
          <span>BLOG</span>
        </a>
        <a href="#" className="hover:underline flex items-center space-x-1">
          <Copy size={14} />
          <span>FAQ</span>
        </a>
        <Link to="/Contact" className="hover:underline">
          CONTACT US
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-10 right-4 z-50 flex flex-col bg-yellow-300 text-sm rounded shadow-md md:hidden">
          <span className="px-4 py-2 border-b border-yellow-200">
            WELCOME TO OUR STORE!
          </span>
          <a href="#" className="px-4 py-2 hover:bg-yellow-200 flex items-center space-x-1">
            <FolderOpen size={14} />
            <span>BLOG</span>
          </a>
          <a href="#" className="px-4 py-2 hover:bg-yellow-200 flex items-center space-x-1">
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
