import React from 'react';

interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
}

export function TestimonialCard({ name, text, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-brown-light/30">
      <div className="mb-4">
        <svg className="w-8 h-8 text-brown-light opacity-40" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <p className="text-gray-600 italic flex-grow">{text}</p>
      
      <div className="flex items-center mt-6">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-brown-dark">{name}</h4>
          <p className="text-gray-500 text-sm">Client</p>
        </div>
      </div>
    </div>
  );
}