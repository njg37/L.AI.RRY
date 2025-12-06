import React from "react";
import HeroSection from "../../src/components/HomeSections/HeroSection.jsx";
import SearchBar from "../../src/components/HomeSections/SearchBar.jsx";
import PopularExams from "../../src/components/HomeSections/PopularExams.jsx";
import WhySection from "../../src/components/HomeSections/WhySection.jsx";
import ExploreFeatures from "../../src/components/HomeSections/ExploreFeatures.jsx";
import HowItWorks from "../../src/components/HomeSections/HowItWorks.jsx";


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
