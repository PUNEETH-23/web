import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image with Mandala Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'src/assets/WhatsApp Image 2025-06-03 at 12.25.40_6c230baf.jpg',
          backgroundPosition: 'center'
        }}
        
      >
       

        {/* Mandala Pattern Overlay */}
        <div className="absolute inset-0 bg-mandala-pattern opacity-0 mix-blend-overlay"
        style={{ 
          backgroundImage: 'src/assets/WhatsApp Image 2025-06-03 at 12.25.40_6c230baf.jpg',
          backgroundPosition: 'center'
        }}></div>
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-primary-1/80"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-6">
            
          </div>
          <h1 
            className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-primary-200 mb-6"
          >
            <span className="block">Premium Building Materials</span>
            <span className="block mt-2 text-white">For Your Sacred Spaces</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto mb-8 font-body">
            At Puneeth Stone Crushers, we specialize in the manufacturing and supply of high-quality building materials essential for modern construction and infrastructure development. Our materials form the backbone of everything from small residential projects to large-scale industrial developments.          </p>
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
      
      {/* Scroll Indicator */}
      
    </div>
  );
};

export default Hero;