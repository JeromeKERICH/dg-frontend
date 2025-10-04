// ProgramTracksSection.jsx
import React from 'react';
import { Heart, Target, DollarSign, Users } from 'lucide-react';

const ProgramTracksSection = () => {
  const tracks = [
    {
      icon: Heart,
      title: "Health & Wellness Mentorship",
      features: [
        "Personalized wellness plans (nutrition, fitness, mindfulness)",
        "Preventive health screening and lifestyle guidance",
        "Stress and sleep management"
      ],
      color: "amber"
    },
    {
      icon: Target,
      title: "Purpose & Meaning Coaching",
      features: [
        "Redefining identity after career life",
        "Finding fulfilling activities, hobbies, or new ventures",
        "Coaching on mentoring younger generations"
      ],
      color: "amber"
    },
    {
      icon: DollarSign,
      title: "Financial & Lifestyle Planning",
      features: [
        "Budgeting for sustainable living",
        "Exploring entrepreneurship or passive income ideas",
        "Estate and legacy planning sessions"
      ],
      color: "amber"
    },
    {
      icon: Users,
      title: "Community & Social Engagement",
      features: [
        "Peer support groups for retirees",
        "Volunteer and mentorship opportunities",
        "Online workshops and wellness retreats"
      ],
      color: "amber"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Program Tracks &{' '}
            <span className="text-amber-600">Services</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Choose your path or combine tracks for a comprehensive retirement transition. 
            Each mentorship path is designed to address specific aspects of your new chapter.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, index) => {
            const IconComponent = track.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-amber-300 transition-all duration-300 group"
              >
                {/* Icon & Title */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 group-hover:text-amber-600 transition-colors duration-200">
                    {track.title}
                  </h3>
                </div>

                {/* Features */}
                <ul className="space-y-4">
                  {track.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Learn More CTA */}
                <button className="mt-6 text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-200">
                  Learn more about this track →
                </button>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

export default ProgramTracksSection;