import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useInView } from "../hooks/useInView";
import "swiper/css";

// --- Optimized SVG Components ---
// Removed the base background rect fill to allow the Card's background to show through
const MockTestSVG = React.memo(({ isVisible }) => (
  <svg viewBox="0 0 400 300" className={`w-full h-full ${!isVisible ? "paused-anim" : ""}`}>
    <defs>

    </defs>
    <rect width="400" height="300" fill="url(#grad1)" />
    <rect x="120" y="50" width="160" height="200" rx="8" fill="#fbbf24" opacity="0.15" className="animate-pulse-subtle" />
    <rect x="130" y="60" width="140" height="180" rx="6" fill="white" stroke="#fbbf24" strokeWidth="3" />
    <circle cx="155" cy="95" r="8" fill="none" stroke="#f59e0b" strokeWidth="2" />
    <circle cx="155" cy="130" r="8" fill="none" stroke="#f59e0b" strokeWidth="2" />
    <circle cx="155" cy="165" r="8" fill="#f59e0b" className="animate-scale-in" />
    <path d="M150 165l4 4 8-9" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-draw-check" />
    <line x1="175" y1="95" x2="240" y2="95" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" />
    <line x1="175" y1="130" x2="240" y2="130" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" />
    <line x1="175" y1="165" x2="240" y2="165" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" className="animate-slide-in" />
    <circle cx="280" cy="80" r="3" fill="#f59e0b" opacity="0.6" className="animate-twinkle" />
    <circle cx="295" cy="110" r="2" fill="#fbbf24" opacity="0.8" className="animate-twinkle-delayed" />
    <circle cx="105" cy="200" r="2.5" fill="#f59e0b" opacity="0.7" className="animate-twinkle-slow" />
  </svg>
));

const InsightReportSVG = React.memo(({ isVisible }) => (
  <svg viewBox="0 0 400 300" className={`w-full h-full ${!isVisible ? "paused-anim" : ""}`}>
    <defs>

    </defs>
    <rect width="400" height="300" fill="url(#grad2)" />
    <rect x="80" y="60" width="240" height="180" rx="12" fill="white" stroke="#3b82f6" strokeWidth="3" className="animate-fade-in" />
    <rect x="110" y="160" width="30" height="50" rx="4" fill="#93c5fd" opacity="0.7" className="animate-bar-grow delay-1" />
    <rect x="150" y="130" width="30" height="80" rx="4" fill="#60a5fa" opacity="0.8" className="animate-bar-grow delay-2" />
    <rect x="190" y="100" width="30" height="110" rx="4" fill="#3b82f6" opacity="0.9" className="animate-bar-grow delay-3" />
    <rect x="230" y="80" width="30" height="130" rx="4" fill="#2563eb" className="animate-bar-grow delay-4" />
    <rect x="270" y="60" width="30" height="150" rx="4" fill="#1d4ed8" className="animate-bar-grow delay-5" />
    <path d="M105 175l40-15 40-30 40-25 40-30 40-25" stroke="#4f46e5" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" className="animate-draw-line" />
    <circle cx="125" cy="175" r="5" fill="#3b82f6" className="animate-pop-in delay-6" />
    <circle cx="205" cy="130" r="5" fill="#3b82f6" className="animate-pop-in delay-7" />
    <circle cx="285" cy="75" r="5" fill="#1d4ed8" className="animate-pop-in delay-8" />
  </svg>
));

