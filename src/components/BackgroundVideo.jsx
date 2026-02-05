import React, { useEffect, useState } from 'react';

const BackgroundVideo = () => {
  const fullText = ' AI-Powered';
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const pauseAfterTyping = 5000;

  let timeout;

  if (!isDeleting) {
    if (index < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterTyping);
    }
  } else {
    if (index > 0) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);
    } else {
      // ⬅️ async state change (NO cascading render)
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, typingSpeed);
    }
  }

  return () => clearTimeout(timeout);
}, [index, isDeleting]);


  return (
<div className="relative w-full h-screen overflow-hidden shadow-xl font-[Poppins]">
  
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source
      src="/video/HeroSection5video.mp4"
      type="video/mp4"
    />
  </video>

  {/* Gradient + Glass Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]"></div>

  {/* Foreground Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

    {/* Heading */}
    <h1 className="text-5xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-extrabold text-white leading-tight max-w-4xl drop-shadow-lg">
      
      {/* Logo Styled */}
      <span className="font-black tracking-wide">
        <span className="text-blue-500">L.</span>
        <span className="text-gray-900">
          AI
        </span>
        <span className="text-blue-500">.RRY</span>
      </span>{" "}
      
      is an intelligent,{" "}
      
      {/* Typed Section */}
      <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        {typedText}
        <span className="border-r-2 border-blue-400 animate-pulse ml-1"></span>
      </span>
      
      <span className="text-gray-200"> mock-test platform</span>
    </h1>

    {/* Subtitle */}
    {/* <p className="mt-6 text-gray-300 text-lg md:text-base max-w-2xl leading-relaxed">
      Practice smarter, analyze performance instantly, and level up your exam preparation with AI-powered insights.
    </p> */}

    {/* Animated Gradient Button */}
    <button
      className="relative mt-16 px-10 py-4 text-lg font-semibold rounded-full text-white overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
    >
      
      {/* Moving Gradient Background */}
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 bg-[length:200%_100%] animate-gradientMove"></span>

      {/* Shine Effect */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-gradient-to-r from-transparent via-white to-transparent animate-shine"></span>

      {/* Button Text */}
      <span className="relative z-10">Get Started</span>
    </button>

  </div>
</div>

  );
};

export default BackgroundVideo;
