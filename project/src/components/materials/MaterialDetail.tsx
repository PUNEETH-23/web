import React, { useState } from 'react';
import { Material } from '../../types';
import { Check, X } from 'lucide-react';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

// Fallback for broken image links
const fallbackImage = 'src/assets/IMG-20250603-WA0011.jpg'; // Place this in your public/ folder

interface MaterialDetailProps {
  material: Material;
}

const MaterialDetail: React.FC<MaterialDetailProps> = ({ material }) => {
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageSrc = imageError ? fallbackImage : material.image;

  return (
    <>
      {/* Main layout */}
      <div
        id={material.name?.toLowerCase().replace(/\s+/g, '-') || 'material'}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-b border-gray-200 scroll-mt-24"
      >
        {/* Image Side */}
        <div
          className="rounded-lg overflow-hidden shadow-lg max-h-[400px] flex justify-center items-center bg-gray-100 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={imageSrc}
            alt={material.name || 'Material Image'}
            className="object-contain max-h-[400px] w-full"
            onError={() => setImageError(true)}
          />
        </div>

        {/* Content Side */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{material.name}</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">{material.description}</p>

          {/* Uses */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Common Uses:</h3>
            <ul className="space-y-2">
              {material.uses.map((use, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{use}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          {material.price && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-1 text-gray-800">Pricing:</h3>
              <p className="text-blue-600 font-bold text-xl">{material.price}</p>
              <p className="text-sm text-gray-500">
                *Prices may vary based on quantity and delivery location
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8">
            <Link to="/contact">
              <Button>Request Quote</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={imageSrc}
            alt={material.name || 'Material Image'}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
};

export default MaterialDetail;
