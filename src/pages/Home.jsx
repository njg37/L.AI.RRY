import React from "react";
import HeroSection from "../HomeSections/HeroSection.jsx";
import SearchBar from "../HomeSections/SearchBar.jsx";
import PopularExams from "../HomeSections/PopularExams.jsx";
import WhySection from "../HomeSections/WhySection.jsx";
import ExploreFeatures from "../HomeSections/ExploreFeatures.jsx";
import HowItWork from "../HomeSections/HowItWork.jsx";
import ExamsCovered from "../HomeSections/ExamsCovered.jsx";
import FAQ from "../HomeSections/FAQ.jsx";
import HeroSection4 from "../HomeSections/HeroSection4.jsx";
import Pricing from "./Pricing.jsx"
import Herosection5 from "../HomeSections/Herosection5.jsx";
import Testimonial from "../HomeSections/Testimonial.jsx";
import ExamSection from "../HomeSections/ExamSection.jsx"
import SubsidiaryLogos from "../HomeSections/SubsidiaryLogos.jsx"
export default function Home() {
  return (
    <div className="w-full bg-[#ebf0f4] font-sans -pt-10">
      <Herosection5/>
      <div className="">
         <ExamsCovered />
      </div>
      <div >
         <HowItWork />
      </div>
      <div className="">
        <ExamSection/>
      </div>
      
      {/* <HeroSection /> */}
      <div className="grid grid-cols-2  m-10 gap-8">
        <div>
          {/* <HowItWork /> */}
        </div>
        <div>
          {/* <ExamsCovered /> */}
        </div>
      </div>
{/* <div className="  m-10 mt-30 gap-8">
      <WhySection />
      </div> */}
{/* <div  className="  m-10 mt-30 gap-8">
<HeroSection4/>
</div> */}
{/* <div>
  <Herosection5/>
</div> */}
<div>
  <Testimonial/>
</div>
      {/* <Pricing/> */}
      <FAQ />
      <SubsidiaryLogos/>
    </div>
  );
}
