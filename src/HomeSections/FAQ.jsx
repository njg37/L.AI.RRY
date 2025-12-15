import React, { useState } from 'react';
import { useInView } from '../hooks/useInView'; // make sure your hook exists

const FAQCard = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`
        bg-white p-4 rounded-xl border border-green-300  
        transform transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        hover:shadow-2xl 
        flex flex-col 
      `}
    >
      <div className="flex justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-gray-900 font-bold text-lg leading-tight">
          {title}
        </h3>
        <button 
          className="text-green-500 font-bold text-2xl leading-none w-8 h-8 flex items-center justify-center hover:bg-blue-50 rounded-full transition-colors"
        >
          {isOpen ? '−' : '+'}
        </button>
      </div>
      
      {/* Animated Answer Section */}
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      title: "What competitive exams cover?",
      description: "We provide comprehensive coverage for DSI, PO, and Shire competitive exams with specific modules designed for each track.",
    },
    {
      title: "What subjects",
      description: "Our curriculum covers Quantitative Aptitude, Logical Reasoning, and specialized technical subjects required for your exam.",
    },
    {
      title: "Are personalized study plans?",
      description: "Yes, our algorithm creates a custom path based on your initial diagnostic test and ongoing performance.",
    },
    {
      title: "What competitive exams cover?",
      description: "We provide comprehensive coverage for DSI, PO, and Shire competitive exams with specific modules designed for each track.",
    },
    {
      title: "What subjects",
      description: "Our curriculum covers Quantitative Aptitude, Logical Reasoning, and specialized technical subjects required for your exam.",
    },
    {
      title: "Are personalized study plans?",
      description: "Yes, our algorithm creates a custom path based on your initial diagnostic test and ongoing performance.",
    },
        {
      title: "What subjects",
      description: "Our curriculum covers Quantitative Aptitude, Logical Reasoning, and specialized technical subjects required for your exam.",
    },
    {
      title: "Are personalized study plans?",
      description: "Yes, our algorithm creates a custom path based on your initial diagnostic test and ongoing performance.",
    },
  ];

  return (
    <div className="bg-white pt-25 relative">
      {/* Manual position title */}
      <h2 className="text-4xl font-bold text-[#1A2B49] absolute top-20 left-10">
        Frequently Asked Questions
      </h2>

      <section className="w-full max-w-[1426px] mx-auto pb-38 pt-20 px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {faqs.map((faq, index) => (
            <FAQCard key={index} {...faq} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
