import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Container from '../common/Container';
import { materials } from '../../data/materialsData';
import Button from '../common/Button';

const FeaturedMaterials: React.FC = () => {
  // Get first 3 materials to feature
  const featuredMaterials = materials.slice(0, 3);
  
  return (
    <section className="py-16 bg-gray-50">
      <Container maxWidth="full">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-gray-800 mb-4">Our Featured Materials</h2>
          <p className="text-gray-600 max-w-6xl mx-auto">
            We offer a wide range of high-quality stone materials for all your construction and landscaping needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredMaterials.map((material) => (
            <MaterialCard key={material.id} material={material} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/materials">
            <Button 
              variant="outline"
              className="inline-flex items-center"
            >
              View All Materials
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

interface MaterialCardProps {
  material: {
    id: string;
    name: string;
    description: string;
    image: string;
    price?: string;
  };
}

const MaterialCard: React.FC<MaterialCardProps> = ({ material }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={material.image} 
        alt={material.name} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2 text-gray-800">{material.name}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{material.description}</p>
      {material.price && (
        <p className="text-blue-600 font-semibold mb-4">{material.price}</p>
      )}
      <Link 
        to={`/materials#${material.name.toLowerCase().replace(/\s+/g, '-')}`}
        className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800 transition-colors"
      >
        Learn More
        <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  </div>
);

export default FeaturedMaterials;