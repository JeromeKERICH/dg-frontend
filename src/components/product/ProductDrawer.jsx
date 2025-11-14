import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { fetchProduct } from "../../services/api";
import { usePaystackPayment } from "react-paystack";
import { useNavigate } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag, CreditCard, CheckCircle, Check } from 'lucide-react';

export default function ProductDrawer({ id, open, onClose }) {
  // ----------------------------
  // HOOKS must always be at top
  // ----------------------------
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  // ----------------------------
  // Fetch product when drawer opens or id changes
  // ----------------------------
  useEffect(() => {
    if (!id || !open) return;
    
    setLoading(true);
    fetchProduct(id)
      .then(setProduct)
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id, open]);

  // Reset quantity when product changes
  useEffect(() => {
    setQty(1);
    setShowSuccess(false);
  }, [product]);

  // ----------------------------
  // If closed → do NOT return early, just render nothing
  // ----------------------------
  if (!open) {
    return null;
  }

  // ----------------------------
  // Paystack Config
  // ----------------------------
  const amountKobo = Math.round((product?.price || 0) * 100);

  const paystackConfig = {
    reference: `${product?._id}-${Date.now()}`,
    email: email || "customer@example.com",
    amount: amountKobo,
    publicKey,
    currency: "USD"
  };

  const initializePayment = usePaystackPayment(paystackConfig);

  const handlePaymentSuccess = async (ref) => {
    try {
      // Call backend to verify and create order
      await api.post("/pay/verify", {
        reference: ref.reference,
        email: paystackConfig.email,
        cart: [{ productId: product._id, qty }],
      });
      navigate("/success");
    } catch (error) {
      alert("Payment verification failed.");
    }
  };

  const handleAddToCart = () => {
    addToCart({
      productId: product._id,
      qty,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    });
    
    // Show success message
    setShowSuccess(true);
    
    // Auto-hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Success Message Overlay */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-60">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 animate-fade-in">
            <Check className="w-5 h-5" />
            <span>Added to cart successfully!</span>
          </div>
        </div>
      )}

      <div className="w-full md:w-96 bg-white h-full flex flex-col border-l border-gray-200 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-light text-gray-900">Product Details</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {loading ? (
            <div className="flex items-center justify-center h-48">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
            </div>
          ) : product ? (
            <>
              {/* Product Image */}
              <div className="relative">
                <img 
                  src={product.imageUrl || "/placeholder.png"} 
                  alt={product.name} 
                  className="w-full h-64 object-cover" 
                />
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-6">
                {/* Title and Price */}
                <div>
                  <h1 className="text-2xl font-light text-gray-900 mb-2">{product.name}</h1>
                  <div className="text-xl font-light text-amber-600">
                    KES {product.price?.toFixed(2)}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                {/* Benefits */}
                {product.benefits?.length > 0 && (
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-amber-600 mr-2" />
                      Key Benefits
                    </h3>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Quantity Selector */}
                <div className="border-t border-gray-200 pt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Quantity</label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setQty(Math.max(1, qty - 1))}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                      >
                        <Minus className="w-4 h-4 text-gray-600" />
                      </button>
                      <span className="w-12 text-center font-medium text-gray-900 text-lg">{qty}</span>
                      <button
                        onClick={() => setQty(qty + 1)}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <div className="text-lg font-light text-gray-900">
                      = KES {(product.price * qty).toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Email Input */}
                <div className="border-t border-gray-200 pt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email for receipt
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-48">
              <p className="text-gray-600">Product not found</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {product && (
          <div className="border-t border-gray-200 p-6 space-y-3">
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-medium transition-colors duration-200 relative"
            >
              <ShoppingBag className="w-5 h-5 mr-3" />
              Add to Cart - ${(product.price * qty).toFixed(2)}
            </button>
            
            <button
              onClick={() => initializePayment(handlePaymentSuccess, () => {})}
              className="w-full flex items-center justify-center border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white py-4 rounded-lg font-medium transition-all duration-200"
            >
              <CreditCard className="w-5 h-5 mr-3" />
              Buy Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}