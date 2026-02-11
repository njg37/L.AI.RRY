import React from "react";
// import { useInView } from "../hooks/useInView";
import {
  Building,
  FileText,
  Award,
} from "lucide-react";

import ExamsSliderView from "../components/ExamsSliderView";

const ExamsCovered = () => {


  return (
    <div className="items-start bg-gradient-to-br from-white via-amber-50 to-blue-50 backdrop-blur-sm mt-1">
      
      <div className="">
        <ExamsSliderView />
      </div>

      
    </div>
  );
};

export default ExamsCovered;