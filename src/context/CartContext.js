import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev[product.id];
      return {
        ...prev,
        [product.id]: existing
          ? { ...existing, quantity: existing.quantity + 1 }
          : { product, quantity: 1 },
      };
    });
  }

  function getCartItems() {
    return Object.values(cart);
  }

  function clearCart() {
    setCart({});
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartItems, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

