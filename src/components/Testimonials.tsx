import React from 'react';
import { SectionTitle } from './shared/SectionTitle';
import { TestimonialCard } from './shared/TestimonialCard';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sophie Durand",
      text: "Valérie a redonné vie à mon sac Hermès vintage qui avait été abîmé lors d'un voyage. Son travail est d'une précision extraordinaire, on ne voit plus aucune trace de la déchirure. Je recommande vivement son atelier !",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      name: "Marc Leblanc",
      text: "J'ai fait créer un porte-documents sur mesure pour mon activité professionnelle. Le résultat est magnifique, avec une qualité de cuir exceptionnelle et des finitions parfaites. Un vrai travail d'artisan.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      name: "Élise Moreau",
      text: "Service impeccable ! Ma pochette Louis Vuitton avait une fermeture cassée que plusieurs boutiques refusaient de réparer. Valérie a non seulement trouvé la pièce d'origine mais l'a remplacée avec une finition identique à l'originale.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-brown-light/10">
      <div className="container mx-auto px-4">
        <SectionTitle>Avis Clients</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              text={testimonial.text}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}