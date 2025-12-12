import React from "react";

const ExamsCoveredCard = ({ exam }) => {
  return (
    <div className="bg-transparent rounded-xl w-30 hover:shadow-lg transition-all duration-300">
      <img
        src={exam.img}
        // alt={exam.title}
        className="w-full h-20 object-fill rounded-lg  "
      />
      {/* <h3 className="text-lg font-semibold">{exam.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{exam.desc}</p> */}
    </div>
  );
};

export default ExamsCoveredCard;
