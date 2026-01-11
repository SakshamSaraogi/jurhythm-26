import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-gradient-to-b from-black to-[#0a0a0a] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Branding Section */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-new-amsterdam tracking-wider text-[#fbbf24] drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]">
              JU RHYTHM
            </h2>
            <p className="text-gray-400 text-sm font-delius leading-relaxed">
              Experience the rhythm of innovation, culture, and celebration at JECRC University's premier fest.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <Link 
                href="https://www.instagram.com/student_council_ju/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-[#fbbf24] rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                <Image
                  src="/images/icons/insta.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="opacity-60 group-hover:opacity-100 transition-opacity relative z-10"
                />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/student-council-jecrc-university/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-[#fbbf24] rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                <Image
                  src="/images/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="opacity-60 group-hover:opacity-100 transition-opacity relative z-10"
                />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-new-amsterdam tracking-wide text-[#fbbf24] uppercase">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <a href="/#verticals" className="text-gray-400 hover:text-[#fbbf24] transition-colors text-sm font-delius">
                Events
              </a>
              <a href="/team" className="text-gray-400 hover:text-[#fbbf24] transition-colors text-sm font-delius">
                Our Team
              </a>
              <a href="/sponsors" className="text-gray-400 hover:text-[#fbbf24] transition-colors text-sm font-delius">
                Sponsors
              </a>
              <a href="/contact" className="text-gray-400 hover:text-[#fbbf24] transition-colors text-sm font-delius">
                Contact Us
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-xl font-new-amsterdam tracking-wide text-[#fbbf24] uppercase">
              Find Us
            </h3>
            
            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden border-2 border-[#fbbf24]/20 hover:border-[#fbbf24]/40 transition-colors">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7188.9312881326605!2d75.87389800094068!3d26.776580151088893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc892b8f05399%3A0x43fbca7105eca800!2sJECRC%20University!5e0!3m2!1sen!2sin!4v1757135014600!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#fbbf24]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-delius text-center md:text-left">
              &copy; {new Date().getFullYear()} JU Rhythm, JECRC University. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-500 font-delius">
              <a href="/Guidelines.pdf" target="_blank" className="hover:text-[#fbbf24] transition-colors">
                Guidelines
              </a>
              <span>•</span>
              <a href="/contact" className="hover:text-[#fbbf24] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
