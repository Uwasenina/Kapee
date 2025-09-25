import React from "react";
import { Heart, ShoppingCart, Shuffle, Eye } from "lucide-react";

// Types
interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  image: string;
  featured?: boolean;
}

// Dummy Data
const hotDeal = {
  id: 1,
  title: "Apple Watch Series 5",
  category: "Electronics",
  price: "$499.00 - $599.00",
  discount: "17% OFF",
  sold: 50,
  available: 75,
  image: "../w.jpg",
};

const featuredProducts: Product[] = [
  {
    id: 2,
    title: "Apple iPhone 11 Pro Max",
    category: "Electronics",
    price: "$199.00",
    oldPrice: "$254.00",
    discount: "22% OFF",
    image: "../Apple-iPhone-11-Pro-Max-256GB.jpg",
  },
  {
    id: 3,
    title: "Apple Watch Series 5",
    category: "Electronics",
    price: "$499.00 - $599.00",
    discount: "17% OFF",
    image: "../aa.jpg",
  },
  {
    id: 4,
    title: "JBL Wireless Bluetooth Speaker",
    category: "Electronics",
    price: "$96.00",
    featured: true,
    image: "../JBL.jpg",
  },
  {
    id: 5,
    title: "JBL On-Ear Headphones",
    category: "Electronics",
    price: "$124.00",
    featured: true,
    image: "../JBL.jpg",
  },
  {
    id: 6,
    title: "Apple AirPods with Wireless Case",
    category: "Electronics",
    price: "$85.00",
    featured: true,
    image: "../Apple.jpg",
  },
  {
    id: 7,
    title: "Samsung Galaxy S20 8GB RAM",
    category: "Electronics",
    price: "$250.00",
    image: "../RAM.jpg",
  },
  {
    id: 8,
    title: "Samsung Gear 360 Camera",
    category: "Electronics",
    price: "$29.00",
    oldPrice: "$48.00",
    discount: "40% OFF",
    image: "../Camera.jpg",
  },
  {
    id: 9,
    title: "Apple Watch Series 5 Black",
    category: "Electronics",
    price: "$599.00",
    image: "../apple-watch-series-5.jpg",
  },
];

// Components
const HotDealCard: React.FC = () => (
  <div className="w-full max-w-sm p-4 transition duration-300 transform border shadow-md rounded-2xl hover:scale-105 hover:shadow-lg">
    <div className="relative">
      <img
        src={hotDeal.image}
        alt={hotDeal.title}
        className="transition-transform duration-300 rounded-xl hover:scale-110"
      />
      <span className="absolute px-2 py-1 text-xs text-white bg-green-500 rounded top-2 left-2">
        {hotDeal.discount}
      </span>
      <Heart className="absolute w-5 h-5 text-gray-500 top-2 right-2" />
    </div>
    <div className="mt-3">
      <p className="text-sm text-gray-500 uppercase">{hotDeal.category}</p>
      <h3 className="text-lg font-semibold">{hotDeal.title}</h3>
      <p className="font-bold text-yellow-600">{hotDeal.price}</p>
      <div className="mt-3">
        <div className="h-2 overflow-hidden bg-gray-200 rounded-full">
          <div
            className="h-2 transition-all duration-700 bg-yellow-500"
            style={{
              width: `${(hotDeal.sold / (hotDeal.sold + hotDeal.available)) * 100}%`,
            }}
          />
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-500">
          <span>Already Sold: {hotDeal.sold}</span>
          <span>Available: {hotDeal.available}</span>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedProductsCard: React.FC = () => (
  <div className="w-full p-4 border shadow-md rounded-2xl">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold">Featured Products</h2>
      <button className="text-sm font-semibold text-yellow-600">VIEW ALL</button>
    </div>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {featuredProducts.map((product, i) => (
        <div
          key={product.id}
          className="relative p-3 transition duration-300 transform border shadow-sm opacity-0 rounded-xl hover:scale-105 hover:shadow-lg animate-fadeIn"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {product.discount && (
            <span className="absolute px-2 py-1 text-xs text-white bg-green-500 rounded top-2 left-2">
              {product.discount}
            </span>
          )}
          {product.featured && (
            <span className="absolute px-2 py-1 text-xs text-white bg-yellow-500 rounded top-2 left-2">
              FEATURED
            </span>
          )}
          <Heart className="absolute w-4 h-4 text-gray-400 top-2 right-2" />

          <img
            src={product.image}
            alt={product.title}
            className="mb-2 transition-transform duration-300 rounded-md hover:scale-110"
            
          />
          <div className="flex flex-row items-center justify-between h-8 bg-yellow-400 cursor-pointer w-15 hover:bg-yellow-500">
          <Shuffle className="w-5 h-5 m-1 text-white" size={15}/>
          <ShoppingCart className="w-5 h-5 m-1 text-white" size={15}/>
          <Eye className="w-5 h-5 m-1 text-white" size={15}/> 
          

          </div>
    
          <p className="text-xs text-gray-500 uppercase">{product.category}</p>
          <h3 className="text-sm font-semibold leading-tight">{product.title}</h3>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-yellow-600">{product.price}</p>
            {product.oldPrice && (
              <p className="text-xs text-gray-400 line-through">{product.oldPrice}</p>
            )}
            
          </div>
          
        </div>
      ))}
    </div>
  </div>
);

// Custom animation (add in globals.css or tailwind.config if needed)
const styles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.5s ease forwards;
}
`;

// Main Component
const ProductCard: React.FC = () => {
  return (
    <>
      <style>{styles}</style> {/* Inject animation */}
      <div className="grid gap-6 p-6 md:grid-cols-2">
        <HotDealCard />
        <FeaturedProductsCard />
      </div>
    </>
  );
};

export default ProductCard;
