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
            Cultural
          </h1>
          <p className="text-white font-delius text-2xl sm:text-3xl md:text-4xl text-center tracking-widest uppercase">
            Unleash Your Creativity
          </p>
        </div>

        {/* Vibrant Marquee with orange colors */}
        <div className="w-full bg-[#ff6b35] p-4 sm:p-5 flex gap-3 sm:gap-5 items-center justify-between overflow-hidden">
          <div className="flex items-center gap-4 sm:gap-6 animate-marquee whitespace-nowrap">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-new-amsterdam font-black tracking-widest text-nowrap uppercase">
              Classical Dance
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-new-amsterdam font-black tracking-widest text-nowrap uppercase">
              Battle of Bands
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-new-amsterdam font-black tracking-widest text-nowrap uppercase">
              Fashion Show
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-new-amsterdam font-black tracking-widest text-nowrap uppercase">
              Street Play
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-new-amsterdam font-black tracking-widest text-nowrap uppercase">
              Classical Dance
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-new-amsterdam font-black tracking-widest text-nowrap uppercase">
              Battle of Bands
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-new-amsterdam font-black tracking-widest text-nowrap uppercase">
              Fashion Show
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#0d0d0d] animate-pulse" />
            <span className="text-[#0d0d0d] text-xl sm:text-2xl md:text-3xl font-new-amsterdam font-black tracking-widest text-nowrap uppercase">
              Street Play
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#0d0d0d] animate-pulse" />
          </div>
        </div>

        {/* Cards with better spacing */}
        <div className="w-full px-6 sm:px-8 md:px-12 py-8 mt-12 sm:mt-16 md:mt-24 flex flex-wrap gap-8 sm:gap-10 md:gap-12 justify-center">
          <Card
            name="Classical Dance Competition"
            description={`### About

Showcase the beauty of traditional Indian classical dance forms including Bharatanatyam, Kathak, Odissi, and more. Express stories through graceful movements and intricate footwork.

### Team

A team may consist of **1-10 participants**. Solo and group performances are both welcome.

### Rules and Regulations

1. Performance duration: **5-8 minutes**
2. Participants must bring their own music track (USB/CD)
3. Traditional costumes and makeup are mandatory
4. Props are allowed but must be managed by the team
5. Judges' decision will be final

### Judging Criteria

- Technical proficiency (30%)
- Expression and abhinaya (25%)
- Costume and presentation (20%)
- Stage presence and rhythm (25%)

### Prizes

- 1st Place: ₹15,000 + Trophy
- 2nd Place: ₹10,000 + Trophy
- 3rd Place: ₹5,000 + Trophy`}
            link="https://pages.razorpay.com/rhythmfest"
            image="/posters/2.jpg"
          />
          <Card
            name="Battle of Bands"
            description={`### About

The ultimate showdown for musical talent! Bring your band and compete against the best. Rock, pop, metal, indie - any genre is welcome. Let your music speak!

### Team

A band may consist of **3-8 members**. All instruments and vocalists included.

### Rules and Regulations

1. Performance time: **10-15 minutes** (2-3 songs)
2. Original compositions will get bonus points
3. Basic sound system will be provided
4. Bands must bring their own instruments
5. Vulgar or offensive lyrics are strictly prohibited

### Judging Criteria

- Musicality and composition (35%)
- Stage presence and energy (25%)
- Originality (20%)
- Audience engagement (20%)

### Prizes

- 1st Place: ₹25,000 + Trophy + Recording opportunity
- 2nd Place: ₹15,000 + Trophy
- 3rd Place: ₹8,000 + Trophy`}
            link="https://pages.razorpay.com/rhythmfest"
            image="/posters/3.jpg"
          />
          <Card
            name="Fashion Show"
            description={`### About

Walk the ramp and set the stage on fire! Showcase your creativity, confidence, and style. Theme-based and freestyle categories available.

### Team

Teams of **6-12 participants** (models, choreographers, designers).

### Rules and Regulations

1. Performance duration: **8-12 minutes**
2. Minimum 3 outfit changes per team
3. Music track must be submitted 2 days before the event
4. Theme adherence is mandatory for theme-based category
5. Vulgarity in any form will lead to disqualification

### Judging Criteria

- Creativity and design (30%)
- Choreography and walk (25%)
- Theme interpretation (20%)
- Overall presentation (25%)

### Prizes

- 1st Place: ₹20,000 + Trophy + Magazine feature
- 2nd Place: ₹12,000 + Trophy
- 3rd Place: ₹6,000 + Trophy
- Best Model: ₹3,000 + Trophy`}
            link="https://pages.razorpay.com/rhythmfest"
            image="/posters/5.jpg"
          />
          <Card
            name="Street Play Competition"
            description={`### About

Use the power of theatre to spread social messages. Perform hard-hitting street plays on contemporary issues. Make your voice heard through powerful performances.

### Team

Teams of **8-15 participants** including actors and support crew.

### Rules and Regulations

1. Performance time: **15-20 minutes**
2. Play must address a relevant social issue
3. Minimal props and costumes allowed
4. Use of microphone not permitted
5. Script must be submitted 3 days prior

### Judging Criteria

- Message and relevance (30%)
- Acting and expressions (25%)
- Script and dialogue delivery (20%)
- Audience impact (25%)

### Prizes

- 1st Place: ₹18,000 + Trophy
- 2nd Place: ₹10,000 + Trophy
- 3rd Place: ₹5,000 + Trophy
- Best Actor: ₹2,000`}
            link="https://pages.razorpay.com/rhythmfest"
            image="/posters/8.jpg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
