import React from 'react';
import { Brain, Target } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="bg-gray-200 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          How It Works
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* AI-Powered Analysis */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              AI-Powered Analysis
            </h3>
          </div>

          {/* Arrow */}
          <div className="hidden md:block text-gray-400 text-4xl">→</div>

          {/* Adaptive Practice */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <Target className="w-12 h-12 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Adaptive Practice
            </h3>
          </div>

          {/* Arrow */}
          <div className="hidden md:block text-gray-400 text-4xl">→</div>

          {/* Students Illustration */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-48">
              {/* Placeholder for illustration - you can replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">👨‍🎓👩‍🎓</div>
                  <div className="text-sm font-medium">Happy Students Learning</div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 bg-blue-400 text-white rounded-lg p-2 text-xs shadow-lg">
                📊 Stats
              </div>
              <div className="absolute -bottom-2 -left-2 bg-green-400 text-white rounded-lg p-2 text-xs shadow-lg">
                ✓ Progress
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;