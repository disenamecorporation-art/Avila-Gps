import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ShieldAlert,
  Smartphone,
  FlaskConical,
  Home as HomeIcon,
  HeartHandshake,
  HeartPulse,
  ScanLine,
  BriefcaseMedical,
  Stethoscope,
  ArrowRight,
  UserCheck,
  Clock,
  Cpu,
  Building2,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageSquare,
  Calendar
} from 'lucide-react';
import { Hero } from '../components/Hero';
import {
  HOME_UNITS,
  HOME_OFFERINGS,
  CLIENTS,
  LOGO_SRC,
  TELEMEDICINE_PHONE_IMAGE,
  CLINIC_BG_IMAGE,
  PORQUE_ELIGERNOS_IMAGE
} from '../data/constants';

interface HomeProps {
  onOpenAppointment: (serviceId?: string, doctorName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenAppointment }) => {
  const navigate = useNavigate();

  // Parallax refs for key sections
  const splitCardsRef = useRef<HTMLElement>(null);
  const { scrollYProgress: splitCardsProgress } = useScroll({
    target: splitCardsRef,
    offset: ['start end', 'end start']
  });
  const ySplitLeft = useTransform(splitCardsProgress, [0, 1], ['-5%', '5%']);
  const ySplitRight = useTransform(splitCardsProgress, [0, 1], ['5%', '-5%']);

  const bannerRef = useRef<HTMLElement>(null);
  const { scrollYProgress: bannerProgress } = useScroll({
    target: bannerRef,
    offset: ['start end', 'end start']
  });
  const yBannerGlow = useTransform(bannerProgress, [0, 1], ['-20%', '20%']);

  const editorialRef = useRef<HTMLElement>(null);
  const { scrollYProgress: editorialProgress } = useScroll({
    target: editorialRef,
    offset: ['start end', 'end start']
  });
  const yEditorialFloat = useTransform(editorialProgress, [0, 1], ['-10%', '10%']);

  // Carousel filter & index for Aseguradoras y Empresas section
  const [clientFilter, setClientFilter] = useState<'all' | 'insurers' | 'companies'>('all');
  const [clientIndex, setClientIndex] = useState(0);

  const filteredClients = CLIENTS.filter((c) => {
    const isInsurer = c.sector.toLowerCase().includes('aseguradora');
    if (clientFilter === 'insurers') return isInsurer;
    if (clientFilter === 'companies') return !isInsurer;
    return true;
  });

  // Group clients into sets of 4 for carousel slides
  const clientSlides = [];
  for (let i = 0; i < filteredClients.length; i += 4) {
    clientSlides.push(filteredClients.slice(i, i + 4));
  }

  useEffect(() => {
    setClientIndex(0);
  }, [clientFilter]);

  useEffect(() => {
    if (clientSlides.length <= 1) return;
    const timer = setInterval(() => {
      setClientIndex((prev) => (prev + 1) % clientSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [clientSlides.length]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-[#033CA0]" />;
      case 'ScanLine': return <ScanLine className="w-6 h-6 text-[#5BB2F5]" />;
      case 'BriefcaseMedical': return <BriefcaseMedical className="w-6 h-6 text-[#6CC24A]" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-[#033CA0]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-[#5BB2F5]" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-[#6CC24A]" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-[#5BB2F5]" />;
      case 'HomePlus': return <HomeIcon className="w-6 h-6 text-[#6CC24A]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#5BB2F5]" />;
      default: return <HeartHandshake className="w-6 h-6 text-[#6CC24A]" />;
    }
  };

  return (
    <div className="w-full space-y-20 pb-20">
      {/* 1. HERO SECTION WITH PARALLAX */}
      <Hero
        onOpenAppointment={() => onOpenAppointment()}
        onLearnMoreClick={() => navigate('/nosotros')}
      />

      {/* 1B. UNIDADES ESPECIALIZADAS DESTACADAS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-light text-[#0A2A6B]">
              Unidades Médicas <span className="font-normal text-[#6CC24A]">Especializadas</span>
            </h2>
            <p className="text-sm font-normal text-slate-600">
              Diagnóstico de alta precisión y respaldo clínico para tu salud integral y empresarial.
            </p>
          </div>
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#033CA0] hover:text-[#6CC24A] transition-colors group self-start sm:self-auto"
          >
            <span>Explorar unidades</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOME_UNITS.map((unit, idx) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => onOpenAppointment(unit.modalServiceId)}
              className="relative bg-white/90 backdrop-blur-md p-7 rounded-3xl border border-white shadow-lg hover:shadow-2xl hover:border-[#5BB2F5]/50 transition-all cursor-pointer group flex flex-col justify-between overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${unit.accent} opacity-60 pointer-events-none`} />
              <div className="relative z-10">
                <div className="w-13 h-13 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getServiceIcon(unit.iconName)}
                </div>
                <h3 className="text-xl font-semibold text-[#0A2A6B] mb-2.5 group-hover:text-[#033CA0] transition-colors">
                  {unit.title}
                </h3>
                <p className="text-sm font-normal text-slate-600 leading-relaxed">
                  {unit.desc}
                </p>
              </div>
              <div className="relative z-10 pt-6 mt-5 border-t border-slate-200/70 flex items-center justify-between text-xs sm:text-sm font-medium text-[#033CA0]">
                <span>Solicitar atención</span>
                <div className="w-7 h-7 rounded-full bg-[#033CA0]/10 group-hover:bg-[#6CC24A] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. SECTION A: SERVICIOS — "¿Qué ofrecemos?" */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-5xl font-light text-[#0A2A6B]">
              ¿Qué ofrecemos?
            </h2>
            <p className="text-sm font-normal text-slate-600">
              Una amplia gama de servicios médicos para ti y tu familia.
            </p>
          </div>

          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#033CA0] hover:text-[#6CC24A] transition-colors group self-start sm:self-auto"
          >
            <span>Ver todos los servicios</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 8 Glass Cards Grid with entrance parallax stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOME_OFFERINGS.map((service, idx) => (
            <motion.div
              key={service.id + idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => onOpenAppointment(service.modalServiceId || service.id)}
              className="bg-white/85 backdrop-blur-md p-6 rounded-3xl border border-white shadow-md hover:shadow-2xl hover:border-[#5BB2F5]/50 transition-all cursor-pointer group flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Icon in Circle */}
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#6CC24A]/10 transition-all">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-[#0A2A6B] mb-2 group-hover:text-[#033CA0] transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-medium text-[#033CA0]">
                <span>Solicitar atención</span>
                <div className="w-6 h-6 rounded-full bg-[#033CA0]/5 group-hover:bg-[#6CC24A] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SECTION B: DOS TARJETAS GRANDES LADO A LADO CON PARALLAX MULTICAPA */}
      <section ref={splitCardsRef} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Split Card: "¿Por qué elegirnos?" */}
          <motion.div
            style={{ y: ySplitLeft }}
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden p-8 sm:p-10 text-white flex flex-col justify-between min-h-[440px] shadow-2xl will-change-transform"
          >
            {/* Background Medical Stethoscope Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={PORQUE_ELIGERNOS_IMAGE}
                alt="Estetoscopio Ávila GPS"
                className="w-full h-full object-cover filter brightness-75 contrast-110 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#033CA0]/95 via-[#0A2A6B]/85 to-[#033CA0]/75" />
            </div>

            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-light leading-tight">
                ¿Por qué elegirnos? <br />
                <span className="font-normal text-sky-200">
                  Tu bienestar es nuestra prioridad
                </span>
              </h2>

              {/* 4 Feature Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/30">
                  <UserCheck className="w-5 h-5 text-[#6CC24A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">Profesionales</h4>
                    <p className="text-xs font-normal text-sky-100">Altamente calificados</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/30">
                  <Clock className="w-5 h-5 text-[#6CC24A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">Atención rápida</h4>
                    <p className="text-xs font-normal text-sky-100">Y personalizada</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/30">
                  <Cpu className="w-5 h-5 text-[#6CC24A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">Tecnología</h4>
                    <p className="text-xs font-normal text-sky-100">De vanguardia</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/30">
                  <Building2 className="w-5 h-5 text-[#6CC24A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">Hogar y Sede</h4>
                    <p className="text-xs font-normal text-sky-100">Atención integral</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8">
              <Link
                to="/nosotros"
                className="btn-green-gradient inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-lg"
              >
                <span>Conoce más sobre nosotros</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Split Card: Telemedicina "Tu médico siempre contigo" */}
          <motion.div
            style={{ y: ySplitRight }}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden p-8 sm:p-10 text-white flex flex-col justify-between min-h-[440px] shadow-2xl will-change-transform"
          >
            {/* Background Image of Smartphone Video Call Doctor */}
            <div className="absolute inset-0 z-0">
              <img
                src={TELEMEDICINE_PHONE_IMAGE}
                alt="Telemedicina Ávila GPS"
                className="w-full h-full object-cover filter brightness-90 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#033CA0]/90 via-[#0A2A6B]/80 to-[#0F7A33]/80" />
            </div>

            <div className="relative z-10 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-light leading-tight">
                Tu médico <br />
                <span className="font-normal text-[#6CC24A]">
                  siempre contigo
                </span>
              </h2>

              <p className="text-sm font-normal text-sky-100 max-w-sm leading-relaxed">
                Consulta desde donde estés, cuando lo necesites.
              </p>

              {/* 3 Mini Stats / Features */}
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#5BB2F5]" />
                  <span className="text-xs sm:text-sm font-medium text-white">Llamadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#6CC24A]" />
                  <span className="text-xs sm:text-sm font-medium text-white">Chat online</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#5BB2F5]" />
                  <span className="text-xs sm:text-sm font-medium text-white">24/7</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8">
              <button
                onClick={() => onOpenAppointment('telemedicine')}
                className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-white text-[#033CA0] hover:bg-sky-50 shadow-xl flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer"
              >
                <span>Solicitar atención</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. FULL-WIDTH BEAUTIFUL CTA BANNER */}
      <section ref={bannerRef} className="w-full bg-gradient-to-r from-[#033CA0] via-[#0A2A6B] to-[#0F7A33] py-14 px-6 text-white shadow-2xl relative overflow-hidden">
        {/* Parallax ambient glow particles */}
        <motion.div
          style={{ y: yBannerGlow }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-[#6CC24A]/25 rounded-full blur-3xl pointer-events-none will-change-transform"
        />
        <motion.div
          style={{ y: yBannerGlow }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#5BB2F5]/25 rounded-full blur-3xl pointer-events-none will-change-transform"
        />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-2 text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight">
              Tu tranquilidad y la de tu familia <br className="hidden sm:inline" />
              <span className="font-normal text-[#6CC24A]">es nuestra misión principal</span>
            </h3>
            <p className="text-sm font-normal text-sky-100 max-w-xl">
              Asistencia médica, telemedicina, laboratorio e imágenes a tu alcance en tu hogar o en nuestras instalaciones.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenAppointment()}
            className="btn-green-gradient px-8 py-4 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-2xl flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Solicitar Atención Médica</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </section>

      {/* 5. SECTION D: "ELLOS CONFÍAN EN NOSOTROS" */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: Compañías Aseguradoras y Empresas */}
          <div className="lg:col-span-7 bg-white/85 backdrop-blur-md border border-white/90 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-light text-[#0A2A6B]">
                    Compañías Aseguradoras y Empresas
                  </h2>
                  <p className="text-xs sm:text-sm font-normal text-slate-600 mt-1">
                    Respaldo médico para pólizas de seguros y convenios corporativos.
                  </p>
                </div>

                {/* Filter buttons */}
                <div className="inline-flex bg-slate-100 p-1 rounded-full self-start sm:self-auto shrink-0">
                  {[
                    { key: 'all', label: 'Todos' },
                    { key: 'insurers', label: 'Aseguradoras' },
                    { key: 'companies', label: 'Empresas' }
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setClientFilter(tab.key as 'all' | 'insurers' | 'companies')}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        clientFilter === tab.key
                          ? 'bg-[#033CA0] text-white shadow-sm'
                          : 'text-slate-600 hover:text-[#033CA0]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Cards Grid Slide */}
              <div className="min-h-[160px] flex items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {clientSlides[clientIndex]?.map((client, idx) => (
                    <motion.div
                      key={client.name + idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col justify-center"
                    >
                      <h4 className="text-xs sm:text-sm font-medium text-[#0A2A6B] truncate">
                        {client.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">
                        {client.sector}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100 mt-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  {clientSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setClientIndex(i)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        clientIndex === i ? 'w-6 bg-[#6CC24A]' : 'w-2 bg-slate-300'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
                <Link
                  to="/servicios#aseguradoras-empresas"
                  className="text-xs font-medium text-[#033CA0] hover:text-[#6CC24A] transition-colors inline-flex items-center gap-1 ml-2"
                >
                  <span>Ver convenios</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setClientIndex((prev) => (prev === 0 ? clientSlides.length - 1 : prev - 1))}
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 cursor-pointer"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setClientIndex((prev) => (prev + 1) % clientSlides.length)}
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 cursor-pointer"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Card: Clinic Glass Building CTA */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden p-8 sm:p-10 text-white flex flex-col justify-between shadow-xl">
            <div className="absolute inset-0 z-0">
              <img
                src={CLINIC_BG_IMAGE}
                alt="Ávila GPS Clínica"
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F4D]/95 via-[#033CA0]/80 to-[#0A2A6B]/70" />
            </div>

            <div className="relative z-10 space-y-4">
              <img
                src={LOGO_SRC}
                alt="Ávila GPS Logo"
                className="h-10 w-auto object-contain filter brightness-0 invert drop-shadow-md mb-2"
              />

              <h3 className="text-2xl font-light">Estamos aquí para ti</h3>

              <p className="text-xs sm:text-sm font-normal text-sky-100 leading-relaxed">
                Contáctanos y recibe la atención que mereces. Tu salud no puede esperar.
              </p>
            </div>

            <div className="relative z-10 pt-8">
              <button
                onClick={() => onOpenAppointment()}
                className="btn-green-gradient w-full py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Solicitar atención</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CONTENEDOR COMPACTO, ANCHO Y PANORÁMICO JUSTO ARRIBA DEL FOOTER */}
      <section ref={editorialRef} className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0A1F4D] via-[#0A2A6B] to-[#033CA0] text-white py-10 sm:py-12 px-6 sm:px-12 shadow-2xl border border-white/15">
          
          {/* Subtle Ambient Parallax Glow */}
          <motion.div
            style={{ y: yEditorialFloat }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-[#5BB2F5]/20 via-[#6CC24A]/25 to-transparent rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            
            {/* Texto Central con Degradado */}
            <div className="space-y-3 text-center lg:text-left flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight leading-tight"
              >
                Revolucionando la atención médica con un{' '}
                <span className="font-normal bg-gradient-to-r from-[#6CC24A] via-[#5BB2F5] to-white bg-clip-text text-transparent">
                  enfoque humano, digno y cercano.
                </span>
              </motion.h2>

              <p className="text-xs sm:text-sm font-normal text-sky-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Conectamos a cada paciente y familia con asistencia médica continua, unidades especializadas, telemedicina y centros aliados.
              </p>
            </div>

            {/* Botón de Acción Limpio */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="shrink-0"
            >
              <Link
                to="/nosotros"
                className="btn-green-gradient px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-xl inline-flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
              >
                <span>Conoce más sobre nosotros</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};
