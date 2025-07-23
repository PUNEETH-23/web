import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const CTASection: React.FC = () => {
  return (
    <section 
      className="py-16 bg-cover bg-center relative"
      style={{ backgroundImage: 'url(https://www.pexels.com/photo/photography-of-stones-1029604/)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Start Your Construction Project?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Contact us today to discuss your material needs and get a personalized quote for your project.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/contact">
            <Button size="lg" className="min-w-40 bg-white text-blue-700 hover:bg-gray-100">
              Request a Quote
            </Button>
          </Link>
          <Link to="/materials">
            <Button 
              variant="outline" 
              size="lg"
              className="min-w-40 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700"
            >
              Explore Materials
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;