import { X } from "lucide-react";
import { Notify } from "notiflix";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 w-full sm:w-80 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-bold">My Cart</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-black">
          <X size={20} />
        </button>
      </div>

      {/* Cart items */}
      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)] sm:h-[calc(100%-160px)]">
        <div className="flex flex-col gap-3 pb-3 border-b sm:flex-row sm:items-center">
          <img
            src="/watch.jpg" // replace with product image
            alt="Product"
            className="object-cover w-full h-40 rounded sm:w-16 sm:h-16"
          />
          <div className="flex-1">
            <p className="text-sm font-medium line-clamp-2">
              Navy Blue-Silver-White Multifunction Analog Watch
            </p>
            <div className="flex items-center gap-2 mt-1">
              <button className="px-2 py-1 text-sm border rounded hover:bg-gray-100">-</button>
              <span className="px-2 text-sm">1</span>
              <button className="px-2 py-1 text-sm border rounded hover:bg-gray-100">+</button>
            </div>
          </div>
          <p className="mt-2 text-sm font-bold sm:mt-0">$49.00</p>
        </div>

        {/* Example for additional items */}
        <div className="flex flex-col gap-3 pb-3 border-b sm:flex-row sm:items-center">
          <img
            src="/watch2.jpg"
            alt="Product"
            className="object-cover w-full h-40 rounded sm:w-16 sm:h-16"
          />
          <div className="flex-1">
            <p className="text-sm font-medium line-clamp-2">
              Another Product Name Example
            </p>
            <div className="flex items-center gap-2 mt-1">
              <button className="px-2 py-1 text-sm border rounded hover:bg-gray-100">-</button>
              <span className="px-2 text-sm">2</span>
              <button className="px-2 py-1 text-sm border rounded hover:bg-gray-100">+</button>
            </div>
          </div>
          <p className="mt-2 text-sm font-bold sm:mt-0">$99.00</p>
        </div>
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 w-full p-4 bg-white border-t">
        <div className="flex justify-between mb-2 text-sm font-bold sm:text-base">
          <span>Subtotal:</span>
          <span>$148.00</span>
        </div>
        <button className="w-full py-2 mb-2 text-white transition bg-yellow-500 rounded hover:bg-yellow-600">
          View Cart
        </button>
        <button
          className="w-full py-2 text-white transition bg-orange-500 rounded hover:bg-orange-600"
          onClick={() => Notify.success("Order successfully!")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