const GrowthPlanSVG = React.memo(({ isVisible }) => (
  <svg viewBox="0 0 400 300" className={`w-full h-full ${!isVisible ? "paused-anim" : ""}`}>
    <defs>

    </defs>
    <rect width="400" height="300" fill="url(#grad3)" />
    <path d="M100 220Q150 190 200 160T300 100" stroke="#10b981" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.3" strokeDasharray="8,8" className="animate-dash" />
    <path d="M100 220Q150 190 200 160T300 100" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" className="animate-draw-path" />
    <circle cx="100" cy="220" r="18" fill="white" stroke="#10b981" strokeWidth="3" className="animate-scale-in delay-2" />
    <circle cx="100" cy="220" r="10" fill="#10b981" className="animate-scale-in delay-3" />
    <circle cx="200" cy="160" r="18" fill="white" stroke="#059669" strokeWidth="3" className="animate-scale-in delay-5" />
    <circle cx="200" cy="160" r="10" fill="#059669" className="animate-scale-in delay-6" />
    <path d="M195 160l4 5 8-12" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-draw-check delay-7" />
    <circle cx="300" cy="100" r="18" fill="white" stroke="#0d9488" strokeWidth="3" className="animate-scale-in delay-8" />
    <circle cx="300" cy="100" r="10" fill="#0d9488" className="animate-scale-in delay-9" />
    <circle cx="300" cy="100" r="25" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.3" className="animate-ripple" />
    <circle cx="300" cy="100" r="32" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.2" className="animate-ripple-delayed" />
  </svg>
));

const PerformanceSVG = React.memo(({ isVisible }) => (
  <svg viewBox="0 0 400 300" className={`w-full h-full ${!isVisible ? "paused-anim" : ""}`}>
    <defs>

    </defs>
    <rect width="400" height="300" fill="url(#grad4)" />
    <ellipse cx="200" cy="230" rx="60" ry="8" fill="#f43f5e" opacity="0.15" className="animate-pulse-subtle" />
    <rect x="180" y="210" width="40" height="20" rx="2" fill="#f43f5e" className="animate-slide-up delay-1" />
    <rect x="170" y="230" width="60" height="10" rx="2" fill="#db2777" className="animate-slide-up delay-2" />
    <path d="M160 210l5-60q0-10 10-10h50q10 0 10 10l5 60z" fill="#f43f5e" opacity="0.9" className="animate-scale-in delay-3" />
    <path d="M165 150l5 10h60l5-10" fill="#ec4899" opacity="0.3" />
    <path d="M160 180q-15 0-15-15t15-15" stroke="#f43f5e" strokeWidth="3" fill="none" className="animate-draw-handle-left delay-4" />
    <path d="M240 180q15 0 15-15t-15-15" stroke="#f43f5e" strokeWidth="3" fill="none" className="animate-draw-handle-right delay-4" />
    <path d="M200 170l5 10 11 1-8 8 2 11-10-6-10 6 2-11-8-8 11-1z" fill="white" opacity="0.9" className="animate-star-shine delay-6" />
    <path d="M130 120l3 6 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1z" fill="#f43f5e" opacity="0.4" className="animate-float-star" />
    <path d="M270 100l3 6 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1z" fill="#ec4899" opacity="0.5" className="animate-float-star-delayed" />
  </svg>
));

// --- Configuration ---
const cards = [
  { 
    title: "Attempt Smart Mock Tests and Start Improving", 
    gradient: "from-amber-400 via-yellow-500 to-amber-600", 
    bgClass: "bg-[#fffbeb]", // Very light amber
    Component: MockTestSVG 
  },
  { 
    title: "Get AI-Powered Insight Reports instantly delivered", 
    gradient: "from-blue-500 via-blue-600 to-indigo-600", 
    bgClass: "bg-[#eff6ff]", // Very light blue
    Component: InsightReportSVG 
  },
  { 
    title: "Unlock Your Personalized Growth Plan", 
    gradient: "from-emerald-500 via-green-600 to-teal-600", 
    bgClass: "bg-[#ecfdf5]", // Very light emerald
    Component: GrowthPlanSVG 
  },
  { 
    title: "Grow Consistently, Perform Confidently", 
    gradient: "from-rose-500 via-pink-600 to-rose-600", 
    bgClass: "bg-[#fff1f2]", // Very light rose
    Component: PerformanceSVG 
  },
];

