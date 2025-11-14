import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-center">
      <h2 className="text-3xl font-bold text-green-700">Payment Successful</h2>
      <p className="mt-4">Thank you — your order has been received and a confirmation email has been sent.</p>
      <div className="mt-6">
        <Link to="/" className="text-white bg-green-600 px-4 py-2 rounded">Back to Shop</Link>
      </div>
    </div>
  );
}
