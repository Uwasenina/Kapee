import { useState } from "react";
import { useCart } from "./CartContext";
import { Notify } from "notiflix";

function CheckoutPage() {
  const { cart, clearCart } = useCart();

  const initialFormState = {
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    notes: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    const requiredFields = ["firstName", "lastName", "address", "city", "state", "zip", "phone", "email"];
    const emptyFields = requiredFields.filter(field => !formData[field as keyof typeof formData].trim());

    if (emptyFields.length > 0) {
      setError("Please fill in all required fields (*) before placing your order.");
      return;
    }

    clearCart();
    setFormData(initialFormState);
    setError("");

    Notify.success("Order placed successfully! Thank you for your purchase.", { position: 'center-top' });
  };

  return (
    <div className="max-w-6xl px-4 py-10 mx-auto">
      <h1 className="mb-6 text-2xl font-bold text-center md:text-left">Checkout</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Billing Details */}
        <div className="p-6 bg-white shadow md:col-span-2 rounded-2xl">
          <h2 className="mb-4 text-xl font-semibold">Billing Details</h2>
          {error && <p className="mb-4 text-red-500">{error}</p>}
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="firstName"
                placeholder="First name *"
                className="w-full p-2 border rounded"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name *"
                className="w-full p-2 border rounded"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <input
              type="text"
              name="company"
              placeholder="Company name (optional)"
              className="w-full p-2 border rounded"
              value={formData.company}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Street address *"
              className="w-full p-2 border rounded"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full p-2 border rounded"
              value={formData.apartment}
              onChange={handleChange}
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="city"
                placeholder="Town / City *"
                className="w-full p-2 border rounded"
                value={formData.city}
                onChange={handleChange}
              />
              <input
                type="text"
                name="state"
                placeholder="State *"
                className="w-full p-2 border rounded"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code *"
                className="w-full p-2 border rounded"
                value={formData.zip}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone *"
                className="w-full p-2 border rounded"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="notes"
              placeholder="Order notes (optional)"
              className="w-full p-2 border rounded"
              value={formData.notes}
              onChange={handleChange}
            />
          </form>
        </div>

        {/* Order Summary */}
        <div className="flex flex-col p-6 bg-white shadow rounded-2xl">
          <h2 className="mb-4 text-xl font-semibold">Your order</h2>
          <div className="flex flex-col gap-2 mb-4 overflow-y-auto max-h-64">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between pb-2 text-sm border-b sm:text-base">
                <span>{item.name} × {item.quantity}</span>
                <span>Frw {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-sm sm:text-base">
            <span>Subtotal</span>
            <span>Frw {cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base">
            <span>Shipping</span>
            <span>Frw 500</span>
          </div>
          <div className="flex justify-between pt-2 mt-2 text-sm font-bold border-t sm:text-base">
            <span>Total</span>
            <span>Frw {(cart.reduce((sum, item) => sum + item.price * item.quantity,0) + 500).toFixed(2)}</span>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Sorry, it seems that there are no available payment methods.
            Please contact us if you require assistance or wish to make alternate arrangements.
          </p>

          <button
            className="w-full py-2 mt-4 text-white transition bg-yellow-400 rounded hover:bg-black"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
