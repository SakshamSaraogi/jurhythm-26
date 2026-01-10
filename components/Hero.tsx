"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import VortexDemoSecond from "./vortex-demo-2";
import { Model } from "./models/Model";
import RenderModel from "./Render";
import FireworksBackground from "./FireworksBackground";

function Hero() {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    // Delay 3D model loading for better performance
    const timer = setTimeout(() => {
      setShow3D(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center relative">
      <div className="w-full h-full flex px-10 py-10 flex-1">
        <div className="absolute inset-0">
          {/* Background vortex effect */}
          <div className="absolute inset-0 z-0">
            <VortexDemoSecond />
          </div>

          {/* Minimal Fireworks Effect */}
          <div className="absolute inset-0 z-5">
            <FireworksBackground intensity="low" autoStart={true} />
          </div>

          {/* Hot Air Balloon 3D Model */}
          {show3D && (
            <div className="absolute inset-0 z-10 pointer-events-none">
              <RenderModel>
                <Model />
              </RenderModel>
            </div>
          )}

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

          {/* Decorative Lanterns around Balloon - Multi-colored */}
          <div className="absolute top-16 right-1/4 w-12 h-18 opacity-60 animate-pulse z-15" style={{ animationDuration: '3.2s' }}>
            <div className="relative w-full h-full">
              <div className="absolute inset-x-2 top-2 bottom-4 bg-gradient-to-b from-[#fbbf24] to-[#f59e0b] rounded-lg shadow-[0_0_25px_rgba(251,191,36,0.9)]"></div>
              <div className="absolute inset-x-2.5 top-0 h-2 bg-[#78350f] rounded-t-lg"></div>
              <div className="absolute inset-x-2.5 bottom-2 h-2 bg-[#78350f] rounded-b-lg"></div>
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-0.5 h-6 bg-[#78350f]"></div>
              <div className="absolute inset-0 bg-[#fbbf24] blur-lg opacity-50"></div>
            </div>
          </div>

          <div className="absolute bottom-1/4 right-1/3 w-10 h-16 opacity-55 animate-pulse z-15" style={{ animationDuration: '3.8s', animationDelay: '0.8s' }}>
            <div className="relative w-full h-full">
              <div className="absolute inset-x-2 top-2 bottom-4 bg-gradient-to-b from-[#fb923c] to-[#f97316] rounded-lg shadow-[0_0_25px_rgba(251,146,60,0.9)]"></div>
              <div className="absolute inset-x-2.5 top-0 h-2 bg-[#7c2d12] rounded-t-lg"></div>
              <div className="absolute inset-x-2.5 bottom-2 h-2 bg-[#7c2d12] rounded-b-lg"></div>
              <div className="absolute left-1/2 -translate-x-1/2 -top-5 w-0.5 h-5 bg-[#7c2d12]"></div>
              <div className="absolute inset-0 bg-[#fb923c] blur-lg opacity-50"></div>
            </div>
          </div>

          <div className="absolute top-1/3 right-20 w-11 h-17 opacity-50 animate-pulse z-15" style={{ animationDuration: '4s', animationDelay: '1.5s' }}>
            <div className="relative w-full h-full">
              <div className="absolute inset-x-2 top-2 bottom-4 bg-gradient-to-b from-[#fde047] to-[#facc15] rounded-lg shadow-[0_0_25px_rgba(253,224,71,0.9)]"></div>
              <div className="absolute inset-x-2.5 top-0 h-2 bg-[#854d0e] rounded-t-lg"></div>
              <div className="absolute inset-x-2.5 bottom-2 h-2 bg-[#854d0e] rounded-b-lg"></div>
              <div className="absolute left-1/2 -translate-x-1/2 -top-5 w-0.5 h-5 bg-[#854d0e]"></div>
              <div className="absolute inset-0 bg-[#fde047] blur-lg opacity-50"></div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col z-30 justify-end items-start gap-4 w-full">
          <div className="relative w-full max-w-4xl">
            <Image 
              src="/jurhythm-logo.png" 
              alt="JURHYTHM'26" 
              width={800}
              height={300}
              className="w-full h-auto drop-shadow-[0_0_40px_rgba(244,197,66,0.8)]"
              priority
            />
          </div>
          <p className="font-delius text-base md:text-lg max-w-2xl text-white line-clamp-2 md:line-clamp-3 tracking-wide leading-relaxed">
            Experience the ultimate celebration of talent at JU Rhythm,
            where creativity meets competition. From cultural performances to 
            sports championships, technical innovations to media showcases,
            join us in this spectacular fest of passion and excellence.
          </p>
          <h2 className="font-delius text-[#F4C542] text-xl md:text-3xl font-bold tracking-widest uppercase">9th - 11th October</h2>
          
          {/* Three Registration Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button 
              onClick={() => {
                const element = document.getElementById('verticals');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#F4C542] text-black border-2 border-[#F4C542] hover:bg-white hover:text-[#F4C542] duration-300 cursor-pointer font-new-amsterdam font-bold tracking-widest py-3 px-8 text-base md:text-lg rounded-full transition-all transform hover:scale-105 uppercase shadow-[0_0_20px_rgba(244,197,66,0.5)] hover:shadow-[0_0_30px_rgba(244,197,66,0.8)]"
            >
              Register for Events
            </button>
            
            <button 
              onClick={() => {
                const element = document.getElementById('pronite');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent text-[#F4C542] border-2 border-[#F4C542] hover:bg-[#F4C542] hover:text-black duration-300 cursor-pointer font-new-amsterdam font-bold tracking-widest py-3 px-8 text-base md:text-lg rounded-full transition-all transform hover:scale-105 uppercase shadow-[0_0_20px_rgba(244,197,66,0.3)] hover:shadow-[0_0_30px_rgba(244,197,66,0.8)]"
            >
              Book Pronite
            </button>

            <a 
              href="/Guidelines.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black duration-300 cursor-pointer font-new-amsterdam font-bold tracking-widest py-3 px-8 text-base md:text-lg rounded-full inline-flex items-center gap-2 transition-all transform hover:scale-105 uppercase shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
            >
              <span>Guidelines</span>
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
