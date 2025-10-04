// ProgramWhySection.jsx
import React from 'react';
import { Target, ArrowRight, CheckCircle, X } from 'lucide-react';

const ProgramWhySection = () => {
  const beforeItems = [
    "Uncertain about career direction",
    "Lack of practical life skills",
    "Difficulty translating education to real world",
    "Limited professional network",
    "Confidence gaps in interviews"
  ];

  const afterItems = [
    "Clear career path and goals",
    "Practical life and professional skills",
    "Confidence in real-world applications",
    "Strong professional connections",
    "Polished interview performance"
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            The Challenge: Education Prepares You for Exams, {' '}
            <span className="text-amber-600">Not for Life</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Many graduates leave school uncertain about where to start, what to do next, or how to align their passions with purpose.
            The Fresh Graduates Mentorship Program helps you find direction, build confidence, and turn potential into real impact.
          </p>
        </div>

        {/* Before & After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Before Column */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <X className="w-6 h-6 text-gray-600 mr-3" />
              <h3 className="text-xl font-medium text-gray-900">Before Program</h3>
            </div>
            
            <div className="space-y-4">
              {beforeItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After Column */}
          <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-6 h-6 text-amber-600 mr-3" />
              <h3 className="text-xl font-medium text-gray-900">After Program</h3>
            </div>
            
            <div className="space-y-4">
              {afterItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transformation Arrow */}
        <div className="flex justify-center items-center mb-12">
          <div className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium flex items-center">
            <Target className="w-5 h-5 mr-2" />
            Your Transformation Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ProgramWhySection;