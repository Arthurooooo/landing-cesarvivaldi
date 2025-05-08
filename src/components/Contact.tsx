import React from 'react';
import { SectionTitle } from './shared/SectionTitle';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './shared/Button';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-cream/30 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Contactez-nous</SectionTitle>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-medium text-brown-dark mb-6">Informations de contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-brown-light/20 p-3 rounded-full mr-4">
                  <Phone className="w-5 h-5 text-brown-dark" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Téléphone</h4>
                  <p className="text-gray-600">06.49.53.34.54</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brown-light/20 p-3 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-brown-dark" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email</h4>
                  <p className="text-gray-600">cesaretvivaldi@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brown-light/20 p-3 rounded-full mr-4">
                  <MapPin className="w-5 h-5 text-brown-dark" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Adresse</h4>
                  <p className="text-gray-600">42 Rue des Artisans, 69009 Lyon</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brown-light/20 p-3 rounded-full mr-4">
                  <Clock className="w-5 h-5 text-brown-dark" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Horaires d'ouverture</h4>
                  <p className="text-gray-600">Du mardi au samedi : 10h - 18h</p>
                  <p className="text-gray-600">Fermé le dimanche et lundi</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-medium text-brown-dark mb-6">Formulaire de contact</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-light focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-light focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-light focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-light focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <div className="pt-2">
                <Button variant="primary" size="md" fullWidth>
                  Envoyer le message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}