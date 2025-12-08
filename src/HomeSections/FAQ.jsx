import React, { useState } from 'react';

const FAQCard = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-4 h-fit">

      
      <div >
        <div className="flex justify-between items-start">
        <h3 className="text-gray-900 font-bold text-lg leading-tight">
          {title}
        </h3>
                <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-500 font-bold text-2xl leading-none w-8 h-8 flex items-center justify-center hover:bg-blue-50 rounded-full transition-colors"
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
      title: "Free trial",
      description: "We offer a 7-day full access trial. No credit card is required to start practicing with our demo tests.",
      
    },
    {
      title: "Can I track my progress?",
      description: "The dashboard shows real-time progress lines, accuracy trends, and projected score improvement over time.",
      
    },
    {
      title: "What accurate performance reports?",
      description: "Our reports highlight weak areas and compare your speed against top-ranking candidates in the same category.",
      
    }
  ];

  return (
    <div className="bg-[#F8F9FB] h-[70vh] p-8">
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1A2B49] mb-10">
          Frequently Asked Questions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <FAQCard key={index} {...faq} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;