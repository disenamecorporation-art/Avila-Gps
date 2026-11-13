import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SERVICES, CLIENTS, ServiceItem } from '../data/constants';
import { CheckCircle2, Calendar, ShieldCheck, Building2, ArrowRight } from 'lucide-react';

interface ServiciosProps {
  onOpenAppointment: (serviceId?: string) => void;
}

export const Servicios: React.FC<ServiciosProps> = ({ onOpenAppointment }) => {
  const insurers = CLIENTS.filter((c) => c.sector.toLowerCase().includes('aseguradora'));
  const corporateClients = CLIENTS.filter((c) => !c.sector.toLowerCase().includes('aseguradora'));

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
        subtitle="Atención médica de primera categoría en tu hogar, en nuestras instalaciones y en nuestra red de centros aliados."
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
                    <span className="absolute top-4 left-4 bg-[#6CC24A] text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
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

                <p className="text-sm font-normal text-slate-700 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Details Checklist */}
                {service.details && (
                  <div className="space-y-2 pt-1">
                    {service.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#6CC24A] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-normal text-slate-600">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Action */}
                <div className="pt-3 flex items-center gap-4">
                  <button
                    onClick={() => onOpenAppointment(service.modalServiceId || service.id)}
                    className="btn-green-gradient px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-md flex items-center gap-2 cursor-pointer"
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

      {/* Compañías Aseguradoras y Empresas */}
      <section id="aseguradoras-empresas" className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light text-[#0A2A6B]">
            Compañías <span className="font-normal text-[#6CC24A]">Aseguradoras y Empresas</span>
          </h2>
          <p className="text-sm font-normal text-slate-600">
            Atendemos pólizas de las principales aseguradoras y brindamos respaldo médico ocupacional y asistencial a empresas e instituciones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Compañías Aseguradoras */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-white/90 backdrop-blur-md border border-white rounded-3xl p-7 sm:p-8 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#033CA0]/10 border border-[#033CA0]/20 flex items-center justify-center text-[#033CA0]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#0A2A6B]">Compañías Aseguradoras</h3>
                  <p className="text-xs font-normal text-slate-500">Gestión ágil para asegurados</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {insurers.map((insurer) => (
                  <div
                    key={insurer.name}
                    className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-100 flex items-center justify-between gap-2"
                  >
                    <span className="text-xs sm:text-sm font-medium text-[#0A2A6B]">{insurer.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#6CC24A] shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => onOpenAppointment('specialist-consultations')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#033CA0] hover:text-[#6CC24A] transition-colors cursor-pointer"
              >
                <span>Solicitar atención por póliza de seguro</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Empresas y Convenios Corporativos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="bg-white/90 backdrop-blur-md border border-white rounded-3xl p-7 sm:p-8 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#6CC24A]/15 border border-[#6CC24A]/25 flex items-center justify-center text-[#0F7A33]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#0A2A6B]">Empresas e Instituciones</h3>
                  <p className="text-xs font-normal text-slate-500">Convenios corporativos y medicina ocupacional</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[280px] overflow-y-auto pr-1">
                {corporateClients.map((company) => (
                  <div
                    key={company.name}
                    className="p-3 rounded-2xl bg-slate-50/90 border border-slate-100"
                  >
                    <p className="text-xs font-medium text-[#0A2A6B] leading-snug">{company.name}</p>
                    <p className="text-[11px] font-normal text-slate-500 mt-0.5">{company.sector}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => onOpenAppointment('occupational-medicine')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#033CA0] hover:text-[#6CC24A] transition-colors cursor-pointer"
              >
                <span>Solicitar convenio empresarial o Medicina Ocupacional</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#033CA0] to-[#0A2A6B] text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-light">¿Necesitas una consulta inmediata?</h3>
            <p className="text-xs sm:text-sm font-normal text-sky-100">
              Atención médica en tu hogar, en nuestras instalaciones y telemedicina oportuna cuando lo necesites.
            </p>
          </div>
          <button
            onClick={() => onOpenAppointment()}
            className="btn-green-gradient px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-lg shrink-0 cursor-pointer"
          >
            Agendar Ahora
          </button>
        </div>
      </section>
    </div>
  );
};
