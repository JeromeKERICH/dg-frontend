// Hero.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/assets/h1.jpg",
      title: "Premium Supplements",
      description: "Organic wellness for your body"
    },
    {
      id: 2,
      image: "/assets/h3.jpg",
      title: "Expert Mentorship",
      description: "Guidance for life transformation"
    },
    {
      id: 3,
      image: "/assets/16.jpg",
      title: "Renewed Hope",
      description: "Your journey to fulfillment starts here"
    }
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

 

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-gradient-to-br from-amber-200  to-amber-100 py-10 lg:py-28 overflow-hidden">
      {/* Background decorative elements */}
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-3xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Wellness You Can{' '}
              <span className="text-amber-600">Trust</span>.
              <br />
              Guidance You Can{' '}
              <br/>
              <span className="text-amber-600">Count On</span>.
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From restoring your body with organic supplements to guiding your next chapter through mentorship,{' '}
              <span className="font-medium text-gray-900">DG Consult</span> is here to walk with you, every step toward a healthier, more fulfilling life.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                Shop Now
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
              
              <Link to="/mentorship" className="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Explore Mentorship
              </Link>
            </div>
          </div>
          
          {/* Image Carousel */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden bg-gray-100">
              {/* Carousel Container */}
              <div className="relative h-80 lg:h-96">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white w-6' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              {/* Slide Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white font-medium text-lg mb-1">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-white/80 text-sm">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;