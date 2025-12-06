import React, { useState } from "react";
import "../../styles/login.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to continue your preparation</p>

        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>

          <button className="login-btn">Login</button>

          <p className="register-text">
            Don’t have an account? 
            <a href="/register"> Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
