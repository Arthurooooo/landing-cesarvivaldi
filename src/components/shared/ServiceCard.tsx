import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center border border-transparent hover:border-brown-light/30">
      <div className="mb-4 bg-brown-light/10 p-4 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-brown-dark mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}