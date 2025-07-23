import React, { useState } from 'react';
import { X, ExternalLink, Play } from 'lucide-react';
import { GalleryItem } from '../../types';

interface GalleryGridProps {
  items: GalleryItem[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transform transition duration-300 hover:-translate-y-1 relative group"
            onClick={() => openModal(item)}
          >
            <div className="relative h-64">
              <img
                src={item.type === 'image' ? item.url : (item.thumbnail || '')}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                {item.type === 'video' && (
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play size={30} />
                  </div>
                )}
                {item.type === 'image' && (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="text-white" size={30} />
                  </div>
                )}
              </div>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
              {item.description && (
                <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={closeModal}
              className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          
          <div className="max-w-4xl w-full mx-auto">
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="max-h-[80vh] w-auto mx-auto"
              />
            ) : (
              <div className="relative pt-[56.25%] w-full h-0">
                <iframe
                  src={selectedItem.url}
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen
                  title={selectedItem.title}
                ></iframe>
              </div>
            )}
            
            <div className="mt-4 text-white">
              <h3 className="text-xl font-semibold">{selectedItem.title}</h3>
              {selectedItem.description && <p className="mt-2">{selectedItem.description}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;