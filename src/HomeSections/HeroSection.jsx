import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">

        {/* LEFT */}
        <div className="max-w-xl text-black">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            AI‑based <br /> Mock Tests
          </h1>

          <p className="text-lg mt-6 opacity-90">
            Prepare for your exams with our AI-powered mock tests.
          </p>

          <Link
            to="/login"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow"
          >
            Get Started
          </Link>
        </div>

        {/* RIGHT */}
        <img src="/robot.png" alt="AI Robot" className="w-80 md:w-96 mt-12 md:mt-0" />
      </div>
    </section>
  );
}
