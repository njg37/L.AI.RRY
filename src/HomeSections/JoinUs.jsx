import React from "react";

const JoinUs = () => {
  return (
    <section className="w-full min-h-[92vh] bg-white py-16 px-4 sm:px-8 lg:px-10 flex flex-col justify-center items-center relative overflow-hidden">
      
      {/* LEFT ROBOT */}
      <img
        className="hidden md:block w-20 lg:w-32 absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 opacity-90"
        alt="AI Robot"
        src={`data:image/svg+xml;utf8,
        <svg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='100' cy='100' r='80' fill='%2300c2a8'/>
          <rect x='60' y='60' width='80' height='60' rx='12' fill='%23ffffff'/>
          <circle cx='85' cy='90' r='9' fill='%2300c2a8'/>
          <circle cx='115' cy='90' r='9' fill='%2300c2a8'/>
          <rect x='78' y='118' width='44' height='10' rx='5' fill='%2300c2a8'/>
        </svg>`}
      />

      {/* RIGHT ROBOT */}
      <img
        className="hidden md:block w-20 lg:w-32 absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 opacity-90"
        alt="AI Robot"
        src={`data:image/svg+xml;utf8,
        <svg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
          <rect x='40' y='40' width='120' height='120' rx='20' fill='%2300c2a8'/>
          <circle cx='80' cy='90' r='12' fill='%23ffffff'/>
          <circle cx='120' cy='90' r='12' fill='%23ffffff'/>
          <rect x='70' y='120' width='60' height='12' rx='6' fill='%23ffffff'/>
        </svg>`}
      />

      <div className="max-w-[800px] text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
          Join Us & Build the Future With Us
        </h2>

        {/* Description */}
        <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-xl sm:text-2xl">
          Be a part of our growing community of learners, creators, and innovators.
          Learn new skills, build real projects, and explore opportunities with AI-powered learning.
        </p>

        {/* Key Points */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 text-gray-700 mb-6 sm:mb-8 text-lg sm:text-xl">
          <p>• Learn with expert-designed AI tools</p>
          <p>• Work on real-world inspired projects</p>
          <p>• Grow your skills with a supportive community</p>
          <p>• Unlock opportunities in tech & innovation</p>
        </div>

        {/* Button */}
        <button className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition-all">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default JoinUs;
