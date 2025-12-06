import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo-area">
          <img src="/logo.svg" alt="L.AI.RRY" className="logo-img" />
          <span className="logo-text">L.AI.RRY</span>
        </Link>

        {/* Navigation */}
        <nav className={`nav ${open ? "show" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>

          <Link to="/learn" className="btn-primary">
            Learn
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
    </header>
  );
}
