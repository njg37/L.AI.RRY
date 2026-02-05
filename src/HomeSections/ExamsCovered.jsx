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
  //   { id: 1, title: "SBI PO", icon: Building, color: "bg-blue-600" },
  //   { id: 2, title: "SBI Clerk", icon: FileText, color: "bg-emerald-600" },
  //   { id: 3, title: "IBPS RRB Clerk", icon: FileText, color: "bg-amber-500" },
  //   { id: 4, title: "IBPS RRB PO", icon: Award, color: "bg-rose-500" },
  //   { id: 5, title: "IBPS PO", icon: Award, color: "bg-blue-500" },
  //   { id: 6, title: "IBPS Clerk", icon: FileText, color: "bg-emerald-500" },
  // ];

  return (
    <div className="items-start bg-gradient-to-br from-white via-amber-50 to-blue-50 backdrop-blur-sm mt-1">
      {/* Heading */}
      {/* <div className="pt-50">
        <h2 className="text-4xl font-bold text-left text-gray-900">
          Exams Coverage
        </h2>
      </div> */}
      
      <div className="">
        <ExamsSliderView />
      </div>

      {/* Static Cards Grid */}
      {/* <div ref={ref} className="bg-gradient-to-br from-blue-50 to-emerald-50 pt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {exams.map((exam, index) => {
            const Icon = exam.icon;

            return (
              <div
                key={exam.id}
                className={`
                  ${exam.color} rounded-lg p-4 h-15 border-2 border-white
                  flex items-center justify-start gap-3
                  shadow-md hover:shadow-xl
                  transition-all duration-700 transform
                  hover:-translate-y-1 hover:scale-105
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-10 h-6 text-white" />
                <h3 className="text-white font-semibold text-sm leading-tight drop-shadow-md">
                  {exam.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default ExamsCovered;