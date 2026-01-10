"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TeamCard } from "@/components/team/TeamCard";

const page = () => {
  const teamMembers = [
    {
      name: "Arjun Mehta",
      position: "Event Coordinator",
      image: "/team/1.jpg",
    },
    {
      name: "Priya Sharma",
      position: "Technical Head",
      image: "/team/2.jpg",
    },
    {
      name: "Rahul Verma",
      position: "Cultural Head",
      image: "/team/3.jpg",
    },
    {
      name: "Ananya Singh",
      position: "Sports Head",
      image: "/team/4.jpg",
    },
    {
      name: "Karan Patel",
      position: "Media Head",
      image: "/team/5.jpg",
    },
    {
      name: "Sneha Reddy",
      position: "Marketing Lead",
      image: "/team/6.jpg",
    },
    {
      name: "Vikram Joshi",
      position: "Logistics Head",
      image: "/team/7.jpg",
    },
    {
      name: "Ishita Kapoor",
      position: "Finance Head",
      image: "/team/8.jpg",
    },
    {
      name: "Rohan Gupta",
      position: "Design Lead",
      image: "/team/9.jpg",
    },
    {
      name: "Aisha Khan",
      position: "PR & Communications",
      image: "/team/10.jpg",
    },
    {
      name: "Siddharth Rao",
      position: "Sponsorship Head",
      image: "/team/11.jpg",
    },
    {
      name: "Meera Nair",
      position: "Hospitality Head",
      image: "/team/12.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="w-full pt-32 pb-20 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-[#ff6b35] uppercase font-limelight text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-6 drop-shadow-[0_0_40px_rgba(255,107,53,0.5)] tracking-widest">
              Our Team
            </h1>
            <p className="text-white text-lg sm:text-xl max-w-3xl mx-auto font-delius tracking-wide uppercase">
              Meet the brilliant minds behind JU Rhythm. Our dedicated team works tirelessly to bring you the best cultural and sports fest experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
