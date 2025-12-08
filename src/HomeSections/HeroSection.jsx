import React from 'react';
import { Brain, Clock, Star, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-[75vh] flex items-center">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                L.AI.RRY: Your AI-Powered Mock Test Success Engine
              </h1>
              <p className="text-2xl text-gray-600 font-medium">
                Stop Studing, Start Mastering
              </p>
            </div>

            <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl">
              Start Free Mock Test
            </button>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-8 h-8 text-gray-700" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Real Exam</h3>
                    <p className="text-sm text-gray-600">Simulation</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="w-8 h-8 text-gray-700" />
                  <div>
                    <h3 className="font-semibold text-gray-900">AI-Driven</h3>
                    <p className="text-sm text-gray-600">Personalization</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-8 h-8 text-gray-700" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart</h3>
                    <p className="text-sm text-gray-600">Analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              {/* Neural Network Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-cyan-400 rounded-lg transform rotate-12"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-cyan-400 rounded-lg transform -rotate-12"></div>
                <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
              </div>

              {/* Brain Illustration */}
              <div className="relative z-10 flex flex-col items-center justify-center h-96 space-y-8">
                <div className="relative">
                  <Brain className="w-32 h-32 text-cyan-400 animate-pulse" />
                  <Sparkles className="w-6 h-6 text-cyan-300 absolute -top-2 -right-2 animate-bounce" />
                  <Sparkles className="w-5 h-5 text-cyan-300 absolute -bottom-1 -left-2 animate-bounce delay-150" />
                </div>

                {/* Floating UI Elements */}
                <div className="flex gap-4 items-center">
                  <div className="bg-cyan-400 bg-opacity-20 backdrop-blur-sm border border-cyan-400 rounded-lg p-4 w-32 h-24">
                    <div className="w-full h-2 bg-cyan-400 rounded mb-2"></div>
                    <div className="w-3/4 h-2 bg-cyan-400 rounded mb-2"></div>
                    <div className="w-1/2 h-2 bg-cyan-400 rounded"></div>
                  </div>
                  
                  <div className="bg-cyan-400 bg-opacity-20 backdrop-blur-sm border border-cyan-400 rounded-lg p-4 w-32 h-24">
                    <div className="flex items-center justify-center h-full">
                      <div className="w-12 h-12 border-4 border-cyan-400 rounded-full border-t-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{opacity: 0.3}}>
                  <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="#22d3ee" strokeWidth="2"/>
                  <line x1="80%" y1="30%" x2="20%" y2="70%" stroke="#22d3ee" strokeWidth="2"/>
                  <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#22d3ee" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}