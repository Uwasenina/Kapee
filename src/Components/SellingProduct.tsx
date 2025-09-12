import React from "react";
import { Heart, ShoppingCart, RefreshCw, Search } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Apple Watch Series 5",
    category: "Electronics",
    price: "$499.00 – $599.00",
    oldPrice: null,
    discount: "17% OFF",
    featured: false,
    image: "../1.jpg",
  },
  {
    id: 2,
    name: "Microsoft Xbox One Wireless",
    category: "Electronics",
    price: "$25.00",
    oldPrice: "$45.00",
    discount: "44% OFF",
    featured: false,
    image: "../2.jpg",
  },
  {
    id: 3,
    name: "JBL On-Ear Headphones",
    category: "Electronics",
    price: "$124.00",
    oldPrice: null,
    discount: null,
    featured: true,
    image: "../3.jpg",
  },
  {
    id: 4,
    name: "Samsung Virtual Reality Headset",
    category: "Electronics",
    price: "$18.00",
    oldPrice: null,
    discount: null,
    featured: false,
    image: "../4.jpg",
  },
  {
    id: 5,
    name: "Apple Watch Series 5 Black Milanese",
    category: "Electronics",
    price: "$599.00",
    oldPrice: null,
    discount: null,
    featured: false,
    image: "../5.jpg",
  },
  {
    id: 6,
    name: "Samsung Gear 360 Camera",
    category: "Electronics",
    price: "$29.00",
    oldPrice: "$48.00",
    discount: "40% OFF",
    featured: false,
    image: "../6.jpg",
  },
];

const BestSellingProducts: React.FC = () => {
  return (
    <section className="p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="relative text-xl font-bold">
          BEST SELLING PRODUCTS
          <span className="absolute bottom-[-6px] left-0 w-12 h-[2px] bg-yellow-500"></span>
        </h2>
        <button className="px-4 py-2 text-white transition bg-black rounded hover:bg-gray-800">
          VIEW ALL
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="relative p-4 transition border rounded-lg shadow hover:shadow-xl"
          >
            {/* Discount / Featured Badge */}
            {product.discount && (
              <span className="absolute px-2 py-1 text-xs text-white bg-green-600 rounded top-2 left-2">
                {product.discount}
              </span>
            )}
            {product.featured && (
              <span className="absolute px-2 py-1 text-xs text-white bg-yellow-500 rounded top-2 left-2">
                FEATURED
              </span>
            )}

            {/* Product Image */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center mb-3"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-contain h-32"
              />
            </motion.div>

            {/* Product Info */}
            <p className="text-xs text-gray-500 uppercase">{product.category}</p>
            <h3 className="text-sm font-semibold">{product.name}</h3>
            <div className="mt-2">
              <span className="text-lg font-bold text-black">{product.price}</span>
              {product.oldPrice && (
                <span className="ml-2 text-sm text-gray-400 line-through">
                  {product.oldPrice}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex mt-3 space-x-2">
              {[
                { icon: <RefreshCw size={16} /> },
                { icon: <ShoppingCart size={16} /> },
                { icon: <Search size={16} /> },
              ].map((btn, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-yellow-400 rounded hover:bg-yellow-500"
                >
                  {btn.icon}
                </motion.button>
              ))}

              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="ml-auto text-gray-500 hover:text-red-500"
              >
                <Heart size={18} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;
