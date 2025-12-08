import React from 'react';
import { Search, Bot, BarChart3 } from 'lucide-react';

const WhySection = () => {
  const features = [
    {
      icon: Search,
      title: "Select Exam",
      description: "Simultaneously"
    },
    {
      icon: Bot,
      title: "Take Adaptive Test",
      description: "Feed on activity line"
    },
    {
      icon: BarChart3,
      title: "Get Instant",
      description: "Analysis"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
        Why Choose L.AI.RRY?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-red-500 flex items-center justify-center mb-6 shadow-lg">
                <div className="w-28 h-28 rounded-full bg-gray-900 flex items-center justify-center">
                  <Icon className="w-12 h-12 text-yellow-400" strokeWidth={2} />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhySection;