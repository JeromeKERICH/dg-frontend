// FeaturedProducts.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "4-in-1 Ginseng Coffee",
      description: "Ginseng Coffee is made of superior ginseng extract and the best coffee beans.", 
      price: "KES 2100",
      image: "/assets/gin.jpg",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Vitamin C Chewable Tablets",
      description: "BF Suma Vitamin C provides a tasty and easy solution for a happy, healthy child",
      price: "KES 3400",
      image: "/assets/Vit.jpg",
      badge: "Cognitive Support"
    },
    {
      id: 3,
      name: "Arthro Xtra Tabltes",
      description: "Glucosamine, Chondroitin, MSM & Turmeric for joint support",
      price: "KES 9000",
      image: "/assets/Athro.jpg",
      badge: "Joint Health"
    },
    {
      id: 4,
      name: "NTDiarr Pills",
      description: "Natural anti-diarrheal with activated charcoal and probiotics",
      price: "KES 2000",
      image: "/assets/NT.jpg",
      badge: "Digestive Aid"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
            Better Health, Better Life
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Discover our range of organic nutritional supplements, carefully selected to support your body's natural balance, energy, and overall wellness.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-lg hover:border-amber-300 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-amber-600">
                    {product.price}
                  </span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal CTA */}
        <div className="text-center">
          <Link to="/shop" className="inline-flex items-center px-6 py-3 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-lg font-medium transition-all duration-300">
            View All Products
          </Link>
        </div>

        {/* Minimal Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-amber-600 text-sm font-medium mb-1">100% Organic</div>
              <div className="text-gray-500 text-xs">Natural Ingredients</div>
            </div>
            <div>
              <div className="text-amber-600 text-sm font-medium mb-1">Fast Acting</div>
              <div className="text-gray-500 text-xs">Visible Results</div>
            </div>
            <div>
              <div className="text-amber-600 text-sm font-medium mb-1">Scientifically Proven</div>
              <div className="text-gray-500 text-xs">Evidence Based</div>
            </div>
            <div>
              <div className="text-amber-600 text-sm font-medium mb-1">Free Shipping</div>
              <div className="text-gray-500 text-xs">Over $50</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;