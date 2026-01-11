"use client";

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: 'Technical',
    description: 'Explore cutting-edge technologies and innovative solutions.',
    imageUrl: '/posters/1.png'
  },
  {
    id: 2,
    title: 'Cultural',
    description: 'Immerse yourself in diverse cultural experiences and performances.',
    imageUrl: '/posters/2.png'
  },
  {
    id: 3,
    title: 'Sports',
    description: 'Engage in thrilling sports events and competitions.',
    imageUrl: '/posters/3.png'
  },
  {
    id: 4,
    title: 'Media',
    description: 'Discover the latest trends in digital and traditional media.',
    imageUrl: '/posters/1-3.png'
  },
];

export default function ExpandingCards() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-8 font-sans">
      {/* Section Title */}
      <div className="w-fit relative group cursor-pointer mb-16">
        <h2 className="text-5xl md:text-8xl duration-500 font-new-amsterdam tracking-wide font-bold text-center text-[#fbbf24] drop-shadow-[0_0_40px_rgba(251,191,36,0.6)] uppercase relative z-20">
          Domains
        </h2>
      </div>

      <div className="w-full max-w-6xl h-[600px] flex gap-2 md:gap-4">
        {cards.map((card) => {
          const isActive = activeId === card.id;

          return (
            <div
              key={card.id}
              onClick={() => setActiveId(card.id)}
              onMouseEnter={() => setActiveId(card.id)}
              className={`
                relative flex items-end overflow-hidden rounded-2xl cursor-pointer
                transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                ${isActive ? 'flex-[4]' : 'flex-[1.5]'}
              `}
            >
              {/* Background Image */}
              <img
                src={card.imageUrl}
                alt={card.title}
                className={`
                  absolute inset-0 w-full h-full object-cover transition-all duration-700
                  ${isActive ? 'grayscale-0 scale-110' : 'grayscale-[100%] scale-100 opacity-60 hover:opacity-100'}
                `}
              />

              {/* Gradient Overlay */}
              <div 
                className={`
                  absolute inset-0 bg-gradient-to-t from-black/90 via-[#fbbf24]/20 to-transparent
                  transition-opacity duration-500
                  ${isActive ? 'opacity-100' : 'opacity-70'}
                `} 
              />

              {/* Content Container */}
              <div className="relative z-10 w-full h-full flex flex-col justify-end p-6 md:p-8">
                
                {/* Description (Appears above title) */}
                <div 
                  className={`
                    mb-4 overflow-hidden transition-all duration-500 delay-100
                    ${isActive ? 'opacity-100 translate-y-0 max-h-40' : 'opacity-0 -translate-y-4 max-h-0'}
                  `}
                >
                  <p className="text-gray-300 max-w-sm leading-relaxed text-sm md:text-base mb-4 font-delius">
                    {card.description}
                  </p>
                  
                  <button className="flex items-center gap-2 text-black bg-gradient-to-r from-[#fbbf24] to-[#fde68a] hover:from-[#fde68a] hover:to-[#fbbf24] backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-300 text-xs font-new-amsterdam uppercase tracking-wider shadow-[0_0_15px_rgba(251,191,36,0.4)]">
                    Explore <ArrowUpRight size={14} />
                  </button>
                </div>

                {/* Title (Rotates from Vertical Left to Horizontal) */}
                <div className="relative h-12 md:h-16 w-full">
                  <h2 
                    className={`
                      text-2xl md:text-4xl font-bold text-[#fbbf24] uppercase tracking-wider whitespace-nowrap font-new-amsterdam
                      absolute bottom-0 left-2 md:left-6 origin-bottom-left
                      transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                      drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]
                      ${isActive ? 'rotate-0' : '-rotate-90'}
                    `}
                  >
                    {card.title}
                  </h2>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
