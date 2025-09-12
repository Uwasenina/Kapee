import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Laptop', price: '$49.99', image: './aa.jpg' },
  { id: 2, name: 'Desktop 2', price: '$29.99', image: './2.jpg' },
  { id: 3, name: 'Product 3', price: '$19.99', image: './co.jpg' },
  { id: 4, name: ' Smart TV', price: '$99.99', image: './smart tv.jpg' },
  { id: 5, name: 'Watch', price: '$199.99', image: './Apple-Watch.jpg' },
  { id: 6, name: ' Comera', price: '$59.99', image: './5.jpg' },
];

const MyShop: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">My Shop</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {currentProducts.map((product) => (
          <div key={product.id} className="p-4 transition bg-white rounded-lg shadow hover:shadow-lg">
            <img src={product.image} alt={product.name} className="object-cover w-full h-48 mb-4 rounded-md" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="mb-2 font-bold text-yellow-600">{product.price}</p>
            <button className="w-full py-2 font-semibold text-gray-900 transition bg-yellow-400 rounded hover:bg-yellow-500">
              Buy Now
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyShop;