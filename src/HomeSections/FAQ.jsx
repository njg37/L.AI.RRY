import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

const FAQCard = ({ title, description, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`
        bg-white/80 backdrop-blur-sm p-5 rounded-2xl border-2 border-blue-200
        transform transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        hover:shadow-2xl hover:border-emerald-300 hover:scale-[1.02]
        flex flex-col
        h-fit
        group
        relative
        overflow-hidden
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Question */}
        <div
          className="flex justify-between items-start cursor-pointer gap-3"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <h3 className="text-gray-900 font-bold text-lg leading-tight group-hover:text-blue-700 transition-colors duration-300">
            {title}
          </h3>

          <button
            className={`
              text-blue-600 font-bold text-2xl w-10 h-10 
              flex items-center justify-center flex-shrink-0
              rounded-full transition-all duration-300
              ${isOpen 
                ? 'bg-emerald-100 text-emerald-600 rotate-180' 
                : 'bg-blue-50 hover:bg-amber-100 hover:text-amber-600 hover:rotate-90'
              }
            `}
          >
            {isOpen ? '−' : '+'}
          </button>
        </div>

        {/* Answer */}
        <div
          className={`
            overflow-hidden transition-all duration-500 ease-in-out
            ${isOpen ? 'max-h-60 mt-4 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="border-l-4 border-blue-400 pl-4 animate-slide-in-left">
            <p className="text-gray-700 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

const FAQ = () => {
  const { ref: titleRef, isVisible: titleVisible } = useInView({ threshold: 0.2 });

  const faqs = [
    {
      title: "What competitive exams cover?",
      description:
        "We provide comprehensive coverage for DSI, PO, and Shire competitive exams with specific modules designed for each track.",
    },
    {
      title: "What subjects?",
      description:
        "Our curriculum covers Quantitative Aptitude, Logical Reasoning, and specialized technical subjects required for your exam.",
    },
    {
      title: "Are personalized study plans?",
      description:
        "Yes, our algorithm creates a custom path based on your initial diagnostic test and ongoing performance.",
    },
    {
      title: "How are mock tests conducted?",
      description:
        "Mock tests are conducted weekly in an exam-like environment with instant performance analytics.",
    },
    {
      title: "Is doubt clearing available?",
      description:
        "Yes, students can book one-on-one doubt-clearing sessions with expert mentors.",
    },
    {
      title: "Is content updated regularly?",
      description:
        "Our content is reviewed and updated every month to stay aligned with exam patterns.",
    },
    {
      title: "Can I track my progress?",
      description:
        "Yes, our advanced analytics dashboard provides detailed insights into your learning journey and performance metrics.",
    },
    {
      title: "What about practice materials?",
      description:
        "We offer extensive practice questions, previous year papers, and custom quizzes tailored to your learning needs.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-amber-50 pt-25 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-10 top-20 left-10 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-10 bottom-20 right-10 animate-pulse-slower"></div>
      </div>

      {/* Title with animation */}
      <div 
        ref={titleRef}
        className={`
          absolute top-20 left-10 max-w-2xl
          transition-all duration-1000
          ${titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
        `}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 animate-gradient-text">
          Frequently Asked Questions
        </h2>
        <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-600 rounded-full animate-width-expand"></div>
      </div>

      <section className="w-full max-w-[1426px] mx-auto pb-38 pt-20 px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          {faqs.map((faq, index) => (
            <FAQCard key={index} index={index} {...faq} />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.15;
          }
        }

        @keyframes pulseSlower {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.2;
          }
        }

        @keyframes gradientText {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes widthExpand {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.5s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulseSlower 10s ease-in-out infinite;
        }

        .animate-gradient-text {
          background: linear-gradient(90deg, #2563eb, #10b981, #f59e0b, #2563eb);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gradientText 5s ease infinite;
        }

        .animate-width-expand {
          animation: widthExpand 1s ease-out forwards;
          animation-delay: 0.5s;
          width: 0;
        }
      `}</style>
    </div>
  );
};

export default FAQ;