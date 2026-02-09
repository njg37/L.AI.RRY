import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const navLinksRef = useRef([]);
  const getStartedRef = useRef(null);
  const logoRef = useRef(null);
  const location = useLocation();

  useGSAP(() => {
    // 1. Reset states to hidden so the animation is fresh every time
    gsap.set([logoRef.current, navLinksRef.current, getStartedRef.current], { 
      opacity: 0 
    });

    const tl = gsap.timeline({ delay: 1.5 }); // Matches Stairs transition finish

    // 2. Logo fades and moves into place
    tl.to(logoRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "power2.out"
    });

    // 3. Nav items slide in from right (from 50px to 0px)
    // We target the current array of refs
    tl.to(navLinksRef.current, {
      opacity: 1,
      x: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
      // We start them slightly 'to the right' initially
      startAt: { x: 50 } 
    }, "-=0.3");

    // 4. FIX: Explicitly animating the Get Started button
    tl.to(getStartedRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      startAt: { y: 20 }
    }, "-=0.2");

  }, [location.pathname]);

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");
    if (!scrollContainer) return;

    const handleScroll = () => {
      setScrolled(scrollContainer.scrollTop > 50);
      const totalScrollable = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const percentage = (scrollContainer.scrollTop / totalScrollable) * 100;
      setScrollProgress(percentage);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  const navItems = [
    { label: "How It Works", id: "how-it-work", color: "blue" },
    { label: "Exam Section", id: "exam-section", color: "emerald" },
    { label: "Join Us", id: "join-us", color: "amber" },
    { label: "Testimonials", id: "testimonials", color: "rose" },
    { label: "FAQ", id: "faq", color: "blue" },
  ];
const hoverText = {
  blue: "hover:text-blue-600",
  emerald: "hover:text-emerald-600",
  amber: "hover:text-amber-600",
  rose: "hover:text-rose-600",
};

const underlineBg = {
  blue: "bg-blue-600",
  emerald: "bg-emerald-600",
  amber: "bg-amber-600",
  rose: "bg-rose-600",
};

const hoverBg = {
  blue: "hover:bg-blue-50",
  emerald: "hover:bg-emerald-50",
  amber: "hover:bg-amber-50",
  rose: "hover:bg-rose-50",
};

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-3 max-[900px]:px-4 relative">
        
        {/* PROGRESS BAR */}
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-600 z-50"
          style={{ 
            width: `${scrollProgress}%`, 
            transition: "width 400ms cubic-bezier(0.25, 0.1, 0.25, 1.0)",
            opacity: scrollProgress > 0 ? 1 : 0 
          }}
        ></div>

        {/* LOGO */}
        <Link 
          ref={logoRef} 
          to="/" 
          className="flex items-center select-none group relative z-10"
          style={{ opacity: 0 }} // Prevent flicker before GSAP kicks in
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img
              src="/images/logo.png"
              alt="L.AI.RRY"
              className="w-6 h-6 max-[900px]:w-10 max-[900px]:h-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10 -translate-y-0.5"
            />
          </div>
          <span className="font-bold ml-0.5 text-lg">
            <span className="text-blue-600 inline-block group-hover:scale-110 transition-transform duration-300">L.</span>
            <span className="text-gray-900 inline-block group-hover:scale-110 transition-transform duration-300 delay-75">AI</span>
            <span className="text-blue-600 inline-block group-hover:scale-110 transition-transform duration-300 delay-150">.RRY</span>
          </span>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <nav
          className={`hidden md:flex items-center gap-6 font-medium transition-colors duration-300 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          {navItems.map((item, index) => (
            <button 
              key={index}
              ref={(el) => (navLinksRef.current[index] = el)}
              onClick={() => scrollToSection(item.id)}
             className={`relative transition-colors duration-200 group ${hoverText[item.color]}`}

              style={{ opacity: 0 }} // Prevent flicker
            >
              <span className="relative z-10">{item.label}</span>
              <span
  className={`absolute bottom-0 left-0 w-0 h-0.5 ${underlineBg[item.color]} group-hover:w-full transition-all duration-300`}
></span>

            </button>
          ))}

          <Link
            ref={getStartedRef}
            to="/"
            className="ml-4 flex items-center bg-gradient-to-r from-blue-600 to-emerald-600 px-5 py-2.5 rounded-full hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 text-white font-semibold shadow-md hover:shadow-xl transform hover:scale-110 hover:-translate-y-0.5 relative overflow-hidden group"
            style={{ opacity: 0 }} // Prevent flicker
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shine"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></span>
            <span className="relative z-10">Get Started</span>
          </Link>
        </nav>

        {/* ================= MOBILE ☰ BUTTON ================= */}
        <button
          className={`block md:hidden text-3xl transition-all duration-300 relative z-10 ${
            scrolled ? "text-gray-900" : "text-white"
          } ${open ? "rotate-90" : "rotate-0"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            <span className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45' : '-translate-y-2'}`}></span>
            <span className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45' : 'translate-y-2'}`}></span>
          </div>
        </button>

        {/* ================= MOBILE MENU ================= */}
        <nav
          className={`absolute top-full right-4 mt-2 w-64 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl flex flex-col p-5 gap-3 md:hidden transition-all duration-500 overflow-hidden ${
            open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 opacity-50"></div>
          {navItems.map((item, index) => (
            <button 
              key={index}
              onClick={() => scrollToSection(item.id)}
             className={`relative z-10 text-left text-gray-700 px-4 py-3 rounded-xl transition-all duration-300 hover:translate-x-2 ${hoverText[item.color]} ${hoverBg[item.color]}`}

            >
              {item.label}
            </button>
          ))}
          <Link to="/learn" className="relative z-10 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-3 rounded-full text-center font-semibold">
            Get Started
          </Link>
        </nav>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-shine { animation: shine 1.5s ease-in-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </header>
  );
}