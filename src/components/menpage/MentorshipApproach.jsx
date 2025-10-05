// MentorshipApproach.jsx
import React from 'react';
import { Target, Map, Users, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

const MentorshipApproach = () => {
  const steps = [
    {
      icon: Target,
      title: "Assessment",
      description: "Understand your current goals, needs, and stage of life through comprehensive evaluation.",
      color: "amber"
    },
    {
      icon: Map,
      title: "Personalized Plan",
      description: "We match you with the right mentorship track and create a customized roadmap for your journey.",
      color: "amber"
    },
    {
      icon: Users,
      title: "Guided Sessions",
      description: "Weekly or monthly one-on-one and group sessions, available virtual or in-person for flexibility.",
      color: "amber"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Ongoing growth monitoring with regular mentorship reports and milestone celebrations.",
      color: "amber"
    },
    {
      icon: Sparkles,
      title: "Transformation",
      description: "Empowering you with lasting skills and mindset to thrive beyond the program duration.",
      color: "amber"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-6">
            How Our Mentorship{' '}
            <span className="text-amber-600">Works</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A structured yet flexible approach designed to guide you from where you are to where you want to be, 
            with personalized support at every step.
          </p>
        </div>

        {/* Steps - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-0 right-0 top-12 h-0.5 bg-amber-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="relative text-center">
                    {/* Step Number & Icon */}
                    <div className="relative z-10 bg-white rounded-full w-24 h-24 flex items-center justify-center border-2 border-amber-200 mx-auto mb-6">
                      <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-amber-600" />
                      </div>
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 min-h-[200px]">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Steps - Mobile */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex items-start space-x-4">
                {/* Step Number & Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center border-2 border-amber-200">
                    <IconComponent className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        
       

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center">
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-3" />
          </button>
         
        </div>
      </div>
    </section>
  );
};

export default MentorshipApproach;