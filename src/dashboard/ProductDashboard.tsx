import React, { useEffect, useState } from "react";
import createAxiosClient from "../hooks/axiosClient";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
};

const ProductDashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false); // 🆕 Add Modal State
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Omit<Product, "_id" | "imageUrl">>({
    name: "",
    price: 0,
    description: "",
    category: "",
  }); // 🆕 New Product State
  const [imageFile, setImageFile] = useState<File | null>(null);

  const apiClient = createAxiosClient();

  // Fetch products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await apiClient.get("/products/products");
      setProducts(res.data.products || []);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Delete product
  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await apiClient.delete(`/products/products/${id}`);
        setProducts(products.filter((p) => p._id !== id));
      } catch (err) {
        console.error("Error deleting product:", err);
      }
    }
  };

  // ✏️ Edit
  const handleEdit = (product: Product) => {
    setEditProduct(product);
    setIsEditing(true);
  };

  // 💾 Update
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editProduct) return;

    try {
      const formData = new FormData();
      formData.append("name", editProduct.name);
      formData.append("price", editProduct.price.toString());
      formData.append("description", editProduct.description);
      formData.append("category", editProduct.category);
      if (imageFile) formData.append("image", imageFile);

      const res = await apiClient.put(`/products/products/${editProduct._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setProducts(products.map((p) => (p._id === res.data.updatedProduct._id ? res.data.updatedProduct : p)));
      setIsEditing(false);
      setEditProduct(null);
      setImageFile(null);
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  // 🆕 Add product
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", newProduct.name);
      formData.append("price", newProduct.price.toString());
      formData.append("description", newProduct.description);
      formData.append("category", newProduct.category);
      if (imageFile) formData.append("image", imageFile);

      const res = await apiClient.post("products/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await fetchProducts();// add new product to UI
      setIsAdding(false);
      setNewProduct({ name: "", price: 0, description: "", category: "" });
      setImageFile(null);
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Product Dashboard</h1>
        <button
          onClick={() => setIsAdding(true)} // 🆕 open add modal
          className="px-4 py-2 text-white bg-yellow-600 rounded hover:bg-yellow-700"
        >
        Add Product
        </button>
      </div>

      {/* 📦 Products Table */}
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
              <tr key={product._id} className="transition border-b hover:bg-gray-50">
                <td className="p-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-cover w-16 h-16 rounded"
                  />
                </td>
                <td className="p-4 font-medium">{product.name}</td>
                <td className="p-4 font-semibold text-green-600">${product.price}</td>
                <td className="p-4 text-sm text-gray-600">{product.description}</td>
                <td className="p-4">{product.category}</td>
                <td className="p-4 space-x-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-3 py-1 text-sm text-white bg-yellow-600 rounded hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🆕 Add Product Modal */}
      {isAdding && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-xl font-bold">Add New Product</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: Number(e.target.value) })
                }
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                placeholder="Description"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              ></textarea>
              <input
                type="text"
                placeholder="Category"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
              <div>
                <label className="block mb-1 font-semibold">Upload Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-yellow-600 rounded hover:bg-yellow-700"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ✏️ Edit Modal (existing) */}
      {isEditing && editProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-xl font-bold">Edit Product</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={editProduct.name}
                onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                className="w-full p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Price"
                value={editProduct.price}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, price: Number(e.target.value) })
                }
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Description"
                value={editProduct.description}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, description: e.target.value })
                }
                className="w-full p-2 border rounded"
              ></textarea>
              <input
                type="text"
                placeholder="Category"
                value={editProduct.category}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, category: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <div>
                <label className="block mb-1 font-semibold">Change Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setEditProduct(null);
                  }}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-yellow-600 rounded hover:bg-yellow-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDashboard;
