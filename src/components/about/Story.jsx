// OurStorySection.jsx
import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

const OurStorySection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Centered Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Timeline */}
          <div className="relative">
            {/* Main Image */}
            <div className="bg-white rounded-2xl p-2 border border-amber-100 shadow-sm">
              <img
                src="/assets/about.jpg"
                alt="DG Consult Team Collaboration"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              {/* Progress Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-light text-amber-600">500+</div>
                  <div className="text-sm text-gray-600">Lives Changed</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-amber-600">50+</div>
                  <div className="text-sm text-gray-600">Companies Served</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-amber-600">5+</div>
                  <div className="text-sm text-gray-600">Years of Impact</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-amber-500 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center text-sm font-medium">
                
                Since 2018
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white border border-amber-200 px-4 py-2 rounded-lg shadow-sm">
              <div className="flex items-center text-sm text-gray-700">
                <TrendingUp className="w-4 h-4 mr-2 text-amber-600" />
                Growing Impact
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-amber-100">
              <p className="text-gray-600 leading-relaxed">
                <span className="text-amber-600 font-medium">Founded as Desires to Gold Consultants Ltd.</span>, 
                our journey began with a deep desire to help people transform their health, mindset, 
                and potential into tangible results.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-amber-100">
              <p className="text-gray-600 leading-relaxed">
                Over the years, we've expanded into wellness consultancy, mentorship programs, 
                and corporate empowerment initiatives — helping hundreds of individuals live 
                healthier, more fulfilled lives while guiding companies to nurture productive, 
                well-balanced teams.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;