export default function ProductCard({ product, onView }) {
    return (
      <div className="border rounded p-4 flex flex-col">
        <img src={product.image} alt={product.name} className="h-40 object-contain mb-3" />
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="text-lg font-bold">{product.price ? `$${product.price}` : "Price on request"}</div>
          <button onClick={() => onView(product)} className="px-3 py-1 bg-emerald-600 text-white rounded">View Details</button>
        </div>
      </div>
    );
  }
  