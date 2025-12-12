import React, { useEffect, useState } from 'react';
import { Brain, Clock, Star, Sparkles } from 'lucide-react';
import heroImg from "../../public/images/hero right.png"; // your image

export default function HeroSection() {
  const fullText = ' AI-Powered';
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 75;
    const delayAfterFullText = 1000;

    let timeout;

    if (!isDeleting && index <= fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, index));
        setIndex(index + 1);
        if (index === fullText.length) {
          setTimeout(() => setIsDeleting(true), delayAfterFullText);
        }
      }, typingSpeed);
    } else if (isDeleting && index >= 0) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, index));
        setIndex(index - 1);
        if (index === 0) {
          setIsDeleting(false);
        }
      }, deletingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

  return (
    <div className="bg-[#ebf0f4] flex items-center">
      <div className="container m-0 px-10 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">

          {/* LEFT CONTENT (unchanged) */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-4xl font-bold text-gray-900 leading-tight">
                L.<span className="text-[#4285f4]">AI</span>.RRY:  {' '} is an intelligent, 
                <span className="text-[#4285f4]">
                  {typedText}
                  <span className="border-r-2 border-cyan-500 animate-pulse ml-1"></span>
                </span>
                <br />
                <span className="text-gray-900">mock-test platform</span>
              </h1>

              <p className="text-2xl text-gray-600 font-medium">
                Stop Studing, Start Mastering
              </p>
            </div>

            <button className="bg-[#4285f4] hover:bg-cyan-500 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl">
              Start Free Mock Test
            </button>

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

          {/* ✅ REPLACED RIGHT SIDE WITH SIMPLE IMAGE SECTION */}
          <div className="md:w-full  mt-10 md:mt-0 clip-triangle">
            <img
              src="../../public/images/hero right.png"
              alt="AI Illustration"
              className="w-full h-[30%] rounded-xl "
            />
                  
          </div>

        </div>
      </div>

    </div>
  );
}
