"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative md:min-h-screen">
      {/* Decorative Floating Lanterns - Blue/Cyan theme */}
      <div className="absolute top-24 right-20 w-16 h-24 opacity-50 animate-pulse" style={{ animationDuration: '3.5s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-6 bg-gradient-to-b from-[#4facfe] to-[#00f2fe] rounded-lg shadow-[0_0_30px_rgba(79,172,254,0.8)]"></div>
          <div className="absolute inset-x-3 top-0 h-3 bg-[#2c5282] rounded-t-lg"></div>
          <div className="absolute inset-x-3 bottom-4 h-3 bg-[#2c5282] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-0.5 h-8 bg-[#2c5282]"></div>
          <div className="absolute inset-0 bg-[#4facfe] blur-xl opacity-40"></div>
        </div>
      </div>

      <div className="absolute bottom-32 left-16 w-20 h-28 opacity-55 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-6 bg-gradient-to-b from-[#fa709a] to-[#fee140] rounded-lg shadow-[0_0_30px_rgba(250,112,154,0.8)]"></div>
          <div className="absolute inset-x-3 top-0 h-3 bg-[#8b4513] rounded-t-lg"></div>
          <div className="absolute inset-x-3 bottom-4 h-3 bg-[#8b4513] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-0.5 h-10 bg-[#8b4513]"></div>
          <div className="absolute inset-0 bg-[#fa709a] blur-xl opacity-40"></div>
        </div>
      </div>

      <div className="absolute top-1/2 right-10 w-14 h-20 opacity-45 animate-pulse" style={{ animationDuration: '3.2s', animationDelay: '0.8s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-6 bg-gradient-to-b from-[#fdc830] to-[#f7931e] rounded-lg shadow-[0_0_25px_rgba(253,200,48,0.8)]"></div>
          <div className="absolute inset-x-3 top-0 h-3 bg-[#8b6508] rounded-t-lg"></div>
          <div className="absolute inset-x-3 bottom-4 h-3 bg-[#8b6508] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-0.5 h-6 bg-[#8b6508]"></div>
          <div className="absolute inset-0 bg-[#fdc830] blur-xl opacity-40"></div>
        </div>
      </div>

      {/* Twinkling Stars Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
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
            }}
          />
        ))}
        
        {/* Colorful Confetti */}
        {[...Array(50)].map((_, i) => {
          const colors = ['#F4C542', '#FFB84D', '#FFA726', '#4facfe', '#00f2fe', '#fa709a', '#fee140'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          const randomShape = Math.random() > 0.5 ? 'rounded-full' : 'rounded-sm';
          
          return (
            <div
              key={`confetti-${i}`}
              className={`absolute ${randomShape} opacity-20`}
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                background: randomColor,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                zIndex: -1,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row md:min-h-screen items-center w-full p-10 justify-center">
        <div className="w-full h-[70vh] p-10 rounded-3xl gap-3 flex flex-col justify-center">
          <div className="md:w-fit w-full text-center relative group cursor-pointer">
            <h1 className="mb-6 text-3xl lg:text-5xl text-center duration-500 font-bold font-new-amsterdam uppercase w-full tracking-tight md:text-left text-[#F4C542] sm:text-7xl">
              About JURHYTHM&apos;26
            </h1>
          </div>

          <p className="w-full lg:max-w-xl text-center md:text-justify text-gray-200 font-light text-sm lg:text-lg font-delius">
            JURHYTHM is more than just a fest—it's a vibrant techno-cultural
            extravaganza that unites the brilliance of technology, the thrill of
            sports, the richness of culture, and the dynamism of media. It's a
            celebration of creativity, innovation, and camaraderie, where
            diverse ideas and talents come together to create unforgettable
            memories. Whether you're here to compete, perform, or simply revel
            in the festive spirit, JURHYTHM offers a platform to showcase your
            potential, connect with like-minded individuals, and experience the
            magic of endless fun under one roof.
          </p>
        </div>
      </div>
    </section>
  );
}
