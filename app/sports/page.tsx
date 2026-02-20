"use client";
import Image from "next/image";
import Card from "@/components/domainscomponents/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MarqueeBar from "@/components/MarqueeBar";
import GlowingDots from "@/components/GlowingDots";
import React from "react";
import content from "@/lib/useContent";

const page = () => {
  const sportsDomain = content.domains.find(d => d.title === "Sports");
  
  if (!sportsDomain) return null;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <GlowingDots count={60} />
      
      {/* Balloon decoration */}
      <Image 
        src="/balloon.png"
        alt=""
        width={300}
        height={300}
        className="absolute right-16 bottom-24 w-60 h-60 opacity-35 animate-float pointer-events-none z-10"
      />
      
      <Navbar />
      
      <div className="w-full pt-24 sm:pt-32 md:pt-16 flex flex-col items-center min-h-screen pb-16 relative z-20">
        {/* Funky Title with breathing space */}
        <div className="w-full px-6 py-12 md:py-20 flex flex-col items-center gap-8">
          <h1 className="text-[#fbbf24] font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] text-center tracking-widest uppercase leading-none animate-pulse-slow drop-shadow-[0_0_40px_rgba(251,191,36,0.6)]">
            {sportsDomain.title}
          </h1>
          <p className="text-white font-inter text-2xl sm:text-3xl md:text-4xl text-center tracking-widest uppercase">
            {sportsDomain.tagline}
          </p>
        </div>

        {/* Animated Marquee Bar */}
        <MarqueeBar text={sportsDomain.marqueeText} direction="left" speed={sportsDomain.marqueeSpeed} />

        {/* Cards with better spacing */}
        <div className="w-full px-6 sm:px-8 md:px-12 py-8 mt-12 sm:mt-16 md:mt-24 flex flex-wrap gap-8 sm:gap-10 md:gap-12 justify-center">
          {(sportsDomain.events ?? []).map((event, index) => (
            <Card
              key={index}
              name={event.name}
              description={event.description}
              link={event.link}
              image={event.image}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
