"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import dynamic from "next/dynamic"
import content from "@/lib/useContent"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import LazyComponent from "@/components/LazyComponent"
import MarqueeBar from "@/components/MarqueeBar"
import LoadingScreen from "@/components/LoadingScreen"

// Lazy load heavy components
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <div className="h-screen bg-black animate-pulse" />
})

const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const StarsSection = dynamic(() => import("@/components/StarsSection"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

// Load VerticalsSection eagerly since users can scroll to it via Register button
import VerticalsSection from "@/components/VerticalsSection"

const OrbitalCarousel = dynamic(() => import("@/components/OrbitalCarousel"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const ScrollingGallery = dynamic(() => import("@/components/ScrollingGallery"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const AfterMoviesCarousel = dynamic(() => import("@/components/AfterMoviesCarousel").then(mod => ({ default: mod.AfterMoviesCarousel })), {
  loading: () => <div className="h-screen bg-black animate-pulse" />
})

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isLoading, setIsLoading] = useState(true) // Always show loading on landing page

    const handleLoadingComplete = () => {
      setIsLoading(false)
    }

    useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current

      if (!container) return

      // LabSection background - Pure black
      ScrollTrigger.create({
        trigger: "#lab",
        start: "top center",
        end: "bottom center",
        onEnter: () =>
          gsap.to(container, { backgroundColor: "#000000", duration: 1.5, ease: "power2.inOut" }),
        onEnterBack: () =>
          gsap.to(container, { backgroundColor: "#000000", duration: 1.5, ease: "power2.inOut" }),
      })

      // Team background - Pure black
      ScrollTrigger.create({
        trigger: "#team",
        start: "top center",
        end: "bottom center",
        onEnter: () =>
          gsap.to(container, { backgroundColor: "#000000", duration: 1.5, ease: "power2.inOut" }),
        onEnterBack: () =>
          gsap.to(container, { backgroundColor: "#000000", duration: 1.5, ease: "power2.inOut" }),
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])


  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className="w-full h-screen bg-black relative">
        <Navbar />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Main Content */}
        <div ref={containerRef} className="w-full min-h-screen bg-black relative transition-colors duration-1000">
        
        {/* About Section */}
        <LazyComponent fallback={<div className="h-96 bg-black animate-pulse" />}>
          <AboutSection />
        </LazyComponent>
        
        {/* Animated Marquee Bar 1 */}
        <MarqueeBar 
          text={content.marquee.primary.text} 
          direction={content.marquee.primary.direction as "left" | "right"} 
          speed={content.marquee.primary.speed} 
          className="my-12" 
        />
        
        {/* Stars Section */}
        <LazyComponent fallback={<div className="h-96 bg-black animate-pulse" />}>
          <StarsSection />
        </LazyComponent>
        
        {/* Verticals Section */}
        <VerticalsSection />
        
        {/* Animated Marquee Bar 2 */}
        <MarqueeBar 
          text={content.marquee.secondary.text} 
          direction={content.marquee.secondary.direction as "left" | "right"} 
          speed={content.marquee.secondary.speed} 
          className="my-12" 
        />
        
        {/* Glimpse Section - Orbital Carousel */}
        <LazyComponent fallback={<div className="h-96 bg-black animate-pulse" />}>
          <OrbitalCarousel />
        </LazyComponent>
      </div>
      
      {/* Scrolling Gallery Section */}
      <LazyComponent fallback={<div className="h-96 bg-black animate-pulse" />}>
        <ScrollingGallery />
      </LazyComponent>
      
      {/* AfterMovies Carousel Section */}
      <LazyComponent fallback={<div className="h-screen bg-black animate-pulse" />}>
        <AfterMoviesCarousel />
      </LazyComponent>
      
      {/* Footer with Lazy Loading */}
      <LazyComponent fallback={<div className="h-screen bg-black animate-pulse" />}>
        <Footer />
      </LazyComponent>
      </div>
    </>
  )
}