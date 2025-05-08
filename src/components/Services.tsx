import React from 'react';
import { SectionTitle } from './shared/SectionTitle';
import { ServiceCard } from './shared/ServiceCard';
import { Scissors, RefreshCw, PenTool, Package } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Scissors className="w-10 h-10 text-brown-dark" />,
      title: "Réparation de sacs en cuir",
      description: "Réparation professionnelle de griffures, anses usées, fermetures éclair abîmées et autres dommages sur vos sacs en cuir."
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-brown-dark" />,
      title: "Restauration de sacs de luxe",
      description: "Restauration minutieuse de sacs de marques prestigieuses, respectant les techniques et finitions d'origine."
    },
    {
      icon: <PenTool className="w-10 h-10 text-brown-dark" />,
      title: "Création artisanale",
      description: "Conception et fabrication sur mesure de sacs en cuir uniques, adaptés à vos goûts et besoins spécifiques."
    },
    {
      icon: <Package className="w-10 h-10 text-brown-dark" />,
      title: "Dépôt à Lyon ou envoi postal",
      description: "Service de dépôt à l'atelier à Lyon 69009 ou possibilité d'envoi et retour par voie postale dans toute la France."
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg')] bg-fixed bg-cover opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle>Nos Services</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}