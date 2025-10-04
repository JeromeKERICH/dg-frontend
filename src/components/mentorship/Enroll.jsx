// HowItWorksSection.jsx
import React from 'react';
import { Calendar, Map, Users, Award, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Enroll or Book Discovery Session",
      description: "Let's understand your goals and needs through an initial consultation"
    },
    {
      icon: Map,
      title: "Personalized Mentorship Plan",
      description: "We match you with a mentor and create a customized roadmap for your journey"
    },
    {
      icon: Users,
      title: "Weekly Mentorship Sessions",
      description: "Group or one-on-one coaching sessions, available in person or virtual"
    },
    {
      icon: Award,
      title: "Progress Reviews & Certification",
      description: "Track your growth, celebrate milestones, and receive program certification"
    }
  ];

  return (
    <section className="py-5 bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            How the Mentorship Journey{' '}
            <span className="text-amber-600">Works</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A simple, structured process designed to transform your career journey in four clear steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-amber-600" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Process Flow Visualization */}
        <div className="bg-white rounded-2xl p-8 border border-amber-200 mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Step Dot */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-amber-600 rounded-full mb-2"></div>
                  <div className="text-xs text-gray-500 text-center max-w-20">
                    Step {index + 1}
                  </div>
                </div>
                
                {/* Connector Line (except last) */}
                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 bg-amber-200 mx-4"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 border border-amber-200">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Join hundreds of graduates who have successfully transitioned from campus to career with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                Enroll Now
                <ArrowRight className="w-5 h-5 ml-3" />
              </button>
              
              <button className="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200">
                Book Discovery Call
              </button>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              Next cohort starts soon • Limited spots available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;