// AboutHero.jsx
import React from 'react';

const AboutHero = () => {
  return (
    <section className="py-10 lg:py-15 bg-gradient-to-br from-amber-200  to-amber-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight text-center">
              About{' '}
              <span className="text-amber-600">DG Consult</span>
            </h1>
             
            <div className="text-2xl lg:text-3xl font-light text-gray-800 mb-8 leading-relaxed text-center">
              Turning Desires into Gold, One Person, One Organization at a Time.
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center">
              At DG Consult, we believe true success starts from within. Our mission is to guide 
              individuals and companies toward holistic growth through wellness, mentorship, and 
              personal development.
            </p>
            
            
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default AboutHero;