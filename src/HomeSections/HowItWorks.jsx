import React from "react";
import { Brain, BarChart3, Route, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="py-20 px-4 bg-white relative overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/30 via-purple-100/20 to-transparent blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            How L.Ai.RRY Elevates Your Learning Journey
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            An AI-powered workflow designed for modern learners.
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* STEP 1 */}
          <div
            className="group cursor-pointer p-6 bg-white rounded-xl border border-gray-200 
            hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.25)] 
            transition-all duration-300 hover:-translate-y-1 text-center"
          >
            {/* Thumbnail */}
            <div className="w-full h-28 bg-gray-100 rounded-lg mb-5 overflow-hidden">
              <img 
                src="https://via.placeholder.com/300x200" 
                alt="mock test preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Icon */}
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>

            <h3 className="font-semibold text-gray-900 mb-2 text-sm">
              Attempt Smart Mock Tests
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Real exam structure, timing, and difficulty patterns.
            </p>
          </div>

          {/* STEP 2 */}
          <div
            className="group cursor-pointer p-6 bg-white rounded-xl border border-gray-200 
            hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.25)] 
            transition-all duration-300 hover:-translate-y-1 text-center"
          >
            <div className="w-full h-28 bg-gray-100 rounded-lg mb-5 overflow-hidden">
              <img 
                src="https://via.placeholder.com/300x200" 
                alt="insight report"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>

            <h3 className="font-semibold text-gray-900 mb-2 text-sm">
              Get AI-Powered Insight Reports
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Accuracy, timing, weak concepts, confidence patterns & more.
            </p>
          </div>

          {/* STEP 3 */}
          <div
            className="group cursor-pointer p-6 bg-white rounded-xl border border-gray-200 
            hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.25)]  
            transition-all duration-300 hover:-translate-y-1 text-center"
          >
            <div className="w-full h-28 bg-gray-100 rounded-lg mb-5 overflow-hidden">
              <img 
                src="https://via.placeholder.com/300x200" 
                alt="roadmap graphic"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Route className="w-6 h-6 text-green-600" />
            </div>

            <h3 className="font-semibold text-gray-900 mb-2 text-sm">
              Unlock Your Personalized Growth Plan
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              AI suggests what to study next + weekly roadmap.
            </p>
          </div>

          {/* STEP 4 */}
          <div
            className="group cursor-pointer p-6 bg-white rounded-xl border border-gray-200 
            hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.25)]  
            transition-all duration-300 hover:-translate-y-1 text-center"
          >
            <div className="w-full h-28 bg-gray-100 rounded-lg mb-5 overflow-hidden">
              <img 
                src="https://via.placeholder.com/300x200" 
                alt="progress graph"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>

            <h3 className="font-semibold text-gray-900 mb-2 text-sm">
              Grow Consistently, Perform Confidently
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Improve with every test & track your progress visually.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowItWorks;