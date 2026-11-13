import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { Building2, MapPin, CheckCircle } from 'lucide-react';
import { STATS, ALLIES, LOGO_SRC } from '../data/constants';

interface NosotrosProps {
  onOpenAppointment: () => void;
}

export const Nosotros: React.FC<NosotrosProps> = ({ onOpenAppointment }) => {
  return (
    <div className="w-full space-y-16 pb-20">
      {/* Page Header */}
      <PageHeader
        title={
          <>
            Gestión Profesional de Salud <br />
            <span className="font-normal text-[#6CC24A]">Ávila C.A.</span>
          </>
        }
        subtitle="Atención médica integral con trato cercano, transparente y humano para cuidar de ti, tu familia y tu empresa."
      />

      {/* Main Presentation Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-[#0A2A6B] leading-tight">
              Excelencia médica pensada en <br />
              <span className="font-normal text-[#6CC24A]">tu tranquilidad y la de tu familia</span>
            </h2>

            <p className="text-sm sm:text-base font-normal text-slate-700 leading-relaxed">
              En <strong className="font-semibold text-[#0A2A6B]">Gestión Profesional de Salud Ávila C.A.</strong> creemos que cuidar tu salud no debería ser frío ni complicado. Nacimos para estar cerca cuando más lo necesitas, acompañando a cada paciente y su familia con calidez, respeto y respuestas médicas oportunas, ya sea en tu hogar o en nuestras instalaciones.
            </p>

            <p className="text-sm sm:text-base font-normal text-slate-700 leading-relaxed">
              Reunimos asistencia médica primaria, especialistas, unidades de cardiología, radiología e imágenes, laboratorio clínico, enfermería y medicina ocupacional bajo una atención honesta y humana, enfocada en escuchar, diagnosticar a tiempo y devolverte la tranquilidad.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#6CC24A] shrink-0" />
                <span className="text-xs sm:text-sm font-normal text-[#0A2A6B]">Atención en Hogar e Instalaciones</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#6CC24A] shrink-0" />
                <span className="text-xs sm:text-sm font-normal text-[#0A2A6B]">Unidades de Diagnóstico y Laboratorio</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#6CC24A] shrink-0" />
                <span className="text-xs sm:text-sm font-normal text-[#0A2A6B]">Telemedicina y Seguimiento Cercano</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#6CC24A] shrink-0" />
                <span className="text-xs sm:text-sm font-normal text-[#0A2A6B]">Equipo Médico Humano y Certificado</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/80 p-2 bg-white/60 backdrop-blur-md">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                alt="Clínica Ávila GPS"
                className="w-full h-[380px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A6B]/70 via-transparent to-transparent rounded-2xl" />

              {/* Floating badge inside image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/40 text-white">
                <div className="flex items-center gap-3">
                  <img src={LOGO_SRC} alt="Ávila GPS Logo" className="h-8 w-auto object-contain brightness-0 invert" />
                  <div>
                    <h4 className="text-xs font-medium">Compromiso Humano</h4>
                    <p className="text-xs text-sky-100 font-normal">Valera, Estado Trujillo</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#033CA0] via-[#0A2A6B] to-[#0F7A33] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-center divide-x divide-white/10">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="space-y-1 px-2"
              >
                <div className="text-4xl sm:text-5xl font-light tracking-tight text-[#6CC24A]">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm font-medium text-white">
                  {stat.label}
                </div>
                <div className="text-xs font-normal text-sky-100/85 hidden sm:block">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instituciones Aliadas */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-3xl sm:text-4xl font-light text-[#0A2A6B]">
            Instituciones aliadas
          </h2>
          <p className="text-xs sm:text-sm font-normal text-slate-600 max-w-xl mx-auto">
            Trabajamos en alianza con centros médicos, clínicas y laboratorios de confianza para brindarte una atención completa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ALLIES.map((ally, idx) => (
            <motion.div
              key={ally.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-white shadow-md hover:shadow-lg transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#033CA0]/10 border border-[#033CA0]/20 flex items-center justify-center text-[#033CA0] shrink-0 mt-0.5">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-medium uppercase tracking-wider text-[#0F7A33] bg-[#6CC24A]/15 px-2.5 py-0.5 rounded-full inline-block">
                  {ally.tag}
                </span>
                <h4 className="text-sm font-medium text-[#0A2A6B]">
                  {ally.name}
                </h4>
                <div className="flex items-center gap-1 text-xs text-slate-500 font-normal">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{ally.city}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white/90 backdrop-blur-xl border border-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-light text-[#0A2A6B] mb-2">
              ¿Deseas afiliar tu empresa o requerir atención?
            </h3>
            <p className="text-xs font-light text-slate-600">
              Nuestro equipo de coordinadores médicos responderá todas tus dudas al instante.
            </p>
          </div>
          <button
            onClick={onOpenAppointment}
            className="btn-green-gradient px-8 py-3.5 rounded-full text-xs font-normal tracking-wide shadow-lg shrink-0"
          >
            Solicitar Atención Ahora
          </button>
        </div>
      </section>
    </div>
  );
};
