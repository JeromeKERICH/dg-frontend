// AboutProgramSection.jsx
import React from 'react';
import { Target, DollarSign, Heart, Users, Sparkles } from 'lucide-react';

const AboutProgramSection = () => {
  const keyAreas = [
    {
      icon: Target,
      title: "Purposeful Living & Mindset Reset",
      description: "Rediscover your passions and create meaningful daily routines"
    },
    {
      icon: DollarSign,
      title: "Financial & Lifestyle Planning",
      description: "Align your finances with your desired retirement lifestyle"
    },
    {
      icon: Heart,
      title: "Health, Nutrition & Mental Wellness",
      description: "Maintain vitality through holistic health practices"
    },
    {
      icon: Sparkles,
      title: "Legacy Planning & Mentorship",
      description: "Share your wisdom and create lasting impact"
    },
    {
      icon: Users,
      title: "Social Connection & Community",
      description: "Build meaningful relationships and stay engaged"
    }, 
    {
        icon: Users,
        title: "Lifelong Learning & New Skills",
        description: "Pursue new hobbies and continuous personal growth"
    }
  ];

  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            A Holistic Approach to{' '}
            <span className="text-amber-600">Meaningful Retirement</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            At DG Consult, we understand that stepping into retirement can bring both excitement and uncertainty. 
            Our program helps you align your financial stability, health goals, and emotional wellness while 
            exploring new ways to live meaningfully.
          </p>
        </div>

        {/* Key Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {keyAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 transition-colors duration-200 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-amber-600" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-200">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Program Philosophy */}
        <div className="bg-white rounded-xl p-8 border border-amber-200 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Our Philosophy
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Retirement isn't an ending, it's a new beginning. We believe this chapter should be 
              your most fulfilling yet, filled with purpose, connection, and continued growth.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProgramSection;