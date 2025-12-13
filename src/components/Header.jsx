import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <header
      className={`w-full top-0 left-0 z-50 fixed transition-colors duration-500 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-2 max-[900px]:px-4">
        <Link to="/" className="flex items-center select-none">
          <img
            src="/public/images/logo.png"
            alt="L.AI.RRY"
            className="w-12 h-12 max-[900px]:w-10 max-[900px]:h-10"
          />
          <span className="font-bold ml-2 transition-colors duration-500">
            <span className="text-blue-500">L.</span>
            <span className="text-black">AI</span>
            <span className="text-blue-500">.RRY</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center gap-7 transition-colors duration-500 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <Link to="/" className="flex items-center h-full">
            Home
          </Link>
          <Link to="/about" className="flex items-center h-full">
            About
          </Link>
          <Link to="/pricing" className="flex items-center h-full">
            Pricing
          </Link>
          <Link to="/contact" className="flex items-center h-full">
            Contact
          </Link>
          <Link
            to="/learn"
            className="flex items-center bg-green-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`block md:hidden text-3xl ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Mobile Navigation */}
        <nav
          className={`absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col gap-4 p-4 transition-all duration-300 md:hidden ${
            open ? "block" : "hidden"
          }`}
        >
          <Link to="/" className="text-black font-medium hover:text-green-500">
            Home
          </Link>
          <Link
            to="/about"
            className="text-black font-medium hover:text-green-500"
          >
            About
          </Link>
          <Link
            to="/pricing"
            className="text-black font-medium hover:text-green-500"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-black font-medium hover:text-green-500"
          >
            Contact
          </Link>
          <Link
            to="/learn"
            className="bg-green-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600"
          >
            Sign-in
          </Link>
        </nav>
      </div>
    </header>
  );
}
