import { useState } from "react";
import { useCart, type CartItem } from "./CartContext";
import { Link } from "react-router-dom";
import { Trash2, ShoppingCart, Lock } from "lucide-react"; 
import { Notify } from "notiflix";
import { useAuth } from "../context/Authcontext";

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const { isAuthenticated, loading } = useAuth();
  const [coupon, setCoupon] = useState("");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = subtotal >= 400 ? 0 : 5; 
  const total = subtotal + shippingCost;
  
  const handleApplyCoupon = () => {
    if (!coupon.trim()) return;
    alert(`Coupon "${coupon}" applied! (Demo only)`);
    setCoupon("");
  };

  // Show loading state
  if (loading) {
    return (
      <div className="max-w-6xl px-6 py-8 mx-auto">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  // Show authentication required message
  if (!isAuthenticated) {
    return (
      <div className="max-w-6xl px-6 py-8 mx-auto">
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <Lock size={64} className="text-gray-400" />
          <h2 className="text-2xl font-bold text-gray-700">Authentication Required</h2>
          <p className="text-center text-gray-600">
            You need to be logged in to view and manage your shopping cart.
          </p>
          <div className="flex mt-6 space-x-4">
            <Link 
              to="/login" 
              className="px-6 py-2 text-black transition-colors bg-yellow-400 rounded hover:bg-yellow-500"
            >
              Login
            </Link>
            <Link 
              to="/registration" 
              className="px-6 py-2 text-white transition-colors bg-gray-800 rounded hover:bg-gray-900"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl px-6 py-8 mx-auto space-y-6">
      <div className="flex items-center space-x-2">
        <ShoppingCart size={28} />
        <h1 className="text-2xl font-bold">Your Cart</h1>
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <ShoppingCart size={64} className="text-gray-400" />
          <h2 className="text-xl font-semibold text-gray-700">Your cart is empty</h2>
          <p className="text-gray-600">Start shopping to add items to your cart!</p>
          <Link 
            to="/shop" 
            className="px-6 py-2 text-black transition-colors bg-yellow-400 rounded hover:bg-yellow-500"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Remove</th>
                  <th className="p-2">Thumbnail</th>
                  <th className="p-2">Product</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item: CartItem) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-2 text-center">
                      <button
                        className="font-bold text-red-500 transition-colors hover:text-red-700"
                        onClick={() => removeFromCart(item.id)}
                        title="Remove item"
                      >
                        <Trash2 size={20} className="text-red-500" />
                      </button>
                    </td>
                    <td className="p-2">
                      <img src={item.image} alt={item.name} className="object-cover w-16 h-16 rounded" />
                    </td>
                    <td className="p-2 font-medium">{item.name}</td>
                    <td className="p-2">Frw {item.price.toFixed(2)}</td>
                    <td className="p-2">
                      <div className="flex items-center space-x-2">
                        <button
                          className="px-3 py-1 transition-colors bg-gray-200 rounded hover:bg-gray-300"
                          onClick={() => removeFromCart(item.id)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="w-8 font-medium text-center">{item.quantity}</span>
                        <button
                          className="px-3 py-1 transition-colors bg-gray-200 rounded hover:bg-gray-300"
                          onClick={() =>
                            addToCart({
                              id: item.id,
                              name: item.name,
                              price: item.price,
                              image: item.image,
                            })
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-2 font-bold">Frw {(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Coupon Input */}
          <div className="flex gap-2 mt-4">
            <input
              type="text"
              placeholder="Coupon code"
              className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button
              onClick={handleApplyCoupon}
              className="px-4 py-2 text-white transition-colors bg-gray-800 rounded hover:bg-gray-900"
            >
              Apply coupon
            </button>
          </div>

          {/* Cart Totals */}
          <div className="p-4 mt-6 space-y-2 border rounded bg-gray-50">
            <h3 className="mb-4 text-lg font-semibold">Cart Totals</h3>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Frw {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shippingCost === 0 ? "Free" : `Frw ${shippingCost.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between pt-2 mt-2 text-lg font-bold border-t">
              <span>Total</span>
              <span>Frw {total.toFixed(2)}</span>
            </div>
            {shippingCost === 0 ? (
              <p className="text-sm text-green-600">✅ Congratulations! You have got free shipping</p>
            ) : (
              <p className="text-sm text-gray-600">
                💡 Spend Frw {(400 - subtotal).toFixed(2)} more to get free shipping
              </p>
            )}

            <Link to="/checkout">
              <button className="w-full py-3 mt-4 font-semibold text-white transition-colors bg-yellow-400 rounded hover:bg-yellow-500">
                Proceed to Checkout (Frw {total.toFixed(2)})
              </button>
            </Link>
            
            <Link to="/shop" className="block text-center">
              <button className="w-full py-2 mt-2 text-gray-700 transition-colors bg-gray-200 rounded hover:bg-gray-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;