import React, { useState, useEffect, useRef } from 'react';
import { Truck, Award, Clock, Users, CheckCircle } from 'lucide-react';
import Container from '../common/Container';
import { companyInfo } from '../../data/companyData';
import crusherImage from '../../assets/IMG-20250603-WA0011.jpg';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    "Premium quality stone materials",
    "State-of-the-art crushing technology",
    "Environmentally conscious operations",
    "Competitive pricing structure"
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full -translate-y-36 translate-x-36 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full translate-y-48 -translate-x-48 opacity-15"></div>
      
      <Container maxWidth="full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 opacity-20 rounded-2xl rotate-12 transition-transform duration-700 hover:rotate-6"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 opacity-25 rounded-2xl -rotate-12 transition-transform duration-700 hover:-rotate-6"></div>
            
            {/* Main Image */}
            <div className="relative z-10 group">
              <img 
                src={crusherImage} 
                alt="Stone Crusher Operations" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                style={{ maxHeight: '550px' }}
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">Currently Operating</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Header */}
            <div className="mb-8">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                  About Our Company
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Leading the Way in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Stone Crushing
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {companyInfo.description}
              </p>
            </div>
            
            {/* Highlights */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Choose Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 transition-all duration-500 delay-${(index + 1) * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FeatureCard 
                icon={<Award className="h-8 w-8" />}
                title="Premium Quality"
                description="Rigorous quality control ensures superior stone materials"
                delay="delay-500"
                isVisible={isVisible}
                color="blue"
              />
              <FeatureCard 
                icon={<Truck className="h-8 w-8" />}
                title="Fast Delivery"
                description="Reliable logistics for timely project completion"
                delay="delay-600"
                isVisible={isVisible}
                color="green"
              />
              <FeatureCard 
                icon={<Clock className="h-8 w-8" />}
                title="5+ Years Experience"
                description="Proven track record in the crushing industry"
                delay="delay-700"
                isVisible={isVisible}
                color="orange"
              />
              <FeatureCard 
                icon={<Users className="h-8 w-8" />}
                title="Expert Team"
                description="Skilled professionals committed to excellence"
                delay="delay-800"
                isVisible={isVisible}
                color="purple"
              />
            </div>
            
            {/* CTA Button */}
            <div className={`mt-10 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
  isVisible: boolean;
  color: 'blue' | 'green' | 'orange' | 'purple';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay, 
  isVisible, 
  color 
}) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700',
    green: 'from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700',
    orange: 'from-orange-500 to-orange-600 group-hover:from-orange-600 group-hover:to-orange-700',
    purple: 'from-purple-500 to-purple-600 group-hover:from-purple-600 group-hover:to-purple-700'
  };

  const bgClasses = {
    blue: 'group-hover:bg-blue-50',
    green: 'group-hover:bg-green-50',
    orange: 'group-hover:bg-orange-50',
    purple: 'group-hover:bg-purple-50'
  };

  return (
    <div className={`group transition-all duration-700 ${delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <div className={`flex items-start p-6 rounded-2xl bg-white hover:shadow-lg border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 ${bgClasses[color]}`}>
        <div className={`mr-4 p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]} text-white transition-all duration-300 group-hover:scale-110 shadow-lg`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-gray-800 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;