// --- Memoized Card Component ---
const Card = React.memo(({ card, index, isVisible }) => {
  const CardSVG = card.Component;
  return (
    <div
      className={`rounded-2xl text-center h-full flex flex-col overflow-hidden shadow-md transition-all duration-500 border border-gray-100 group relative transform-gpu ${card.bgClass} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 150}ms`, contain: "paint" }}
    >
      <div className="flex-1 p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 relative z-10">
        <CardSVG isVisible={isVisible} />
      </div>
      
      <div className={`w-full flex flex-col items-center bg-gradient-to-br ${card.gradient} p-5 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <h3 className="font-bold text-white text-base sm:text-lg drop-shadow-md leading-tight relative z-10">
          {card.title}
        </h3>
      </div>
    </div>
  );
});

const HowItWork = () => {
  const { ref: titleRef, isVisible: titleVisible } = useInView({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useInView({ threshold: 0.1 });

  const desktopCards = useMemo(() => cards.map((card, idx) => (
    <Card key={idx} card={card} index={idx} isVisible={cardsVisible} />
  )), [cardsVisible]);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-[calc(100vh-var(--header-h))] flex flex-col relative overflow-hidden">
      {/* Background blobs - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-10 top-10 right-20 animate-float-slow" />
        <div className="absolute w-80 h-80 bg-emerald-300 rounded-full blur-3xl opacity-10 bottom-20 left-20 animate-float-reverse" />
      </div>

      <div className="px-4 sm:px-8 lg:px-10 py-6 sm:py-12 flex-1 flex flex-col relative z-10">
        <div ref={titleRef} className={`transition-all duration-1000 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-left mb-4 text-gray-900">
            How L.Ai.RRY <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-600 bg-clip-text text-transparent animate-gradient-text">Elevates</span> Your Learning Journey
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-xl sm:text-xl">
            Prepare smarter with AI-powered mock tests, deep performance insights, <br className="hidden sm:block" /> and category-wise practice sets built for every exam.
          </p>
        </div>

        {/* Desktop */}
        <div ref={cardsRef} className="hidden lg:grid lg:grid-cols-4 gap-6 flex-1">
          {desktopCards}
        </div>

        {/* Tablet */}
        <div className="hidden sm:grid lg:hidden sm:grid-cols-2 gap-6 mt-8 flex-1">
          {cards.map((card, idx) => <Card key={idx} card={card} index={idx} isVisible={cardsVisible} />)}
        </div>

        {/* Mobile */}
        <div className="sm:hidden mt-6">
          <Swiper modules={[Autoplay]} spaceBetween={16} slidesPerView={1} loop autoplay={{ delay: 3500 }}>
            {cards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <Card card={card} index={0} isVisible={true} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .paused-anim * { animation-play-state: paused !important; }
        
        @keyframes floatSlow { 0%, 100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(30px, -30px, 0); } }
        @keyframes scaleIn { 0% { transform: scale3d(0,0,1); opacity: 0; } to { transform: scale3d(1,1,1); opacity: 1; } }
        @keyframes barGrow { 0% { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes gradientText { 0%, 100% { background-position: 0 50%; } 50% { background-position: 100% 50%; } }

        .animate-float-slow { animation: floatSlow 20s ease-in-out infinite; will-change: transform; }
        .animate-float-reverse { animation: floatSlow 25s ease-in-out infinite reverse; will-change: transform; }
        .animate-scale-in { animation: scaleIn .6s ease-out forwards; will-change: transform; }
        .animate-bar-grow { animation: barGrow 1s ease-out forwards; transform-origin: bottom; will-change: transform; }
        .animate-gradient-text { background-size: 200% auto; animation: gradientText 3s ease infinite; }

        /* Existing utility animations kept for visual fidelity */
        @keyframes pulseSubtle { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.25; } }
        @keyframes twinkle { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.3); } }
        @keyframes drawLine { 0% { stroke-dasharray: 0, 500; } to { stroke-dasharray: 500, 0; } }
        @keyframes ripple { 0% { r: 25; opacity: 0.3; } to { r: 35; opacity: 0; } }
        
        .animate-pulse-subtle { animation: pulseSubtle 3s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
        .animate-draw-line { animation: drawLine 2s ease-out forwards; }
        .animate-ripple { animation: ripple 2s ease-out infinite; }
        
        .delay-1 { animation-delay: 0.1s; } .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; } .delay-6 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
};

export default HowItWork;