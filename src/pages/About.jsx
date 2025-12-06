import "../styles/about.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About L.AI.RRY</h1>
        <p>
          Our mission is to make exam preparation smarter, faster, and easier
          for every student through AI-powered tools and high‑quality content.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-grid">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To empower students with reliable mock tests, smart analytics, and
            focused study tools designed to maximize exam success.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            To become the most trusted digital exam‑preparation ecosystem,
            helping millions learn without limits.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <h2>Our Core Values</h2>

        <div className="values-grid">
          <div className="value-box">
            <h3>📚 Quality Content</h3>
            <p>Expert-designed questions & tests for real exam standards.</p>
          </div>

          <div className="value-box">
            <h3>🤖 Smart Technology</h3>
            <p>AI-enhanced feedback to help you improve faster.</p>
          </div>

          <div className="value-box">
            <h3>🎯 Student‑First</h3>
            <p>Everything we build focuses on making learning easier.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Join thousands of learners growing with us</h2>
        <a href="/login" className="about-btn">Get Started</a>
      </section>
    </div>
  );
}
