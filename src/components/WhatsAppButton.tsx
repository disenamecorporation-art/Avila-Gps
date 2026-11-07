import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/constants';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('Hola Ávila GPS, quisiera solicitar información sobre la atención médica integral.')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-[#6CC24A] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-[#6CC24A]/40 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      {/* Pulse effect rings */}
      <span className="absolute inset-0 rounded-full bg-[#6CC24A] animate-ping opacity-30 pointer-events-none" />

      <MessageCircle className="w-6 h-6 fill-white text-[#6CC24A]" />

      <span className="hidden sm:inline-block font-medium text-xs tracking-wider uppercase">
        WhatsApp 24/7
      </span>
    </motion.a>
  );
};
