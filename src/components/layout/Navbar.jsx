// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Shop', to: '/shop' },
    { name: 'Mentorship', to: '/mentorship' },
    
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/assets/logo.PNG" 
              alt="Logo" 
              className="h-10 w-auto"
              
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="font-medium text-gray-700 hover:text-coral-500 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:from-amber-600 hover:to-amber-700">
              Shop Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-coral-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coral-500 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="mt-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:from-amber-600 hover:to-amber-700">
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;