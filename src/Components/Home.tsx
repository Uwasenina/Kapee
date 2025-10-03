import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeaturedProducts from "./Featureproduct";

interface CategoryItem {
  name: string;
  image: string;
}

const Home: React.FC = () => {
  const categories: CategoryItem[] = [
    { name: "Men", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
    { name: "Women", image: "https://images.unsplash.com/photo-1494790108755-2616b612b922?w=150&h=150&fit=crop&crop=face" },
    { name: "Shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150&h=150&fit=crop" },
    { name: "Bags & Backpacks", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop" },
    { name: "Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop" },
    { name: "Jewellery", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=150&h=150&fit=crop" },
    { name: "Accessories", image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=150&h=150&fit=crop" },
    { name: "Dresses", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=150&h=150&fit=crop" },
    { name: "Tops", image: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=150&h=150&fit=crop" },
    { name: "Lingerie & Nightwear", image: "https://images.unsplash.com/photo-1571513722275-4b3582da2c0c?w=150&h=150&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-50 to-white">
        <div className="container px-4 py-12 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Left Arrow (hidden on mobile) */}
            <button className="hidden p-2 transition-colors rounded-full md:block hover:bg-gray-100">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Hero Content */}
            <div className="flex-1 max-w-6xl mx-4 text-center md:text-left">
              <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <p className="mb-2 text-xs font-medium tracking-wider text-gray-600 uppercase sm:text-sm">
                    NEW ARRIVALS
                  </p>
                  <h1 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">
                    SUMMER SALE
                  </h1>
                  <p className="mt-2 text-lg font-semibold text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
                    MIN. 40% OFF
                  </p>
                  <button className="px-6 py-3 mt-4 font-semibold text-blue-500 transition-colors duration-300 bg-white border-2 border-blue-500 rounded hover:bg-blue-500 hover:text-white">
                    SHOP NOW
                  </button>
                </div>

                {/* Hero Image */}
                <div className="relative flex justify-center">
                  <div className="max-w-[280px] sm:max-w-sm md:max-w-md aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&h=500&fit=crop"
                      alt="Woman in summer outfit"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow (hidden on mobile) */}
            <button className="hidden p-2 transition-colors rounded-full md:block hover:bg-gray-100">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Promotional Sections */}
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* White Sneakers Promo */}
          <div className="flex flex-col items-center justify-between p-6 bg-white rounded-lg shadow-sm md:flex-row">
            <div className="flex-1 text-center md:text-left">
              <p className="mb-1 text-sm font-medium tracking-wider text-blue-500 uppercase">
                WHITE SNEAKERS
              </p>
              <h3 className="mb-1 text-xl font-bold text-gray-800 sm:text-2xl">
                MIN. 30% OFF
              </h3>
              <p className="mb-4 text-sm text-gray-600">Men Fashionable Shoes</p>
              <button className="px-6 py-2 font-semibold text-white transition-colors bg-blue-500 rounded hover:bg-blue-600">
                SHOP NOW
              </button>
            </div>
            <div className="mt-4 md:mt-0 md:ml-4">
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=120&h=120&fit=crop"
                alt="White sneakers"
                className="object-cover w-20 h-20 rounded sm:w-24 sm:h-24"
              />
            </div>
          </div>

          {/* Women's Fashion Promo */}
          <div className="flex flex-col items-center justify-between p-6 bg-white rounded-lg shadow-sm md:flex-row">
            <div className="flex-1 text-center md:text-left">
              <p className="mb-1 text-sm font-medium tracking-wider text-blue-500 uppercase">
                WOMEN'S FASHION
              </p>
              <h3 className="mb-1 text-xl font-bold text-gray-800 sm:text-2xl">
                UP TO 65% OFF
              </h3>
              <p className="mb-4 text-sm text-gray-600">Shoes & Backpacks</p>
              <button className="px-6 py-2 font-semibold text-white transition-colors bg-blue-500 rounded hover:bg-blue-600">
                SHOP NOW
              </button>
            </div>
            <div className="flex mt-4 space-x-2 md:mt-0 md:ml-4">
              <img
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=60&h=60&fit=crop"
                alt="Handbag"
                className="object-cover w-10 h-10 rounded sm:w-12 sm:h-12"
              />
              <img
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=60&h=60&fit=crop"
                alt="High heels"
                className="object-cover w-10 h-10 rounded sm:w-12 sm:h-12"
              />
            </div>
          </div>
        </div>
      </div>

      <FeaturedProducts />

      {/* Category Navigation */}
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 cursor-pointer group"
            >
              <div className="overflow-hidden transition-shadow duration-300 bg-gray-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 group-hover:shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium leading-tight max-w-[64px]">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
