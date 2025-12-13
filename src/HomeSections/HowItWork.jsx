import React from 'react';
import { Brain, BarChart3, Route, TrendingUp } from "lucide-react";

const HowItWork = () => {
  return (
    <div className='bg-white pt-30 pb-30'>
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-left ml-4 sm:ml-8 md:ml-10 mb-4 text-gray-800">
          How L.Ai.RRY Elevates Your Learning Journey
        </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed ml-10 text-2xl">
            Prepare smarter with AI-powered mock tests, deep performance
            insights,<br/> and category-wise practice sets built for every exam.
          </p>
      </div>

      <div className="mx-4 lg:mx-10  py-12 rounded-2xl mt-8 lg:mt-15  " >

        <div className="w-full  mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {/* CARD 1 */}
            <div className="  rounded-xl text-center h-full flex bg-cover bg-center bg-no-repeat"   style={{
    backgroundImage: "url('/public/images/HowItWork1.png')"
  }}>
              <div className="w-full flex flex-col items-center bg-transparent backdrop-blur-">
                {/* <div className="w-10 h-10 sm:w-12 sm:h-12 border border-purple-500 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div> */}

                <h3 className="font-semibold bg-transparent backdrop-blur-xl mt-29 text-white mb-2 text-xl sm:text-2xl   ">
                  Attempt Smart Mock Tests and Start Improving
                </h3>

                {/* <p className="text-gray-600 text-xs leading-relaxed">
                  Real exam structure, timing, and difficulty patterns.
                </p> */}
              </div>
            </div>

            {/* CARD 2 */}
            <div className=" bg-white backdrop-blur-xs rounded-xl border border-gray-200 text-center h-full flex bg-cover bg-center bg-no-repeat"
            style={{
    backgroundImage: "url('/public/images/HowItWork2.png')"
  }}>

              <div className="w-full flex flex-col items-center">
                {/* <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg border border-blue-500 flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div> */}

                <h3 className="font-semibold bg-transparent backdrop-blur-xl mt-29 text-white mb-2 text-lg sm:text-2xl ">
                  Get AI-Powered Insight Reports
                </h3>

                {/* <p className="text-gray-600 text-xs leading-relaxed">
                  Accuracy, timing, weak concepts, confidence patterns & more.
                </p> */}
              </div>
            </div>

            {/* CARD 3 */}
            <div className=" bg-white backdrop-blur-xs rounded-xl border border-gray-200 text-center h-full flex bg-cover bg-center bg-no-repeat"            style={{
    backgroundImage: "url('/public/images/HowItWork3.png')"
  }}>
              <div className="w-full flex flex-col items-center">
                {/* <div className="w-10 h-10 sm:w-12 sm:h-12 border border-green-500 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Route className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div> */}

                <h3 className="font-semibold bg-transparent backdrop-blur-xl mt-29 text-white mb-2 text-lg sm:text-2xl ">
                  Unlock Your Personalized Growth Plan
                </h3>

                {/* <p className="text-gray-600 text-xs leading-relaxed">
                  AI suggests what to study next + weekly roadmap.
                </p> */}
              </div>
            </div>

            {/* CARD 4 */}
            <div className=" bg-white backdrop-blur-xs rounded-xl border border-gray-200 text-center h-full flex bg-cover bg-center bg-no-repeat"             style={{
    backgroundImage: "url('/public/images/HowItWork4.png')"
  }}>
              <div className="w-full flex flex-col items-center">
                {/* <div className="w-10 h-10 sm:w-12 sm:h-12 border border-red-500 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div> */}

                <h3 className="font-semibold bg-transparent backdrop-blur-xl mt-29 text-white mb-2 text-lg sm:text-2xl ">
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

    </div>
  );
};

export default HowItWork;
