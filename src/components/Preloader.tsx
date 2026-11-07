import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGO_SRC } from '../data/constants';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A1F4D] text-white overflow-hidden"
        >
          {/* Animated Background Light Glows */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#033CA0]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#6CC24A]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <img
                src={LOGO_SRC}
                alt="Ávila GPS Logo"
                className="h-20 sm:h-24 object-contain filter drop-shadow-[0_10px_20px_rgba(255,255,255,0.15)]"
              />
            </motion.div>

            {/* SVG ECG Pulse Line Animation */}
            <div className="w-64 h-16 relative mb-6">
              <svg
                viewBox="0 0 300 100"
                className="w-full h-full stroke-current text-[#6CC24A]"
                fill="none"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M 0,50 L 60,50 L 80,20 L 100,80 L 120,10 L 140,90 L 160,50 L 300,50"
                  className="animate-ecg"
                />
              </svg>
            </div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-light tracking-widest uppercase text-sky-200/80 mb-4"
            >
              Cargando tu bienestar...
            </motion.p>

            {/* Progress Bar */}
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden p-[1px]">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#5BB2F5] via-[#6CC24A] to-[#0F7A33] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
