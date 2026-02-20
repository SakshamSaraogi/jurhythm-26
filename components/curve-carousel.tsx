"use client"

import { useEffect, useState, useRef } from "react"
import { MusicCard } from "./music-card"
import content from "@/lib/useContent"

interface CurveCarouselProps {
  dayLinks?: string[]
}

export function CurveCarousel({ dayLinks }: CurveCarouselProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { pronite } = content
  const cards = pronite.cards

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFlipped(true)
          } else {
            setIsFlipped(false)
          }
        })
      },
      {
        threshold: [0.5],
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Desktop positions
  const cardPositions = [
    { rotate: -8, translateX: -320, translateY: 30, zIndex: 1 },
    { rotate: 0, translateX: 0, translateY: 0, zIndex: 2 },
    { rotate: 8, translateX: 320, translateY: 30, zIndex: 1 },
  ]

  // Mobile: stacked vertically
  const mobileCardPositions = [
    { rotate: -3, translateX: 0, translateY: -100, zIndex: 1 },
    { rotate: 0, translateX: 0, translateY: 0, zIndex: 2 },
    { rotate: 3, translateX: 0, translateY: 100, zIndex: 1 },
  ]

  // Use dayLinks if provided, else fallback to site.razorpayUrl
  const handleCardClick = (index: number) => {
    if (dayLinks && dayLinks[index]) {
      window.open(dayLinks[index], '_blank', 'noopener,noreferrer')
    } else {
      window.open(content.site.razorpayUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div ref={sectionRef} className="relative w-full min-h-[550px] md:h-[550px] flex items-center justify-center py-8 md:py-0">
      {/* Desktop View */}
      <div className="hidden md:flex relative items-center justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="absolute transition-all duration-1000 ease-out cursor-pointer"
            style={{
              transform: `
                translateX(${cardPositions[index].translateX}px) 
                translateY(${cardPositions[index].translateY}px) 
                rotate(${cardPositions[index].rotate}deg)
              `,
              zIndex: cardPositions[index].zIndex,
              transitionDelay: `${index * 200}ms`,
            }}
            onClick={() => handleCardClick(index)}
          >
            <MusicCard imageSrc={card.imageSrc} songName={card.songName} isFlipped={isFlipped} />
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative flex flex-col items-center justify-center gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="transition-all duration-1000 ease-out cursor-pointer"
            style={{
              transform: `
                translateX(${mobileCardPositions[index].translateX}px) 
                translateY(${mobileCardPositions[index].translateY}px) 
                rotate(${mobileCardPositions[index].rotate}deg)
              `,
              zIndex: mobileCardPositions[index].zIndex,
              transitionDelay: `${index * 200}ms`,
            }}
            onClick={() => handleCardClick(index)}
          >
            <MusicCard imageSrc={card.imageSrc} songName={card.songName} isFlipped={isFlipped} />
          </div>
        ))}
      </div>
    </div>
  )
}
