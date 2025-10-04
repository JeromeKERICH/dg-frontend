// RetirementHowItWorks.jsx
import React from 'react';
import { Calendar, Map, Users, FileText, ArrowRight } from 'lucide-react';

const RetirementHowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Book a Discovery Session",
      description: "Share your retirement goals and vision in a complimentary consultation"
    },
    {
      icon: Map,
      title: "Select Your Mentorship Path",
      description: "Choose from health, purpose, financial, or community tracks, or combine them"
    },
    {
      icon: Users,
      title: "Get Matched with a Certified Coach",
      description: "Connect with an expert specializing in retirement transition"
    },
    {
      icon: FileText,
      title: "Receive Personalized Plan & Guidance",
      description: "Follow your customized roadmap with ongoing support and adjustments"
    }
  ];

  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Start Your Retirement{' '}
            <span className="text-amber-600">Transformation</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A simple, guided process to help you design the retirement chapter you've always envisioned.
          </p>
        </div>

        {/* Steps - Horizontal Layout */}
        <div className="relative mb-12">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-0 right-0 top-8 h-0.5 bg-amber-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative text-center">
                  {/* Step Number & Icon */}
                  <div className="relative z-10 bg-white rounded-full w-16 h-16 flex items-center justify-center border-2 border-amber-200 mx-auto mb-6">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-amber-600" />
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 border border-amber-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Ready to Design Your Ideal Retirement?
            </h3>
            <p className="text-gray-600 mb-6">
              Take the first step toward a purposeful and fulfilling retirement journey.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center">
              <Calendar className="w-5 h-5 mr-3" />
              Book a Discovery Session
              <ArrowRight className="w-5 h-5 ml-3" />
            </button>
            <p className="text-gray-500 text-sm mt-4">
              Complimentary 30-minute consultation • No obligation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetirementHowItWorks;