// PartnershipsSection.jsx
import React from 'react';
import { Building, Heart, GraduationCap, ArrowRight } from 'lucide-react';

const PartnershipsSection = () => {
  const partnerTypes = [
    {
      icon: Building,
      title: "Corporate Organizations",
      description: "Leadership training, wellness programs, and team development"
    },
    {
      icon: Heart,
      title: "Health & Wellness Brands",
      description: "Supplement distributors and holistic health partners"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Universities, colleges, and training organizations"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-4">
            Partnerships & Affiliations
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Partnered with health product distributors, corporate training organizations, 
            and educational institutions to deliver holistic solutions.
          </p>
        </div>

        

        {/* Partnership Benefits */}
        <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200 mb-12">
          <h3 className="text-2xl font-light text-gray-900 text-center mb-8">
            Partnership Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-amber-600 font-semibold text-lg mb-2">Quality</div>
              <div className="text-gray-700 text-sm">Certified programs and products</div>
            </div>
            <div>
              <div className="text-amber-600 font-semibold text-lg mb-2">Impact</div>
              <div className="text-gray-700 text-sm">Measurable results and outcomes</div>
            </div>
            <div>
              <div className="text-amber-600 font-semibold text-lg mb-2">Support</div>
              <div className="text-gray-700 text-sm">Ongoing training and resources</div>
            </div>
            <div>
              <div className="text-amber-600 font-semibold text-lg mb-2">Growth</div>
              <div className="text-gray-700 text-sm">Mutual development opportunities</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Interested in Partnering with Us?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's explore how we can create meaningful impact together through strategic partnerships.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center">
              Submit Your Request
              <ArrowRight className="w-5 h-5 ml-3" />
            </button>
            <p className="text-gray-500 text-sm mt-4">
              We review all partnership inquiries within 2-3 business days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;