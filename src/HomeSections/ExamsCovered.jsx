import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ExamsCovered = () => {
  const exams = [
    {
      id: 1,
      title: 'Banking &\nInsurance',
      description: 'LA-LIFE regarding based our store significantly',
      buttonText: 'Basic',
      bgColor: 'bg-amber-400',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    {
      id: 2,
      title: 'UPSC\nServices',
      description: 'LA-LIFE Upload workload our store exclusively AKS-OS Default',
      buttonText: 'Basic',
      bgColor: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
    {
      id: 3,
      title: 'OBI PO\nStatistics',
      description: 'LA-LIFE ethical Jak its-arrays Starting regularly',
      buttonText: 'Build',
      bgColor: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop'
    }
  ];

  return (
    <div className="bg-slate-900 py-8 px-4 h-[80vh] flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <ChevronUp className="text-amber-400 w-6 h-6" />
          <h2 className="text-white text-2xl font-semibold">Exams Covered</h2>
          <div className="w-6"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className={`${exam.bgColor} rounded-2xl p-6 relative overflow-hidden`}
            >
              {/* Profile Image */}
              <div className="flex items-start gap-3 mb-4">
                <img
                  src={exam.image}
                  alt="Instructor"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                />
                <div className="flex-1">
                  <h3 className="text-slate-900 font-bold text-lg leading-tight whitespace-pre-line">
                    {exam.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-800 text-xs mb-6 leading-relaxed">
                {exam.description}
              </p>

              {/* Button */}
              <button className="bg-white text-slate-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-slate-50 transition-colors">
                {exam.buttonText}
              </button>

              {/* Decorative circles */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
              <div className="absolute -top-10 -right-5 w-20 h-20 bg-white opacity-10 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between">
          <div className="w-6 h-6 border-2 border-amber-400 rounded"></div>
          <ChevronDown className="text-amber-400 w-6 h-6" />
          <div className="w-6 h-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ExamsCovered;