import React from "react";
import { Search, Bot, BarChart3 } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { IoSearch } from "react-icons/io5";

const WhySection = () => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: IoSearch,
      title: "Choose Your Exam",
      description: "All major competitive exams supported.",
      color: "text-amber-600",
      bg: "bg-gradient-to-br from-amber-100 to-amber-200",
      iconBorder: "bg-white",
      iconBg: "bg-gradient-to-br from-amber-500 to-yellow-500"
    },
    {
      icon: Bot,
      title: "Take Smart Adaptive Tests",
      description: "Difficulty adjusts to your performance.",
      color: "text-emerald-600",
      bg: "bg-gradient-to-br from-emerald-100 to-emerald-200",
      iconBorder: "bg-white",
      iconBg: "bg-gradient-to-br from-emerald-500 to-green-600"
    },
    {
      icon: BarChart3,
      title: "Instant Performance Insights",
      description: "Accuracy, speed, and weak areas auto-analyzed.",
      color: "text-blue-600",
      bg: "bg-gradient-to-br from-blue-100 to-blue-200",
      iconBorder: "bg-white",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-gray-900 mb-5 text-left">
          Why Choose L.AI.RRY?
        </h1>
        <p className="text-left text-gray-700 text-lg font-semibold">
          Precision-Built for Exam Success
        </p>
        <p className="text-left text-gray-600 text-lg">
          L.Ai.RRY gives you data-driven guidance no classroom, coaching, or
          teacher can provide alone
        </p>
      </div>

      {/* Section Title freely positioned */}

      {/* Animated Features Grid */}
      <div ref={ref} className="w-full max-w-[1460px] mx-auto py- mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`
                  flex flex-col items-center text-center p-6 rounded-xl ${feature.bg} 
                  hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50
                `}
              >
                {/* Icon Circle */}
                <div className="w-32 h-32 rounded-full flex items-center justify-center mb-6">
                  <div className={`${feature.iconBorder} rounded-full w-21 h-21 shadow-lg flex items-center justify-center`}>
                    <div
                      className={`w-18 h-18 rounded-full ${feature.iconBg} flex items-center justify-center shadow-md`}
                    >
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>

                {/* Feature Text */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhySection;