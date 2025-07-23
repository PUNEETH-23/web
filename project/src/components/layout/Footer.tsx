import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Container from '../common/Container';
import { companyInfo } from '../../data/companyData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <Container maxWidth="full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Puneeth Stone<span className="text-blue-500">Crushers</span></h3>
            <p className="text-gray-300 mb-4">
              Providing high-quality building stone materials for construction and landscaping projects.
            </p>
             <div className="flex space-x-4">
              <SocialLink icon={<Facebook size={18} />} href="https://facebook.com" label="Facebook" />
              <SocialLink icon={<Twitter size={18} />} href="https://twitter.com" label="Twitter" />
              <SocialLink icon={<Instagram size={18} />} href="https://instagram.com" label="Instagram" />
              <SocialLink icon={<Linkedin size={18} />} href="https://linkedin.com" label="LinkedIn" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/materials">Materials</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </ul>
          </div>
          
          
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{companyInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-300">{companyInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-300">{companyInfo.email}</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{companyInfo.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Puneeth Stone Crushers. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <span className="text-gray-400 text-sm mx-2">Privacy Policy</span>
              <span className="text-gray-400 text-sm mx-2">Terms of Service</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
    >
      {children}
    </Link>
  </li>
);

export default Footer;