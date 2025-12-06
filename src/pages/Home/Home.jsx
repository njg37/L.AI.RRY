import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full bg-white font-sans pb-20">

      {/* ===========================
          HERO SECTION
      ============================ */}
      <section className="w-full bg-gradient-to-br from-teal-400 to-blue-500 rounded-b-3xl">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">

          {/* LEFT CONTENT */}
          <div className="max-w-xl text-white">
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

          {/* RIGHT IMAGE */}
          <div className="mt-12 md:mt-0">
            <img src="/robot.png" alt="AI Robot" className="w-80 md:w-96" />
          </div>
        </div>
      </section>

      {/* ===========================
          SEARCH BAR
      ============================ */}
      <div className="max-w-3xl mx-auto mt-10 px-6 relative">
        <input
          type="text"
          placeholder="Search exam"
          className="w-full border border-gray-300 rounded-xl py-3 pl-4 pr-12 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <span className="absolute right-10 top-1/2 -translate-y-1/2 text-xl text-gray-500">
          🔍
        </span>
      </div>

      {/* ===========================
          POPULAR EXAMS
      ============================ */}
      <section className="max-w-5xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold mb-4">Popular Exams</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <span className="bg-green-500 text-white text-xl p-3 rounded-full">📝</span>
            <p className="font-semibold">SSC CGL</p>
          </div>

          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <span className="bg-yellow-400 text-white text-xl p-3 rounded-full">📊</span>
            <p className="font-semibold">IBPS PO</p>
          </div>

          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <span className="bg-red-500 text-white text-xl p-3 rounded-full">🧾</span>
            <p className="font-semibold">NET</p>
          </div>

        </div>
      </section>

      {/* ===========================
          WHY SECTION
      ============================ */}
      <section className="max-w-5xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold">Why L.AI.RRY?</h2>
        <p className="text-gray-600 mt-2 mb-8">
          L.AI.RRY provides the best learning experience
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div className="text-center">
            <span className="bg-green-500 text-white text-3xl p-4 rounded-full inline-block mb-3">
              ✔
            </span>
            <p className="font-semibold">The best questions</p>
          </div>

          <div className="text-center">
            <span className="bg-green-500 text-white text-3xl p-4 rounded-full inline-block mb-3">
              📈
            </span>
            <p className="font-semibold">Detailed performance analysis</p>
          </div>

          <div className="text-center">
            <span className="bg-yellow-400 text-white text-3xl p-4 rounded-full inline-block mb-3">
              💡
            </span>
            <p className="font-semibold">Smart solutions</p>
          </div>

        </div>
      </section>

    </div>
  );
}
