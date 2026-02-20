"use client";

import { CurveCarousel } from "@/components/curve-carousel";
import { Equalizer } from "@/components/equalizer";
import Image from "next/image";
import content from "@/lib/useContent";
import GlowingDots from "@/components/GlowingDots";

export default function StarsSection() {
  // Use links from content.json pronite.cards
  const dayLinks = content.pronite.cards.map((card) => card.link);

  return (
    <section
      id="pronite"
      className="relative min-h-screen bg-black flex flex-col items-center justify-center py-12 overflow-hidden"
    >
      <GlowingDots count={50} />
      {/* Hot Air Balloon - Floating on the right side */}
      <div className="hidden md:block absolute right-4 lg:right-8 top-1/4 z-10 animate-float">
        <Image
          src={content.site.balloonImage}
          alt="Hot Air Balloon"
          width={280}
          height={340}
          className="drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]"
        />
      </div>

      {/* Content - relative to float above background */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* PRONITE Headline - Consistent with other sections */}
        <div className="w-fit relative group cursor-pointer mb-8">
          <h2 className="text-5xl md:text-8xl duration-500 font-anton tracking-wide font-bold text-center text-[#fbbf24] drop-shadow-[0_0_40px_rgba(251,191,36,0.6)] uppercase">
            Pronite
          </h2>
        </div>

        {/* Equalizer - full width curvy animation */}
        <div className="mb-16 w-full">
          <Equalizer />
        </div>

        {/* Curve Carousel with flip cards - pass links for each card */}
        <CurveCarousel dayLinks={dayLinks} />
      </div>
    </section>
  );
}
