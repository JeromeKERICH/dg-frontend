// FounderSection.jsx
import React from 'react';
import { Award, Users, BookOpen, ArrowRight } from 'lucide-react';

const FounderSection = () => {
  return (
    <section className="py-5 bg-gradient-to-br from-white to-amber-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Meet the Founder
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Founder Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
              <img
                src="/assets/rose2.jpg"
                alt="Rose Toingeny - Founder & CEO"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-4 -left-4 bg-amber-500 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Founder & CEO
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white border border-amber-200 px-4 py-2 rounded-lg shadow-sm">
              <div className="flex items-center text-sm text-gray-700">
                <Users className="w-4 h-4 mr-2 text-amber-600" />
                Visionary Leader
              </div>
            </div>
          </div>

          {/* Founder Overview */}
          <div className="space-y-6">
            {/* Name & Title */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-2">
                Rose Toingeny
              </h3>
              <p className="text-amber-600 font-medium mb-4">
                Founder & CEO, Desires to Gold Consultants Ltd
              </p>
              <p className="text-lg text-gray-700 font-light mb-6">
                A Visionary in Growth, Leadership & Wellness
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-amber-100">
              <p className="text-gray-600 leading-relaxed">
                Rose Toingeny is passionate about personal growth, entrepreneurship, and leadership. 
                Her mission is to mentor high achievers, helping them enhance their skills, unlock 
                their potential, and expand their possibilities in personal success, business, and leadership.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 text-amber-600 mr-3" />
                <span className="text-sm text-gray-700">Masters in Divinity</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-amber-600 mr-3" />
                <span className="text-sm text-gray-700">Ph.D Candidate</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-amber-600 mr-3" />
                <span className="text-sm text-gray-700">University Lecturer</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-amber-600 mr-3" />
                <span className="text-sm text-gray-700">Author & Speaker</span>
              </div>
            </div>

            

            {/* Learn More Link */}
            <button className="flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200">
              Learn more about Rose's journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;