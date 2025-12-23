import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import heroBg from '../../assets/WhatsApp Image 2025-06-03 at 12.25.40_6c230baf.jpg';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center 20%',
        }}
      >
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-black/50 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-6">
            Puneeth Stone Crushers
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8 font-body">
            Delivering top-quality stone materials for construction, landscaping, and sacred spaces. 
            Trust our expertise and experience for reliable and superior stone solutions.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Link to="/materials">
              <Button 
                size="lg" 
                className="min-w-40 bg-primary-400 hover:bg-primary-500 text-gray-900 font-semibold shadow-lg transform transition hover:scale-105"
              >
                Explore Materials
              </Button>
            </Link>

            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="min-w-40 border-2 border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-gray-900 shadow-lg transform transition hover:scale-105"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (optional, add later) */}
    </div>
  );
};

export default Hero;
