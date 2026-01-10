"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TeamCard } from "@/components/team/TeamCard";

const page = () => {
  // Secretaries - Top 5 members
  const secretaries = [
    {
      name: "Arjun Mehta",
      position: "General Secretary",
      image: "/team/1.jpg",
    },
    {
      name: "Priya Sharma",
      position: "Technical Secretary",
      image: "/team/2.jpg",
    },
    {
      name: "Rahul Verma",
      position: "Cultural Secretary",
      image: "/team/3.jpg",
    },
    {
      name: "Ananya Singh",
      position: "Sports Secretary",
      image: "/team/4.jpg",
    },
    {
      name: "Karan Patel",
      position: "Media Secretary",
      image: "/team/5.jpg",
    },
  ];

  // Core Team Members
  const coreTeam = [
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
    {
      name: "Dev Kapoor",
      position: "Content Head",
      image: "/team/1.jpg",
    },
    {
      name: "Riya Saxena",
      position: "Operations Head",
      image: "/team/2.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-24 relative z-10 px-3 pb-20">
        {/* Secretaries Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-new-amsterdam tracking-widest drop-shadow-[0_0_30px_rgba(255,107,53,0.6)]">
            Meet the Secretaries
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {secretaries.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              className={`min-h-56 max-h-56 md:min-h-72 md:max-h-72 aspect-[3/4] ${
                // Mobile layout: 2-1-2
                index === 2 ? 'col-span-2 sm:col-span-1 justify-self-center' : ''
              }`}
            />
          ))}
        </div>

        {/* Core Team Section */}
        <div className="bg-white/10 p-5 rounded-2xl my-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-new-amsterdam tracking-widest drop-shadow-[0_0_30px_rgba(255,107,53,0.6)]">
              Core Team
            </h2>
            <p className="text-lg text-gray-400 font-delius">
              The amazing individuals who make everything possible
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreTeam.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
                className={`h-40 min-h-40 max-h-40 md:max-h-64 md:min-h-64 aspect-square ${
                  index % 3 === 0
                    ? "justify-self-center md:justify-self-start"
                    : index % 3 === 1
                    ? "justify-self-center md:justify-self-center"
                    : "justify-self-center md:justify-self-end"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />

      {/* Twinkling Stars Background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-white/60 rounded-full duration-300 ${
              Math.random() > 0.5 ? "animate-twinkle" : ""
            }`}
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 2 + 1.5}s`,
              zIndex: -1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
