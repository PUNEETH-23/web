import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/common/Container';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { galleryItems } from '../data/galleryData';

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter);
  
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-gray-800 py-16 mt-16">
        <Container maxWidth="xl">
          <h1 className="text-3xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-gray-300 max-w-3xl">
            Explore our stone crusher machinery, quarry operations, and finished products through our collection of photos and videos.
          </p>
        </Container>
      </div>
      
      {/* Filter Tabs */}
      <div className="bg-white border-b">
        <Container maxWidth="xl">
          <div className="flex justify-center md:justify-start space-x-8 py-4">
            <FilterTab 
              active={filter === 'all'} 
              onClick={() => setFilter('all')}
            >
              All
            </FilterTab>
            <FilterTab 
              active={filter === 'image'} 
              onClick={() => setFilter('image')}
            >
              Photos
            </FilterTab>
            <FilterTab 
              active={filter === 'video'} 
              onClick={() => setFilter('video')}
            >
              Videos
            </FilterTab>
          </div>
        </Container>
      </div>
      
      {/* Gallery */}
      <div className="py-12 bg-gray-50">
        <Container maxWidth="xl">
          <GalleryGrid items={filteredItems} />
        </Container>
      </div>
    </Layout>
  );
};

interface FilterTabProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterTab: React.FC<FilterTabProps> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`py-2 px-4 font-medium text-sm focus:outline-none ${
      active
        ? 'text-blue-600 border-b-2 border-blue-600'
        : 'text-gray-500 hover:text-gray-700'
    }`}
  >
    {children}
  </button>
);

export default GalleryPage;