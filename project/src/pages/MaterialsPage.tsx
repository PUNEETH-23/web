import React from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/common/Container';
import MaterialDetail from '../components/materials/MaterialDetail';
import { materials } from '../data/materialsData';

const MaterialsPage: React.FC = () => {
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-gray-800 py-16 mt-16">
        <Container maxWidth="full">
          <h1 className="text-6xl font-bold text-white mb-4">Our Materials</h1>
          <p className="text-gray-300 max-w-6xl">
            We offer a wide range of high-quality building stone materials perfect for construction, landscaping, and decorative applications. Explore our products below.
          </p>
        </Container>
      </div>
      
      {/* Materials List */}
      <div className="py-12">
        <Container maxWidth="full">
          {materials.map((material) => (
            <MaterialDetail key={material.id} material={material} />
          ))}
        </Container>
      </div>
    </Layout>
  );
};

export default MaterialsPage;