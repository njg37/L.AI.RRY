import React from "react";

const SubsidiaryLogos = () => {
  return (
    <div className="py-16 bg-green-200 overflow-hidden px-4 md:px-16">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
        Our Recent Clients & Partners
      </h2>

      {/* LOGOS GRID */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* 1 – Insyssky */}
        <img
          src="/public/images/Insyssky-logo.png"
          alt="Insyssky"
          className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition"
        />

        {/* 2 – OraRide */}
        <img
          src="/public/images/Ora-ride-logo.png"
          alt="OraRide"
          className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition"
        />

        {/* 3 – Startup Tripura */}
        <img
          src="/public/images/Startup-tripura-logo.png"
          alt="Startup Tripura"
          className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition"
        />

        {/* 4 – TalkEng */}
        <img
          src="/public/images/Talkeng-logo.png"
          alt="TalkEng"
          className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition"
        />

        {/* 5 – Supreme Incubator */}
        <img
          src="/public/images/Supreme-incubator-logo.png"
          alt="Supreme Incubator"
          className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition"
        />
      </div>

      {/* Keep the animation style commented as reference */}
      <style>
        {/* {`
        .animate-slide {
          animation: slide 18s linear infinite;
        }

        @keyframes slide {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        `} */}
      </style>
    </div>
  );
};

export default SubsidiaryLogos;
