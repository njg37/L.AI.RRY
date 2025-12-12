import React from "react";
import StarRating from "./StarRating";
const TestimonialCard = ({ testimonialData }) => {
  return (
    <div className="gap-5">
    <div className="bg-gray-100 border border-green-500 overflow-hidden rounded-2xl drop-shadow-md h-[330px] flex flex-col  ">
      <img
        key={testimonialData.id}
        src={testimonialData.linkImg}
        className="h-20 w-20 rounded-full object-cover mt-6 ml-6"
      />
      <div className="p-5 ">
        <p className="text-md leading-relaxed">
          <span className=" text-2xl text-green-500 ">❝ </span>
          {testimonialData.title}

          <span className=" text-2xl text-green-500 align-bottom"> ❞</span>
        </p>

        
      </div>
      {/* <h3 className="p-5 text-xl">{testimonialData.price}</h3> */}

      <div className="absolute top-0 bg-transparent mt-9 ml-27 px-2 py=[2.5px] rounded font-bold">
        {testimonialData.category}
        <div className="text-xs font-normal">{testimonialData.date}</div>
        <div className="text-xs font-normal"><StarRating rating={testimonialData} /></div>
      </div>
    </div>
    </div>
  );
};

export default TestimonialCard;
