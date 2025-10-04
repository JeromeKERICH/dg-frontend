// CorporateServicesSection.jsx
import React from 'react';
import { Heart, Users, Target, TrendingUp, ArrowRight } from 'lucide-react';

const CorporateServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Corporate Wellness Program",
      focus: "Health, stress management, and employee wellbeing",
      features: [
        "Health and wellness screening sessions",
        "Nutrition & mental health workshops",
        "Burnout prevention and mindfulness training",
        "Supplement and lifestyle integration programs"
      ],
      outcome: "Improved focus, reduced absenteeism, and better team morale"
    },
    {
      icon: Users,
      title: "Leadership & Emotional Intelligence Coaching",
      focus: "For executives, team leads, and HR managers",
      features: [
        "Leadership communication skills",
        "Emotional intelligence and empathy in management",
        "Decision-making under pressure",
        "Conflict management and culture shaping"
      ],
      outcome: "Empathetic leaders who drive results through trust and collaboration"
    },
    {
      icon: Target,
      title: "Team Development & Productivity Training",
      focus: "Practical, results-oriented sessions",
      features: [
        "Goal setting & accountability workshops",
        "Team cohesion and collaboration retreats",
        "Performance evaluation and motivation frameworks"
      ],
      outcome: "Teams that align with vision, communicate better, and execute efficiently"
    },
    {
      icon: TrendingUp,
      title: "Corporate Mentorship Partnership",
      focus: "Tailored mentorship system for organizations",
      features: [
        "Matching employees with professional mentors",
        "Ongoing tracking and progress assessments",
        "Employee growth and retention strategies",
        "Executive reporting and analytics"
      ],
      outcome: "Empowered, purpose-driven employees with measurable growth"
    }
  ];

  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Corporate Services &{' '}
            <span className="text-amber-600">Programs</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Comprehensive solutions designed to enhance workplace performance, wellbeing, and culture through evidence-based approaches.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-amber-300 transition-all duration-300 group"
              >
              {/* Header */}
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.focus}
                  </p>
                </div>
              </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Outcome:</h4>
                      <p className="text-gray-700 text-sm">
                        {service.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Learn More */}
                <button className="mt-6 text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-200 flex items-center">
                  Learn more about this program
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 border border-amber-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our corporate programs are customized to meet your organization's unique needs and goals. 
              Let's build a workplace where people and performance thrive together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200">
                Request Custom Proposal
              </button>
              <button className="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200">
                Schedule Executive Briefing
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Serving organizations from 50 to 50,000+ employees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateServicesSection;