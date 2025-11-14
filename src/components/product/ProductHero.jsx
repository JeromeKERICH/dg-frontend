import React from "react";
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function ProductHero({ onShopClick }) {
  return (
    <section className="bg-gradient-to-br from-amber-200  to-amber-100 py-10 lg:py-14">
      <div className="max-w-4xl mx-auto px-4 text-center">
       
        
        {/* Main Heading */}
        <h1 className="text-3xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
          Natural Wellness &{' '}
          <span className="text-amber-600">Nutrition</span>
        </h1>

        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={onShopClick}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4  font-medium transition-colors duration-200 flex items-center justify-center"
          >
            Shop Products
            <ArrowRight className="w-5 h-5 ml-3" />
          </button>
          
          
        </div>

        {/* Trust Features */}
       

       
      </div>
    </section>
  );
}