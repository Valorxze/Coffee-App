import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="grain" />
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">Est. 2019 · Downey, CA</p>
        <h1 className="hero-title">
          <em>Coffee worth slowing down for.</em>
        </h1>
        <p className="hero-sub">
          Every cup starts with a story — sourced from family farms,<br />
          roasted in small batches, brewed with intention.
        </p>
        <a href="#menu" className="hero-cta">Explore the Menu</a>
      </div>
      <div className="hero-ring" />
    </section>
  );
}
