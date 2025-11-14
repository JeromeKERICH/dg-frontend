import ProductCard from "./ProductCard";

export default function ProductGrid({ items, onView }) {
  // Group by category
  const groups = items.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto px-4 py-30 space-y-16">
      {Object.keys(groups).map(category => (
        <section key={category} className="scroll-mt-20">
          {/* Category Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              {category}
            </h2>
            <div className="w-24 h-0.5 bg-amber-400 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover our curated selection of {category.toLowerCase()} products designed to support your wellness journey.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {groups[category].map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onView={onView} 
              />
            ))}
          </div>

          {/* Category Footer */}
          <div className="text-center mt-12 pt-8 border-t border-gray-100">
            <p className="text-gray-500 text-sm">
              Showing {groups[category].length} product{groups[category].length !== 1 ? 's' : ''} in {category}
            </p>
          </div>
        </section>
      ))}

      {/* Empty State */}
      {Object.keys(groups).length === 0 && (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-light text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any products matching your criteria.
            </p>
            <button className="text-amber-600 hover:text-amber-700 font-medium">
              Browse all products
            </button>
          </div>
        </div>
      )}
    </div>
  );
}