"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`flex justify-start z-50 items-center gap-3 w-full py-4 px-5 md:px-10 max-w-screen fixed top-0 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-sm border-b border-[#ff6b35]/30' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <Link
        href="/"
        className="flex justify-start w-1/3 items-center flex-1 stroke-[#ff6b35] hover:stroke-white transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 stroke-[#ff6b35]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </Link>
      <div className="flex justify-center w-1/3 items-center flex-1">
        <Link href="/" className="transform hover:scale-110 transition-transform duration-300">
          <h1 className="text-[#ff6b35] font-new-amsterdam text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase">
            JU Rhythm
          </h1>
        </Link>
      </div>
      <div className="flex gap-5 min-w-1/3 items-center justify-end">
        <Link
          href="/team"
          className="text-white hover:text-[#ff6b35] transition-colors duration-300 font-delius font-semibold tracking-wide text-sm md:text-base uppercase"
        >
          Team
        </Link>
        <Link
          href="/sponsors"
          className="text-white hover:text-[#ff6b35] transition-colors duration-300 font-delius font-semibold tracking-wide text-sm md:text-base uppercase"
        >
          Sponsors
        </Link>
        <div className="gap-1 hidden md:flex">
          <Link href="https://www.instagram.com/student_council_ju/">
            <Image
              src="/images/icons/insta.svg"
              alt="instagram"
              width={35}
              height={35}
              className="text-white stroke-white opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </Link>
          <Link href="https://www.linkedin.com/company/student-council-jecrc-university/posts/?feedView=all">
            <Image
              src="/images/icons/linkedin.svg"
              alt="linkedin"
              width={35}
              height={35}
              className="text-white stroke-white opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </Link>
        </div>
        <button 
          onClick={() => {
            const footerElement = document.getElementById('footer');
            if (footerElement) {
              footerElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="hidden md:block bg-[#ff6b35] text-black hover:bg-white hover:text-[#ff6b35] border-2 border-[#ff6b35] duration-300 cursor-pointer px-6 py-2 rounded-full font-new-amsterdam font-bold tracking-widest text-sm transition-all transform hover:scale-105 uppercase"
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default Navbar;
