import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video - Simple, no optimization */}
      <video
        className="absolute top-0 left-0 w-screen h-screen object-cover z-0"
        autoPlay={typeof window !== 'undefined' && window.innerWidth >= 768}  // Only autoplay on desktop
        muted
        loop
        playsInline
        preload={typeof window !== 'undefined' && window.innerWidth < 768 ? "none" : "metadata"}  // No preload on mobile
        style={{
          minWidth: "100vw",
          minHeight: "100vh",
          width: "100vw",
          height: "100vh",
        }}
      >
        <source src="/innov8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content overlay */}
      <div className="relative z-10 flex items-end justify-between md:items-end md:justify-center min-h-screen px-6">
        <div className="text-[#ff6b35]/30 hidden md:block text-3xl md:text-[10rem] uppercase -mb-15 font-new-amsterdam tracking-widest drop-shadow-[0_0_30px_rgba(255,107,53,0.3)]">
          Ju Rhythm
        </div>
        {/* Collaboration Form */}
        <div className="bg-black/60 backdrop-blur-sm mx-auto rounded-t-full px-8 md:px-12 pt-8 md:pt-12 max-w-[25rem] w-full border-t-4 border-[#ff6b35]">
          {/* Header */}
          <div className="text-center mb-8 flex flex-col gap-3 h-full justify-between items-center">
            <h1 className="text-xl md:text-3xl w-full uppercase font-new-amsterdam tracking-widest text-[#ff6b35] mb-6">
              Find US!
            </h1>

            {/* Google Maps */}
            <div className="mb-6 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7188.9312881326605!2d75.87389800094068!3d26.776580151088893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc892b8f05399%3A0x43fbca7105eca800!2sJECRC%20University!5e0!3m2!1sen!2sin!4v1757135014600!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>

            {/* Instagram Links */}
            <div className="space-y-3 w-full">
              <a
                href="https://www.instagram.com/student_council_ju/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#ff6b35] text-black font-new-amsterdam tracking-widest text-center py-3 px-4 font-bold hover:bg-white hover:text-[#ff6b35] transition-colors duration-200 uppercase"
              >
                @Student_Council_JU
              </a>
              <a
                href="https://www.instagram.com/jecrcuniversity/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#ff6b35] text-black font-new-amsterdam tracking-widest text-center py-3 px-4 font-bold hover:bg-white hover:text-[#ff6b35] transition-colors duration-200 uppercase"
              >
                @jecrcuniversity
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="-space-y-1 mt-5 w-full">
              {/* Phone 1 - Left aligned */}
              <div className="text-left">
                <a
                  href="tel:+1234567890"
                  className="text-white hover:text-[#ff6b35] transition-colors duration-200 font-new-amsterdam tracking-wide"
                >
                  +91 96643 30564
                </a>
              </div>

              {/* Phone 2 - Right aligned */}
              <div className="text-right">
                <a
                  href="tel:+9876543210"
                  className="text-white hover:text-[#ff6b35] transition-colors duration-200 font-new-amsterdam tracking-wide"
                >
                 +91 861 996 4199
                </a>
              </div>

              {/* Phone 3 - Left aligned */}
              <div className="text-left">
                <a
                  href="tel:+1122334455"
                  className="text-white hover:text-[#ff6b35] transition-colors duration-200 font-new-amsterdam tracking-wide"
                >
                  +91 80031 50294
                </a>
              </div>
            </div>
            <div className="w-full">
              {/* copyright */}
              <p className="text-sm text-center text-white font-delius ">
                &copy; {new Date().getFullYear()} JU Rhythm. All rights
                reserved.
              </p>
            </div>
            <div className="w-full">
              {/* copyright */}
              <p className="text-sm text-center text-white font-delius ">
                {/* Build by <Link className="text-blue-600" href="https://amanjanwani.me">Aman Janwani</Link> and designed by Saksham Saraogi */}
              </p>
            </div>
        <div className="text-[#ff6b35]/40 md:hidden text-5xl uppercase -mb-12 font-new-amsterdam tracking-widest">
          JU Rhythm
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
