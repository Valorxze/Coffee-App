import "./OurStory.css";

const INSTAGRAM_URL = "https://www.instagram.com/parchandbrew";
const TIKTOK_URL    = "https://www.tiktok.com/@parchandbrew";

export default function OurStory() {
  return (
    <section id="our-story" className="story-section">
      <div className="story-inner">

        {/* Left — decorative column */}
        <div className="story-visual">
          <div className="story-card story-card--top">
            <span className="story-card-icon">🌹</span>
            <p className="story-card-label">Est. 2019</p>
            <p className="story-card-note">Downey, California</p>
          </div>
          <div className="story-blob" />
          <div className="story-card story-card--bot">
            <span className="story-card-icon">☕</span>
            <p className="story-card-label">Small-batch</p>
            <p className="story-card-note">Roasted with love</p>
          </div>
        </div>

        {/* Right — text content */}
        <div className="story-text">
          <p className="section-eyebrow">Our Story</p>
          <h2 className="story-title">
            From a kitchen table<br /><em>to your cup.</em>
          </h2>

          <div className="story-body">
            <p>
              Parch & Brew began the way the best things do — quietly, and
              entirely by accident. In the spring of 2019, founder <strong>Maria Elena Reyes</strong> set
              up a small hand-pour station in her Downey kitchen after a trip
              to Oaxaca left her hopelessly in love with single-origin coffee.
              Friends started arriving. Then strangers. Then a line out the door.
            </p>
            <p>
              What started as Sunday-morning hospitality became a calling. Maria
              spent two years sourcing directly from family-owned farms across
              Ethiopia, Colombia, and Sumatra — places where the farmers know
              the name of every tree. Every relationship was built on fair prices,
              shared meals, and a mutual belief that great coffee is never an
              accident.
            </p>
            <p>
              Today, Parch & Brew is a cozy corner of Downey where time slows
              down, oat milk steams gently, and every menu item tells a story
              of the hands that grew it. We don't do drive-throughs. We do
              conversation.
            </p>
          </div>

          {/* Values chips */}
          <div className="story-values">
            {["Direct Trade", "Woman-Owned", "Community First", "No Rush"].map((v) => (
              <span key={v} className="value-chip">{v}</span>
            ))}
          </div>

          {/* Social links */}
          <div className="story-social">
            <p className="social-label">Follow our journey</p>
            <div className="social-links">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn social-btn--instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>

              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn social-btn--tiktok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.81 1.55V6.79a4.85 4.85 0 01-1.04-.1z"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
