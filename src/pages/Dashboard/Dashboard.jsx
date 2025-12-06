import React from "react";
import "../../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Top Section */}
      <section className="dashboard-header">
        <h1>Welcome Back 👋</h1>
        <p>Track your progress and continue your exam preparation.</p>
      </section>

      {/* Stats Cards */}
      <section className="stats-grid">
        <div className="stat-card">
          <h3>Tests Attempted</h3>
          <p className="value">12</p>
        </div>

        <div className="stat-card">
          <h3>Average Score</h3>
          <p className="value">78%</p>
        </div>

        <div className="stat-card">
          <h3>Rank Progress</h3>
          <p className="value">+14</p>
        </div>

        <div className="stat-card">
          <h3>Accuracy</h3>
          <p className="value">82%</p>
        </div>
      </section>

      {/* Recent Exams */}
      <section className="recent-tests">
        <h2>Recent Tests</h2>

        <div className="test-card">
          <div>
            <h3>Banking Aptitude Test</h3>
            <p>Attempted 2 days ago</p>
          </div>
          <button className="view-btn">View Report</button>
        </div>

        <div className="test-card">
          <div>
            <h3>General Intelligence Mock</h3>
            <p>Attempted 5 days ago</p>
          </div>
          <button className="view-btn">View Report</button>
        </div>

        <div className="test-card">
          <div>
            <h3>SSC Math Sectional Test</h3>
            <p>Attempted 1 week ago</p>
          </div>
          <button className="view-btn">View Report</button>
        </div>
      </section>
    </div>
  );
}
