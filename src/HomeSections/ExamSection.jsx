import React from "react";

const exams = [
  {
    title: "Banking",
    desc: "IBPS, SBI, RRB",
    bg: "/images/bank-bg.jpg",
    color: "bg-green-100 text-green-700",
    icon: (
      <path
        strokeWidth="1.5"
        d="M3 10h18M5 10V6l7-4 7 4v4M5 22v-8m4 8v-8m4 8v-8m4 8v-8"
      />
    ),
  },
  {
    title: "Government Exams",
    desc: "Railway, State Level, Defence",
    bg: "/images/govt-bg.jpg",
    color: "bg-blue-100 text-blue-700",
    icon: (
      <path
        strokeWidth="1.5"
        d="M12 3l8 4v2H4V7l8-4zM4 21h16M6 21v-8m4 8v-8m4 8v-8m4 8v-8"
      />
    ),
  },
  {
    title: "SSC",
    desc: "CGL, CHSL, GD",
    bg: "/images/ssc-bg.jpg",
    color: "bg-yellow-100 text-yellow-700",
    icon: (
      <>
        <path
          strokeWidth="1.5"
          d="M12 3l6 3v4c0 4-3 8-6 8s-6-4-6-8V6l6-3z"
        />
        <path strokeWidth="1.5" d="M9 18l-2 4m8-4l2 4" />
      </>
    ),
  },
  {
    title: "Tech Prep",
    desc: "Insyssky, Oraride",
    bg: "/images/tech-bg.jpg",
    color: "bg-purple-100 text-purple-700",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" strokeWidth="1.5" />
        <path strokeWidth="1.5" d="M10 9l-2 2 2 2M14 9l2 2-2 2" />
      </>
    ),
  },
];

const ExamSection = () => {
  return (
    <section className=" py-48 bg-[#b9f8cf] justify-end items-start ">
      <div className="w-full mx-10 pr-17 flex flex-col lg:flex-row gap-12 ">

        {/* LEFT BLOCK    */}
        <div className="lg:w-1/2 ">
          <h2 className="text-5xl font-bold mb-4 leading-15">
            Get exam-ready and move ahead in your career
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-2xl">
            Prepare smarter with AI-powered mock tests, deep performance
            insights, and category-wise practice sets built for every exam.
          </p>

          <button className="text-green-700 font-semibold hover:text-green-900 transition">
            Explore all exam categories →
          </button>
        </div>

        {/* RIGHT BLOCK – CARDS */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-hidden ">
          {exams.map((exam, i) => (
            <div
              key={i}
              className="h-48 rounded-2xl  p-5 bg-cover bg-center shadow-md border hover:shadow-lg transition"
              style={{ backgroundImage: `url(${exam.bg})` }}
            >
              <div
                className={`w-12 h-12 mb-4 flex items-center justify-center rounded-xl ${exam.color}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {exam.icon}
                </svg>
              </div>

              <h3 className="font-semibold text-lg text-black">
                {exam.title}
              </h3>
              <p className="text-sm text-black">{exam.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExamSection;
