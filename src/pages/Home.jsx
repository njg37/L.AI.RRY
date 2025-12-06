import React from "react";
import HeroSection from "../HomeSections/HeroSection.jsx";
import SearchBar from "../HomeSections/SearchBar.jsx";
import PopularExams from "../HomeSections/PopularExams.jsx";
import WhySection from "../HomeSections/WhySection.jsx";
import ExploreFeatures from "../HomeSections/ExploreFeatures.jsx";
import HowItWorks from "../HomeSections/HowItWorks.jsx";


export default function Home() {
  return (
    <div className="w-full bg-white font-sans pb-20">
      <HeroSection />
      <SearchBar />
      <PopularExams />
      <WhySection/>
      <ExploreFeatures/>
      <HowItWorks/>
    </div>
  );
}
