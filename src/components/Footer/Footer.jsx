import { Link } from "react-router-dom";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <img src="/logo.svg" alt="L.AI.RRY" className="footer-logo" />
          <p className="footer-desc">
            Smarter exam preparation powered by modern tools.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/exams">Exams</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} L.AI.RRY — All Rights Reserved.</p>
      </div>
    </footer>
  );
}
