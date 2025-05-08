import React from 'react';
import { SectionTitle } from './shared/SectionTitle';

export function About() {
  return (
    <section id="about" className="py-20 bg-cream/30">
      <div className="container mx-auto px-4">
        <SectionTitle>À propos de Valérie Gonthier</SectionTitle>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
          <div className="w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg" 
              alt="Valérie Gonthier dans son atelier" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-medium text-brown-dark mb-6">Artisan maroquinier passionnée</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Installée à Lyon depuis plus de 15 ans, j'ai développé une passion pour le travail du cuir qui remonte à mon enfance. 
              Formée auprès des meilleurs artisans maroquiniers de France, j'ai perfectionné mon savoir-faire au fil des années.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Dans mon atelier César & Vivaldi, je redonne vie à vos sacs en cuir préférés grâce à des techniques traditionnelles 
              et des matériaux de haute qualité. Chaque pièce est traitée avec le plus grand soin, qu'il s'agisse d'une 
              réparation minutieuse ou d'une création originale.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ma philosophie : un travail artisanal d'exception, une attention particulière aux détails et un service personnalisé 
              pour chaque client. Je m'engage à préserver l'âme de vos accessoires tout en leur offrant une seconde jeunesse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}