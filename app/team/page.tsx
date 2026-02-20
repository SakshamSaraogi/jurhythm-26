"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowingDots from "@/components/GlowingDots";
import { TeamCard } from "@/components/team/TeamCard";
import content from "@/lib/useContent";

const page = () => {
  const { team } = content;
  
  // Secretaries - Top 5 members
  const secretaries = team.secretaries.members;

  // Core Team Members
  const coreTeam = team.coreTeam.members;

  // State for carousel
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(coreTeam.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return coreTeam.slice(start, end);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <GlowingDots count={55} />
      
      {/* Balloon decoration - Top left */}
      <Image 
        src="/balloon.png"
        alt=""
        width={200}
        height={200}
        className="absolute left-8 top-32 w-40 h-40 opacity-50 animate-float pointer-events-none z-10"
      />
      
      <Navbar />
      
      {/* Twinkling Stars Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full pt-24 sm:pt-32 md:pt-16 flex flex-col items-center min-h-screen pb-16 relative z-20">
        {/* Large Title with proper spacing */}
        <div className="w-full px-6 py-12 md:py-20 flex flex-col items-center gap-8">
          <h1 className="text-[#fbbf24] font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] text-center tracking-widest uppercase leading-none animate-pulse-slow drop-shadow-[0_0_40px_rgba(251,191,36,0.6)]">
            {team.title}
          </h1>
        </div>

      <div className="max-w-6xl mx-auto relative z-10 px-3 pb-20">
        {/* Secretaries Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-anton tracking-widest drop-shadow-[0_0_30px_rgba(244,197,66,0.6)]">
            {team.secretaries.heading}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mb-16">
          {secretaries.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              className={`h-48 sm:h-56 md:h-64 lg:h-72 aspect-[3/4] ${
                // Mobile layout: 2-1-2
                index === 2 ? 'col-span-2 sm:col-span-1 justify-self-center' : ''
              }`}
            />
          ))}
        </div>

        {/* Core Team Section */}
        <div className="bg-white/10 p-5 rounded-2xl my-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-anton tracking-widest drop-shadow-[0_0_30px_rgba(244,197,66,0.6)]">
              {team.coreTeam.heading}
            </h2>
            <p className="text-lg text-gray-400 font-inter">
              {team.coreTeam.subheading}
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Cards Grid - 3 columns, 2 rows */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto mb-8">
              {getCurrentPageItems().map((member, index) => (
                <TeamCard
                  key={`${currentPage}-${index}`}
                  name={member.name}
                  position={member.position}
                  image={member.image}
                  className="h-40 sm:h-48 md:h-56 lg:h-64 aspect-square"
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevPage}
                className="bg-gradient-to-r from-[#fbbf24] to-[#fde68a] text-black hover:from-[#fde68a] hover:to-[#fbbf24] p-3 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)] hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Page Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPage
                        ? 'bg-[#fbbf24] w-8 shadow-[0_0_10px_rgba(251,191,36,0.8)]'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextPage}
                className="bg-gradient-to-r from-[#fbbf24] to-[#fde68a] text-black hover:from-[#fde68a] hover:to-[#fbbf24] p-3 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)] hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* Page Counter */}
            <div className="text-center mt-4">
              <span className="text-[#fbbf24] font-anton text-lg tracking-wider">
                Page {currentPage + 1} of {totalPages}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Twinkling Stars Background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-white/60 rounded-full duration-300 ${
              Math.random() > 0.5 ? "animate-twinkle" : ""
            }`}
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 2 + 1.5}s`,
              zIndex: -1,
            }}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default page;
