import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '../../data/companyData';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 h-full">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
      
      <div className="space-y-6">
        <ContactItem 
          icon={<MapPin className="h-6 w-6 text-blue-600" />}
          title="Our Location"
          content={companyInfo.address}
        />
        
        <ContactItem 
          icon={<Phone className="h-6 w-6 text-blue-600" />}
          title="Phone Number"
          content={companyInfo.phone}
        />
        
        <ContactItem 
          icon={<Mail className="h-6 w-6 text-blue-600" />}
          title="Email Address"
          content={companyInfo.email}
        />
        
        <ContactItem 
          icon={<Clock className="h-6 w-6 text-blue-600" />}
          title="Business Hours"
          content={companyInfo.workingHours}
        />
      </div>
      
      <div className="mt-8">
        <div className="rounded-lg overflow-hidden h-64">
          <iframe 
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(companyInfo.address)}`}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Company Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content }) => (
  <div className="flex items-start">
    <div className="mt-1 mr-4">{icon}</div>
    <div>
      <h4 className="font-medium text-gray-800">{title}</h4>
      <p className="text-gray-600 mt-1">{content}</p>
    </div>
  </div>
);

export default ContactInfo;