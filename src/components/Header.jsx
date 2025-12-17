import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");
    if (!scrollContainer) return;

    const handleScroll = () => {
      setScrolled(scrollContainer.scrollTop > 50);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-2 max-[900px]:px-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center select-none">
          <img
            src="/public/images/logo.png"
            alt="L.AI.RRY"
            className="w-12 h-12 max-[900px]:w-10 max-[900px]:h-10"
          />
          <span className="font-bold ml-2">
            <span className="text-blue-500">L.</span>
            <span className="text-black">AI</span>
            <span className="text-blue-500">.RRY</span>
          </span>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <nav
          className={`hidden md:flex items-center gap-6 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <button onClick={() => scrollToSection("how-it-work")}>
            How It Works
          </button>

          <button onClick={() => scrollToSection("exam-section")}>
            Exam Section
          </button>

          <button onClick={() => scrollToSection("join-us")}>
            Join Us
          </button>

          <button onClick={() => scrollToSection("testimonials")}>
            Testimonials
          </button>

          <button onClick={() => scrollToSection("faq")}>
            FAQ
          </button>

          {/* GET STARTED */}
          <Link
            to="/learn"
            className="ml-4 flex items-center bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 transition text-white"
          >
            Get Started
          </Link>
        </nav>

        {/* ================= MOBILE ☰ BUTTON ================= */}
        <button
          className={`block md:hidden text-3xl ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* ================= MOBILE MENU ================= */}
        <nav
          className={`absolute top-full right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg flex flex-col p-4 gap-4 md:hidden ${
            open ? "block" : "hidden"
          }`}
        >
          <button onClick={() => scrollToSection("how-it-work")}>
            How It Works
          </button>

          <button onClick={() => scrollToSection("exam-section")}>
            Exam Section
          </button>

          <button onClick={() => scrollToSection("join-us")}>
            Join Us
          </button>

          <button onClick={() => scrollToSection("testimonials")}>
            Testimonials
          </button>

          <button onClick={() => scrollToSection("faq")}>
            FAQ
          </button>

          <Link
            to="/learn"
            className="bg-green-500 text-white px-4 py-2 rounded-full text-center hover:bg-green-600"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
