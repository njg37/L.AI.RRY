import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const Home = () => {
  return (
    <div className="home-wrapper">

      {/* ==== HERO SECTION ==== */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            AI‑based <br /> Mock Tests
          </h1>

          <p className="hero-subtitle">
            Prepare for your exams with our AI-powered mock tests.
          </p>

          <Link to="/login" className="btn-primary">
            Get Started
          </Link>
        </div>

        <div className="hero-image">
          <img src="/robot.png" alt="AI Robot" />
        </div>
      </section>

      {/* ==== SEARCH BAR ==== */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search exam"
          className="search-box"
        />
        <span className="search-icon">🔍</span>
      </div>

      {/* ==== POPULAR EXAMS ==== */}
      <section className="section">
        <h2 className="section-title">Popular Exams</h2>

        <div className="exam-grid">
          <div className="exam-card">
            <span className="exam-icon green">📝</span>
            SSC CGL
          </div>

          <div className="exam-card">
            <span className="exam-icon yellow">📊</span>
            IBPS PO
          </div>

          <div className="exam-card">
            <span className="exam-icon red">🧾</span>
            NET
          </div>
        </div>
      </section>

      {/* ==== WHY SECTION ==== */}
      <section className="section">
        <h2 className="section-title">Why L.AI.RRY?</h2>
        <p className="section-sub">
          L.AI.RRY provides the best learning experience
        </p>

        <div className="features">
          <div className="feature-item">
            <span className="feature-icon green">✔</span>
            The best questions
          </div>

          <div className="feature-item">
            <span className="feature-icon green">📈</span>
            Detailed performance analysis
          </div>

          <div className="feature-item">
            <span className="feature-icon yellow">💡</span>
            Smart solutions
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
