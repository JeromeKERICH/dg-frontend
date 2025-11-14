import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { usePaystackPayment } from "react-paystack";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

export default function CartDrawer({ open, onClose }) {
  const { cart, updateQty, removeFromCart, clearCart, total } = useContext(CartContext);
  const navigate = useNavigate();
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  if (!open) return null;

  const itemsPayload = cart.map(i => ({ productId: i.productId, qty: i.qty }));

  const config = {
    reference: `cart-${Date.now()}`,
    email: "customer@example.com",
    amount: Math.round(total * 100),
    publicKey
  };

  const onSuccess = async (ref) => {
    try {
      await api.post("/pay/verify", { reference: ref.reference, email: config.email, cart: itemsPayload });
      clearCart();
      navigate("/success");
    } catch (err) {
      alert("Payment verification error");
    }
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
      <div className="w-full md:w-96 bg-white h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <ShoppingBag className="w-6 h-6 text-amber-600 mr-3" />
            <h3 className="text-xl font-light text-gray-900">Your Cart</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Your cart is empty</p>
              <button
                onClick={onClose}
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.productId} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <img 
                    src={item.imageUrl || "/placeholder.png"} 
                    alt={item.name} 
                    className="h-20 w-20 object-cover rounded-lg flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                    <p className="text-amber-600 font-semibold mt-1">${item.price?.toFixed(2)}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQty(item.productId, Math.max(1, item.qty - 1))}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 text-center font-medium text-gray-900">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.productId, item.qty + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.productId)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold text-gray-900">${total.toFixed(2)}</span>
            </div>

            {/* Shipping Notice */}
            <div className="text-sm text-gray-500 text-center">
              Free shipping on orders over $50
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => initializePayment(onSuccess, () => {})}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Checkout - ${total.toFixed(2)}
              </button>
              
              <button
                onClick={clearCart}
                className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Clear Cart
              </button>
              
              <button
                onClick={onClose}
                className="w-full text-amber-600 hover:text-amber-700 py-3 font-medium transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}