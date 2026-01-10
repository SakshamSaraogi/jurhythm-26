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
            Technical
          </h1>
          <p className="text-white font-delius text-2xl sm:text-3xl md:text-4xl text-center tracking-widest uppercase">
            Code • Build • Innovate
          </p>
        </div>

        {/* Vibrant Marquee with electric colors */}
        <div className="w-full bg-[#ff6b35] p-4 sm:p-5 flex gap-3 sm:gap-5 items-center justify-between overflow-hidden">
          <div className="flex items-center gap-4 sm:gap-6 animate-marquee whitespace-nowrap">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-limelight font-black tracking-widest text-nowrap uppercase">
              Hackathon
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-limelight font-black tracking-widest text-nowrap uppercase">
              Robo Wars
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-limelight font-black tracking-widest text-nowrap uppercase">
              Code Sprint
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-limelight font-black tracking-widest text-nowrap uppercase">
              Tech Quiz
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-limelight font-black tracking-widest text-nowrap uppercase">
              Hackathon
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-limelight font-black tracking-widest text-nowrap uppercase">
              Robo Wars
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black animate-pulse" />
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-limelight font-black tracking-widest text-nowrap uppercase">
              Code Sprint
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#0d0d0d] animate-pulse" />
            <span className="text-[#0d0d0d] text-xl sm:text-2xl md:text-3xl font-limelight font-black tracking-widest text-nowrap uppercase">
              Tech Quiz
            </span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#0d0d0d] animate-pulse" />
          </div>
        </div>

        {/* Cards with better spacing */}
        <div className="w-full px-6 sm:px-8 md:px-12 py-8 mt-12 sm:mt-16 md:mt-24 flex flex-wrap gap-8 sm:gap-10 md:gap-12 justify-center">
          <Card
            name="Hackathon 24hrs"
            description={`### About

Code non-stop for 24 hours! Build innovative solutions to real-world problems. Collaborate with your team and create something amazing. Free food, mentorship, and prizes await!

### Team

Teams of **2-4 participants**. All skill levels welcome.

### Rules and Regulations

1. Duration: **24 hours** continuous coding
2. Problem statements revealed at start
3. Any programming language/framework allowed
4. Internet access permitted for documentation
5. Pre-written code libraries allowed, but no pre-built solutions
6. Mentors available for guidance
7. Final submission via GitHub repository

### Judging Criteria

- Innovation and creativity (30%)
- Technical complexity (25%)
- Functionality and completeness (25%)
- Presentation and pitch (20%)

### Prizes

- 1st Place: ₹40,000 + Trophy + Internship opportunities
- 2nd Place: ₹25,000 + Trophy
- 3rd Place: ₹15,000 + Trophy
- Best UI/UX: ₹5,000
- Best First-Year Team: ₹5,000`}
            link="https://pages.razorpay.com/rhythmfest"
            image="/posters/codehunt.png"
          />
          <Card
            name="Robo Wars"
            description={`### About

Build battle-ready bots and fight in the arena! Design, construct, and control your robot to destroy opponents. The ultimate test of engineering and strategy.

### Team

Teams of **4-6 members**. Bot weight: **15kg maximum**.

### Rules and Regulations

1. Match duration: **3 minutes**
2. Remote controlled bots only
3. Weapons allowed: Hammers, flippers, saws (no flames or liquids)
4. Bot dimensions: Maximum 75cm x 75cm x 75cm
5. Voltage limit: 24V DC
6. Safety measures mandatory
7. Technical inspection before each match

### Arena Specifications

- Size: 16ft x 16ft
- Boundary walls included
- Hazards: Pit zones and arena edges

### Prizes

- Winners: ₹35,000 + Trophy
- Runners-up: ₹20,000 + Trophy
- Best Design: ₹5,000
- Most Destructive Bot: ₹5,000`}
            link="https://pages.razorpay.com/rhythmfest"
            image="/posters/Bid2cote.png"
          />
          <Card
            name="Code Sprint"
            description={`### About

Fast-paced competitive programming! Solve algorithmic challenges under time pressure. Test your data structures knowledge and problem-solving speed.

### Participation

**Individual event** - Battle it out solo!

### Rules and Regulations

1. Duration: **3 hours**
2. Platform: Online coding platform (HackerRank/CodeChef)
3. Languages: C, C++, Java, Python, JavaScript
4. 8-10 problems of varying difficulty
5. No external help or collaboration allowed
6. Internet restricted to coding platform only
7. Scoring based on correctness and time

### Problem Types

- Array and String manipulation
- Dynamic Programming
- Graph algorithms
- Tree traversal
- Mathematical puzzles

### Prizes

- 1st Place: ₹15,000 + Trophy
- 2nd Place: ₹10,000 + Trophy
- 3rd Place: ₹6,000 + Trophy
- Top 10: Certificates of Excellence`}
            link="https://pages.razorpay.com/rhythmfest"
            image="/posters/bugbounty.png"
          />
          <Card
            name="Tech Quiz"
            description={`### About

Test your technology knowledge across multiple domains! From latest tech trends to historical computing, AI to cybersecurity - prove you're the ultimate tech geek.

### Team

Teams of **2-3 participants**.

### Rules and Regulations

1. **3 rounds**: Preliminary, Semi-final, Final
2. Preliminary: Written test (50 questions, 30 minutes)
3. Semi-final: Buzzer round + Visual round
4. Final: Rapid fire + Audience poll questions
5. No electronic devices allowed
6. Quizmaster's decision is final
7. Top 8 teams qualify for semi-finals

### Topics Covered

- Computer Science fundamentals
- Latest technology trends
- Famous tech personalities
- Programming languages
- Gadgets and innovations
- Tech companies and startups

### Prizes

- Winners: ₹12,000 + Trophy
- Runners-up: ₹8,000 + Trophy
- Third Place: ₹5,000 + Trophy`}
            link="https://pages.razorpay.com/rhythmfest"
            image="/posters/ghostcode.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
