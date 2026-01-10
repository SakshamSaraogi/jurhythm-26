"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contacts = [
  {
    vertical: "Technical",
    contacts: [
      { name: "Dhruv Tomar", phone: "+91 8630832729" },
      { name: "Garvit Raj Bhati", phone: "+91 8003204877" },
      { name: "Fabian Makhdoomi", phone: "+91 8700110060" },
    ],
  },
  {
    vertical: "Cultural",
    contacts: [
      { name: "Isha Soni", phone: "+91 7296804330" },
      { name: "Chaitanya Mehta", phone: "+91 6377031393" },
      { name: "Devang Sharma", phone: "+91 6377031393" },
    ],
  },
  {
    vertical: "Sports",
    contacts: [
      { name: "Akshat Pratap", phone: "+91 9079806429" },
      { name: "Ashish Yadav", phone: "+91 9928432872" },
      { name: "Suhasni Verma", phone: "+91 9929361100" },
    ],
  },
  {
    vertical: "Media",
    contacts: [
      { name: "Daksh Nagar", phone: "+91 9079790744" },
      { name: "Harsh Kumar", phone: "+91 9119384811" },
      { name: "Jay Atri", phone: "+91 6375871062" },
    ],
  },
  {
    vertical: "Sponsorship",
    contacts: [
      { name: "Kanishka Choudhary", phone: "+91 9001524255" },
      { name: "Kavya Pareek", phone: "+91 8000962499" },
      { name: "Devansh Verma", phone: "+91 9988893220" },
    ],
  },
  {
    vertical: "Public Relations",
    contacts: [
      { name: "Jaanvi Pareek", phone: "+91 6367573171" },
      { name: "Bhavishya Chauhan", phone: "+91 9352565479" },
      { name: "Aadil Khan", phone: "+91 9352565479" },
    ],
  },
];

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navbar />
      <div className="mx-auto mt-20 relative py-12 px-4 sm:px-6 lg:px-8 w-screen">
        <h1 className="text-5xl sm:text-6xl font-bold text-center relative text-white mb-12 font-new-amsterdam tracking-widest drop-shadow-[0_0_30px_rgba(255,107,53,0.6)]">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 max-w-4xl mx-auto">
          {contacts.map((vertical, index) => (
            <div
              key={index}
              className="bg-black backdrop-blur-lg border-2 border-gray-700 rounded-xl relative overflow-hidden group hover:border-[#ff6b35] transition-all duration-300"
            >
              {/* Gradient glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b35] via-[#ff8c5a] to-[#ff6b35] rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-500 -z-10"></div>
              
              <div className="bg-black rounded-t-xl p-6 border-b-2 border-gray-700 group-hover:border-[#ff6b35] transition-colors duration-300">
                <h2 className="text-xl font-new-amsterdam text-[#ff6b35] tracking-widest uppercase drop-shadow-[0_0_15px_rgba(255,107,53,0.5)]">
                  {vertical.vertical} Heads
                </h2>
              </div>
              
              <div className="relative z-10 bg-black rounded-b-xl p-6">
                {vertical.contacts.map((contact, contactIndex) => (
                  <div
                    key={contactIndex}
                    className={contactIndex > 0 ? "mt-4 pt-4 border-t border-gray-800" : ""}
                  >
                    <p className="text-white font-delius font-semibold">{contact.name}</p>
                    <a 
                      href={`tel:${contact.phone}`}
                      className="text-gray-400 hover:text-[#ff6b35] transition-colors duration-200 font-delius"
                    >
                      {contact.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Twinkling Stars Background */}
        <div className="absolute inset-0 z-0">
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
      <Footer />
    </div>
  );
}
