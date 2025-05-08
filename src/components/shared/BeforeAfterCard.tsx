import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterCardProps {
  title: string;
  beforeImg: string;
  afterImg: string;
  description: string;
}

export function BeforeAfterCard({ title, beforeImg, afterImg, description }: BeforeAfterCardProps) {
  const [view, setView] = useState<'before' | 'after' | 'split'>('split');
  const [splitPosition, setSplitPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSplitPosition(percentage);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = () => {
    isDragging.current = true;
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;

    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSplitPosition(percentage);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative aspect-square" ref={containerRef}>
        {view === 'before' && (
          <img 
            src={beforeImg} 
            alt="Avant" 
            className="w-full h-full object-cover"
          />
        )}
        
        {view === 'after' && (
          <img 
            src={afterImg} 
            alt="Après" 
            className="w-full h-full object-cover"
          />
        )}
        
        {view === 'split' && (
          <div className="relative w-full h-full cursor-ew-resize">
            {/* Image "avant" */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={beforeImg} 
                alt="Avant" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Image "après" */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `polygon(${splitPosition}% 0, 100% 0, 100% 100%, ${splitPosition}% 100%)`,
              }}
            >
              <img 
                src={afterImg} 
                alt="Après" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Slider handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize select-none"
              style={{ left: `${splitPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-1 h-4 bg-brown-dark rounded-full"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium text-brown-dark mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="flex items-center justify-between bg-gray-100 rounded-md p-1">
          <button 
            className={`flex-1 px-3 py-1.5 text-sm rounded font-medium transition-colors ${view === 'before' ? 'bg-brown-dark text-white' : 'hover:bg-gray-200'}`}
            onClick={() => setView('before')}
          >
            Avant
          </button>
          <button 
            className={`flex-1 px-3 py-1.5 text-sm rounded font-medium transition-colors ${view === 'split' ? 'bg-brown-dark text-white' : 'hover:bg-gray-200'}`}
            onClick={() => setView('split')}
          >
            Avant/Après
          </button>
          <button 
            className={`flex-1 px-3 py-1.5 text-sm rounded font-medium transition-colors ${view === 'after' ? 'bg-brown-dark text-white' : 'hover:bg-gray-200'}`}
            onClick={() => setView('after')}
          >
            Après
          </button>
        </div>
      </div>
    </div>
  );
}