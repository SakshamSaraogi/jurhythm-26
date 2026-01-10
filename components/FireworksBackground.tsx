"use client";

import { useEffect, useRef } from "react";
import { Fireworks } from "fireworks-js";

interface FireworksBackgroundProps {
  autoStart?: boolean;
  intensity?: "low" | "medium" | "high";
  colors?: string[];
}

export default function FireworksBackground({ 
  autoStart = true, 
  intensity = "medium",
  colors = ["#F4C542", "#FFB84D", "#FFA726", "#fdc830", "#f7931e"]
}: FireworksBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fireworksRef = useRef<Fireworks | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Configure fireworks based on intensity
    const config = {
      low: { acceleration: 1.02, friction: 0.96, gravity: 1.2, particles: 50, traceLength: 2, explosion: 3 },
      medium: { acceleration: 1.03, friction: 0.95, gravity: 1.5, particles: 80, traceLength: 3, explosion: 5 },
      high: { acceleration: 1.05, friction: 0.94, gravity: 2, particles: 120, traceLength: 4, explosion: 7 }
    };

    const settings = config[intensity];

    const fireworks = new Fireworks(containerRef.current, {
      acceleration: settings.acceleration,
      friction: settings.friction,
      gravity: settings.gravity,
      particles: settings.particles,
      traceLength: settings.traceLength,
      traceSpeed: 10,
      explosion: settings.explosion,
      intensity: 30,
      flickering: 50,
      lineStyle: "round",
      hue: {
        min: 0,
        max: 360
      },
      delay: {
        min: 30,
        max: 60
      },
      rocketsPoint: {
        min: 50,
        max: 50
      },
      lineWidth: {
        explosion: {
          min: 1,
          max: 3
        },
        trace: {
          min: 1,
          max: 2
        }
      },
      brightness: {
        min: 50,
        max: 80
      },
      decay: {
        min: 0.015,
        max: 0.03
      },
      mouse: {
        click: false,
        move: false,
        max: 1
      },
      sound: {
        enabled: false
      }
    });

    fireworksRef.current = fireworks;

    if (autoStart) {
      fireworks.start();
    }

    return () => {
      if (fireworksRef.current) {
        fireworksRef.current.stop();
        fireworksRef.current.clear();
      }
    };
  }, [autoStart, intensity, colors]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 5 }}
    />
  );
}
