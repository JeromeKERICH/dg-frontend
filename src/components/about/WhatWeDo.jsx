// WhatWeDoSection.jsx
import React from 'react';
import { Heart, Users, Building, ArrowRight, ArrowLeft } from 'lucide-react';

const WhatWeDoSection = () => {
  const divisions = [
    {
      icon: Heart,
      title: "Wellness & Supplements",
      focus: "Holistic health through natural products, bioscans, and lifestyle guidance",
      outcome: "Better health, vitality, and longevity"
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      focus: "Tailored programs for graduates, retirees, and corporates",
      outcome: "Personal and professional transformation"
    },
    {
      icon: Building,
      title: "Corporate Partnerships",
      focus: "Leadership, emotional intelligence, and workplace wellness",
      outcome: "Stronger teams and thriving organizations"
    }
  ];

  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-4">
            What We Do
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto"></div>
        </div>

        {/* Mobile Swipe Instruction */}
        <div className="lg:hidden flex items-center justify-center mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Swipe to explore
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>

        {/* Divisions - Horizontal Scroll on Mobile */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 scrollbar-hide">
          {divisions.map((division, index) => {
            const IconComponent = division.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-80 lg:w-full bg-white rounded-xl p-8 border border-gray-200 hover:border-amber-300 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-amber-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-200">
                  {division.title}
                </h3>

                {/* Focus */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Focus</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {division.focus}
                  </p>
                </div>

                {/* Outcome */}
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Core Outcome</h4>
                  <p className="text-amber-700 text-sm font-medium">
                    {division.outcome}
                  </p>
                </div>

                {/* Learn More */}
                <button className="mt-6 text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-200 flex items-center">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block text-center mt-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;