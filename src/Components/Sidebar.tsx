import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(() => {
    const saved = localStorage.getItem("sidebarOpen");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("sidebarOpen", open.toString());
  }, [open]);

  return (
    <div className="relative w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg">
      {/* Toggle Button */}
      <button
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-black transition-colors bg-yellow-400 rounded-md shadow-sm sm:text-base md:text-lg hover:bg-yellow-500"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="category-dropdown"
      >
        SHOP BY CATEGORIES
        <Menu size={22} className="ml-2" />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          id="category-dropdown"
          className={`
            absolute z-10 mt-2 bg-white rounded-md shadow-lg overflow-y-auto 
            transition-all duration-300 border border-gray-100
            w-full max-h-72
            sm:max-h-80 
            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
          `}
        >
          <ul className="p-3 space-y-2 sm:p-4">
            {[
              "Men's Clothing",
              "Women's Clothing",
              "Accessories",
              "Shoes",
              "Jewellery",
              "Bags & Backpacks",
              "Watches",
              "Dresses",
              "Shirts",
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="flex items-center justify-between px-2 py-2 text-sm transition-colors rounded hover:bg-yellow-50 hover:text-yellow-600 sm:text-base"
                >
                  {item} <span className="text-lg">›</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
