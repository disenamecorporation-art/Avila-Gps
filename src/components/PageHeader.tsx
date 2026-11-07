import React from 'react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  badge?: string;
  title: React.ReactNode;
  subtitle: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="relative pt-32 pb-14 sm:pt-40 sm:pb-16 bg-gradient-to-b from-[#033CA0] via-[#0A2A6B] to-[#F4F8FC] text-white overflow-hidden shadow-md">
      {/* Background Clinic Image with Soft Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600"
          alt="Clinic Background"
          className="w-full h-full object-cover opacity-25 filter blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F8FC] via-[#033CA0]/75 to-[#0A2A6B]/90" />
      </div>

      {/* Decorative Wave SVG */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none opacity-40">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 sm:h-24">
          <path
            d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,64C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            fill="#F4F8FC"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-4 [text-shadow:_0_2px_8px_rgba(0,0,0,0.6)]"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs sm:text-sm font-light text-sky-100 max-w-2xl mx-auto leading-relaxed [text-shadow:_0_1px_4px_rgba(0,0,0,0.4)]"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};
