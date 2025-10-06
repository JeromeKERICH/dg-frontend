import React from "react";
import { usePaystackPayment } from "react-paystack";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY; // set in .env

  const config = {
    reference: (new Date()).getTime().toString(),
    email: "customer@example.com", // ideally collect from user form
    amount: Math.round((product.price || 0) * 100), // in kobo/cents
    publicKey
  };

  const onSuccess = (reference) => {
    // show success UI, call backend to record order (optional)
    alert("Payment successful: " + reference.reference);
    onClose();
  };

  const onCloseHandler = () => {
    // called when payment modal closed by user
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg max-w-xl w-full p-6 z-60">
        <button onClick={onClose} className="absolute top-3 right-3">✕</button>
        <div className="flex gap-4">
          <img src={product.image} alt={product.name} className="w-36 h-36 object-contain" />
          <div className="flex-1">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <ul className="mt-3 list-disc ml-5 text-sm">
              {product.benefits.map((b,i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-2xl font-bold">{product.price ? `$${product.price}` : "Price N/A"}</div>
              <div>
                <button onClick={() => initializePayment(onSuccess, onCloseHandler)} className="px-4 py-2 bg-emerald-600 text-white rounded">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
