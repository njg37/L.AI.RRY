import React, { useEffect, useState } from 'react';
import BackgroundVideo from '../components/BackgroundVideo.jsx';

const Herosection5 = () => {
  // const fullText = ' AI-Powered';
  // const [typedText, setTypedText] = useState('');
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [index, setIndex] = useState(0);

  // // Typing effect
  // useEffect(() => {
  //   const typingSpeed = 150;
  //   const deletingSpeed = 75;
  //   const delayAfterFullText = 1000;

  //   let timeout;

  //   if (!isDeleting && index <= fullText.length) {
  //     timeout = setTimeout(() => {
  //       setTypedText(fullText.slice(0, index));
  //       setIndex(index + 1);
  //       if (index === fullText.length) {
  //         setTimeout(() => setIsDeleting(true), delayAfterFullText);
  //       }
  //     }, typingSpeed);
  //   } else if (isDeleting && index >= 0) {
  //     timeout = setTimeout(() => {
  //       setTypedText(fullText.slice(0, index));
  //       setIndex(index - 1);
  //       if (index === 0) {
  //         setIsDeleting(false);
  //       }
  //     }, deletingSpeed);
  //   }

  //   return () => clearTimeout(timeout);
  // }, [index, isDeleting, fullText]);

  return (
    <div id="hero-section5" className="relative w-full">
      {/* HERO VIDEO */}
      <BackgroundVideo />

      {/* 
      <h1 className="text-4xl font-bold text-gray-800 mb-5 ">
        Learn faster with your best language tutor.
      </h1>
      <p className=" text-gray-800 text-xl ">
        Precision-Built for Exam Success
      </p>
      <p className=" text-gray-600 text-xl">
        Millions of learners. Over 100,000 tutors. Progress that’s personal (and
        proven).
      </p>
      */}

      {/* 
      <div className="bg-white mt-25 ml-1 mr-12 my-4 overflow-hidden rounded-2xl drop-shadow-md flex">
        <img
          src="../../public/images/ai.png"
          className="h-[70vh] w-full object-cover"
        />
      </div>
      */}
    </div>
  );
};

export default Herosection5;
