// CorporateProgramSection.jsx
import React from 'react';
import { Heart, Users, Target, Award, Building } from 'lucide-react';

const CorporateProgramSection = () => {
  const pillars = [
    {
      icon: Heart,
      title: "Wellness & Mental Health Support",
      description: "Comprehensive wellness programs that reduce stress and prevent burnout"
    },
    {
      icon: Target,
      title: "Leadership & Emotional Intelligence",
      description: "Develop self-aware leaders who inspire and empower their teams"
    },
    {
      icon: Users,
      title: "Team Culture & Productivity",
      description: "Foster collaborative environments that drive innovation and results"
    },
    {
      icon: Award,
      title: "Executive Mentorship & Coaching",
      description: "Personalized coaching for senior leaders and high-potential talent"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building className="w-4 h-4 mr-2" />
            Corporate Solutions
          </div>
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-6">
            Elevating Organizations Through{' '}
            <span className="text-amber-600">Purposeful Mentorship</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our Corporate Mentorship program is designed to integrate personal growth and professional excellence. 
            We partner with organizations to strengthen leadership, enhance employee wellness, and create work cultures that thrive.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-amber-300 transition-colors duration-200 group"
              >
                <div className="flex items-start">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-amber-600" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-200">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Business Impact */}
        <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-amber-600 mb-2">47%</div>
              <div className="text-gray-700 font-medium">Higher Employee Retention</div>
            </div>
            <div>
              <div className="text-3xl font-light text-amber-600 mb-2">63%</div>
              <div className="text-gray-700 font-medium">Improved Team Productivity</div>
            </div>
            <div>
              <div className="text-3xl font-light text-amber-600 mb-2">85%</div>
              <div className="text-gray-700 font-medium">Leadership Effectiveness</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CorporateProgramSection;