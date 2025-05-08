import React, { useState, useEffect } from 'react';
import { Button } from './shared/Button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Avis', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="z-10">
            <h2 className={`font-script text-2xl md:text-3xl transition-colors duration-300 ${isScrolled ? 'text-brown-dark' : 'text-cream'}`}>
              César & Vivaldi
            </h2>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:text-brown-light ${isScrolled ? 'text-brown-dark' : 'text-cream'}`}
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant={isScrolled ? "primary" : "light"} 
              size="sm"
              href="#contact"
            >
              Demander un devis
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden z-10"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-brown-dark' : 'text-cream'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-brown-dark' : 'text-cream'}`} />
            )}
          </button>
          
          {/* Mobile Navigation */}
          <div className={`fixed inset-0 bg-brown-dark flex flex-col justify-center items-center transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-cream text-lg font-medium hover:text-brown-light transition-colors"
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="light" 
                size="md"
                href="#contact"
                onClick={toggleMenu}
              >
                Demander un devis
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}