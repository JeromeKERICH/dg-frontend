// DurationFormat.jsx
import React from 'react';
import { Clock, Calendar, Building } from 'lucide-react';

const DurationFormat = () => {
  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Duration & Format
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Duration Options */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center">
              <Clock className="w-6 h-6 text-amber-600 mr-3" />
              Program Duration
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="text-amber-600 font-medium mb-2">Short-term Intensive</div>
                <div className="text-gray-600">1–3 months</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="text-amber-600 font-medium mb-2">Long-term Growth</div>
                <div className="text-gray-600">6–12 months</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="text-amber-600 font-medium mb-2">Corporate Partnerships</div>
                <div className="text-gray-600">Custom duration</div>
              </div>
            </div>
          </div>

          {/* Delivery Options */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center">
              <Calendar className="w-6 h-6 text-amber-600 mr-3" />
              Delivery Format
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="text-amber-600 font-medium mb-2">Virtual or Hybrid Sessions</div>
                <div className="text-gray-600">Flexible online options</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="text-amber-600 font-medium mb-2">Group Mentorships & Workshops</div>
                <div className="text-gray-600">Collaborative learning</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="text-amber-600 font-medium mb-2">One-on-One Coaching</div>
                <div className="text-gray-600">Personalized attention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DurationFormat;