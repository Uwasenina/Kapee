import React from "react";

type OrderItem = {
  productId: {
    _id: string;
    name: string;
    imageUrl: string;
    price: number;
  };
  quantity: number;
};

type Order = {
  _id: string;
  items: OrderItem[];
  totalPrice: number;
  createdAt: string;
};

const orders: Order[] = [
  {
    _id: "order1",
    createdAt: "2025-09-15T10:30:00Z",
    totalPrice: 210,
    items: [
      {
        productId: {
          _id: "p1",
          name: "Leather Jacket",
          imageUrl: "https://via.placeholder.com/60",
          price: 120,
        },
        quantity: 1,
      },
      {
        productId: {
          _id: "p2",
          name: "Smart Watch",
          imageUrl: "https://via.placeholder.com/60",
          price: 90,
        },
        quantity: 1,
      },
    ],
  },
  {
    _id: "order2",
    createdAt: "2025-09-14T15:45:00Z",
    totalPrice: 90,
    items: [
      {
        productId: {
          _id: "p3",
          name: "Elegant Dress",
          imageUrl: "https://via.placeholder.com/60",
          price: 90,
        },
        quantity: 1,
      },
    ],
  },
];

const OrdersDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">📑 Orders Dashboard</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="p-4 bg-white border border-gray-100 rounded-lg shadow"
          >
            {/* Order Header */}
            <div className="flex flex-col pb-3 mb-3 border-b md:flex-row md:items-center md:justify-between">
              <h2 className="text-lg font-semibold">Order #{order._id}</h2>
              <span className="text-sm text-gray-500">
                {new Date(order.createdAt).toLocaleString()}
              </span>
            </div>

            {/* Items */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-600 uppercase bg-gray-100">
                    <th className="p-3">Image</th>
                    <th className="p-3">Product</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Quantity</th>
                    <th className="p-3">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <img
                          src={item.productId.imageUrl}
                          alt={item.productId.name}
                          className="object-cover rounded w-14 h-14"
                        />
                      </td>
                      <td className="p-3 font-medium">{item.productId.name}</td>
                      <td className="p-3">${item.productId.price}</td>
                      <td className="p-3">{item.quantity}</td>
                      <td className="p-3 font-semibold text-green-600">
                        ${item.productId.price * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="flex justify-end mt-4">
              <span className="text-lg font-bold text-gray-800">
                Total: ${order.totalPrice}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersDashboard;
