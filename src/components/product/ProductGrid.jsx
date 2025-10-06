import ProductCard from "./ProductCard";

export default function ProductGrid({ items, onView }) {
  // group by category
  const groups = items.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {});

  return (
    <div className="max-w-6xl mx-auto py-8 space-y-8">
      {Object.keys(groups).map(category => (
        <section key={category}>
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {groups[category].map(product => (
              <ProductCard key={product.id} product={product} onView={onView} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
