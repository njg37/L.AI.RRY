import React from "react";
import StarRating from "./StarRating";

const TestimonialCard = ({ testimonialData }) => {
  return (
    <div className="gap-5">
      <div className="bg-white border-2 border-blue-300 overflow-hidden rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-300 h-[290px] flex flex-col hover:border-emerald-400">
        <img
          key={testimonialData.id}
          src={testimonialData.linkImg}
          className="h-20 w-20 rounded-full object-cover mt-6 ml-6 ring-2 ring-amber-400 ring-offset-2"
        />
        <div className="p-5">
          <p className="text-md leading-relaxed text-gray-700">
            <span className="text-2xl text-blue-500 font-bold">❝ </span>
            {testimonialData.title}
            <span className="text-2xl text-blue-500 align-bottom font-bold"> ❞</span>
          </p>
        </div>

        <div className="absolute top-0 bg-transparent mt-9 ml-27 px-2 py=[2.5px] rounded font-bold text-gray-800">
          {testimonialData.category}
          <div className="text-xs font-normal text-gray-600">{testimonialData.date}</div>
          <div className="text-xs font-normal">
            <StarRating rating={testimonialData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;