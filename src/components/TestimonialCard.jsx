import React from "react";
import StarRating from "./StarRating";

const TestimonialCard = ({ testimonialData }) => {
  return (
    <div className="w-full h-full px-2">
      <div className="relative bg-white border-2 border-blue-300 overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:border-emerald-400 p-6 min-h-[300px]">

        {/* Top Section */}
        <div className="flex items-start gap-4 mb-4 flex-shrink-0">

          <img
            src={testimonialData.linkImg}
            alt="profile"
            className="h-20 w-20 rounded-full object-cover ring-2 ring-amber-400 ring-offset-2 flex-shrink-0"
          />

          <div className="flex flex-col flex-1">
            <p className="font-bold text-gray-800 text-base">
              {testimonialData.category}
            </p>

            <p className="text-xs text-gray-500 mb-1">
              {testimonialData.date}
            </p>

            <StarRating
              rating={testimonialData.rating}
              rateScore={testimonialData.rateScore}
            />
          </div>

        </div>

        {/* Testimonial Text */}
        <div className="flex-1 flex items-start">
          <p className="text-md leading-relaxed text-gray-700">
            <span className="text-2xl text-blue-500 font-bold">❝ </span>
            {testimonialData.title}
            <span className="text-2xl text-blue-500 font-bold"> ❞</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default TestimonialCard;