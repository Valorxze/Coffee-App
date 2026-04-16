import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-mark">☕</span>
          <div>
            <div className="logo-name">Parch & Brew</div>
            <div className="logo-tagline">Small-batch · Slow-roasted</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#menu">Menu</a>
          <a href="#our-story">Our Story</a>
          <a href="#our-story">Seasonal</a>
        </nav>
      </div>
    </header>
  );
}
