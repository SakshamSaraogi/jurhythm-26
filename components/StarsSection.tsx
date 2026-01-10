"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const proniteStars = [
  {
    title: "Coming Soon",
    src: "/posters/1.png",
  },
  {
    title: "Coming Soon",
    src: "/posters/2.png",
  },
  {
    title: "Coming Soon",
    src: "/posters/3.png",
  },
];

export default function StarsSection() {
  const [isMobile, setIsMobile] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="pronite" className="relative md:min-h-screen py-24">
      {/* Twinkling Stars Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-white/60 rounded-full ${
              Math.random() > 0.5 ? "animate-twinkle" : ""
            }`}
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 2 + 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative Floating Lanterns */}
      <div className="absolute top-20 left-10 w-16 h-24 opacity-60 animate-pulse" style={{ animationDuration: '3s' }}>
        <div className="relative w-full h-full">
          {/* Lantern body */}
          <div className="absolute inset-x-2 top-2 bottom-6 bg-gradient-to-b from-[#F4C542] to-[#FFB84D] rounded-lg shadow-[0_0_30px_rgba(244,197,66,0.8)]"></div>
          {/* Lantern top */}
          <div className="absolute inset-x-3 top-0 h-3 bg-[#8b4513] rounded-t-lg"></div>
          {/* Lantern bottom */}
          <div className="absolute inset-x-3 bottom-4 h-3 bg-[#8b4513] rounded-b-lg"></div>
          {/* Hanging string */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-0.5 h-8 bg-[#8b4513]"></div>
          {/* Light glow */}
          <div className="absolute inset-0 bg-[#F4C542] blur-xl opacity-40"></div>
        </div>
      </div>

      <div className="absolute top-32 right-16 w-20 h-28 opacity-50 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <div className="relative w-full h-full">
          {/* Lantern body */}
          <div className="absolute inset-x-2 top-2 bottom-6 bg-gradient-to-b from-[#FFA726] to-[#F4C542] rounded-lg shadow-[0_0_30px_rgba(255,167,38,0.8)]"></div>
          {/* Lantern top */}
          <div className="absolute inset-x-3 top-0 h-3 bg-[#8b4513] rounded-t-lg"></div>
          {/* Lantern bottom */}
          <div className="absolute inset-x-3 bottom-4 h-3 bg-[#8b4513] rounded-b-lg"></div>
          {/* Hanging string */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-0.5 h-10 bg-[#8b4513]"></div>
          {/* Light glow */}
          <div className="absolute inset-0 bg-[#FFA726] blur-xl opacity-40"></div>
        </div>
      </div>

      <div className="relative z-10 px-4 w-full max-w-7xl flex flex-col items-center justify-center gap-16 mx-auto">
        <div className="w-fit relative group">
          <h2 className="text-5xl md:text-8xl duration-500 font-new-amsterdam tracking-wide font-bold text-center text-white drop-shadow-[0_0_30px_rgba(255,107,53,0.6)] uppercase">
            Pronite
          </h2>
        </div>
        <div
          className="flex flex-wrap xl:flex-row justify-center items-center gap-8 md:gap-4 lg:gap-12"
          style={{
            perspective: "1000px",
          }}
        >
          {proniteStars.map((star, index) => {
            let transformStyles = {};
            if (!isMobile) {
              if (hoveredIndex === null || hoveredIndex !== index) {
                if (index === 0) {
                  transformStyles = {
                    transform: "translateX(20px) scale(1) rotateY(15deg)",
                  };
                } else if (index === 1) {
                  transformStyles = {
                    transform: "translateX(0px) scale(0.93) rotateY(0deg)",
                  };
                } else if (index === 2) {
                  transformStyles = {
                    transform: "translateX(-20px) scale(1) rotateY(-15deg)",
                  };
                }
              }
            }

            return (
              <div
                key={index}
                className={cn(
                  "relative w-48 md:w-44 lg:w-52 h-72 group bg-gray-800/50 backdrop-blur-sm text-white rounded-lg shadow-lg",
                  "transition-all duration-500 ease-in-out",
                  !isMobile && hoveredIndex === index
                    ? "scale-110 rotate-0 translate-x-0 z-20"
                    : "",
                  !isMobile && hoveredIndex !== null && hoveredIndex !== index
                    ? "opacity-50"
                    : ""
                )}
                style={transformStyles}
                onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              >
                <div className="absolute -inset-1 group bg-gradient-to-r z-10 from-[#F4C542] via-[#FFB84D] to-[#FFA726] rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#F4C542]/50 to-black/50 opacity-75 hover:opacity-50 transition-opacity duration-500 rounded-xl"></div>
                <div className="relative z-10 flex justify-center items-center h-full">
                  <Image
                    loading="lazy"
                    src={star.src}
                    fill
                    className="w-full h-full object-cover rounded-xl"
                    alt={star.title}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
