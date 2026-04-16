import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="grain" />
        <div className="petal-ring ring-1" />
        <div className="petal-ring ring-2" />
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">Est. 2019 · Downey, CA</p>
        <h1 className="hero-title">
          Coffee worth<br />
          <em>slowing down for.</em>
        </h1>
        <p className="hero-sub">
          Every cup starts with a story — sourced from family farms,<br />
          roasted in small batches, brewed with intention.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="hero-cta hero-cta--primary">Explore the Menu</a>
          <a href="#our-story" className="hero-cta hero-cta--ghost">Our Story</a>
        </div>
      </div>
    </section>
  );
}
