// WellnessConsultations.jsx
import React from 'react';
import { Calendar, Users, Target, Heart } from 'lucide-react';

const WellnessConsultations = () => {
  const features = [
    {
      icon: Target,
      title: "Personalized Plans",
      description: "Customized strategies based on your unique body composition and goals"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "One-on-one support from certified wellness consultants"
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "Comprehensive care addressing nutrition, lifestyle, and mental wellbeing"
    }
  ];

  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl lg:text-4xl text-center font-light text-gray-900 mb-6">
              Tailored Guidance for Your{' '}
              <span className="text-amber-600">Unique Health Journey</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Every person's body and lifestyle are different. After your screening, our consultants provide 
              personalized guidance on nutrition, lifestyle adjustments, and supplement recommendations to 
              help you achieve lasting wellness.
            </p>

            <p className="text-gray-500 text-sm mb-8 italic">
              We guide you from diagnosis to daily action, supporting you in building a balanced, sustainable lifestyle.
            </p>

            
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 transition-colors duration-200"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessConsultations;