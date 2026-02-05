import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useInView } from "../hooks/useInView";
import "swiper/css";

const exams = [
  {
    title: "Banking",
    desc: "IBPS, SBI, RRB",
    bg: "/images/bank-bg.jpg",
    color: "bg-emerald-100 text-emerald-700",
    glowColor: "emerald",
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
    color: "bg-blue-100 text-blue-600",
    glowColor: "blue",
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
    color: "bg-amber-100 text-amber-600",
    glowColor: "amber",
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
    color: "bg-rose-100 text-rose-600",
    glowColor: "rose",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" strokeWidth="1.5" />
        <path strokeWidth="1.5" d="M10 9l-2 2 2 2M14 9l2 2-2 2" />
      </>
    ),
  },
];

const ExamSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useInView({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useInView({ threshold: 0.2 });

  return (
    <section className="py-40 bg-gradient-to-br from-blue-50 via-white to-amber-50 flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20 top-20 right-20 animate-float-slow"></div>
        <div className="absolute w-80 h-80 bg-amber-200 rounded-full blur-3xl opacity-15 bottom-20 left-20 animate-float-reverse"></div>
      </div>

      <div className="px-4 sm:px-8 lg:px-10 flex flex-col lg:flex-row gap-12 relative z-10">

        {/* LEFT BLOCK */}
        <div 
          ref={leftRef}
          className={`
            lg:w-1/2 flex flex-col justify-center
            transition-all duration-1000
            ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-gray-900">
            Get exam-ready and{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent animate-gradient-text">
              move ahead
            </span>{" "}
            in your career
          </h2>
          
          <p className={`
            text-gray-700 mb-6 leading-relaxed text-xl sm:text-2xl
            transition-all duration-1000 delay-200
            ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
          `}>
           Crack exams with confidence using AI-powered mock tests, deep performance insights, and targeted practice sets.
          </p>
          
          <button className={`
            text-emerald-600 font-semibold hover:text-emerald-700 
            transition-all duration-300 flex items-center gap-2 group
            ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
          `}
          style={{ transitionDelay: '400ms' }}
          >
            Explore all exam categories 
            <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </div>

        {/* RIGHT BLOCK – Desktop Grid */}
        <div 
          ref={rightRef}
          className="hidden lg:grid lg:grid-cols-2 gap-6 lg:w-1/2"
        >
          {exams.map((exam, idx) => (
            <div
              key={idx}
              className={`
                h-48 rounded-2xl p-5 bg-cover bg-center 
                shadow-md border border-gray-200 
                hover:shadow-2xl hover:scale-105 
                transition-all duration-500
                relative overflow-hidden
                group
                ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ 
                backgroundImage: `url(${exam.bg})`,
                transitionDelay: `${idx * 150}ms`
              }}
            >
              {/* Overlay gradient on hover */}
              <div className={`
                absolute inset-0 bg-gradient-to-br 
                ${exam.glowColor === 'emerald' ? 'from-emerald-500/0 to-emerald-600/0 group-hover:from-emerald-500/20 group-hover:to-emerald-600/30' : ''}
                ${exam.glowColor === 'blue' ? 'from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/20 group-hover:to-blue-600/30' : ''}
                ${exam.glowColor === 'amber' ? 'from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/20 group-hover:to-amber-600/30' : ''}
                ${exam.glowColor === 'rose' ? 'from-rose-500/0 to-rose-600/0 group-hover:from-rose-500/20 group-hover:to-rose-600/30' : ''}
                transition-all duration-500 rounded-2xl
              `}></div>

              {/* Content */}
              <div className="relative z-10">
                <div className={`
                  w-12 h-12 mb-4 flex items-center justify-center 
                  rounded-xl ${exam.color} shadow-sm
                  group-hover:scale-110 group-hover:rotate-6
                  transition-all duration-300
                `}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {exam.icon}
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                  {exam.title}
                </h3>
                <p className="text-sm text-gray-700 group-hover:text-gray-600 transition-colors duration-300">
                  {exam.desc}
                </p>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Grid */}
        <div className="hidden sm:grid lg:hidden sm:grid-cols-2 gap-6 lg:w-1/2">
          {exams.map((exam, idx) => (
            <div
              key={idx}
              className="h-60 rounded-2xl p-5 bg-cover bg-center shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-500 relative overflow-hidden group"
              style={{ backgroundImage: `url(${exam.bg})` }}
            >
              {/* Overlay gradient on hover */}
              <div className={`
                absolute inset-0 bg-gradient-to-br 
                ${exam.glowColor === 'emerald' ? 'from-emerald-500/0 to-emerald-600/0 group-hover:from-emerald-500/20 group-hover:to-emerald-600/30' : ''}
                ${exam.glowColor === 'blue' ? 'from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/20 group-hover:to-blue-600/30' : ''}
                ${exam.glowColor === 'amber' ? 'from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/20 group-hover:to-amber-600/30' : ''}
                ${exam.glowColor === 'rose' ? 'from-rose-500/0 to-rose-600/0 group-hover:from-rose-500/20 group-hover:to-rose-600/30' : ''}
                transition-all duration-500 rounded-2xl
              `}></div>

              <div className="relative z-10">
                <div className={`w-12 h-12 mb-4 flex items-center justify-center rounded-xl ${exam.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
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
                <h3 className="font-semibold text-lg text-gray-900">{exam.title}</h3>
                <p className="text-sm text-gray-700">{exam.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden mt-6 lg:w-1/2">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {exams.map((exam, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="h-48 rounded-2xl p-5 bg-cover bg-center shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                  style={{ backgroundImage: `url(${exam.bg})` }}
                >
                  <div className={`
                    absolute inset-0 bg-gradient-to-br 
                    ${exam.glowColor === 'emerald' ? 'from-emerald-500/0 to-emerald-600/0 group-hover:from-emerald-500/20 group-hover:to-emerald-600/30' : ''}
                    ${exam.glowColor === 'blue' ? 'from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/20 group-hover:to-blue-600/30' : ''}
                    ${exam.glowColor === 'amber' ? 'from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/20 group-hover:to-amber-600/30' : ''}
                    ${exam.glowColor === 'rose' ? 'from-rose-500/0 to-rose-600/0 group-hover:from-rose-500/20 group-hover:to-rose-600/30' : ''}
                    transition-all duration-500 rounded-2xl
                  `}></div>

                  <div className="relative z-10">
                    <div className={`w-12 h-12 mb-4 flex items-center justify-center rounded-xl ${exam.color} shadow-sm`}>
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
                    <h3 className="font-semibold text-lg text-gray-900">{exam.title}</h3>
                    <p className="text-sm text-gray-700">{exam.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      <style jsx>{`
        @keyframes gradientText {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -20px) scale(1.05);
          }
        }

        @keyframes floatReverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-20px, 20px) scale(1.05);
          }
        }

        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradientText 3s ease infinite;
        }

        .animate-float-slow {
          animation: floatSlow 20s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: floatReverse 25s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ExamSection;