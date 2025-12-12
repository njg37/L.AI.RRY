import React from 'react';
import { Brain, BarChart3, Route, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className='bg-yellow-100 pt-20 pb-15'>
      <div >
        <h2 className=" text-4xl font-bold text-left ml-10 mb-4 text-gray-800">
           How L.Ai.RRY Elevates Your Learning Journey

        </h2>
      </div>

      <div className="mx-10 py-12 rounded-2xl  mt-10  bg-green-200 shadow-xl bg-cover bg-center bg-no-repeat"   >
        
        <div className="w-[1370px] mx-auto  ">
          <div className="grid md:grid-cols-4 gap-6 ">

            {/* CARD 1 */}
            <div className="p-6 bg-yellow-100 backdrop-blur-xs rounded-xl   text-center h-full flex">
              <div className="w-12 h-12 border border-purple-500 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6  text-purple-600" />
              </div>

              <h3 className="font-semibold text-black mb-2 text-sm mt-4 ml-2">
                Attempt Smart Mock Tests
              </h3>

              {/* <p className="text-gray-600 text-xs leading-relaxed">
                Real exam structure, timing, and difficulty patterns.
              </p> */}
            </div>

            {/* CARD 2 */}
            <div className="p-6 bg-yellow-100 backdrop-blur-xs rounded-xl border border-gray-200 text-center h-full flex">
              <div className="w-12 h-12 bg-blue-100 rounded-lg border border-blue-500 flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>

              <h3 className="font-semibold text-black mb-2 text-sm mt-4 ml-2">
                Get AI-Powered Insight Reports
              </h3>

              {/* <p className="text-gray-600 text-xs leading-relaxed">
                Accuracy, timing, weak concepts, confidence patterns & more.
              </p> */}
            </div>

            {/* CARD 3 */}
            <div className="p-6 bg-yellow-100 backdrop-blur-xs rounded-xl border border-gray-200 text-center h-full flex">
              <div className="w-12 h-12 border border-green-500 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Route className="w-6 h-6 text-green-600" />
              </div>

              <h3 className="font-semibold text-black mb-2 text-sm mt-3 ml-2">
                Unlock Your Personalized Growth Plan
              </h3>

              {/* <p className="text-gray-600 text-xs leading-relaxed">
                AI suggests what to study next + weekly roadmap.
              </p> */}
            </div>

            {/* CARD 4 */}
            <div className="p-6 bg-yellow-100 backdrop-blur-xs rounded-xl border border-gray-200 text-center h-full flex">
              <div className="w-12 h-12 border border-red-500 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>

              <h3 className="font-semibold text-black mb-2 text-sm mt-1 ml-2">
                Grow Consistently, Perform Confidently
              </h3>

              {/* <p className="text-gray-600 text-xs leading-relaxed">
                Improve with every test & track your progress visually.
              </p> */}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default HowItWorks;
