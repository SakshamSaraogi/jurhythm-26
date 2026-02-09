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

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Firefly / Jugnoo Lights */}
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
                  background: `radial-gradient(circle, rgba(244,197,66,${
                    Math.random() * 0.8 + 0.4
                  }), rgba(255,184,77,${
                    Math.random() * 0.4 + 0.2
                  }), transparent)`,
                  boxShadow: `0 0 ${
                    Math.random() * 20 + 10
                  }px rgba(244,197,66,${
                    Math.random() * 0.7 + 0.3
                  })`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 2}s`,
                  filter: "blur(1px)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col z-30 justify-center items-center gap-4 sm:gap-6 w-full h-full">
          {/* Logo */}
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl flex justify-center px-4">
            <Image
              src={site.logo}
              alt={`${site.name} ${site.year}`}
              width={400}
              height={225}
              className="w-full h-auto drop-shadow-[0_0_40px_rgba(244,197,66,0.8)]"
              priority
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-4 w-full sm:w-auto">
            {hero.buttons.map((button: any, index: number) => {
              // PRIMARY BUTTON (Scroll)
              if (button.type === "primary") {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      if (button.scrollTo) {
                        const element = document.getElementById(button.scrollTo);
                        if (element) {
                          const yOffset = -80;
                          const y =
                            element.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }
                      }
                    }}
                    className="bg-gradient-to-r from-[#fbbf24] to-[#fde68a]
                               text-black border-2 border-[#fbbf24]
                               hover:from-[#fde68a] hover:to-[#fbbf24]
                               duration-300 cursor-pointer font-semibold
                               tracking-wide py-2.5 sm:py-3 px-6 sm:px-8
                               text-sm sm:text-base md:text-lg rounded-full
                               transition-all transform hover:scale-105
                               shadow-[0_0_20px_rgba(251,191,36,0.5)]
                               hover:shadow-[0_0_30px_rgba(251,191,36,0.8)]
                               w-full sm:w-auto text-center"
                  >
                    {button.text}
                  </button>
                );
              }

              // OUTLINE / SECONDARY BUTTONS
              return (
                <a
                  key={index}
                  href={button.href}
                  target={button.external ? "_blank" : "_self"}
                  rel={button.external ? "noopener noreferrer" : undefined}
                  className="bg-transparent text-white border-2 border-white
                             hover:bg-white hover:text-black duration-300
                             cursor-pointer font-semibold tracking-wide
                             py-2.5 sm:py-3 px-6 sm:px-8
                             text-sm sm:text-base md:text-lg rounded-full
                             inline-flex items-center justify-center gap-2
                             transition-all transform hover:scale-105
                             shadow-[0_0_15px_rgba(255,255,255,0.2)]
                             hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]
                             w-full sm:w-auto"
                >
                  {button.text}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full h-32 absolute bottom-0 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
}

export default Hero;
