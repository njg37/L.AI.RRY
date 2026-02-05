import React from "react";
import { useInView } from "../hooks/useInView";
const SubsidiaryLogos = () => {
  const logos = [
    { src: "/public/images/Insyssky-logo.png", alt: "Insyssky", delay: "0ms" },
    { src: "/public/images/Ora-ride-logo.png", alt: "OraRide", delay: "100ms" },
    { src: "/public/images/Startup-tripura-logo.png", alt: "Startup Tripura", delay: "200ms" },
    { src: "/public/images/Talkeng-logo.png", alt: "TalkEng", delay: "300ms" },
    { src: "/public/images/Supreme-incubator-logo.png", alt: "Supreme Incubator", delay: "400ms" },
  ];
  const { ref: titleRef, isVisible: titleVisible } = useInView({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useInView({ threshold: 0.1 });
  return (
    <div className="py-20 bg-gradient-to-r from-emerald-50 via-blue-50 to-rose-50 overflow-hidden px-4 md:px-16 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 -top-32 -left-32 animate-float"></div>
        <div className="absolute w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-float-delayed"></div>
      </div>

      {/* Section Title with animation */}
      <div
ref={titleRef}

          className={`transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
>
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16 animate-fade-in-down">
        Our Recent Clients & Partners
      </h2>
      </div>

      {/* LOGOS GRID with stagger animation */}
 <div ref={cardsRef} className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-5 relative z-10">
  {logos.map((logo, index) => (
    <div
      key={index}
      // Add the animate-fade-in-up class for animation
      className={`group ${cardsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
      style={{ animationDelay: logo.delay }}
    >
      <div className="relative">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-rose-400 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        
        {/* Logo container */}
        <div className="relative bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/60 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-16 md:h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  ))}
</div>


      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(5deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(-5deg);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(-40px, 30px) rotate(-7deg);
          }
          66% {
            transform: translate(25px, -25px) rotate(7deg);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SubsidiaryLogos;