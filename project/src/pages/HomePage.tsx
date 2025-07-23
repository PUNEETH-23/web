import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import FeaturedMaterials from '../components/home/FeaturedMaterials';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <FeaturedMaterials />
      <CTASection />
    </Layout>
  );
};

export default HomePage;