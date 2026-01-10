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
          <h1 className="text-[#ff6b35] font-limelight text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] text-center tracking-widest uppercase leading-none animate-pulse-slow drop-shadow-[0_0_40px_rgba(255,107,53,0.5)]">
            Sports
          </h1>
          <p className="text-white font-delius text-2xl sm:text-3xl md:text-4xl text-center tracking-widest uppercase">
            Compete • Conquer • Champion
          </p>
        </div>

        {/* Vibrant Marquee with energetic colors */}
        <div className="w-full bg-[#ff6b35] p-4 sm:p-5 flex gap-3 sm:gap-5 items-center justify-between overflow-hidden">
          <div className="flex items-center gap-4 sm:gap-6 animate-marquee whitespace-nowrap">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white animate-pulse" />
            <span className="text-white text-xl sm:text-2xl md:text-3xl font-limelight font-black tracking-widest text-nowrap uppercase">
              Cricket Tournament
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-limelight font-black tracking-widest text-nowrap uppercase">
              Basketball 3v3
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-limelight font-black tracking-widest text-nowrap uppercase">
              Football Championship
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-white text-xl sm:text-2xl md:text-3xl font-limelight font-black tracking-widest text-nowrap uppercase">
              Cricket Tournament
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-limelight font-black tracking-widest text-nowrap uppercase">
              Basketball 3v3
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-limelight font-black tracking-widest text-nowrap uppercase">
              Football Championship
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
          </div>
        </div>

        {/* Cards with better spacing */}
        <div className="w-full px-6 sm:px-8 md:px-12 py-8 mt-12 sm:mt-16 md:mt-24 flex flex-wrap gap-8 sm:gap-10 md:gap-12 justify-center">
          <Card
            name="Cricket Tournament"
            description={`### About

The ultimate cricket showdown! Compete in this high-energy tournament following T20 format. Show your batting prowess, bowling skills, and fielding excellence.

### Team

A team must consist of **11-15 players** (11 playing + 4 substitutes).

### Rules and Regulations

1. Format: **T20** (20 overs per side)
2. ICC cricket rules will be followed
3. Each bowler can bowl maximum 4 overs
4. Powerplay: First 6 overs
5. Teams must bring their own cricket gear
6. Umpire's decision is final

### Tournament Structure

- League Stage: Round-robin format
- Knockout: Quarter-finals, Semi-finals, Final
- All matches will be played on turf pitch

### Prizes

- Winners: ₹30,000 + Trophy + Medals
- Runners-up: ₹18,000 + Trophy
- Man of the Tournament: ₹5,000
- Best Bowler & Batsman: ₹3,000 each`}
            link="https://pages.razorpay.com/rhythmfest"
            image="/posters/2.jpg"
          />
          <Card
            name="Basketball 3v3"
            description={`### About

Fast-paced half-court basketball action! Form your squad and compete in this exciting 3v3 tournament. Quick plays, sharp shooting, and team coordination are key.

### Team

Teams of **4 players** (3 playing + 1 substitute).

### Rules and Regulations

1. Match duration: **10 minutes** or first to 21 points
2. Shot clock: 12 seconds
3. Standard FIBA 3x3 basketball rules apply
4. Only one timeout per team per match
5. All fouls count, 6 fouls = team penalty
6. Professional referee will be present

### Tournament Format

- Pool stage followed by knockout rounds
- Single elimination bracket
- Finals: 12 minutes or first to 25 points

### Prizes

- Winners: ₹20,000 + Trophy + Jersey
- Runners-up: ₹12,000 + Trophy
- MVP: ₹3,000
- Best Shooter: ₹2,000`}
            link="https://pages.razorpay.com/rhythmfest"
            image="/posters/3.jpg"
          />
          <Card
            name="Football Championship"
            description={`### About

The beautiful game awaits! Showcase your football skills in this thrilling 7-a-side tournament. From precise passes to stunning goals, make your mark on the field.

### Team

Teams of **10 players** (7 playing + 3 substitutes). Goalkeeper mandatory.

### Rules and Regulations

1. Match duration: **Two halves of 20 minutes**
2. FIFA rules adapted for 7-a-side format
3. Rolling substitutions allowed
4. No offside rule
5. All players must wear shin guards
6. Qualified referee and linesmen provided

### Tournament Structure

- Group Stage: 4 groups, round-robin
- Knockout: Semi-finals and Final
- Penalty shootout if scores tied

### Prizes

- Champions: ₹35,000 + Trophy + Medals
- Runners-up: ₹20,000 + Trophy
- Golden Boot: ₹4,000
- Golden Glove: ₹3,000
- Best Player: ₹5,000`}
            link="https://pages.razorpay.com/rhythmfest"
            image="/posters/5.jpg"
          />
          <Card
            name="Athletics Meet"
            description={`### About

Test your speed, strength, and endurance! Participate in various track and field events. From sprints to long jumps, show your athletic excellence.

### Participation

**Individual events** - open to all students.

### Events

**Track Events:**
- 100m Sprint
- 200m Sprint
- 400m Sprint
- 4x100m Relay

**Field Events:**
- Long Jump
- High Jump
- Shot Put
- Discus Throw

### Rules and Regulations

1. Standard athletics rules apply
2. Participants can register for maximum 3 events
3. Proper sports attire mandatory
4. Spikes allowed for track events
5. All participants must report 30 minutes before event

### Prizes

- Gold Medal (Each Event): ₹3,000
- Silver Medal (Each Event): ₹2,000
- Bronze Medal (Each Event): ₹1,000
- Overall Champion: ₹8,000 + Trophy`}
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
