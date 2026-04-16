import { useState } from "react";
import menu, { categories } from "../data/menu";
import MenuCard from "./MenuCard";
import "./Menus.css";

export default function Menu({ cart, onAdd, onRemove }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const allCategories = ["All", ...categories];
  const filtered =
    activeCategory === "All"
      ? menu
      : menu.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="menu-section">
      <div className="menu-inner">
        <div className="menu-header">
          <p className="section-eyebrow">Our Menu</p>
          <h2 className="section-title">What's brewing today</h2>
        </div>

        <div className="filter-bar">
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filtered.map((item) => {
            const cartItem = cart.find((i) => i.id === item.id);
            return (
              <MenuCard
                key={item.id}
                item={item}
                qty={cartItem?.qty || 0}
                onAdd={() => onAdd(item)}
                onRemove={() => onRemove(item.id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
