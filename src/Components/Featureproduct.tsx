import React from 'react';
import { Star, Heart } from 'lucide-react';

// Product interface
interface ProductProps {
  id: number;
  title: string;
  category: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  rating: number;
  reviews: number;
  image: string;
  isFeatured?: boolean;
}

// ProductCard component
const ProductCard: React.FC<ProductProps> = ({
  title,
  category,
  price,
  oldPrice,
  discount,
  rating,
  reviews,
  image,
  isFeatured
}) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400/50" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gray-300" />
        ))}
        <span className="ml-1 text-sm text-gray-500">({reviews})</span>
      </div>
    );
  };

  return (
    <div className="relative transition-all duration-300 transform bg-white rounded-lg shadow-md group hover:shadow-xl hover:-translate-y-2 w-72">
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute z-10 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded top-3 left-3">
          FEATURED
        </div>
      )}
      
      {/* Discount Badge */}
      {discount && (
        <div className="absolute z-10 px-2 py-1 text-xs font-bold text-white bg-green-500 rounded top-3 right-3">
          -{discount}
        </div>
      )}

      {/* Wishlist Button */}
      <button className="absolute z-10 p-2 transition-opacity duration-300 bg-white rounded-full shadow-md opacity-0 top-3 right-3 group-hover:opacity-100 hover:bg-red-50">
        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
      </button>

      {/* Product Image */}
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.currentTarget.src = `https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`;
          }}
        />
        
        {/* Quick Action Overlay */}
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
          <button className="px-6 py-2 font-semibold text-gray-900 transition-transform duration-200 transform scale-95 bg-white rounded-full hover:bg-gray-100 group-hover:scale-100">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <p className="mb-2 text-xs font-medium tracking-wider text-gray-500">
          {category}
        </p>

        {/* Title */}
        <h3 className="mb-3 font-semibold text-gray-900 transition-colors cursor-pointer line-clamp-2 hover:text-blue-600">
          {title}
        </h3>

        {/* Rating */}
        <div className="mb-3">
          {renderStars(rating)}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-gray-900">{price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">{oldPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="w-full py-2 font-medium text-white transition-colors duration-200 transform bg-gray-900 rounded-lg hover:bg-gray-800 hover:scale-105">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Updated products data with working image URLs
const products = [
  {
    id: 1,
    title: "Men Hooded Navy Blue & Grey Sweatshirt",
    category: "T-SHIRTS",
    price: "$70.00 - $95.00",
    oldPrice: "",
    discount: "19%",
    rating: 5,
    reviews: 2,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Navy Blue-Silver-White Multifunction Watch",
    category: "LEATHER",
    price: "$49.00",
    oldPrice: "$85.00",
    discount: "42%",
    rating: 4,
    reviews: 1,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Women Off White Printed Blouse",
    category: "SHORTS & SKIRTS",
    price: "$47.00",
    oldPrice: "",
    discount: "",
    rating: 2.7,
    reviews: 3,
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Unisex Blue Graphic Backpack",
    category: "LUGGAGE & TRAVEL",
    price: "$15.00",
    rating: 3,
    reviews: 1,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    title: "Men Blue Colourblocked Mid-Top Sneakers",
    category: "CASUAL SHOES",
    price: "$45.00",
    rating: 5,
    reviews: 3,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-gray-900">FEATURED PRODUCTS</h2>
            <p className="text-gray-600">Discover our handpicked collection of trending items</p>
          </div>
          <button className="px-6 py-3 font-medium text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700">
            VIEW ALL
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 font-medium text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg hover:bg-gray-300">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;