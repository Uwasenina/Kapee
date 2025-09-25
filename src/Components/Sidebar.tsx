import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Sidebar: React.FC = () => {
  // Read initial state from localStorage
  const [open, setOpen] = useState(() => {
    const saved = localStorage.getItem("sidebarOpen");
    return saved === "true";
  });

  // Update localStorage whenever open changes
  useEffect(() => {
    localStorage.setItem("sidebarOpen", open.toString());
  }, [open]);

  return (
    <div className="relative">
      {/* Yellow button */}
      <button
        className="flex items-center justify-between w-64 px-4 py-3 text-sm font-bold text-black bg-yellow-400 rounded-md md:w-80 lg:w-96 group md:text-base"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="category-dropdown"
      >
        SHOP BY CATEGORIES
        <Menu size={20} />
      </button>

      {/* Dropdown menu - toggled by click */}
      {open && (
        <div
          id="category-dropdown"
          className="absolute left-0 z-10 w-64 mt-2 overflow-y-auto transition-all duration-300 bg-white rounded-md shadow-lg md:w-80 lg:w-96 max-h-60"
        >
          <ul className="p-2 space-y-2 md:p-4">
            <li>
              <a href="#" className="flex justify-between text-sm hover:text-yellow-500 md:text-base">
                Men's Clothing <span>›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between text-sm hover:text-yellow-500 md:text-base">
                Women's Clothing <span>›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between text-sm hover:text-yellow-500 md:text-base">
                Accessories <span>›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between text-sm hover:text-yellow-500 md:text-base">
                Shoes <span>›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between text-sm hover:text-yellow-500 md:text-base">
                Jewellery <span>›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between text-sm hover:text-yellow-500 md:text-base">
                Bags & Backpacks <span>›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between text-sm hover:text-yellow-500 md:text-base">
                Watches <span>›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between text-sm hover:text-yellow-500 md:text-base">
                Dresses <span>›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between text-sm hover:text-yellow-500 md:text-base">
                Shirts <span>›</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;