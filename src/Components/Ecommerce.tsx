import React, { useState } from "react";
import { Menu, ChevronDown, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./Product";

interface CategoryItem {
  name: string;
  hasSubmenu: boolean;
}

const EcommerceHero: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories: CategoryItem[] = [
    { name: "Men's Clothing", hasSubmenu: true },
    { name: "Women's Clothing", hasSubmenu: true },
    { name: "Accessories", hasSubmenu: true },
    { name: "Shoes", hasSubmenu: true },
    { name: "Jewellery", hasSubmenu: true },
    { name: "Bags & Backpacks", hasSubmenu: true },
    { name: "Watches", hasSubmenu: true },
    { name: "Dresses", hasSubmenu: false },
    { name: "Shirts", hasSubmenu: false },
  ];

  const navigationItems = [
    { name: "HOME", to: "/home", hasDropdown: true },
    { name: "SHOP", to: "/shop", hasDropdown: true },
    { name: "PAGES", to: "/pages", hasDropdown: true },
    { name: "BLOG", to: "/blog", hasDropdown: true },
    { name: "ELEMENTS", to: "/elements", hasDropdown: true },
    { name: "BUY NOW", to: "/buy", hasDropdown: false },
  ];

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => {
      const newExpanded = new Set(prev);
      newExpanded.has(categoryName)
        ? newExpanded.delete(categoryName)
        : newExpanded.add(categoryName);
      return newExpanded;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-30 bg-white border-b shadow-sm">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Categories Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-900 transition-colors bg-yellow-400 rounded md:px-6 md:py-3 md:text-base hover:bg-yellow-500"
            >
              SHOP BY CATEGORIES
              <Menu className="w-5 h-5" />
            </button>

            {/* Desktop Nav */}
            <div className="hidden space-x-4 md:flex">
              {navigationItems.map((item, index) => (
                <Link key={index} to={item.to}>
                  <button className="flex items-center gap-1 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 md:text-base">
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="p-2 text-gray-700 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isMobileMenuOpen && (
            <div className="flex flex-col pb-4 space-y-2 md:hidden">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="px-4 py-2 text-gray-700 rounded hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="flex flex-col mx-auto md:flex-row max-w-7xl">
        {/* Sidebar */}
        <div
          className={`
            fixed top-0 left-0 h-full bg-white shadow-lg z-20 transform transition-transform duration-300
            w-64 md:relative md:w-64
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
          `}
        >
          <div className="p-6">
            <div className="space-y-1">
              {categories.map((category, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => category.hasSubmenu && toggleCategory(category.name)}
                    className="flex items-center justify-between w-full px-2 py-3 text-sm text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 md:text-base"
                  >
                    <span className="font-medium">{category.name}</span>
                    {category.hasSubmenu && (
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          expandedCategories.has(category.name) ? "rotate-90" : ""
                        }`}
                      />
                    )}
                  </button>

                  {category.hasSubmenu && expandedCategories.has(category.name) && (
                    <div className="pb-2 pl-4">
                      <div className="py-1 text-sm text-gray-500">
                        Subcategories would appear here
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-white">
          <div className="relative flex flex-col items-center justify-between px-6 py-12 text-center md:flex-row md:px-12 md:h-96 md:text-left">
            {/* Text Content */}
            <div className="flex-1 max-w-lg">
              <span className="text-base font-bold tracking-wide text-yellow-500 sm:text-lg">
                BEATS EP ON-EAR
              </span>
              <h1 className="mt-4 mb-6 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
                PERSONALIZED <br /> HEADPHONES
              </h1>
              <p className="mb-8 text-lg font-medium text-gray-700 sm:text-xl">
                Min. 40-80% Off
              </p>
              <Link to="/buy">
                <button className="px-5 py-3 text-sm font-bold text-gray-900 transition bg-yellow-400 rounded-lg sm:px-6 sm:py-3 sm:text-base hover:bg-yellow-500 hover:scale-105">
                  BUY NOW
                </button>
              </Link>
            </div>

            {/* Image Section */}
            <div className="relative flex items-center justify-center flex-1 mt-10 md:mt-2">
              <img
                src="https://kapee.presslayouts.com/wp-content/uploads/2020/07/JBL-On-Ear-Headphones.jpg"
                alt="headset"
                className="w-48 sm:w-64 md:w-96 animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Example placeholder cards */}
          <div className="p-6 text-center bg-white rounded-lg shadow">Speaker Card</div>
          <div className="p-6 text-center bg-white rounded-lg shadow">Watch Card</div>
          <div className="p-6 text-center bg-white rounded-lg shadow">Headphone Card</div>
          <div className="p-6 text-center bg-white rounded-lg shadow">Accessory Card</div>
        </div>
      </div>

      <ProductCard />
    </div>
  );
};

export default EcommerceHero;
