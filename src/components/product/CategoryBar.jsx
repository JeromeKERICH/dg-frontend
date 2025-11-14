import React from "react";
import { Filter } from 'lucide-react';

export default function CategoryBar({ categories, onSelect, activeCat }) {
  return (
    <div className="sticky top-16 bg-white z-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Filter Header */}
        <div className="lg:hidden flex items-center justify-between py-3">
          <div className="flex items-center">
            <Filter className="w-4 h-4 text-amber-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Categories</span>
          </div>
          <span className="text-xs text-gray-500">{categories.length} categories</span>
        </div>

        {/* Categories */}
        <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
          {/* All Categories Button */}
          <button
            onClick={() => onSelect(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              !activeCat
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Products
          </button>
          
          {/* Category Buttons */}
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCat === category
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Active Category Indicator - Desktop */}
      {activeCat && (
        <div className="hidden lg:block border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm text-gray-600">Showing:</span>
                <span className="ml-2 text-sm font-medium text-gray-900">{activeCat}</span>
              </div>
              <button
                onClick={() => onSelect(null)}
                className="text-sm text-amber-600 hover:text-amber-700 font-medium"
              >
                Clear filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}