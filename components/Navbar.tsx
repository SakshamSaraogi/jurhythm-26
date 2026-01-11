"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Users, Award, Phone, Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/team", icon: Users, label: "Team" },
    { href: "/sponsors", icon: Award, label: "Sponsors" },
    { href: "/contact", icon: Phone, label: "Contact" },
  ];

  return (
    <>
      {/* Floating Circular Nav - Desktop (One Line) */}
      <div className="hidden lg:block fixed top-8 right-8 z-50 w-[33vw] max-w-md">
        <div 
          className={`
            relative rounded-full
            bg-black/80 backdrop-blur-xl
            border-2 border-[#fbbf24]/50
            shadow-[0_0_40px_rgba(251,191,36,0.3)]
            transition-all duration-500 ease-out
            ${scrolled ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-90'}
          `}
        >
          <div className="flex items-center justify-around p-4 px-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col items-center gap-1 transition-all duration-300"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#fbbf24] rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  <item.icon 
                    className="w-6 h-6 text-gray-400 group-hover:text-[#fbbf24] transition-all duration-300 relative z-10 group-hover:scale-110" 
                    strokeWidth={2}
                  />
                </div>
                <span className="text-[10px] font-new-amsterdam uppercase tracking-wider text-gray-500 group-hover:text-[#fbbf24] transition-colors duration-300">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full bg-black/80 backdrop-blur-xl border-2 border-[#fbbf24]/50 shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300 hover:scale-110"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#fbbf24]" />
          ) : (
            <Menu className="w-6 h-6 text-[#fbbf24]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          lg:hidden fixed top-20 right-6 z-40
          transition-all duration-500 ease-out
          ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        <div className="rounded-3xl bg-black/90 backdrop-blur-xl border-2 border-[#fbbf24]/50 shadow-[0_0_40px_rgba(251,191,36,0.3)] p-6 min-w-[200px]">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-3 transition-all duration-300"
              >
                <item.icon 
                  className="w-5 h-5 text-gray-400 group-hover:text-[#fbbf24] transition-colors duration-300" 
                  strokeWidth={2}
                />
                <span className="text-sm font-new-amsterdam uppercase tracking-wider text-gray-400 group-hover:text-[#fbbf24] transition-colors duration-300">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
