"use client";
import Card from "@/components/domainscomponents/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="w-full pt-24 sm:pt-32 md:pt-16 flex flex-col items-center min-h-screen pb-16">
        {/* Funky Title with breathing space */}
        <div className="w-full px-6 py-12 md:py-20 flex flex-col items-center gap-8">
          <h1 className="text-[#ff6b35] font-new-amsterdam text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] text-center tracking-widest uppercase leading-none animate-pulse-slow drop-shadow-[0_0_40px_rgba(255,107,53,0.5)]">
            Media
          </h1>
          <p className="text-white font-delius text-2xl sm:text-3xl md:text-4xl text-center tracking-widest uppercase">
            Capture • Create • Communicate
          </p>
        </div>

        {/* Vibrant Marquee with media colors */}
        <div className="w-full bg-[#ff6b35] p-4 sm:p-5 flex gap-3 sm:gap-5 items-center justify-between overflow-hidden">
          <div className="flex items-center gap-4 sm:gap-6 animate-marquee whitespace-nowrap">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-new-amsterdam font-black tracking-widest text-nowrap uppercase">
              Photography
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-new-amsterdam font-black tracking-widest text-nowrap uppercase">
              Short Film
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-new-amsterdam font-black tracking-widest text-nowrap uppercase">
              Podcast
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-new-amsterdam font-black tracking-widest text-nowrap uppercase">
              Photography
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-new-amsterdam font-black tracking-widest text-nowrap uppercase">
              Short Film
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-new-amsterdam font-black tracking-widest text-nowrap uppercase">
              Podcast
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
          </div>
        </div>

        {/* Cards with better spacing */}
        <div className="w-full px-6 sm:px-8 md:px-12 py-8 mt-12 sm:mt-16 md:mt-24 flex flex-wrap gap-8 sm:gap-10 md:gap-12 justify-center">
          <Card
            name="Photography Contest"
            description={`### About

Capture moments, tell stories! Showcase your photography skills across multiple themes. From portraits to landscapes, street photography to abstract art - let your lens speak.

### Participation

**Individual event**. Submit your best shots!

### Categories

1. **Portrait Photography**
2. **Nature & Landscape**
3. **Street Photography**
4. **Abstract & Creative**
5. **Mobile Photography** (separate category)

### Rules and Regulations

1. Submit **3 photographs** (can be from different categories)
2. Original, unedited RAW files must be provided if requested
3. Minimal editing allowed (exposure, contrast, color correction)
4. No heavy manipulation or compositing
5. EXIF data must be intact
6. Submit via online portal by deadline
7. Copyright remains with photographer

### Judging Criteria

- Composition and framing (30%)
- Creativity and concept (25%)
- Technical quality (25%)
- Visual impact (20%)

### Prizes

- Overall Winner: ₹12,000 + Trophy + Featured exhibition
- Category Winners (5): ₹3,000 each
- Runner-up: ₹6,000`}
            link="https://pages.razorpay.com/rhythmfest"
            image="/posters/2.jpg"
          />
          <Card
            name="Short Film Festival"
            description={`### About

Lights, camera, action! Create compelling short films that move audiences. Any genre welcome - drama, comedy, thriller, documentary. Show your storytelling prowess.

### Team

Teams of **5-15 members** (director, actors, crew, etc.).

### Rules and Regulations

1. Film duration: **5-15 minutes** (including credits)
2. Any language (English subtitles mandatory if not in English/Hindi)
3. Original content only, no copyright infringement
4. Format: MP4/MOV, minimum 1080p
5. Submit trailer (30 seconds) for screening selection
6. Film must be submitted 5 days before festival
7. PG-13 rating maximum

### Technical Requirements

- Minimum resolution: 1920x1080
- Audio: Clear and balanced
- Color grading encouraged

### Judging Criteria

- Story and screenplay (35%)
- Direction and cinematography (25%)
- Acting performances (20%)
- Overall production quality (20%)

### Prizes

- Best Film: ₹30,000 + Trophy + Screening at film festival
- Best Director: ₹8,000
- Best Actor: ₹5,000
- Best Cinematography: ₹5,000`}
            link="https://pages.razorpay.com/rhythmfest"
            image="/posters/3.jpg"
          />
          <Card
            name="Podcast Competition"
            description={`### About

Your voice matters! Create engaging podcast episodes on topics you're passionate about. From storytelling to interviews, comedy to educational content - make your mark in audio.

### Team

**Individual or team of 2-3 participants**.

### Format Options

1. **Interview Style**: Guest conversations
2. **Narrative/Storytelling**: Scripted content
3. **Educational**: Teaching/explainer content
4. **Comedy/Entertainment**: Humorous content

### Rules and Regulations

1. Episode duration: **10-20 minutes**
2. Submit one complete episode
3. Original content with proper attribution
4. Clear audio quality (minimum 128kbps)
5. Intro/outro music (royalty-free or original)
6. Submit as MP3 format
7. Episode description and artwork required

### Technical Specifications

- Audio format: MP3
- Bitrate: Minimum 128kbps
- No background noise or distortion

### Judging Criteria

- Content quality and research (30%)
- Audio production quality (25%)
- Engaging presentation (25%)
- Creativity and originality (20%)

### Prizes

- Winner: ₹10,000 + Trophy + Podcast equipment
- Runner-up: ₹6,000 + Trophy
- Best Production Quality: ₹3,000
- Audience Favorite: ₹2,000`}
            link="https://pages.razorpay.com/rhythmfest"
            image="/posters/5.jpg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
