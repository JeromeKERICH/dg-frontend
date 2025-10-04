// SupplementsSection.jsx
import React from 'react';
import { ShoppingBag } from 'lucide-react';

const SupplementsSection = () => {
  const supplements = [
    {
      name: "Immune Boost Formula",
      description: "Enhance your body's natural defense system with powerful antioxidants and vitamins",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031d5ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Immunity"
    },
    {
      name: "Detox Cleanse Support",
      description: "Gentle cleansing formula to support your body's natural detoxification processes",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Cleanse"
    },
    {
      name: "Daily Vitality Capsules",
      description: "Sustain energy levels and mental clarity with essential nutrients and adaptogens",
      image: "https://images.unsplash.com/photo-1552902837-2e7d8fa1436c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      category: "Energy"
    },
    {
      name: "Herbal Digestive Aid",
      description: "Promote healthy digestion and gut balance with natural herbal extracts",
      image: "https://images.unsplash.com/photo-1598042076322-77ee00dae0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      category: "Digestive"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-6">
            Fuel Your Health with{' '}
            <span className="text-amber-600">Nature's Best</span>
          </h2>
          <p className="text-gray-600 text-lg text-start leading-relaxed mb-8">
            We provide a curated selection of organic nutritional supplements that complement your body's needs, 
            helping you restore energy, immunity, and balance naturally.
          </p>
          
          {/* Optional Subtext */}
          <p className="text-gray-500 text-sm">
            All our products are sourced from trusted partners and designed to align with your body's natural healing process.
          </p>
        </div>

        {/* Supplements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supplements.map((supplement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={supplement.image}
                  alt={supplement.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-amber-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {supplement.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-200">
                  {supplement.name}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {supplement.description}
                </p>

                {/* Learn More Link */}
                <button className="text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors duration-200">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center">
            <ShoppingBag className="w-5 h-5 mr-3" />
            Shop All Supplements
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-amber-600 text-sm font-medium mb-1">100% Organic</div>
              <div className="text-gray-500 text-xs">Certified Ingredients</div>
            </div>
            <div>
              <div className="text-amber-600 text-sm font-medium mb-1">Third-Party Tested</div>
              <div className="text-gray-500 text-xs">Quality Assured</div>
            </div>
            <div>
              <div className="text-amber-600 text-sm font-medium mb-1">Natural Healing</div>
              <div className="text-gray-500 text-xs">Body-Aligned Formulas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplementsSection;