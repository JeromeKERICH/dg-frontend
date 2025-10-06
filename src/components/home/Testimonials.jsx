// Testimonials.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Wellness Client",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      text: "The supplements and mentorship program completely transformed my energy levels and overall wellbeing. I've never felt better!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Joseph",
      role: "Career Mentorship",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      text: "The guidance I received helped me navigate my career transition with confidence. The holistic approach made all the difference.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Retirement Program",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      text: "Starting retirement was daunting, but DG Consult helped me find new purpose and maintain my vitality. Truly life-changing.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };



  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Real stories from people who've transformed their health and lives with DG Consult.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-600 text-lg leading-relaxed text-center mb-8 italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center justify-center">
                     
                      <div className="text-left">
                        <div className="font-medium text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-amber-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;