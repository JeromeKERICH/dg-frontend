// AboutMentorshipSection.jsx
import React from 'react';
import { Target, Heart, DollarSign, Users, ArrowRight } from 'lucide-react';

const AboutMentorshipSection = () => {
  const focusAreas = [
    {
      icon: Target,
      title: "Self-awareness and emotional intelligence",
      description: "Develop deep self-understanding and emotional mastery"
    },
    {
      icon: Users,
      title: "Purpose discovery and goal alignment",
      description: "Find your true calling and align goals with purpose"
    },
    {
      icon: Heart,
      title: "Health and wellness integration",
      description: "Incorporate holistic wellness into daily life and work"
    },
    {
      icon: DollarSign,
      title: "Financial literacy and entrepreneurship",
      description: "Build financial intelligence and entrepreneurial mindset"
    },
    {
      icon: Users,
      title: "Leadership and influence",
      description: "Develop authentic leadership and positive influence"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            About DG Mentorship
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            At DG Consult, we believe mentorship is more than training, it's a partnership for transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Philosophy Content */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-amber-100">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our mentorship model combines personal development, practical business insight, 
                and holistic wellness guidance to help individuals unlock their full potential.
              </p>
              
              {/* Mentorship Approach */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Personalized 1-on-1 guidance</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Practical, actionable strategies</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Holistic mind-body approach</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Long-term sustainable growth</span>
                </div>
              </div>
            </div>

            {/* Results Highlight */}
            <div className="bg-amber-100 rounded-xl p-6 border border-amber-200">
              <h4 className="font-medium text-gray-900 mb-3">Transformational Outcomes</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-amber-600 font-semibold">Clarity</div>
                  <div className="text-gray-700">Clear life direction and purpose</div>
                </div>
                <div>
                  <div className="text-amber-600 font-semibold">Confidence</div>
                  <div className="text-gray-700">Strong self-belief and capability</div>
                </div>
                <div>
                  <div className="text-amber-600 font-semibold">Competence</div>
                  <div className="text-gray-700">Practical skills for success</div>
                </div>
                <div>
                  <div className="text-amber-600 font-semibold">Connection</div>
                  <div className="text-gray-700">Meaningful relationships and networks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-8 text-center lg:text-left">
              Core Areas of Focus
            </h3>
            <div className="space-y-4">
              {focusAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 transition-colors duration-200 group"
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                          {area.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default AboutMentorshipSection;