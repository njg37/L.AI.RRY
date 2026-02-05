import React from "react";
import { useInView } from "../hooks/useInView";

const JoinUs = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useInView({ threshold: 0.2 });

  return (
    <section 
      ref={sectionRef}
      className="w-full min-h-[92vh] bg-gradient-to-br from-blue-50 via-white to-amber-50 py-16 px-4 sm:px-8 lg:px-10 flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-float-reverse"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-1/4 left-1/4 animate-float-particle"></div>
        <div className="absolute w-3 h-3 bg-emerald-400 rounded-full top-3/4 left-1/3 animate-float-particle-delayed"></div>
        <div className="absolute w-2 h-2 bg-amber-400 rounded-full top-1/2 right-1/4 animate-float-particle-slow"></div>
        <div className="absolute w-3 h-3 bg-rose-400 rounded-full bottom-1/4 right-1/3 animate-float-particle"></div>
      </div>
      
      {/* LEFT ROBOT with animation */}
      {/* <div className={`
        hidden md:block absolute left-4 lg:left-10 top-1/2 -translate-y-1/2
        transition-all duration-1000 delay-300
        ${sectionVisible ? 'opacity-90 translate-x-0' : 'opacity-0 -translate-x-20'}
      `}>
        <img
          className="w-20 lg:w-32 animate-bounce-slow hover:scale-110 transition-transform duration-300"
          alt="AI Robot"
          src={`data:image/svg+xml;utf8,
          <svg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='100' cy='100' r='80' fill='%233b82f6'/>
            <rect x='60' y='60' width='80' height='60' rx='12' fill='%23ffffff'/>
            <circle cx='85' cy='90' r='9' fill='%233b82f6'/>
            <circle cx='115' cy='90' r='9' fill='%233b82f6'/>
            <rect x='78' y='118' width='44' height='10' rx='5' fill='%233b82f6'/>
          </svg>`}
        />
      </div> */}

      {/* RIGHT ROBOT with animation */}
      {/* <div className={`
        hidden md:block absolute right-4 lg:right-10 top-1/2 -translate-y-1/2
        transition-all duration-1000 delay-300
        ${sectionVisible ? 'opacity-90 translate-x-0' : 'opacity-0 translate-x-20'}
      `}>
        <img
          className="w-20 lg:w-32 animate-bounce-slow-delayed hover:scale-110 transition-transform duration-300"
          alt="AI Robot"
          src={`data:image/svg+xml;utf8,
          <svg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
            <rect x='40' y='40' width='120' height='120' rx='20' fill='%23f59e0b'/>
            <circle cx='80' cy='90' r='12' fill='%23ffffff'/>
            <circle cx='120' cy='90' r='12' fill='%23ffffff'/>
            <rect x='70' y='120' width='60' height='12' rx='6' fill='%23ffffff'/>
          </svg>`}
        />
      </div> */}

      <div className={`
        max-w-[800px] text-center relative z-10
        transition-all duration-1000
        ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}>
        {/* Heading with gradient animation */}
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
          Join Us & Build the{" "}
          <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-600 bg-clip-text text-transparent animate-gradient-text">
            Future
          </span>{" "}
          With Us
        </h2>

        {/* Description */}
        <p className={`
          text-gray-700 mb-6 sm:mb-8 leading-relaxed text-xl sm:text-2xl
          transition-all duration-1000 delay-200
          ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}>
          Be a part of our growing community of learners, creators, and innovators.
          Learn new skills, build real projects, and explore opportunities with AI-powered learning.
        </p>

        {/* Key Points with stagger animation */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-gray-700 mb-6 sm:mb-8 text-lg sm:text-xl">
          {[
            { color: "emerald", text: "Learn with expert-designed AI tools", delay: "300ms" },
            { color: "blue", text: "Work on real-world inspired projects", delay: "400ms" },
            { color: "amber", text: "Grow your skills with a supportive community", delay: "500ms" },
            { color: "rose", text: "Unlock opportunities in tech & innovation", delay: "600ms" },
          ].map((item, index) => (
            <div
              key={index}
              className={`
                flex items-center gap-3 group
                transition-all duration-700
                ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
              `}
              style={{ transitionDelay: item.delay }}
            >
              <span className={`
                text-${item.color}-600 font-bold text-2xl
                group-hover:scale-150 transition-transform duration-300
              `}>
                •
              </span>
              <p className="group-hover:translate-x-2 transition-transform duration-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Button with advanced animations */}
        <div className={`
          transition-all duration-1000 delay-700
          ${sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}>
          <button className="
            relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white 
            px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold 
            hover:from-blue-700 hover:to-emerald-700 
            transition-all duration-300
            shadow-lg hover:shadow-2xl 
            transform hover:scale-110 hover:-translate-y-1
            group
            overflow-hidden
          ">
            {/* Button shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shine"></span>
            
            {/* Button glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></span>
            
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }

        @keyframes floatReverse {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-30px, 30px);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.3;
          }
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gradientText {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: floatReverse 20s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 10s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: floatParticle 4s ease-in-out infinite;
        }

        .animate-float-particle-delayed {
          animation: floatParticle 5s ease-in-out infinite 1s;
        }

        .animate-float-particle-slow {
          animation: floatParticle 6s ease-in-out infinite 2s;
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }

        .animate-bounce-slow-delayed {
          animation: bounceSlow 3s ease-in-out infinite 1.5s;
        }

        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradientText 3s ease infinite;
        }

        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default JoinUs;