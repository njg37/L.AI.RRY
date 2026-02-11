import React from "react";

const ExamsCoveredCard = ({ exam }) => {
  return (
    <div className="bg-transparent h-22 flex items-center justify-center hover:shadow-lg transition-all duration-300">
      <img
        src={exam.img}
        // alt={exam.title}
        className="max-h-16 max-w-full object-contain  "
      />
      {/* <h3 className="text-lg font-semibold">{exam.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{exam.desc}</p> */}
    </div>
  );
};

export default ExamsCoveredCard;
