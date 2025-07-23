import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from './Container';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container maxWidth="full">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-display flex items-center"
            onClick={closeMenu}
          >
            <span className={`transition-colors duration-300 ${isScrolled ? 'text-primary-600' : 'text-primary-200'}`}>
              Puneeth<span className="text-accent-400"> Stones </span><span className="text-accent-500">Crushers</span>
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" isActive={isActive('/')} isScrolled={isScrolled}>Home</NavLink>
            <NavLink to="/materials" isActive={isActive('/materials')} isScrolled={isScrolled}>Materials</NavLink>
            <NavLink to="/contact" isActive={isActive('/contact')} isScrolled={isScrolled}>Contact</NavLink>
          </div>
          
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-primary-200'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-primary-200'}`} />
            )}
          </button>
        </div>
        
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}>
          <div className="flex flex-col space-y-4 pt-4 pb-6">
            <MobileNavLink to="/" onClick={closeMenu}>Home</MobileNavLink>
            <MobileNavLink to="/materials" onClick={closeMenu}>Materials</MobileNavLink>
            <MobileNavLink to="/gallery" onClick={closeMenu}>Gallery</MobileNavLink>
            <MobileNavLink to="/contact" onClick={closeMenu}>Contact</MobileNavLink>
          </div>
        </div>
      </Container>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  isActive: boolean;
  isScrolled: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, isActive, isScrolled, children }) => (
  <Link
    to={to}
    className={`font-medium transition-colors duration-300 ${
      isActive 
        ? 'text-accent-400' 
        : isScrolled 
          ? 'text-gray-800 hover:text-primary-600' 
          : 'text-primary-200 hover:text-primary-100'
    }`}
  >
    {children}
  </Link>
);

interface MobileNavLinkProps {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, onClick, children }) => (
  <Link
    to={to}
    className="py-2 text-gray-700 hover:text-primary-600 font-medium"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;