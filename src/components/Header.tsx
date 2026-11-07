import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Menu, X, PhoneCall } from 'lucide-react';
import { LOGO_SRC, CONTACT_INFO } from '../data/constants';

interface HeaderProps {
  onOpenAppointment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Equipo Médico', path: '/equipo-medico' },
    { label: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-40 px-3 sm:px-6 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border border-white/90 shadow-xl shadow-[#033CA0]/10'
            : 'bg-white/55 backdrop-blur-md border border-white/70 shadow-lg shadow-[#033CA0]/05'
        }`}
      >
        {/* Left: Logo Only (Sleek & Proportional - slightly larger) */}
        <Link to="/" className="flex items-center group py-0.5">
          <img
            src={LOGO_SRC}
            alt="Ávila GPS Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Center: Desktop Nav Links (Clean links, no pill background behind active) */}
        <nav className="hidden md:flex items-center gap-6 px-4 py-1.5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs transition-colors duration-200 ${
                  isActive
                    ? 'text-[#033CA0] font-medium'
                    : 'text-slate-600 hover:text-[#033CA0]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${CONTACT_INFO.phone1}`}
            className="p-2 rounded-full text-slate-600 hover:text-[#033CA0] hover:bg-white/60 transition-colors"
            title="Llamar a Ávila GPS"
          >
            <PhoneCall className="w-4 h-4" />
          </a>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenAppointment}
            className="btn-green-gradient rounded-full px-5 py-2.5 flex items-center gap-2 text-xs font-normal tracking-wide shadow-md"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Solicitar Atención</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenAppointment}
            className="btn-green-gradient rounded-full p-2 text-white text-xs"
            aria-label="Solicitar atención"
          >
            <Calendar className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full bg-white/80 border border-slate-200 flex items-center justify-center text-[#0A2A6B]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-sm mx-auto bg-white/95 backdrop-blur-2xl border border-white/80 rounded-3xl p-5 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-sm transition ${
                      isActive
                        ? 'bg-[#033CA0]/10 text-[#033CA0] font-medium'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="btn-green-gradient w-full py-3 rounded-2xl text-xs font-normal tracking-wide text-white flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Solicitar Atención Médica
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
