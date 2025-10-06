import React from "react";

export default function CategoryBar({ categories, onSelect }) {
  return (
    <div className="sticky top-0 bg-white z-20 border-b">
      <div className="max-w-6xl mx-auto flex gap-3 overflow-x-auto py-3 px-4">
        {categories.map(cat => (
          <button key={cat} onClick={() => onSelect(cat)} className="px-4 py-2 rounded-md hover:bg-emerald-50">
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
