import "./Header.css";

export default function Header({ totalItems, onCartClick }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-mark">☕</span>
          <div>
            <div className="logo-name">Coffee Shop</div>
            <div className="logo-tagline">Small-batch · Slow-roasted</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#menu">Menu</a>
          <a href="#about">Our Story</a>
          <a href="#menu">Seasonal</a>
        </nav>

        <button className="cart-btn" onClick={onCartClick}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <span>Cart</span>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </button>
      </div>
    </header>
  );
}
