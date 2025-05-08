import React from 'react';
import { Button } from './shared/Button';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-brown-dark/90 to-brown-dark px-4">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6044255/pexels-photo-6044255.jpeg')] bg-cover bg-center opacity-30 mix-blend-multiply"></div>
      <div className="container mx-auto text-center z-10 py-20">
        <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-cream font-normal mb-4 tracking-wide">
          César & Vivaldi
        </h1>
        <p className="text-cream/90 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 font-light">
          Atelier de réparation et création de sacs en cuir – Lyon 69009
        </p>
        <div className="mt-10">
          <Button variant="primary" size="lg">
            Demander un devis
          </Button>
          <Button variant="secondary" size="lg" className="ml-4">
            Voir nos réalisations
          </Button>
        </div>
      </div>
    </section>
  );
}