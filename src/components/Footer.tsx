import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brown-dark text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-script text-3xl mb-2">César & Vivaldi</h2>
            <p className="text-cream/70">Atelier de maroquinerie artisanale à Lyon</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
            <div>
              <h4 className="text-lg font-medium mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-cream/70 hover:text-cream transition-colors">Accueil</a></li>
                <li><a href="#about" className="text-cream/70 hover:text-cream transition-colors">À propos</a></li>
                <li><a href="#services" className="text-cream/70 hover:text-cream transition-colors">Services</a></li>
                <li><a href="#gallery" className="text-cream/70 hover:text-cream transition-colors">Galerie</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-3">Contact</h4>
              <ul className="space-y-2">
                <li><a href="tel:0649533454" className="text-cream/70 hover:text-cream transition-colors">06.49.53.34.54</a></li>
                <li><a href="mailto:cesaretvivaldi@gmail.com" className="text-cream/70 hover:text-cream transition-colors">cesaretvivaldi@gmail.com</a></li>
                <li><span className="text-cream/70">42 Rue des Artisans, 69009 Lyon</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="text-cream/70 text-sm">
            &copy; {currentYear} César & Vivaldi. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}