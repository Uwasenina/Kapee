import { X } from "lucide-react";
import { Notify } from "notiflix";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-bold">My Cart</h2>
        <button onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      {/* Cart items */}
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b">
          <img
            src="/watch.jpg" // replace with product image
            alt="Product"
            className="object-cover w-16 h-16"
          />
          <div className="flex-1">
            <p className="text-sm font-medium">
              Navy Blue-Silver-White Multifunction Analog Watch
            </p>
            <div className="flex items-center gap-2 mt-1">
              <button className="px-2 border">-</button>
              <span>1</span>
              <button className="px-2 border">+</button>
            </div>
          </div>
          <p className="text-sm font-bold">$49.00</p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full p-4 bg-white border-t">
        <div className="flex justify-between mb-2 font-bold">
          <span>Subtotal:</span>
          <span>$49.00</span>
        </div>
        <button className="w-full py-2 mb-2 text-white bg-yellow-500 rounded">
          View Cart
        </button>
        <button
          className="w-full py-2 text-white bg-orange-500 rounded"
          onClick={() => alert("Order successfully!")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
