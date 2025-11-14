import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { usePaystackPayment } from "react-paystack";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { Truck, MapPin, User, Phone, Home } from 'lucide-react';

export default function Checkout() {
  const { cart, total, clearCart } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [deliveryDetails, setDeliveryDetails] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: ""
  });
  const navigate = useNavigate();

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const config = {
    reference: `cart-${Date.now()}`,
    email: email || "customer@example.com",
    amount: Math.round(total * 100),
    publicKey
  };

  const onSuccess = async (ref) => {
    const payload = { 
      reference: ref.reference, 
      email: config.email, 
      cart: cart.map(i => ({ productId: i.productId, qty: i.qty })),
      deliveryDetails 
    };
    try {
      await api.post("/pay/verify", payload);
      clearCart();
      navigate("/success");
    } catch (err) {
      alert("Payment verification failed");
    }
  };

  const initializePayment = usePaystackPayment(config);

  const handleDeliveryChange = (field, value) => {
    setDeliveryDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = email && 
    deliveryDetails.fullName && 
    deliveryDetails.phone && 
    deliveryDetails.address && 
    deliveryDetails.city && 
    deliveryDetails.state;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
          Checkout
        </h1>
        <div className="w-24 h-0.5 bg-amber-400 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Delivery Information */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center mb-6">
            <Truck className="w-6 h-6 text-amber-600 mr-3" />
            <h2 className="text-xl font-light text-gray-900">Delivery Information</h2>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4 flex items-center">
              <User className="w-5 h-5 text-amber-600 mr-2" />
              Contact Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={deliveryDetails.fullName}
                  onChange={(e) => handleDeliveryChange('fullName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={deliveryDetails.phone}
                  onChange={(e) => handleDeliveryChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your phone number"
                  required
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 text-amber-600 mr-2" />
              Shipping Address
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  value={deliveryDetails.address}
                  onChange={(e) => handleDeliveryChange('address', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your complete address"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={deliveryDetails.city}
                    onChange={(e) => handleDeliveryChange('city', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="City"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    value={deliveryDetails.state}
                    onChange={(e) => handleDeliveryChange('state', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="State"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP/Postal Code
                </label>
                <input
                  type="text"
                  value={deliveryDetails.zipCode}
                  onChange={(e) => handleDeliveryChange('zipCode', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  placeholder="ZIP/Postal code"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 h-fit">
          <h2 className="text-xl font-light text-gray-900 mb-6">Order Summary</h2>

          {/* Cart Items */}
          <div className="space-y-4 mb-6">
            {cart.map(item => (
              <div key={item.productId} className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <img 
                    src={item.imageUrl || "/placeholder.png"} 
                    alt={item.name} 
                    className="w-12 h-12 object-cover rounded-lg" 
                  />
                  <div>
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-600">Qty: {item.qty}</div>
                  </div>
                </div>
                <div className="text-amber-600 font-semibold">
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Order Total */}
          <div className="space-y-3 border-t border-gray-200 pt-4">
            <div className="flex justify-between text-lg">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between text-lg">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold text-green-600">Free</span>
            </div>
            
            <div className="flex justify-between text-xl font-bold border-t border-gray-200 pt-3">
              <span>Total</span>
              <span className="text-amber-600">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Button */}
          <button
            onClick={() => initializePayment(onSuccess, () => {})}
            disabled={!isFormValid || cart.length === 0}
            className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-lg font-medium transition-colors duration-200 mt-6"
          >
            {cart.length === 0 ? 'Cart is Empty' : 'Complete Payment'}
          </button>

          {/* Trust Indicators */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="text-center">
                <Truck className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <div>Free Shipping</div>
              </div>
              <div className="text-center">
                <Home className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <div>Secure Checkout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}