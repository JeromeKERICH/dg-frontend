// Hero.jsx
import React from 'react';
import { Calendar, ShoppingBag } from 'lucide-react';

const WellHero = () => {
  return (
    <section className="py-10 lg:py-15 bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-3xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Discover the Power of{' '}
              <span className="text-amber-600">Total Wellness</span>
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At DG Consult, we believe that true health begins with awareness and proactive care. 
              Our wellness solutions f,rom full body screenings to organic supplements, are designed 
              to help you live with energy, balance, and confidence.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href='https://calendly.com/dgconsultlimted/30min' className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-3" />
                Book a Screening
              </a>
              
              <button className="border border-gray-300 hover:border-amber-600 text-gray-700 hover:text-amber-600 px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 mr-3" />
                Shop Supplements
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden bg-gray-100">
              <img
                src="/assets/h2.jpg"
                alt="Wellness and Health"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            
            
        </div>
      </div>
    </div>
    </section>
  );
};

export default WellHero;