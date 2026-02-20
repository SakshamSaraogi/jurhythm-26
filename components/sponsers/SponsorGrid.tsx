"use client";

import { useState } from "react";
import Image from "next/image";
import content from "@/lib/useContent";

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
  tier: "title" | "associate" | "partner";
}

const sponsors: Sponsor[] = content.sponsors as Sponsor[];

const tierConfig = {
  title: {
    label: "Title Sponsor",
    color: "#fbbf24",
    glowColor: "rgba(251,191,36,0.6)",
    borderColor: "border-[#fbbf24]/60",
    bgGradient: "from-[#fbbf24]/15 via-[#fde68a]/5 to-transparent",
    cardMinHeight: "min-h-[260px]",
    gridCols: "grid-cols-1",
    maxLogoWidth: "max-w-[360px]",
  },
  associate: {
    label: "Associate Sponsors",
    color: "#c0c0c0",
    glowColor: "rgba(192,192,192,0.5)",
    borderColor: "border-[#c0c0c0]/40",
    bgGradient: "from-[#c0c0c0]/10 via-[#e5e7eb]/5 to-transparent",
    cardMinHeight: "min-h-[220px]",
    gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    maxLogoWidth: "max-w-[280px]",
  },
  partner: {
    label: "Partners",
    color: "#cd7f32",
    glowColor: "rgba(205,127,50,0.4)",
    borderColor: "border-[#cd7f32]/30",
    bgGradient: "from-[#cd7f32]/10 via-[#d4a574]/5 to-transparent",
    cardMinHeight: "min-h-[180px]",
    gridCols: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
    maxLogoWidth: "max-w-[320px]",
  },
};

const tiers: Array<"title" | "associate" | "partner"> = ["title", "associate", "partner"];

const SponsorGrid = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
      {tiers.map((tier) => {
        const tierSponsors = sponsors.filter((s) => s.tier === tier);
        if (tierSponsors.length === 0) return null;
        const config = tierConfig[tier];

        return (
          <div key={tier} className="flex flex-col items-center">
            {/* Tier Header */}
            <div className="flex items-center gap-4 mb-8 w-full">
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(to right, transparent, ${config.color}40, transparent)`,
                }}
              />
              <h2
                className="font-anton text-2xl sm:text-3xl md:text-4xl tracking-widest uppercase text-center whitespace-nowrap"
                style={{
                  color: config.color,
                  textShadow: `0 0 20px ${config.glowColor}`,
                }}
              >
                {config.label}
              </h2>
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(to right, transparent, ${config.color}40, transparent)`,
                }}
              />
            </div>

            {/* Sponsor Cards Grid */}
            <div className={`grid ${config.gridCols} gap-6 w-full ${tier === "title" ? "max-w-xl mx-auto" : ""}`}>
              {tierSponsors.map((sponsor) => {
                const isComingSoon = !sponsor.logo;
                const Wrapper = isComingSoon ? "div" : "a";
                const wrapperProps = isComingSoon
                  ? {}
                  : { href: sponsor.website, target: "_blank", rel: "noopener noreferrer" };

                return (
                <Wrapper
                  key={sponsor.id}
                  {...wrapperProps}
                  className={`group relative ${isComingSoon ? "cursor-default" : ""}`}
                  onMouseEnter={() => setHoveredId(sponsor.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Card Container */}
                  <div
                    className={`relative h-full ${config.cardMinHeight} overflow-hidden rounded-2xl border bg-transparent p-8 transition-all duration-300 hover:shadow-2xl ${config.borderColor}`}
                    style={{
                      borderColor: hoveredId === sponsor.id ? config.color : undefined,
                      boxShadow: hoveredId === sponsor.id ? `0 0 30px ${config.glowColor}` : undefined,
                    }}
                  >
                    {/* Glow Effect on Hover */}
                    {hoveredId === sponsor.id && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${config.bgGradient} pointer-events-none`}
                      />
                    )}

                    {/* Logo Container */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      {sponsor.logo ? (
                        <div className={`relative w-full aspect-video ${config.maxLogoWidth}`}>
                          <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            fill
                            className="object-contain transition-all duration-300 opacity-80 hover:opacity-100"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white/20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          <p className="text-white/40 font-inter text-lg tracking-widest uppercase">Coming Soon</p>
                        </div>
                      )}
                    </div>

                    {/* Sponsor Name Tooltip on Hover */}
                    {hoveredId === sponsor.id && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-inter uppercase tracking-wide text-sm text-center truncate">
                          {sponsor.name}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* External Link Icon */}
                  <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-white/60"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </div>
                </Wrapper>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Become a Sponsor CTA */}
      <div className="mt-16 text-center">
        <div className="inline-block relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbbf24] to-[#fde68a] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          <button
            onClick={() => {
              const footerElement = document.getElementById('footer');
              if (footerElement) {
                footerElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#fbbf24] to-[#fde68a] text-black border-2 border-[#fbbf24] hover:from-[#fde68a] hover:to-[#fbbf24] duration-300 font-anton font-bold tracking-widest py-3 px-8 text-lg rounded-full cursor-pointer transition-all transform hover:scale-105 uppercase shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)]"
          >
            <span>Become a Sponsor</span>
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
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <p className="mt-4 text-white/40 text-sm">
          Partner with us to empower the next generation of innovators
        </p>
      </div>
    </div>
  );
};

export default SponsorGrid;
