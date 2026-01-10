"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import dynamic from "next/dynamic"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import LazyComponent from "@/components/LazyComponent"

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

const VerticalsSection = dynamic(() => import("@/components/VerticalsSection"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null)


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
        
        {/* Stars Section */}
        <LazyComponent fallback={<div className="h-96 bg-black animate-pulse" />}>
          <StarsSection />
        </LazyComponent>
        
        {/* Verticals Section */}
        <LazyComponent fallback={<div className="h-96 bg-black animate-pulse" />}>
          <VerticalsSection />
        </LazyComponent>
        
        {/* Gallery Section */}
        <LazyComponent fallback={<div className="h-96 bg-black animate-pulse" />}>
          <Gallery />
        </LazyComponent>
      </div>
      
      {/* Footer with Lazy Loading */}
      <LazyComponent fallback={<div className="h-screen bg-black animate-pulse" />}>
        <Footer />
      </LazyComponent>
    </div>
  )
}