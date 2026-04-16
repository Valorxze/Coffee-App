import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menus";
import Cart from "./components/Cart";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing.qty === 1) return prev.filter((i) => i.id !== id);
      return prev.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i));
    });
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="app">
      <Header totalItems={totalItems} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <Menu cart={cart} onAdd={addToCart} onRemove={removeFromCart} />
      <Cart
        open={cartOpen}
        cart={cart}
        onAdd={addToCart}
        onRemove={removeFromCart}
        onClear={clearCart}
        onClose={() => setCartOpen(false)}
      />
    </div>
  );
}
