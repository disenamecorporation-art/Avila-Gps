import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SERVICES, ServiceItem } from '../data/constants';
import { CheckCircle2, Calendar } from 'lucide-react';

interface ServiciosProps {
  onOpenAppointment: (serviceId?: string) => void;
}

export const Servicios: React.FC<ServiciosProps> = ({ onOpenAppointment }) => {
  return (
    <div className="w-full space-y-16 pb-20">
      {/* Page Header */}
      <PageHeader
        title={
          <>
            Portafolio Médico <br />
            <span className="font-normal text-[#6CC24A]">Integral & Especializado</span>
          </>
        }
        subtitle="Atención de primera categoría en tu hogar, en telemedicina y a través de nuestra red de centros quirúrgicos aliados."
      />

      {/* Services Detailed List */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {SERVICES.map((service: ServiceItem, idx: number) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`bg-white/90 backdrop-blur-md border border-white rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div className={`lg:col-span-5 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 border border-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A6B]/60 via-transparent to-transparent" />
                  
                  {service.badge && (
                    <span className="absolute top-4 left-4 bg-[#6CC24A] text-white px-3 py-1 rounded-full text-[11px] font-normal shadow-md">
                      {service.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Text side */}
              <div className={`lg:col-span-7 space-y-4 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <h3 className="text-2xl sm:text-3xl font-light text-[#0A2A6B]">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm font-light text-slate-700 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Details Checklist */}
                {service.details && (
                  <div className="space-y-2 pt-1">
                    {service.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#6CC24A] shrink-0 mt-0.5" />
                        <span className="text-xs font-light text-slate-600">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Action */}
                <div className="pt-3 flex items-center gap-4">
                  <button
                    onClick={() => onOpenAppointment(service.id)}
                    className="btn-green-gradient px-6 py-2.5 rounded-full text-xs font-normal tracking-wide shadow-md flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Solicitar {service.title}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#033CA0] to-[#0A2A6B] text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-light">¿Necesitas una consulta inmediata?</h3>
            <p className="text-xs font-light text-sky-100">
              Servicio de unidades médicas de avance y telemedicina disponible 24 horas al día.
            </p>
          </div>
          <button
            onClick={() => onOpenAppointment()}
            className="btn-green-gradient px-8 py-3.5 rounded-full text-xs font-normal tracking-wide shadow-lg shrink-0"
          >
            Agendar Ahora
          </button>
        </div>
      </section>
    </div>
  );
};
