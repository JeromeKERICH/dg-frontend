import React, { useEffect, useState } from "react";
import { fetchLatestProducts } from "../../services/api";
import ProductCard from "../../components/product/ProductCard";

export default function Products() {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetchLatestProducts().then(setLatest);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Latest Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {latest.map((p) => (
          <ProductCard key={p._id} p={p} onView={() => {}} />
        ))}
      </div>
    </div>
  );
}
