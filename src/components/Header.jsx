import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white py-4 border-b border-gray-200 sticky top-0 z-50">
      <div className="w-[90%] max-w-[1300px] mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 select-none">
          <img
            src="/public/images/logo.png"
            alt="L.AI.RRY"
            className="w-12 h-12 object-contain"
          />
           <span className="logo-text font-bold text-blue-700">L.AI.RRY</span>
        </Link>

        {/* Navigation */}
        <nav
          className={`flex items-center gap-7 transition-all duration-300 
          max-[900px]:absolute max-[900px]:top-[70px] max-[900px]:right-0 max-[900px]:flex-col 
          max-[900px]:w-[200px] max-[900px]:bg-white max-[900px]:border-l max-[900px]:border-b 
          max-[900px]:border-gray-200 max-[900px]:p-5 
          ${open ? "max-[900px]:flex" : "max-[900px]:hidden"}`}
        >
          <Link className="text-gray-800 font-medium hover:text-blue-500" to="/">Home</Link>
          <Link className="text-gray-800 font-medium hover:text-blue-500" to="/about">About</Link>
          <Link className="text-gray-800 font-medium hover:text-blue-500" to="/pricing">Pricing</Link>
          <Link className="text-gray-800 font-medium hover:text-blue-500" to="/contact">Contact</Link>

          <Link
            to="/learn"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600"
          >
            Learn
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="hidden max-[900px]:block text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>
    </header>
  );
}
