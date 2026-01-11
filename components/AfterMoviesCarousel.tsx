"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, animate, type PanInfo } from "framer-motion"
import Image from "next/image"

interface AfterMovie {
  id: number
  title: string
  year: string
  image: string
  description: string
}

const afterMovies: AfterMovie[] = [
  {
    id: 1,
    title: "Summer Festival",
    year: "2024",
    image: "/placeholder.svg?height=400&width=600",
    description: "An unforgettable night of music and memories",
  },
  {
    id: 2,
    title: "Winter Gala",
    year: "2024",
    image: "/placeholder.svg?height=400&width=600",
    description: "Elegance meets celebration",
  },
  {
    id: 3,
    title: "Spring Concert",
    year: "2023",
    image: "/placeholder.svg?height=400&width=600",
    description: "Where spring blossoms meet rhythm",
  },
]


export function AfterMoviesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showHighlight, setShowHighlight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const constraintsRef = useRef(null)
  const x = useMotionValue(0)

  const totalCards = afterMovies.length

  const getRelativePosition = (index: number) => {
    let diff = index - currentIndex

    if (diff > totalCards / 2) {
      diff -= totalCards
    } else if (diff < -totalCards / 2) {
      diff += totalCards
    }

    return diff
  }

  const getCardStyle = (index: number) => {
    const relativePos = getRelativePosition(index)
    const absDiff = Math.abs(relativePos)

    if (relativePos === 0) {
      return {
        zIndex: 50,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
      }
    }

    const direction = relativePos > 0 ? 1 : -1
    const baseOffset = direction * (420 + (absDiff - 1) * 80)
    const rotation = direction * (8 + absDiff * 4)
    const yOffset = absDiff * 20
    const scaleValue = 1 - absDiff * 0.08
    const opacityValue = 1 - absDiff * 0.15

    return {
      zIndex: 40 - absDiff,
      x: baseOffset,
      y: yOffset,
      rotate: rotation,
      scale: Math.max(scaleValue, 0.6),
      opacity: Math.max(opacityValue, 0.25),
    }
  }

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)
    const threshold = 100
    const velocity = info.velocity.x

    if (Math.abs(info.offset.x) > threshold || Math.abs(velocity) > 400) {
      setShowHighlight(false)

      if (info.offset.x < 0 || velocity < -400) {
        setCurrentIndex((prev) => (prev + 1) % totalCards)
      } else {
        setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards)
      }
    }

    animate(x, 0, { type: "spring", stiffness: 300, damping: 30 })
  }

  useEffect(() => {
    if (!showHighlight) {
      const timer = setTimeout(() => {
        setShowHighlight(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [showHighlight, currentIndex])

  const sortedIndices = [...Array(totalCards).keys()].sort((a, b) => {
    return getCardStyle(a).zIndex - getCardStyle(b).zIndex
  })

  return (
    <section className="relative min-h-screen bg-black py-8 overflow-hidden flex flex-col">
    

      <div className="container mx-auto px-4 flex-1 flex flex-col">
        <div className="mb-8 text-center">
          <h2 className="text-5xl md:text-8xl duration-500 font-new-amsterdam tracking-wide font-bold text-center text-[#fbbf24] drop-shadow-[0_0_40px_rgba(251,191,36,0.6)] uppercase">AFTERMOVIES</h2>
        </div>

        <div
          ref={constraintsRef}
          className="relative flex items-center justify-center flex-1 min-h-[600px] md:min-h-[700px] lg:min-h-[750px]"
        >
          {sortedIndices.map((index) => {
            const movie = afterMovies[index]
            const cardStyle = getCardStyle(index)
            const isActive = index === currentIndex

            return (
              <motion.div
                key={movie.id}
                className="absolute cursor-grab active:cursor-grabbing"
                initial={false}
                animate={{
                  x: cardStyle.x,
                  y: cardStyle.y,
                  rotate: cardStyle.rotate,
                  scale: cardStyle.scale,
                  opacity: cardStyle.opacity,
                  zIndex: cardStyle.zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 26,
                }}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                style={isActive ? { x } : undefined}
              >
                <div
                  className={`relative rounded-lg overflow-hidden transition-all duration-500 ${
                    isActive && showHighlight ? "shadow-[0_0_80px_rgba(244,197,66,0.5)]" : ""
                  }`}
                  style={{
                    background: isActive && showHighlight ? "#f4c542" : "#1a1a1a",
                    padding: isActive && showHighlight ? "16px" : "10px",
                    paddingBottom: isActive && showHighlight ? "70px" : "55px",
                  }}
                >
                  <div className="relative w-[340px] md:w-[580px] lg:w-[680px] aspect-[16/10] rounded-sm overflow-hidden bg-[#1a1a1a]">
                    <Image
                      src={movie.image || "/placeholder.svg"}
                      alt={movie.title}
                      fill
                      className="object-cover"
                      draggable={false}
                    />

                    {isActive && !isDragging && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3"
                        >
                          <motion.div
                            animate={{ x: [-4, 4, -4] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white rotate-180"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </motion.div>
                          <span className="text-base font-medium text-white">Drag</span>
                          <motion.div
                            animate={{ x: [4, -4, 4] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </motion.div>
                        </motion.div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 px-2">
                    <h3
                      className={`text-xl md:text-2xl font-semibold ${isActive && showHighlight ? "text-[#0a0a0a]" : "text-white"}`}
                    >
                      {movie.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-6 pb-4">
          {afterMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setShowHighlight(false)
                setCurrentIndex(index)
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#f4c542] w-8" : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
