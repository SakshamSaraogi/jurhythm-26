"use client";
import React from "react";
import Image from "next/image";
import content from "@/lib/useContent";

function Hero() {
  const { site, hero } = content;

  return (
    <div className="w-full h-full flex flex-col justify-between items-center relative">
      <div className="w-full h-full flex px-4 sm:px-6 md:px-10 py-6 md:py-10 flex-1">
        <div className="absolute inset-0">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={site.heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Firefly/Jugnoo Lights - Golden Yellow Glowing Particles */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={`firefly-${i}`}
                className="absolute rounded-full animate-pulse"
                style={{
                  width: `${Math.random() * 6 + 3}px`,
                  height: `${Math.random() * 6 + 3}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, rgba(244,197,66,${Math.random() * 0.8 + 0.4}), rgba(255,184,77,${Math.random() * 0.4 + 0.2}), transparent)`,
                  boxShadow: `0 0 ${Math.random() * 20 + 10}px rgba(244,197,66,${Math.random() * 0.7 + 0.3})`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 2}s`,
                  filter: 'blur(1px)',
                }}
              />
            ))}
          </div>

        </div>
        
        <div className="flex flex-col z-30 justify-center items-center gap-4 sm:gap-6 w-full h-full">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl flex justify-center px-4">
            <Image 
              src={site.logo} 
              alt={`${site.name}'${site.year}`}
              width={400}
              height={225}
              className="w-full h-auto drop-shadow-[0_0_40px_rgba(244,197,66,0.8)]"
              priority
            />
          </div>
          
          {/* Three Registration Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-4 w-full sm:w-auto">
            <button 
              onClick={() => {
                window.location.hash = "verticals";
              }}
              className="bg-gradient-to-r from-[#fbbf24] to-[#fde68a] text-black border-2 border-[#fbbf24] hover:from-[#fde68a] hover:to-[#fbbf24] duration-300 cursor-pointer font-semibold tracking-wide py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base md:text-lg rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)] w-full sm:w-auto text-center"
            >
              {hero.buttons[0].text}
            </button>

            <a 
              href={hero.buttons[1].href}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black duration-300 cursor-pointer font-semibold tracking-wide py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base md:text-lg rounded-full inline-flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] w-full sm:w-auto"
            >
              <span>{hero.buttons[1].text}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-center h-32 z-10 absolute bg-gradient-to-t from-black to-transparent bottom-0" />
    </div>
  );
}

export default Hero;
