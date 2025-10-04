// WhatYouLearnSection.jsx
import React from 'react';
import { Target, Briefcase, DollarSign, Heart, MessageCircle, User } from 'lucide-react';

const WhatYouLearnSection = () => {
  const modules = [
    {
      icon: Target,
      title: "Self-Discovery & Purpose Alignment",
      items: [
        "Identify strengths, values, and life goals",
        "Build confidence in your personal identity"
      ]
    },
    {
      icon: Briefcase,
      title: "Career Dev & Entrepreneurship",
      items: [
        "Discover modern career paths and startup opportunities",
        "Learn how to pitch yourself and build your personal brand"
      ]
    },
    {
      icon: DollarSign,
      title: "Financial Literacy & Independence",
      items: [
        "Budgeting, saving, and managing income early",
        "Understanding money mindset and investments"
      ]
    },
    {
      icon: Heart,
      title: "Health & Wellness Balance",
      items: [
        "Healthy routines for productivity and mental wellbeing",
        "Managing stress and lifestyle after school"
      ]
    },
    {
      icon: MessageCircle,
      title: "Professional & Communication Skills",
      items: [
        "Building confidence in interviews and workplace communication",
        "Leadership, teamwork, and time management"
      ]
    }, 
    {
        icon: User,
        title: "Networking & Mentorship",
        items: [
            "Building a professional network from scratch",
            "Finding and working with mentors for growth"
        ]
    }
  ];

  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-6">
            Your Roadmap to{' '}
            <span className="text-amber-600">Thriving After Graduation</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Comprehensive modules designed to equip you with essential life and professional skills for success beyond the classroom.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 transition-colors duration-200"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-amber-600" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {module.title}
                </h3>

                {/* Items */}
                <ul className="space-y-3">
                  {module.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          
          <p className="text-gray-500 text-sm mt-4">
            6-week program • 1:1 mentorship • Practical assignments
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
