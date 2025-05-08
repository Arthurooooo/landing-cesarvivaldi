import React, { useState } from 'react';
import { SectionTitle } from './shared/SectionTitle';
import { BeforeAfterCard } from './shared/BeforeAfterCard';

export function Gallery() {
  const [activeTab, setActiveTab] = useState('avant-apres');
  
  const beforeAfterItems = [
    {
      title: "Sac à main en cuir restauré",
      beforeImg: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
      afterImg: "https://images.pexels.com/photos/5695877/pexels-photo-5695877.jpeg",
      description: "Restauration complète d'un sac en cuir avec remplacement de la doublure intérieure et réparation des coutures"
    },
    {
      title: "Réparation d'anse de sac",
      beforeImg: "https://images.pexels.com/photos/3661622/pexels-photo-3661622.jpeg",
      afterImg: "https://images.pexels.com/photos/6044246/pexels-photo-6044246.jpeg",
      description: "Remplacement et reconditionnement des anses usées"
    },
    {
      title: "Restauration d'un portefeuille",
      beforeImg: "https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg",
      afterImg: "https://images.pexels.com/photos/937401/pexels-photo-937401.jpeg",
      description: "Restauration complète avec nouveau cuir et finitions à l'identique"
    },
    {
      title: "Rénovation sac vintage",
      beforeImg: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
      afterImg: "https://images.pexels.com/photos/5695877/pexels-photo-5695877.jpeg",
      description: "Rénovation complète d'un sac vintage avec restauration du cuir et des finitions"
    },
    {
      title: "Réparation bandoulière",
      beforeImg: "https://images.pexels.com/photos/3661622/pexels-photo-3661622.jpeg",
      afterImg: "https://images.pexels.com/photos/6044246/pexels-photo-6044246.jpeg",
      description: "Remplacement de la bandoulière et restauration des attaches"
    },
    {
      title: "Restauration fermoir",
      beforeImg: "https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg",
      afterImg: "https://images.pexels.com/photos/937401/pexels-photo-937401.jpeg",
      description: "Remplacement du fermoir et rénovation du cuir environnant"
    }
  ];
  
  const creationItems = [
    "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    "https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg",
    "https://images.pexels.com/photos/937401/pexels-photo-937401.jpeg",
    "https://images.pexels.com/photos/5695877/pexels-photo-5695877.jpeg",
    "https://images.pexels.com/photos/6044246/pexels-photo-6044246.jpeg",
    "https://images.pexels.com/photos/3661622/pexels-photo-3661622.jpeg",
    "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    "https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg",
    "https://images.pexels.com/photos/937401/pexels-photo-937401.jpeg"
  ];

  return (
    <section id="gallery" className="py-20 bg-cream/50">
      <div className="container mx-auto px-4">
        <SectionTitle>Nos Réalisations</SectionTitle>
        
        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex rounded-md overflow-hidden border border-brown-light">
            <button
              className={`px-6 py-3 font-medium ${activeTab === 'avant-apres' ? 'bg-brown-dark text-cream' : 'bg-white text-brown-dark hover:bg-brown-light/20'}`}
              onClick={() => setActiveTab('avant-apres')}
            >
              Avant / Après
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === 'creations' ? 'bg-brown-dark text-cream' : 'bg-white text-brown-dark hover:bg-brown-light/20'}`}
              onClick={() => setActiveTab('creations')}
            >
              Nos Créations
            </button>
          </div>
        </div>
        
        {activeTab === 'avant-apres' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterItems.map((item, index) => (
              <BeforeAfterCard
                key={index}
                title={item.title}
                beforeImg={item.beforeImg}
                afterImg={item.afterImg}
                description={item.description}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {creationItems.map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={img}
                  alt={`Création artisanale ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}