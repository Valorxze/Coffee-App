import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span>☕</span>
          <span className="footer-name">Parch & Brew</span>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Parch & Brew · Downey, CA · Made with love & oat milk
        </p>
        <div className="footer-links">
          <a href="https://www.instagram.com/parchandbrew" target="_blank" rel="noopener noreferrer">Instagram</a>
          <span>·</span>
          <a href="https://www.tiktok.com/@parchandbrew" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </div>
    </footer>
  );
}
