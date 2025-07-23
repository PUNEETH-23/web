import React from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/common/Container';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-blue-800 py-16 mt-16">
        <Container maxWidth="full">
          <h1 className="text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-12xl">
            Have questions about our products or services? Get in touch with our team using the contact information below or send us a message using the form.
          </p>
        </Container>
      </div>
      
      {/* Contact Section */}
      <div className="py-12 bg-blue -50">
        <Container maxWidth="full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <ContactForm />
            <ContactInfo />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ContactPage;