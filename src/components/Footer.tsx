import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Heart } from 'lucide-react';
import { LOGO_SRC, CONTACT_INFO } from '../data/constants';

interface FooterProps {
  onOpenAppointment?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#0A1F4D] text-white pt-14 pb-8 relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#033CA0]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6CC24A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Column 1: Logo (100% Pure White) & Slogan */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={LOGO_SRC}
                alt="Ávila Gestión Profesional de Salud"
                className="h-12 sm:h-14 w-auto object-contain brightness-0 invert filter drop-shadow-sm"
              />
            </Link>
            <p className="text-xs font-light text-sky-200/80 leading-relaxed max-w-xs">
              Gestión Profesional de Salud Ávila C.A. dedicados a brindar asistencia médica integral con un enfoque humano, profesional y transparente.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#6CC24A] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#5BB2F5] flex items-center justify-center transition-colors text-white"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navegación */}
          <div>
            <h4 className="text-xs font-medium text-white mb-4 tracking-wider uppercase text-sky-300">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-sky-200/80">
              <li>
                <Link to="/" className="hover:text-[#6CC24A] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-[#6CC24A] transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-[#6CC24A] transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/equipo-medico" className="hover:text-[#6CC24A] transition-colors">
                  Equipo Médico
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-[#6CC24A] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacto */}
          <div>
            <h4 className="text-xs font-medium text-white mb-4 tracking-wider uppercase text-sky-300">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-xs font-light text-sky-200/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6CC24A] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#5BB2F5] shrink-0" />
                <span>{CONTACT_INFO.phone1} / {CONTACT_INFO.phone2}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#6CC24A] shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#5BB2F5] shrink-0" />
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {CONTACT_INFO.instagram}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-normal text-sky-200/80 gap-3 text-center sm:text-left">
          <p>© 2025 Ávila Gestión Profesional de Salud. Todos los derechos reservados. | Hecho por Legaint Corporation</p>
        </div>
      </div>
    </footer>
  );
};
