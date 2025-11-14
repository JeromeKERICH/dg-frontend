import React from "react";
import { Eye, ShoppingBag } from 'lucide-react';

export default function ProductCard({ p, onView }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:border-amber-300 transition-all duration-300 group overflow-hidden flex flex-col">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img 
          src={p.imageUrl || "/placeholder.png"} 
          alt={p.name} 
          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
       
      </div>

      {/* Product Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Product Name */}
        <h3 className="font-medium text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-200 line-clamp-2">
          {p.name}
        </h3>
        
        {/* Product Description */}
        <p className="text-sm text-gray-600 flex-1 mb-4 line-clamp-2 leading-relaxed">
          {p.description?.slice(0, 100)}
          {p.description?.length > 100 && '...'}
        </p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <div className="text-lg font-light text-amber-600">
              KSH {p.price?.toFixed(2) ?? "—"}
            </div>
            {p.originalPrice && p.originalPrice > p.price && (
              <div className="text-sm text-gray-400 line-through">
                ${p.originalPrice?.toFixed(2)}
              </div>
            )}
          </div>
          
          <button 
            onClick={() => onView(p._id)}
            className="flex items-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 group/btn"
          >
            <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
            View
          </button>
        </div>

        {/* Additional Info */}
        {p.category && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              {p.category}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}