import React from "react";
import HeroSection from "../../components/Hero/HeroSection.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import PopularExams from "../../components/PopularExams/PopularExams.jsx";
import WhySection from "../../components/WhySection.jsx";


export default function Home() {
  return (
    <div className="w-full bg-white font-sans pb-20">
      <HeroSection />
      <SearchBar />
      <PopularExams />
      <WhySection/>
    </div>
  );
}
