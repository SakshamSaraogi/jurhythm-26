"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Fireworks } from "@fireworks-js/react";

const verticals = [
  {
    title: "Technical",
    description: "Explore cutting-edge technologies and innovative solutions.",
    link: "/technical",
    src: "/posters/1.png",
  },
  {
    title: "Cultural",
    description:
      "Immerse yourself in diverse cultural experiences and performances.",
    link: "/cultural",
    src: "/posters/2.png",
  },
  {
    title: "Sports",
    description: "Engage in thrilling sports events and competitions.",
    link: "/sports",
    src: "/posters/3.png",
  },
  {
    title: "Media",
    description: "Discover the latest trends in digital and traditional media.",
    link: "/media",
    src: "/posters/1-3.png",
  },
];

export default function VerticalsSection() {
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
    <section id="verticals" className="relative z-0 md:min-h-screen py-24">
      {/* Fireworks Background - Covering whole section */}
      <Fireworks
        options={{
          opacity: 0.6,
          acceleration: 1.05,
          friction: 0.97,
          gravity: 1.5,
          particles: 80,
          traceLength: 3,
          traceSpeed: 10,
          explosion: 5,
          intensity: 20,
          flickering: 50,
          lineStyle: 'round',
          hue: {
            min: 40,
            max: 50,
          },
          delay: {
            min: 40,
            max: 90,
          },
          rocketsPoint: {
            min: 50,
            max: 50,
          },
          lineWidth: {
            explosion: {
              min: 1,
              max: 3,
            },
            trace: {
              min: 0.5,
              max: 1.5,
            },
          },
          brightness: {
            min: 50,
            max: 80,
          },
          decay: {
            min: 0.015,
            max: 0.03,
          },
          mouse: {
            click: true,
            move: true,
            max: 3,
          },
        }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />

      {/* Decorative Floating Lanterns - Purple/Green theme */}
      <div className="absolute top-16 left-12 w-18 h-26 opacity-60 animate-pulse" style={{ animationDuration: '3.8s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-6 bg-gradient-to-b from-[#a855f7] to-[#ec4899] rounded-lg shadow-[0_0_30px_rgba(168,85,247,0.8)]"></div>
          <div className="absolute inset-x-3 top-0 h-3 bg-[#4c1d95] rounded-t-lg"></div>
          <div className="absolute inset-x-3 bottom-4 h-3 bg-[#4c1d95] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-9 w-0.5 h-9 bg-[#4c1d95]"></div>
          <div className="absolute inset-0 bg-[#a855f7] blur-xl opacity-40"></div>
        </div>
      </div>

      <div className="absolute bottom-20 right-14 w-16 h-24 opacity-50 animate-pulse" style={{ animationDuration: '4.2s', animationDelay: '1.2s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-6 bg-gradient-to-b from-[#10b981] to-[#06b6d4] rounded-lg shadow-[0_0_30px_rgba(16,185,129,0.8)]"></div>
          <div className="absolute inset-x-3 top-0 h-3 bg-[#065f46] rounded-t-lg"></div>
          <div className="absolute inset-x-3 bottom-4 h-3 bg-[#065f46] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-0.5 h-8 bg-[#065f46]"></div>
          <div className="absolute inset-0 bg-[#10b981] blur-xl opacity-40"></div>
        </div>
      </div>

      <div className="absolute top-1/3 right-8 w-14 h-22 opacity-55 animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-6 bg-gradient-to-b from-[#f59e0b] to-[#ef4444] rounded-lg shadow-[0_0_28px_rgba(245,158,11,0.8)]"></div>
          <div className="absolute inset-x-3 top-0 h-3 bg-[#78350f] rounded-t-lg"></div>
          <div className="absolute inset-x-3 bottom-4 h-3 bg-[#78350f] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-7 w-0.5 h-7 bg-[#78350f]"></div>
          <div className="absolute inset-0 bg-[#f59e0b] blur-xl opacity-40"></div>
        </div>
      </div>

      {/* Twinkling Stars Background
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
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
            }}
          />
        ))}
      </div> */}

      <div className="relative z-10 px-4 w-full max-w-7xl flex flex-col items-center justify-center gap-16 mx-auto">
        <div className="w-fit relative group cursor-pointer">
          <h2 className="text-5xl md:text-8xl duration-500 font-new-amsterdam tracking-wide font-bold text-center text-[#F4C542] drop-shadow-md uppercase relative z-20">
            Events
          </h2>
        </div>
        <div
          className="flex flex-wrap xl:flex-row justify-center items-center gap-8 md:gap-4 lg:gap-12"
          style={{
            perspective: "1000px",
          }}
        >
          {verticals.map((vertical, index) => {
            let transformStyles: React.CSSProperties = {};
            let zIndex = 10 - index;

            if (!isMobile) {
              if (hoveredIndex === null || hoveredIndex !== index) {
                if (index === 0) {
                  transformStyles = {
                    transform: "translateX(40px) scale(1) rotateY(20deg)",
                  };
                } else if (index === 1) {
                  transformStyles = {
                    transform: "translateX(20px) scale(0.95) rotateY(15deg)",
                  };
                } else if (index === 2) {
                  transformStyles = {
                    transform: "translateX(0px) scale(0.93) rotateY(0deg)",
                    marginLeft: "-15px",
                    marginRight: "-15px",
                  };
                } else if (index === 3) {
                  transformStyles = {
                    transform: "translateX(-20px) scale(0.95) rotateY(-15deg)",
                  };
                }
              } else {
                zIndex = 20;
              }
            }

            return (
              <Link
                key={index}
                href={vertical.link}
                className={cn(
                  "relative w-48 md:w-44 lg:w-52 h-72 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg shadow-lg",
                  "transition-all duration-500 ease-in-out",
                  !isMobile && hoveredIndex === index
                    ? "scale-110 rotate-0 translate-x-0"
                    : ""
                )}
                style={{
                  ...transformStyles,
                  zIndex,
                }}
                onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F4C542] via-[#FFB84D] to-[#FFA726] rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#F4C542]/50 to-black/50 opacity-75 hover:opacity-50 transition-opacity duration-500 rounded-xl"></div>
                <div className="relative z-10 flex justify-center items-center h-full">
                  <Image
                    src={vertical.src}
                    fill
                    className="w-full h-full object-cover rounded-xl"
                    alt={vertical.title}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent rounded-b-xl z-20">
                  <h3 className="text-xl font-new-amsterdam font-bold text-[#F4C542] uppercase">
                    {vertical.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-delius">
                    {vertical.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
