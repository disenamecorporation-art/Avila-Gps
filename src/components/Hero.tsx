import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Heart, Smartphone, Home, Activity, ArrowRight, ShieldCheck } from 'lucide-react';
import { HERO_BG_BASE, HERO_DOCTOR_PNG } from '../data/constants';

interface HeroProps {
  onOpenAppointment: () => void;
  onLearnMoreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment, onLearnMoreClick }) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Smooth GPU-accelerated Parallax Transforms
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const yDoctor = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const opacityHero = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const scaleDoctor = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center pt-28 sm:pt-36 pb-20 overflow-hidden bg-[#0A2A6B]"
    >
      {/* 1. Base Medical Background Image with Parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 will-change-transform scale-105"
      >
        <img
          src={HERO_BG_BASE}
          alt="Fondo médico azul Ávila GPS"
          className="w-full h-full object-cover object-center filter brightness-105"
        />
        {/* Dark blue overlay on left for readable white text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#033CA0]/90 via-[#0A2A6B]/80 sm:via-[#033CA0]/65 to-transparent w-full sm:w-[70%]" />
      </motion.div>

      {/* 2. Transparent Cutout Doctor PNG with Parallax */}
      <motion.div
        style={{ y: yDoctor, scale: scaleDoctor }}
        className="absolute right-0 sm:right-6 lg:right-16 bottom-0 z-10 pointer-events-none h-[82%] sm:h-[90%] lg:h-[95%] flex items-end justify-end will-change-transform"
      >
        <img
          src={HERO_DOCTOR_PNG}
          alt="Doctora Ávila GPS"
          className="h-full w-auto object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(3,60,160,0.4)]"
        />
      </motion.div>

      {/* 3. Main Hero Text & Interactive Content Container with Parallax & Fade */}
      <motion.div
        style={{ y: yText, opacity: opacityHero }}
        className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-20 flex flex-col justify-between my-auto will-change-transform"
      >
        <div className="max-w-2xl lg:max-w-3xl space-y-6 text-white text-left">

          {/* H1 Title with soft subtle shadow */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] [text-shadow:_0_1px_4px_rgba(0,0,0,0.4)]"
          >
            Atención médica <br />
            integral, cuando <br />
            <span className="font-normal text-[#6CC24A]">
              la necesitas.
            </span>
          </motion.h1>

          {/* Subtitle paragraph with soft text shadow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base lg:text-lg font-normal text-white max-w-xl leading-relaxed [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]"
          >
            En Ávila Gestión Profesional de Salud te ofrecemos servicios médicos de calidad, con un enfoque humano, profesional y cercano.
          </motion.p>

          {/* Mini-benefits Glass Bar (4 benefits with icon circles and vertical dividers) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="py-3.5 px-4 rounded-2xl bg-[#033CA0]/55 backdrop-blur-md border border-white/40 shadow-xl max-w-2xl"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 divide-y sm:divide-y-0 sm:divide-x divide-white/30">
              
              {/* Benefit 1 */}
              <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:px-2">
                <div className="w-8 h-8 rounded-full bg-white/30 border border-white/50 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-[#6CC24A]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white leading-tight">
                  Atención primaria en salud
                </span>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:px-2">
                <div className="w-8 h-8 rounded-full bg-white/30 border border-white/50 flex items-center justify-center shrink-0">
                  <Smartphone className="w-4 h-4 text-[#5BB2F5]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white leading-tight">
                  Telemedicina 24/7
                </span>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:px-2">
                <div className="w-8 h-8 rounded-full bg-white/30 border border-white/50 flex items-center justify-center shrink-0">
                  <Home className="w-4 h-4 text-[#6CC24A]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white leading-tight">
                  Médicos en el hogar
                </span>
              </div>

              {/* Benefit 4 */}
              <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:px-2">
                <div className="w-8 h-8 rounded-full bg-white/30 border border-white/50 flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4 text-[#5BB2F5]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white leading-tight">
                  Cirugías electivas
                </span>
              </div>

            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenAppointment}
              className="btn-green-gradient px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <span>Solicitar atención</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(3, 60, 160, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              onClick={onLearnMoreClick}
              className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-[#033CA0]/45 border border-white/40 backdrop-blur-md text-white transition-all shadow-md cursor-pointer"
            >
              Conoce más
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* 4. Glass Separator at the Bottom of the Hero Section */}
      <div className="absolute inset-x-0 bottom-0 z-30 pointer-events-none">
        <div className="w-full h-16 sm:h-20 bg-gradient-to-t from-[#F4F8FC] via-[#F4F8FC]/80 to-transparent backdrop-blur-sm border-t border-white/40 flex items-center justify-center relative overflow-hidden">
          <div className="max-w-3xl w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#5BB2F5] to-transparent shadow-[0_0_12px_#5BB2F5]" />
          <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#F4F8FC] to-transparent" />
        </div>
      </div>
    </section>
  );
};
