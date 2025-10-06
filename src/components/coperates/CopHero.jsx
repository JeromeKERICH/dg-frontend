// FreshGradHero.jsx
import React from 'react';
import { Users, Calendar, ArrowRight } from 'lucide-react';

const CopHero = () => {
  return (
    <section className="py-10 lg:py-15 bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Corporate Wellness & Leadership Programs 
            </div>

            <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
            Empowering teams. Elevating performance. Cultivating, {' '}
              <span className="text-amber-600">wellness-driven workplaces</span>
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Healthy employees are productive employees. At DG Consult, we help organizations build resilient, high-performing teams through leadership coaching, emotional intelligence training, and wellness programs that work
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                Request Proposal
                <ArrowRight className="w-5 h-5 ml-3" />
              </button>
              
              <button className="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-3" />
                Corparate Call
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-8 mt-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-light text-amber-600">15+</div>
                <div className="text-sm text-gray-600">Corparates Helped</div>
              </div>
              <div>
                <div className="text-2xl font-light text-amber-600">80%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-light text-amber-600">5+</div>
                <div className="text-sm text-gray-600">Corporate Industries</div>
              </div>
              
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden bg-gray-100">
              <img
                src="/assets/copm.jpg"
                alt="Corporate Wellness and Leadership"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            
            
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopHero;