// components/CartContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import { Notify } from "notiflix";

// Updated CartItem type to accept string id
export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isCartLoading: boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartLoading, setIsCartLoading] = useState(false);
  const { isAuthenticated, user } = useAuth();

  // Clear cart when user logs out
  useEffect(() => {
    if (!isAuthenticated) {
      setCart([]);
    }
  }, [isAuthenticated]);

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    // Check if user is authenticated before allowing cart operations
    if (!isAuthenticated) {
      Notify.warning("Please login to add items to your cart");
      return;
    }

    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    Notify.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (id: string) => {
    if (!isAuthenticated) {
      Notify.warning("Please login to manage your cart");
      return;
    }

    setCart((prev) => {
      const item = prev.find(item => item.id === id);
      if (item && item.quantity > 1) {
        // Decrease quantity if more than 1
        return prev.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Remove item completely if quantity is 1
        return prev.filter((item) => item.id !== id);
      }
    });
  };

  const clearCart = () => {
    if (!isAuthenticated) {
      Notify.warning("Please login to manage your cart");
      return;
    }
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ 
      cart: isAuthenticated ? cart : [], // Only return cart if authenticated
      addToCart, 
      removeFromCart, 
      clearCart,
      isCartLoading 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}