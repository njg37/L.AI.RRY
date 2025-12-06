import React from "react";
import "../styles/pricing.css";

export default function Pricing() {
  return (
    <div className="pricing-wrapper">

      {/* Page Heading */}
      <div className="pricing-header">
        <h1>Choose Your Plan</h1>
        <p>Select a subscription that fits your preparation style.</p>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-grid">

        {/* Basic */}
        <div className="pricing-card">
          <h2 className="plan-title">Basic</h2>
          <p className="plan-price">₹199<span>/month</span></p>
          <ul className="plan-features">
            <li>✔ 10 Mock Tests / month</li>
            <li>✔ Basic Analytics</li>
            <li>✔ Standard Support</li>
          </ul>
          <button className="plan-btn">Choose Plan</button>
        </div>

        {/* Standard */}
        <div className="pricing-card pricing-popular">
          <div className="popular-badge">Most Popular</div>
          <h2 className="plan-title">Standard</h2>
          <p className="plan-price">₹399<span>/month</span></p>
          <ul className="plan-features">
            <li>✔ Unlimited Mock Tests</li>
            <li>✔ Advanced Analytics</li>
            <li>✔ AI Performance Insights</li>
          </ul>
          <button className="plan-btn highlight">Choose Plan</button>
        </div>

        {/* Premium */}
        <div className="pricing-card">
          <h2 className="plan-title">Premium</h2>
          <p className="plan-price">₹699<span>/month</span></p>
          <ul className="plan-features">
            <li>✔ Unlimited Mock Tests</li>
            <li>✔ All Analytics + AI Tools</li>
            <li>✔ Priority Support</li>
            <li>✔ Exclusive PDFs</li>
          </ul>
          <button className="plan-btn">Choose Plan</button>
        </div>
      </div>

    </div>
  );
}
