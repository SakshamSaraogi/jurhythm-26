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
      className={`group relative overflow-hidden rounded-xl bg-black border-2 border-[#ff6b35] hover:border-white transition-all duration-300 ${className || ''}`}
      whileHover={{ scale: 1.05, y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-2xl font-new-amsterdam uppercase tracking-widest mb-1 text-[#ff6b35] drop-shadow-[0_0_20px_rgba(255,107,53,0.5)]">
          {name}
        </h3>
        <p className="text-white font-delius font-semibold text-sm uppercase tracking-wider">
          {position}
        </p>
      </div>
      
      <div className="absolute top-4 right-4 w-12 h-12 bg-[#ff6b35]/20 rounded-full blur-xl group-hover:bg-[#ff6b35]/40 transition-all duration-300" />
    </motion.div>
  );
};
