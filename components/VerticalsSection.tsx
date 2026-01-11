"use client";

import { Fireworks } from "@fireworks-js/react";
import ExpandingCards from "./ExpandingCards";

export default function VerticalsSection() {
  return (
    <section id="verticals" className="relative z-0 min-h-screen">
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

      {/* Decorative Floating Lanterns */}
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

      {/* Expanding Cards Component */}
      <div className="relative z-10">
        <ExpandingCards />
      </div>
    </section>
  );
}
