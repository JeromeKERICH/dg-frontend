import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // { productId, name, price, qty, imageUrl }

  const addToCart = (item) => {
    setCart(prev => {
      const exists = prev.find(i => i.productId === item.productId);
      if (exists) {
        return prev.map(p => p.productId === item.productId ? { ...p, qty: p.qty + item.qty } : p);
      }
      return [...prev, item];
    });
  };

  const updateQty = (productId, qty) => setCart(prev => prev.map(p => p.productId === productId ? { ...p, qty } : p));
  const removeFromCart = (productId) => setCart(prev => prev.filter(p => p.productId !== productId));
  const clearCart = () => setCart([]);

  const total = cart.reduce((s, i) => s + (i.price || 0) * i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}


