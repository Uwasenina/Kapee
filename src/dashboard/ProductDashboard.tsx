import React from "react";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
};

const products: Product[] = [
  {
    _id: "1",
    name: "Leather Jacket",
    price: 120,
    description: "Stylish black leather jacket",
    imageUrl: "https://i.pinimg.com/1200x/24/f2/22/24f222b02602eeb0968a97f14b65da02.jpg",
    category: "Men's Clothing",
  },
  {
    _id: "2",
    name: "Elegant Dress",
    price: 90,
    description: "Red evening dress with modern design",
    imageUrl: "https://i.pinimg.com/736x/dd/c5/81/ddc5811818f96893769cfd8b901d894a.jpg",
    category: "Women's Clothing",
  },
  {
    _id: "3",
    name: "Smart Watch",
    price: 150,
    description: "Digital smartwatch with fitness tracking",
    imageUrl: "https://i.pinimg.com/736x/3a/b1/94/3ab1940b2cba621442abe28e812065cd.jpg",
    category: "Watches",
  },
];

const ProductDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold"> Product Dashboard</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-sm text-left text-gray-600 uppercase bg-gray-100">
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Description</th>
              <th className="p-4">Category</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="transition border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-cover w-16 h-16 rounded"
                  />
                </td>
                <td className="p-4 font-medium">{product.name}</td>
                <td className="p-4 font-semibold text-green-600">
                  ${product.price}
                </td>
                <td className="p-4 text-sm text-gray-600">
                  {product.description}
                </td>
                <td className="p-4">{product.category}</td>
                <td className="p-4 space-x-2">
                  <button className="px-3 py-1 text-sm text-white bg-yellow-600 rounded hover:bg-gray-600">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-sm text-white bg-yellow-600 rounded hover:bg-gray-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDashboard;
