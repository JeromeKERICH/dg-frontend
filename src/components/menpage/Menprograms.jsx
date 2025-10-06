// MentorshipPaths.jsx
import React, { useState, useRef } from 'react';
import { Heart, GraduationCap, Users, Building, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MentorshipPaths = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const programs = [
    {
      icon: Heart,
      title: "Wellness Mentorship",
      focus: "Lifestyle transformation, health balance, and sustainable wellness practices.",
      idealFor: "Individuals looking to improve overall health and wellbeing.",
      path: "/wellness",
      image: "/assets/welm.jpg"
    },
    {
      icon: GraduationCap,
      title: "Fresh Graduates Mentorship",
      focus: "Career transition, purpose discovery, and entrepreneurship guidance.",
      idealFor: "Recent graduates seeking direction and confidence after college.",
      path: "/freshgrad",
      image: "/assets/gradm.jpg"
    },
    {
      icon: Users,
      title: "Retirees Mentorship",
      focus: "Reimagining purpose, health management, and life fulfillment post-retirement.",
      idealFor: "Retired professionals or soon-to-retire individuals.",
      path: "/retirees",
      image: "/assets/retm.jpg"
    },
    {
      icon: Building,
      title: "Corporate Mentorship",
      focus: "Leadership, team building, and workplace wellness programs.",
      idealFor: "Organizations seeking to empower employees and leaders.",
      path: "/corporates",
      image: "/assets/corpm.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            The Four Mentorship Paths
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto"></div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 hover:border-amber-300 transition-all duration-300 group cursor-pointer overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-38 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {program.focus}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Ideal For:</h4>
                      <p className="text-gray-600 text-sm">{program.idealFor}</p>
                    </div>
                  </div>

                  <Link to="/" className="mt-6 text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-200 flex items-center">
                    Explore Program
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-hidden scroll-smooth"
          >
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-full px-4 transition-transform duration-300"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    {/* Image */}
                    <div className="relative h-38 overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-2">
                      <div className="mb-4">
                        <h3 className="text-xl font-medium text-gray-900 mb-2">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {program.focus}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Ideal For:</h4>
                          <p className="text-gray-600 text-sm">{program.idealFor}</p>
                        </div>
                      </div>

                      <button className="mt-6 text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-200 flex items-center">
                        Explore Program
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-300 rounded-full p-2 shadow-sm transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-300 rounded-full p-2 shadow-sm transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {programs.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorshipPaths;