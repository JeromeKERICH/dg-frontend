import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductHero from "../components/product/ProductHero";
import CategoryBar from "../components/product/CategoryBar";
import ProductDrawer from "../components/product/ProductDrawer";
import CartDrawer from "../components/product/CartDrawer";
import ProductCard from "../components/product/ProductCard";
import { ShoppingBag, Filter } from 'lucide-react';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [activeCat, setActiveCat] = useState(null);
  const [drawerId, setDrawerId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then(setProducts)
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const categories = Array.from(new Set(products.map(p => p.category)));

  const onSelectCategory = (cat) => {
    setActiveCat(cat);
    const el = document.querySelector(`[data-category="${cat}"]`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleView = (id) => {
    setDrawerId(id);
    setDrawerOpen(true);
  };

  const filteredProducts = activeCat 
    ? products.filter(p => p.category === activeCat)
    : products;

  return (
    <>
      <ProductHero onShopClick={() => window.scrollTo({ top: 600, behavior: "smooth" })} />
      
      {/* Shop Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            
            
            <div className="flex items-center justify-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-amber-600 transition-colors duration-200">
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </button>
              <button 
                onClick={() => setCartOpen(true)}
                className="flex items-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                View Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <CategoryBar categories={categories} onSelect={onSelectCategory} activeCat={activeCat} />

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
            <p className="mt-4 text-gray-600">Loading wellness products...</p>
          </div>
        ) : (
          <>
            {/* Active Category Header */}
            {activeCat && (
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-light text-gray-900 mb-2">
                  {activeCat}
                </h2>
                <div className="w-16 h-0.5 bg-amber-400 mx-auto"></div>
              </div>
            )}

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map(p => (
                <div key={p._id} data-category={p.category}>
                  <ProductCard p={p} onView={handleView} />
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-light text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">
                  {activeCat 
                    ? `No products available in ${activeCat}`
                    : "No products available at the moment"
                  }
                </p>
                {activeCat && (
                  <button
                    onClick={() => setActiveCat(null)}
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    View all products
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Trust Banner */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-amber-600 font-semibold mb-2">Free Shipping</div>
              <div className="text-gray-600 text-sm">On orders over $50</div>
            </div>
            <div>
              <div className="text-amber-600 font-semibold mb-2">100% Organic</div>
              <div className="text-gray-600 text-sm">Certified ingredients</div>
            </div>
            <div>
              <div className="text-amber-600 font-semibold mb-2">Quality Assured</div>
              <div className="text-gray-600 text-sm">Third-party tested</div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawers */}
      <ProductDrawer id={drawerId} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}