import React from "react";
import { useInView } from "../hooks/useInView";
import {
  Building,
  FileText,
  Award,
} from "lucide-react";

import ExamsSliderView from "../components/ExamsSliderView";

const ExamsCovered = () => {
  // const { ref, isVisible } = useInView({ threshold: 0.2 });

  // const exams = [
  //   { id: 1, title: "SBI PO", icon: Building },
  //   { id: 2, title: "SBI Clerk", icon: FileText },
  //   { id: 3, title: "IBPS RRB Clerk", icon: FileText },
  //   { id: 4, title: "IBPS RRB PO", icon: Award },
  //   { id: 5, title: "IBPS PO", icon: Award },
  //   { id: 6, title: "IBPS Clerk", icon: FileText },
  // ];

  return (
    <div className="items-start bg-white  backdrop-blur-sm mt-1">
      {/* Heading */}
      {/* <div className="pt-50">
        <h2 className="text-4xl font-bold text-left text-gray-800">
          Exams Coverage
        </h2> */}
      {/* </div> */}
              <div className="">
          <ExamsSliderView />
        </div>

      {/* Static Cards Grid */}
      {/* <div ref={ref} className="bg-[#ebf0f4] pt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {exams.map((exam, index) => {
            const Icon = exam.icon;

            return (
              <div
                key={exam.id}
                className={`
                  bg-[#1f3453] rounded-lg p-4 h-15 border-[#4285f4] border-2
                  flex items-center justify-start gap-3
                  shadow-md hover:shadow-xl
                  transition-all duration-700 transform
                  hover:-translate-y-1
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-10 h-6 text-white" />
                <h3 className="text-white font-semibold text-sm leading-tight">
                  {exam.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Slider Section (Correct Location) */}

      {/* </div>  */}
    </div>
  );
};

export default ExamsCovered;
