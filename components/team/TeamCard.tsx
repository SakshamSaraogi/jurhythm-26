"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
  className?: string;
}

export const TeamCard = ({ name, position, image, className }: TeamCardProps) => {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl bg-black border-2 border-[#fbbf24] hover:border-[#fde68a] transition-all duration-300 ${className || ''}`}
      whileHover={{ scale: 1.05, y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 lg:p-6 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-anton uppercase tracking-wide sm:tracking-wider md:tracking-widest mb-0.5 sm:mb-1 text-[#fbbf24] drop-shadow-[0_0_20px_rgba(251,191,36,0.6)] line-clamp-2 sm:line-clamp-none whitespace-normal">
          {name}
        </h3>
        <p className="text-white font-inter font-semibold text-[8px] sm:text-xs md:text-sm tracking-wide sm:tracking-wider line-clamp-1 sm:line-clamp-none whitespace-normal">
          {position}
        </p>
      </div>
      
      <div className="absolute top-4 right-4 w-12 h-12 bg-[#fbbf24]/20 rounded-full blur-xl group-hover:bg-[#fbbf24]/40 transition-all duration-300" />
    </motion.div>
  );
};
