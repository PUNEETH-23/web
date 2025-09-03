import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Play, Shield, Truck, Award } from 'lucide-react';
import Button from '../common/Button';
import heroImage from '../assets/WhatsApp Image 2025-06-03 at 12.25.40_6c230baf.jpg';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    // Auto-rotate text highlights
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % highlights.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    { icon: Shield, text: "Premium Quality Assured" },
    { icon: Truck, text: "Fast & Reliable Delivery" },
    { icon: Award, text: "5+ Years of Excellence" }
  ];

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Stone Crusher Operations"
          className="w-full h-full object-cover"
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-blue-900/60 to-black/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
          
          {/* Badge */}
          <div className={`inline-block mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-200 text-sm font-medium">Leading Stone Crusher in Karnataka</span>
              </div>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className={`font-bold text-4xl sm:text-5xl lg:text-7xl tracking-tight mb-8 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-2">
              Premium Building
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400">
              Materials
            </span>
            <span className="block text-white/90 text-xl sm:text-2xl lg:text-3xl mt-4 font-normal">
              For Your Construction Projects
            </span>
          </h1>
          
          {/* Description */}
          <p className={`text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            At Puneeth Stone Crushers, we specialize in manufacturing and supplying high-quality building materials 
            essential for modern construction. From residential projects to large-scale industrial developments, 
            our materials form the backbone of durable infrastructure.
          </p>
          
          {/* Rotating Highlights */}
          <div className={`mb-10 transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <div className="h-16 flex items-center justify-center">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-700 ${
                      currentSlide === index 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-4 scale-95'
                    }`}
                  >
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                      <Icon className="h-5 w-5 text-blue-400" />
                      <span className="text-white font-medium">{highlight.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center gap-4 mb-12 transition-all duration-1000 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <Link to="/materials" className="group">
              <Button 
                size="lg" 
                className="min-w-48 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25 border-0"
              >
                <span className="flex items-center gap-2">
                  Explore Materials
                  <Play className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link to="/contact" className="group">
              <Button 
                variant="outline" 
                size="lg" 
                className="min-w-48 border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 shadow-2xl transform transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10"
              >
                <span className="flex items-center gap-2">
                  Contact Us
                  <ChevronDown className="h-4 w-4 rotate-0 group-hover:rotate-180 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-1300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <StatItem number="500+" label="Projects Completed" />
            <StatItem number="5+" label="Years Experience" />
            <StatItem number="24/7" label="Customer Support" />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <button 
          onClick={scrollToNext}
          className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="h-6 w-6 animate-bounce group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
      
      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-white/20 rounded-tl-lg"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-white/20 rounded-tr-lg"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-white/20 rounded-bl-lg"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-white/20 rounded-br-lg"></div>
    </div>
  );
};

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <div className="text-center group">
    <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
      {number}
    </div>
    <div className="text-gray-300 text-sm font-medium">
      {label}
    </div>
  </div>
);

export default Hero;