import React from "react";

const ExamSection = () => {
  return (
    <div className="bg-[#b9f8cf] text-gray-900 py-20 px-6 ">
      <div className="max-w-6xl  flex flex-col md:flex-row gap-12">
        {/* LEFT BLOCK */}
        <div className=" flex flex-col ">
          <h2 className="text-4xl font-bold mb-4 ml-5">
            Get exam-ready and move ahead in your career
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed ml-5">
            Prepare smarter with AI-powered mock tests, deep performance
            insights, and category-wise practice sets built for every exam.
          </p>

          <button className="text-green-700 font-semibold hover:text-green-900 transition text-left ml-5">
            Explore all exam categories →
          </button>
        </div>

        {/* RIGHT BLOCK – CARDS */}
        <div className="w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* CARD 1 – Banking */}
          <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-200 hover:shadow-lg transition ml-10 w-80">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-green-100 text-green-700">
              {/* Bank Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.5"
                  d="M3 10h18M5 10V6l7-4 7 4v4M5 22v-8m4 8v-8m4 8v-8m4 8v-8"
                />
              </svg>
            </div>

            <h3 className="font-semibold text-lg text-gray-900">Banking</h3>
            <p className="text-gray-600 text-sm">IBPS, SBI, RRB</p>
          </div>

          {/* CARD 2 – Government Exams */}
          <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-200 hover:shadow-lg transition ml-45 w-80">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              {/* Government Building Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.5"
                  d="M12 3l8 4v2H4V7l8-4zM4 21h16M6 21v-8m4 8v-8m4 8v-8m4 8v-8"
                />
              </svg>
            </div>

            <h3 className="font-semibold text-lg text-gray-900">
              Government Exams
            </h3>
            <p className="text-gray-600 text-sm">
              Railway, State Level, Defence
            </p>
          </div>

          {/* CARD 3 – SSC */}
          <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-200 hover:shadow-lg transition ml-10 w-80">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
              {/* Certificate / Badge Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="1.5"
                  d="M12 3l6 3v4c0 4-3 8-6 8s-6-4-6-8V6l6-3z"
                />
                <path strokeWidth="1.5" d="M9 18l-2 4m8-4l2 4" />
              </svg>
            </div>

            <h3 className="font-semibold text-lg text-gray-900">SSC</h3>
            <p className="text-gray-600 text-sm">CGL, CHSL, GD</p>
          </div>

          {/* CARD 4 – Tech Prep */}
          <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-200 hover:shadow-lg transition ml-45 w-80">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-purple-100 text-purple-700">
              {/* Laptop + Code Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="12"
                  rx="2"
                  strokeWidth="1.5"
                />
                <path
                  strokeWidth="1.5"
                  d="M2 18h20M10 9l-2 2 2 2M14 9l2 2-2 2"
                />
              </svg>
            </div>

            <h3 className="font-semibold text-lg text-gray-900">
              Campus + Skill <span className="text-green-700">(Tech Prep)</span>
            </h3>
            <p className="text-gray-600 text-sm">
              Aptitude, Coding, Interview Prep
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSection;
