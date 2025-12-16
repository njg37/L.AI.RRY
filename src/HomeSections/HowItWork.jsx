import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Correct import for Swiper v8+
import "swiper/css";
import StringAnimation from "../common/StringAnimation";

const cards = [
  {
    title: "Attempt Smart Mock Tests and Start Improving",
    image: "/public/images/HowItWork1.png",
  },
  {
    title: "Get AI-Powered Insight Reports",
    image: "/public/images/HowItWork2.png",
  },
  {
    title: "Unlock Your Personalized Growth Plan",
    image: "/public/images/HowItWork3.png",
  },
  {
    title: "Grow Consistently, Perform Confidently",
    image: "/public/images/HowItWork4.png",
  },
];

const HowItWork = () => {
  return (
    <div className="bg-white min-h-[calc(100vh-var(--header-h))] flex flex-col">
      <div className="px-4 sm:px-8 lg:px-10 py-6 sm:py-12 flex-1 flex flex-col">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-left mb-4 text-gray-800">
          How L.Ai.RRY Elevates Your Learning Journey
        </h2>

        {/* Subtitle */}
        <p className="text-gray-700 mb-6 leading-relaxed text-2xl">
          Prepare smarter with AI-powered mock tests, deep performance insights,
          <br /> and category-wise practice sets built for every exam.
        </p>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mt-8 flex-1">
          {cards.map((card, idx) => (
            
            <div
              key={idx}
              className="rounded-xl text-center h-full flex items-end bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${card.image}')` }}
            >
              <div className="w-full flex flex-col items-center bg-transparent backdrop-blur-xl p-4">
                <h3 className="font-semibold text-white mb-2 text-lg sm:text-2xl">
                  {card.title}
                </h3>
              </div>
            </div>
            
           
          ))}
        </div>
        <StringAnimation/>

        {/* Tablet Grid (2 per row) */}
        <div className="hidden sm:grid lg:hidden sm:grid-cols-2 gap-6 mt-8 flex-1">
          {cards.map((card, idx) => (
            
            <div
              key={idx}
              className="rounded-xl text-center h-full flex items-end bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${card.image}')` }}
            >
              <div className="w-full flex flex-col items-center bg-transparent backdrop-blur-xl p-4">
                <h3 className="font-semibold text-white mb-2 text-lg sm:text-2xl">
                  {card.title}
                </h3>
              </div>
            </div>
            
          
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden mt-6">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="rounded-xl text-center h-100 flex items-end bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${card.image}')` }}
                >
                  <div className="w-full flex flex-col items-center bg-transparent backdrop-blur-xl p-4">
                    <h3 className="font-semibold text-white mb-2 text-lg">{card.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
