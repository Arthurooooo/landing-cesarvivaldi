import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  light?: boolean;
}

export function SectionTitle({ children, light = false }: SectionTitleProps) {
  return (
    <div className="text-center mb-4">
      <h2 className={`text-3xl md:text-4xl font-medium mb-2 ${light ? 'text-cream' : 'text-brown-dark'}`}>
        {children}
      </h2>
      <div className="flex items-center justify-center">
        <div className={`h-0.5 w-8 ${light ? 'bg-cream/50' : 'bg-brown-light/50'} rounded-full mx-1`}></div>
        <div className={`h-0.5 w-16 ${light ? 'bg-cream' : 'bg-brown-dark'} rounded-full mx-1`}></div>
        <div className={`h-0.5 w-8 ${light ? 'bg-cream/50' : 'bg-brown-light/50'} rounded-full mx-1`}></div>
      </div>
    </div>
  );
}