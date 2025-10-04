// BioScanSection.jsx
import React from 'react';
import { CheckCircle, Users, Target, Calendar } from 'lucide-react';

const BioScanSection = () => {
  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-6">
            Know Your Body,{' '}
            <span className="text-amber-600">Transform Your Health</span>
          </h2>
          <p className="text-gray-600 text-l md:text-lg leading-relaxed text-start md:text-center">
            Our BioScan Full Body Screening gives you deep insight into your body's internal systems,
            detecting imbalances before they turn into problems. This non-invasive test helps you understand 
            your nutritional needs, stress levels, organ function, and overall wellness in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Benefits Section */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-center mb-3">
              <Target className="w-6 h-6 text-amber-600 mr-3" />
              <h3 className="text-xl font-medium text-gray-900">Benefits of Screening</h3>
            </div>
            
            <div className="space-y-4">
              {[
                "Early detection of potential health issues",
                "Personalized wellness recommendations",
                "Safe, fast, and non-invasive",
                "Instant report and consultation"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who It's For Section */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-amber-600 mr-3" />
              <h3 className="text-xl font-medium text-gray-900">Who It's For</h3>
            </div>
            
            <div className="space-y-4">
              {[
                "Anyone seeking to improve their health proactively",
                "Corporate wellness programs",
                "Families and fitness enthusiasts",
                "Individuals managing chronic conditions"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center">
            <Calendar className="w-5 h-5 mr-3" />
            Book Your Screening Now
          </button>
          
          {/* Additional Info */}
          <p className="text-gray-500 text-sm mt-4">
            Non-invasive • 30-minute session • Instant results
          </p>
        </div>
      </div>
    </section>
  );
};

export default BioScanSection;