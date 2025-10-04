// WellnessIntegrationSection.jsx
import React from 'react';
import { Heart, Package, Users, ArrowRight } from 'lucide-react';

const WellnessIntegrationSection = () => {
 

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-amber-50 to-white rounded-2xl p-8 lg:p-12 border border-amber-200">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Holistic Integration
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Seamless Wellness{' '}
              <span className="text-amber-600">Integration</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              All corporate programs integrate with our wellness suite — from health supplements 
              to customized screening and lifestyle plans — helping companies build holistic 
              well-being from within.
            </p>
          </div>

          
          

          {/* Benefits */}
          <div className="bg-amber-100 rounded-xl p-6 mb-12">
            <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">
              Integrated Benefits for Your Organization
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-amber-600 font-semibold">Reduced</div>
                <div className="text-gray-700 text-sm">Healthcare Costs</div>
              </div>
              <div>
                <div className="text-amber-600 font-semibold">Improved</div>
                <div className="text-gray-700 text-sm">Employee Retention</div>
              </div>
              <div>
                <div className="text-amber-600 font-semibold">Enhanced</div>
                <div className="text-gray-700 text-sm">Team Productivity</div>
              </div>
              <div>
                <div className="text-amber-600 font-semibold">Stronger</div>
                <div className="text-gray-700 text-sm">Company Culture</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center">
              Explore Corporate Wellness Options
              <ArrowRight className="w-5 h-5 ml-3" />
            </button>
            <p className="text-gray-500 text-sm mt-4">
              Custom packages available • Volume discounts • Enterprise solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessIntegrationSection;