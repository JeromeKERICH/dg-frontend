// FeaturedProducts.jsx
import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Vitality Boost Multivitamin",
      description: "Complete daily nutrition with organic vitamins and minerals",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1552902837-2e7d8fa1436c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Organic Turmeric Curcumin",
      description: "Powerful anti-inflammatory support with black pepper",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031d5ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      badge: "Anti-inflammatory"
    },
    {
      id: 3,
      name: "Sleep Well Magnesium Complex",
      description: "Natural relaxation and sleep support formula",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1598042076322-77ee00dae0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      badge: "Restorative"
    },
    {
      id: 4,
      name: "Probiotic Gut Health",
      description: "10-strain probiotic for digestive wellness",
      price: "$44.99",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
          <button className="inline-flex items-center px-6 py-3 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-lg font-medium transition-all duration-300">
            View All Products
          </button>
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