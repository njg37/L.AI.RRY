import React from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";

export default function Register() {
  return (
    <div className="login-container container">
      <h2>Create Account</h2>
      <p className="muted">Sign up to save progress and access analytics</p>

      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <div className="input-field"><label>Name</label><input className="input" /></div>
        <div className="input-field"><label>Email</label><input type="email" className="input" /></div>
        <div className="input-field"><label>Password</label><input type="password" className="input" /></div>

        <button className="login-btn" type="submit">Create Account</button>

        <p className="signup-text">Already have an account? <Link to="/login" className="link">Login</Link></p>
      </form>
    </div>
  );
}
