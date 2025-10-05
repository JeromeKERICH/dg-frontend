// MissionVisionValues.jsx
import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVisionValues = () => {
  const values = [
    {
      number: "01",
      title: "Professionalism",
      description: " Desires to Gold consultants Ltd deliver its services to its best."
    },
    {
      number: "02",
      title: " Integrity",
      description: "Timely delivery is the core of our achievements."
    },
    {
      number: "03",
      title: "Exellence",
      description: " We deliver and make the results seen on time."
    },
    {
      number: "04",
      title: "Dynamism",
      description: "We take full responsibility and take an account to our service. "
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-4">
            Our Mission, Vision & Values
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto"></div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-amber-600 mr-4" />
              <h3 className="text-2xl font-light text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower individuals and organizations to achieve holistic success through wellness, mentorship, and continuous personal growth.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-amber-600 mr-4" />
              <h3 className="text-2xl font-light text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be a leading force in transforming lives and workplaces through purpose-driven wellness and leadership programs across Africa and beyond.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-light text-gray-900 text-center mb-12">
            Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group"
              >
                {/* Number Circle */}
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">
                    {value.number}
                  </span>
                </div>
                
                <h4 className="font-medium text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;