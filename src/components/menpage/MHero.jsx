// AboutHero.jsx
import React from 'react';

const MenHero = () => {
  return (
    <section className="py-10 lg:py-15 bg-gradient-to-br from-amber-2000  to-amber-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight text-center">
            {' '}
              <span className="text-amber-600">Mentorship Programs</span>
            </h1>
             
            <div className="text-2xl lg:text-3xl font-light text-gray-800 mb-8 leading-relaxed text-center">
            Guiding you to thrive in every season of life.
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center">
            Whether you’re starting your journey, redefining your career, or leading teams, our mentorship programs are designed to help you grow, succeed, and live with purpose.
            </p>
            
            
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default MenHero;