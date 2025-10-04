
// MentorshipPreview.jsx
import React from 'react';
import { Heart, GraduationCap, Users, Briefcase, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MentorshipPreview = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: 1,
      title: "Wellness Mentorship",
      description: "Build a healthy lifestyle for long-term success",
      icon: Heart,
      page: "/wellness"
    },
    {
      id: 2,
      title: "Fresh Graduates",
      description: "Transition confidently into the next stage of life",
      icon: GraduationCap,
      page: "/freshgrad"
    },
    {
      id: 3,
      title: "Retirees",
      description: "Redefine life after work with purpose and wellness",
      icon: Users,
      page: "/retirees"
    },
    {
      id: 4,
      title: "Corporates",
      description: "Workplace wellness & growth programs for teams",
      icon: Briefcase,
      page: "/corporates"
    }
  ];

  const handleProgramClick = (page) => {
    navigate(page);
  };

  const handleConsultationClick = () => {
    navigate('/book-consultation');
  };

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semi-bold text-gray-900 mb-4 tracking-tight">
            Mentorship Programs
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Growth is more than health, it's about guidance. Our mentorship programs empower you to thrive.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program) => {
            const IconComponent = program.icon;
            
            return (
              <div
                key={program.id}
                className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-amber-300 transition-all duration-300 hover:shadow-sm cursor-pointer"
                onClick={() => handleProgramClick(program.page)}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-amber-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                
                {/* Learn More */}
                <div className="flex items-center text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors duration-200">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal CTA */}
        <div className="text-center">
          <button 
            onClick={handleConsultationClick}
            className="inline-flex items-center px-8 py-3 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-lg font-medium transition-all duration-300"
          >
            Book a Free Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorshipPreview;