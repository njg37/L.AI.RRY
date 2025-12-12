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
      color: "text-indigo-600",
      bg: "bg-[#CCCCFF]",
      iconBorder:"bg-white",
      iconBg:"bg-violet-800"
    },
    {
      icon: Bot,
      title: "Take Smart Adaptive Tests",
      description: "Difficulty adjusts to your performance.",
      color: "text-indigo-600",
      bg: "bg-[#85B09A]",
      iconBorder:"bg-white",
      iconBg:"bg-green-800"
    },
    {
      icon: BarChart3,
      title: "Instant Performance Insights",
      description: "Accuracy, speed, and weak areas auto-analyzed.",
      color: "text-indigo-600",
      bg: "bg-[#8AB9F1]",
      iconBorder:"bg-white",
      iconBg:"bg-blue-800"
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col ">
        <h1 className="text-4xl font-bold text-gray-800 mb-5 text-left">
          Why Choose L.AI.RRY?
        </h1>
        <p className="text-left text-gray-600 text-lg">
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
                  flex flex-col items-center text-center p-6 rounded-xl ${feature.bg} `}
              >
                {/* Icon Circle */}
                <div className="w-32 h-32 rounded-full  flex items-center justify-center mb-6  ">
                  <div className={`${feature.iconBorder}   rounded-full w-21 h-21 shadow flex items-center justify-center`}>
                    <div
                      className={`w-18 h-18 rounded-full ${feature.iconBg} flex items-center justify-center`}
                    >
                      <Icon className="w-12 h-12 text-[white]" />
                    </div>
                  </div>
                </div>

                {/* Feature Text */}
                <h3 className="text-xl font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-black">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhySection;
