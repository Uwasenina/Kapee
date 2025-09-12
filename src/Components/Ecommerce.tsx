import React, { useState } from 'react';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './Product';


interface CategoryItem {
  name: string;
  hasSubmenu: boolean;
  isExpanded?: boolean;
}

const EcommerceHero: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null); // Fixed: Added missing state

  const categories: CategoryItem[] = [
    { name: "Men's Clothing", hasSubmenu: true },
    { name: "Women's Clothing", hasSubmenu: true },
    { name: "Accessories", hasSubmenu: true },
    { name: "Shoes", hasSubmenu: true },
    { name: "Jewellery", hasSubmenu: true },
    { name: "Bags & Backpacks", hasSubmenu: true },
    { name: "Watches", hasSubmenu: true },
    { name: "Dresses", hasSubmenu: false },
    { name: "Shirts", hasSubmenu: false }
  ];

  const navigationItems = [
    { name: "HOME", to: "/home", hasDropdown: true },
    { name: "SHOP", to: "/shop", hasDropdown: true },
    { name: "PAGES", to: "/pages", hasDropdown: true }, // Fixed: removed path property
    { name: "BLOG", to: "/blog", hasDropdown: true }, // Fixed: consistent casing
    { name: "ELEMENTS", to: "/elements", hasDropdown: true },
    { name: "BUY NOW", to: "/buy", hasDropdown: false }
  ];

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(categoryName)) {
        newExpanded.delete(categoryName);
      } else {
        newExpanded.add(categoryName);
      }
      return newExpanded;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b shadow-sm">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Categories Button */}
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex items-center gap-3 px-6 py-3 font-semibold text-gray-900 transition-colors bg-yellow-400 "
            >
              SHOP BY CATEGORIES
              <Menu className="w-5 h-5" />
            </button>

            {/* Main Navigation */}
            <div className="items-center hidden space-x-8 md:flex">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link to={item.to}>
                    <button className="flex items-center gap-1 py-2 font-medium text-gray-700 hover:text-gray-900">
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="flex mx-auto max-w-7xl">
        {/* Sidebar */}
        <div className={`bg-white shadow-lg transition-all duration-300 ${isSidebarOpen ? 'w-80' : 'w-0 overflow-hidden'}`}>
          <div className="p-6">
            <div className="space-y-1">
              {categories.map((category, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => category.hasSubmenu && toggleCategory(category.name)}
                    className="flex items-center justify-between w-full px-2 py-4 text-left text-gray-700 transition-colors rounded hover:text-gray-900 hover:bg-gray-50"
                  >
                    <span className="font-medium">{category.name}</span>
                    {category.hasSubmenu && (
                      <ChevronRight 
                        className={`w-4 h-4 transition-transform ${
                          expandedCategories.has(category.name) ? 'rotate-90' : ''
                        }`} 
                      />
                    )}
                  </button>
                  
                  {/* Submenu placeholder - would expand with actual subcategories */}
                  {category.hasSubmenu && expandedCategories.has(category.name) && (
                    <div className="pb-2 pl-4">
                      <div className="py-1 text-sm text-gray-500">Subcategories would appear here</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-white">
          <div className="relative flex items-center justify-between px-12 h-96">
            {/* Content Section */}
            <div className="flex-1 max-w-lg">
              <div className="mb-4">
                <span className="text-lg font-bold tracking-wide text-yellow-500">
                  BEATS EP ON-EAR
                </span>
              </div>
              
              <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900">
                PERSONALIZED<br />
                HEADPHONES
              </h1>
              
              <p className="mb-8 text-2xl font-medium text-gray-700">
                Min. 40-80% Off
              </p>
              
              <Link to="/buy">
                <button className="px-8 py-4 text-lg font-bold text-gray-900 transition-colors duration-200 bg-yellow-400 hover:bg-yellow-500 hover:transform hover:scale-105">
                  BUY NOW
                </button>
              </Link>
            </div>

            {/* Headphones Image Section */}
            <div className="relative flex items-center justify-center flex-1">
              <div className="relative z-10 flex items-center justify-center w-80 h-80">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="headset"
                  className="ml-10 w-96 animate-float"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute w-4 h-4 delay-100 bg-yellow-400 rounded-full top-10 right-10 animate-bounce"></div>
            <div className="absolute w-3 h-3 delay-300 bg-blue-400 rounded-full bottom-20 left-10 animate-bounce"></div>
            <div className="absolute w-2 h-2 bg-yellow-300 rounded-full top-32 left-20 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Product Cards Section - Fixed: Proper structure */}
      <div className="px-8 py-12 mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Wireless Speaker Card */}
          <div 
            className="flex-1 overflow-hidden transition-all duration-500 transform bg-white shadow-lg cursor-pointer rounded-2xl hover:scale-105 hover:shadow-2xl"
            onMouseEnter={() => setHoveredCard('speaker')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex flex-col h-full lg:flex-row">
              {/* Content Section */}
              <div className="flex flex-col justify-center flex-1 p-8 lg:p-12">
                <div className="mb-6">
                  <p className={`text-yellow-500 font-semibold text-sm mb-2 tracking-wider uppercase transition-all duration-300 ${
                    hoveredCard === 'speaker' ? 'transform -translate-y-1' : ''
                  }`}>
                    Digital Smart
                  </p>
                  <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-300 ${
                    hoveredCard === 'speaker' ? 'text-teal-600 transform -translate-y-1' : ''
                  }`}>
                    WIRELESS SPEAKER
                  </h2>
                  <p className={`text-gray-600 text-lg font-medium transition-all duration-300 ${
                    hoveredCard === 'speaker' ? 'text-teal-500 transform -translate-y-1' : ''
                  }`}>
                    MIN. 30-75% OFF
                  </p>
                </div>
                <button className={`bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 self-start hover:scale-110 hover:shadow-lg ${
                  hoveredCard === 'speaker' ? 'animate-pulse' : ''
                }`}>
                  SHOP NOW
                </button>
              </div>
              
              {/* Image Section */}
              <div className="relative flex items-center justify-center flex-1 p-8 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                {/* Floating circles background animation */}
                <div className="absolute inset-0">
                  <div className={`absolute top-10 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-30 transition-all duration-700 ${
                    hoveredCard === 'speaker' ? 'animate-bounce' : ''
                  }`}></div>
                  <div className={`absolute bottom-16 right-12 w-16 h-16 bg-yellow-200 rounded-full opacity-40 transition-all duration-1000 ${
                    hoveredCard === 'speaker' ? 'animate-ping' : ''
                  }`}></div>
                  <div className={`absolute top-1/2 left-8 w-12 h-12 bg-blue-200 rounded-full opacity-25 transition-all duration-500 ${
                    hoveredCard === 'speaker' ? 'animate-pulse' : ''
                  }`}></div>
                </div>
                
                <div className="relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Wireless Bluetooth Speaker" 
                    className={`w-64 h-80 object-contain drop-shadow-2xl transition-all duration-500 ${
                      hoveredCard === 'speaker' ? 'transform rotate-6 scale-110' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Watch Charger Card */}
          <div 
            className="flex-1 overflow-hidden transition-all duration-500 transform bg-white shadow-lg cursor-pointer rounded-2xl hover:scale-105 hover:shadow-2xl"
            onMouseEnter={() => setHoveredCard('watch')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex flex-col h-full lg:flex-row">
              {/* Content Section */}
              <div className="flex flex-col justify-center flex-1 p-8 lg:p-12">
                <div className="mb-6">
                  <p className={`text-yellow-500 font-semibold text-sm mb-2 tracking-wider uppercase transition-all duration-300 ${
                    hoveredCard === 'watch' ? 'transform -translate-y-1' : ''
                  }`}>
                    Digital Smart
                  </p>
                  <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-300 ${
                    hoveredCard === 'watch' ? 'text-blue-600 transform -translate-y-1' : ''
                  }`}>
                    WATCH CHARGER
                  </h2>
                  <p className={`text-gray-600 text-lg font-medium transition-all duration-300 ${
                    hoveredCard === 'watch' ? 'text-blue-500 transform -translate-y-1' : ''
                  }`}>
                    UP TO 75% OFF
                  </p>
                </div>
                <button className={`bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 self-start hover:scale-110 hover:shadow-lg ${
                  hoveredCard === 'watch' ? 'animate-pulse' : ''
                }`}>
                  SHOP NOW
                </button>
              </div>
              
              {/* Image Section */}
              <div className="relative flex items-center justify-center flex-1 p-8 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                {/* Floating circles background animation */}
                <div className="absolute inset-0">
                  <div className={`absolute top-12 right-10 w-24 h-24 bg-blue-200 rounded-full opacity-30 transition-all duration-600 ${
                    hoveredCard === 'watch' ? 'animate-spin' : ''
                  }`}></div>
                  <div className={`absolute bottom-20 left-8 w-18 h-18 bg-purple-200 rounded-full opacity-35 transition-all duration-800 ${
                    hoveredCard === 'watch' ? 'animate-bounce' : ''
                  }`}></div>
                  <div className={`absolute top-1/3 right-16 w-14 h-14 bg-pink-200 rounded-full opacity-25 transition-all duration-1200 ${
                    hoveredCard === 'watch' ? 'animate-ping' : ''
                  }`}></div>
                </div>
                
                <div className="relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Apple Watch with Wireless Charger" 
                    className={`w-64 h-64 object-contain drop-shadow-2xl transition-all duration-500 ${
                      hoveredCard === 'watch' ? 'transform -rotate-3 scale-110' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating animation elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-2 h-2 bg-yellow-400 rounded-full top-1/4 left-1/4 animate-ping opacity-60"></div>
          <div className="absolute w-3 h-3 bg-blue-400 rounded-full top-3/4 right-1/3 animate-bounce opacity-40"></div>
          <div className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-50 top-1/2 right-1/4 animate-pulse"></div>
        </div>
      </div>
        <ProductCard/>
    </div>
  );
};

export default EcommerceHero;