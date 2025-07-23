import React from 'react';
import { Truck, Award, Clock, Users } from 'lucide-react';
import Container from '../common/Container';
import { companyInfo } from '../../data/companyData';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <Container maxWidth="full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 opacity-30 rounded-lg"></div>
            <img 
              src="src/assets/IMG-20250603-WA0011.jpg" 
              alt="Stone Crusher Operations" 
              className="rounded-lg shadow-xl w-full h-auto object-cover relative z-10"
              style={{ maxHeight: '500px' }}
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 opacity-30 rounded-lg"></div>
          </div>
          
          {/* Content Side */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Puneeth <span className="text-blue-600">Stone Crushers</span></h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <FeatureCard 
                icon={<Award className="h-8 w-8 text-blue-600" />}
                title="Quality Products"
                description="All our stone materials undergo rigorous quality checks"
              />
              <FeatureCard 
                icon={<Truck className="h-8 w-8 text-blue-600" />}
                title="Reliable Delivery"
                description="On-time delivery to your construction site"
              />
              <FeatureCard 
                icon={<Clock className="h-8 w-8 text-blue-600" />}
                title="5+ years of Experience"
                description="Expertise in the stone crushing industry"
              />
              <FeatureCard 
                icon={<Users className="h-8 w-8 text-blue-600" />}
                title="Expert Team"
                description="Skilled professionals dedicated to customer satisfaction"
              />
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
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
    <div className="mr-4">{icon}</div>
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

export default AboutSection;