// Footer.jsx
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Mentorship', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-red-600 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo and Description */}
          <div className="lg:col-span-1">
            <img
                src="/assets/logo.PNG"
                alt="DG Consult Logo"
                className="h-12 mb-4"
                />
            <p className="text-gray-100 text-lg leading-relaxed mb-6">
              Transforming health and lives through wellness and mentorship.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-amber-300 font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-100 hover:text-amber-300 hover:underline transition-all duration-200 text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-amber-300 font-bold text-xl mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-300 mt-1 flex-shrink-0" />
                <p className="text-gray-100 text-lg">
                  123 Wellness Street<br />
                  Health City, HC 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-300 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-100 hover:text-amber-300 hover:underline transition-colors duration-200 text-lg">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-300 flex-shrink-0" />
                <a href="mailto:info@dgconsult.com" className="text-gray-100 hover:text-amber-300 hover:underline transition-colors duration-200 text-lg">
                  info@dgconsult.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="bg-white/10 hover:bg-amber-300 p-2 rounded-full transition-all duration-200 hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5 text-white hover:text-coral-600" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-amber-300 font-bold text-xl mb-6">Stay Updated</h3>
            <p className="text-gray-100 text-lg mb-4">
              Stay updated on our latest wellness tips & offers.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2  focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:from-amber-600 hover:to-amber-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-center md:text-left mb-4 md:mb-0">
              Copyright © 2025 DG Consult. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-200">
              <a href="#" className="hover:text-amber-300 hover:underline transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-300 hover:underline transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-amber-300 hover:underline transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;