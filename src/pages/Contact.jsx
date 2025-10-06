// ContactPage.jsx
import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Get in <span className="text-amber-600">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Ready to start your transformation journey? We're here to help you take the first step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+254 (789) 748-402</p>
                  <p className="text-gray-500 text-sm">Mon-Fri, 9am-6pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">hello@dgconsultantslimited.com</p>
                  <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Office</h3>
                  <p className="text-gray-600">Sagaas Building</p>
                  <p className="text-gray-600">Eldoret, 3RD Floor Room 303</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Response Info */}
            <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
              <h4 className="font-medium text-gray-900 mb-2">Quick Response</h4>
              <p className="text-gray-600 text-sm">
                For program inquiries and consultations, we typically respond within 2-4 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-light text-gray-900 mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Program Interest
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200">
                  <option value="">Select a program</option>
                  <option value="wellness">Wellness Mentorship</option>
                  <option value="graduates">Fresh Graduates Program</option>
                  <option value="retirees">Retirees Mentorship</option>
                  <option value="corporate">Corporate Programs</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Tell us about your goals and how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                Send Message
                <Send className="w-5 h-5 ml-3" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;