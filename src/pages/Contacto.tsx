import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { CONTACT_INFO, RECAUDOS, CLIENTS } from '../data/constants';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  UserCheck,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contacto: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('Consulta General');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  // Accordion state for Recaudos
  const [openRecaudo, setOpenRecaudo] = useState<'titular' | 'beneficiarios' | null>('titular');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#6CC24A', '#5BB2F5', '#033CA0']
    });

    // Build structured inquiry message for 0412-1716058
    const lines = [
      '📩 *CONSULTA WEB - ÁVILA GPS*',
      '----------------------------------------',
      `👤 *Nombre:* ${name}`,
      `📞 *Teléfono:* ${phone}`,
      email ? `✉️ *Correo:* ${email}` : '',
      `🏥 *Requerimiento:* ${serviceType}`,
      `💬 *Mensaje:* ${message}`,
      '----------------------------------------',
      'Enviado desde el formulario de contacto web.'
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/584121716058?text=${encodeURIComponent(lines)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full space-y-16 pb-20">
      {/* Page Header */}
      <PageHeader
        title={
          <>
            Estamos a tu disposición <br />
            <span className="font-normal text-[#6CC24A]">en Valera y en todo el país</span>
          </>
        }
        subtitle="Escríbenos, llámanos o visítanos en nuestra sede en C.C. Las Acacias. Tu salud no puede esperar."
      />

      {/* Main Grid: Form & Info Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/90 backdrop-blur-md border border-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-light text-[#0A2A6B] mb-6">
              Envíanos tu requerimiento
            </h3>

            {isSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#6CC24A]/20 text-[#0F7A33] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <h4 className="text-xl font-light text-[#0A2A6B]">
                  ¡Mensaje Enviado con Éxito!
                </h4>
                <p className="text-xs text-slate-600 font-light max-w-md mx-auto">
                  Gracias, <strong>{name}</strong>. Hemos recibido tu mensaje. Nos comunicaremos contigo al {phone} en la brevedad posible.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/584121716058?text=${encodeURIComponent(
                      `📩 *CONSULTA WEB - ÁVILA GPS*\n👤 *Nombre:* ${name}\n📞 *Teléfono:* ${phone}\n🏥 *Requerimiento:* ${serviceType}\n💬 *Mensaje:* ${message}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green-gradient px-6 py-2.5 rounded-full text-xs font-medium text-white shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Abrir WhatsApp (0412-1716058)</span>
                  </a>
                  <button
                    onClick={() => setIsSent(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 transition shadow-sm"
                  >
                    Enviar Otro Mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej: Juan Pérez"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A2A6B] focus:ring-2 focus:ring-[#6CC24A] outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Teléfono de Contacto *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0412-1234567"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A2A6B] focus:ring-2 focus:ring-[#6CC24A] outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ejemplo@correo.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A2A6B] focus:ring-2 focus:ring-[#6CC24A] outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Tipo de Requerimiento
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A2A6B] focus:ring-2 focus:ring-[#6CC24A] outline-none transition bg-white"
                    >
                      <option value="Consulta General">Consulta Médica en Casa</option>
                      <option value="Telemedicina">Telemedicina 24/7</option>
                      <option value="Laboratorio">Laboratorio a Domicilio</option>
                      <option value="Cirugía Electiva">Cirugías Electivas</option>
                      <option value="Afiliación Corporativa">Afiliación Empresarial</option>
                      <option value="Otro">Otro Asunto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Mensaje o Consulta *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu consulta o requerimiento específico..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A2A6B] focus:ring-2 focus:ring-[#6CC24A] outline-none transition"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-green-gradient px-8 py-3 rounded-full text-xs font-normal tracking-wide shadow-lg flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column: Info Cards & WhatsApp (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="bg-white/90 backdrop-blur-md border border-white rounded-3xl p-6 shadow-xl space-y-5">
              <h3 className="text-xl font-light text-[#0A2A6B]">
                Información Directa
              </h3>

              <div className="space-y-4 text-xs font-light text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#033CA0]/10 flex items-center justify-center text-[#033CA0] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-normal text-[#0A2A6B]">Sede Principal</h5>
                    <p className="text-slate-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6CC24A]/10 flex items-center justify-center text-[#0F7A33] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-normal text-[#0A2A6B]">Horario de Atención</h5>
                    <p className="text-slate-600">{CONTACT_INFO.schedule}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#5BB2F5]/10 flex items-center justify-center text-[#033CA0] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-normal text-[#0A2A6B]">Teléfonos Directos</h5>
                    <p className="text-slate-600">{CONTACT_INFO.phone1} / {CONTACT_INFO.phone2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#033CA0]/10 flex items-center justify-center text-[#033CA0] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-normal text-[#0A2A6B]">Correo Electrónico</h5>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#033CA0] underline">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green-gradient w-full py-3 rounded-2xl text-xs font-normal text-white flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar vía WhatsApp Directo</span>
              </a>
            </div>

            {/* Embedded Google Maps */}
            <div className="bg-white/90 backdrop-blur-md border border-white rounded-3xl overflow-hidden p-2 shadow-xl h-64">
              <iframe
                title="Google Maps Ávila GPS"
                src={CONTACT_INFO.googleMapsEmbed}
                className="w-full h-full rounded-2xl border-0"
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Recaudos para la atención (Expandable Accordion) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white/90 backdrop-blur-md border border-white rounded-3xl p-8 shadow-xl">
          <div className="mb-6 space-y-1">
            <h3 className="text-2xl font-light text-[#0A2A6B]">
              Recaudos para la atención del paciente
            </h3>
            <p className="text-xs font-light text-slate-600">
              Documentación requerida para procesar la cobertura de asegurados y afiliados en consultas o ingresos.
            </p>
          </div>

          <div className="space-y-4">
            {/* Titular Accordion */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => setOpenRecaudo(openRecaudo === 'titular' ? null : 'titular')}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-normal text-sm text-[#0A2A6B] hover:bg-slate-50 transition"
              >
                <div className="flex items-center gap-2.5">
                  <UserCheck className="w-5 h-5 text-[#6CC24A]" />
                  <span>Documentación Requerida para el Titular</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    openRecaudo === 'titular' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openRecaudo === 'titular' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 pt-1 border-t border-slate-100 text-xs font-light text-slate-600 space-y-2"
                  >
                    {RECAUDOS.titular.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6CC24A] mt-1.5 shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Beneficiarios Accordion */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => setOpenRecaudo(openRecaudo === 'beneficiarios' ? null : 'beneficiarios')}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-normal text-sm text-[#0A2A6B] hover:bg-slate-50 transition"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#5BB2F5]" />
                  <span>Documentación Requerida para Beneficiarios</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    openRecaudo === 'beneficiarios' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openRecaudo === 'beneficiarios' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 pt-1 border-t border-slate-100 text-xs font-light text-slate-600 space-y-2"
                  >
                    {RECAUDOS.beneficiarios.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5BB2F5] mt-1.5 shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Ellos Confían en Nosotros (Corporate client list) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white/70 backdrop-blur-md border border-white rounded-3xl p-8 shadow-xl space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-light text-[#0A2A6B]">
              Nuestra Red de Clientes y Aseguradoras
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {CLIENTS.map((client, idx) => (
              <div
                key={client.name + idx}
                className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm text-center"
              >
                <h5 className="text-xs font-normal text-[#0A2A6B] truncate">
                  {client.name}
                </h5>
                <span className="text-[10px] text-slate-400 font-light block">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
