import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Phone, CheckCircle2, MapPin, Clock, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES, TEAM } from '../data/constants';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialDoctorName?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = '',
  initialDoctorName = ''
}) => {
  const [service, setService] = useState(initialServiceId || SERVICES[0].id);
  const [doctor, setDoctor] = useState(initialDoctorName || '');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientId, setPatientId] = useState('');
  const [locationType, setLocationType] = useState<'home' | 'clinic'>('home');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Launch celebratory confetti
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#6CC24A', '#0F7A33', '#5BB2F5', '#033CA0']
    });

    // Build structured WhatsApp message for 0412-1716058
    const serviceTitle = SERVICES.find(s => s.id === service)?.title || service;
    const modalText = locationType === 'home' ? 'Atención en el Hogar' : 'Consulta en Consultorio / Centro Aliado';
    const lines = [
      '🩺 *SOLICITUD DE ATENCIÓN MÉDICA - ÁVILA GPS*',
      '----------------------------------------',
      `👤 *Paciente:* ${patientName || 'No indicado'}`,
      `📞 *Teléfono:* ${patientPhone || 'No indicado'}`,
      patientId ? `🪪 *Cédula:* ${patientId}` : '',
      `🏥 *Servicio:* ${serviceTitle}`,
      doctor ? `👨‍⚕️ *Especialista:* ${doctor}` : '',
      `📍 *Modalidad:* ${modalText}`,
      appointmentDate ? `📅 *Fecha sugerida:* ${appointmentDate}` : '',
      '----------------------------------------',
      'Por favor, confirmar disponibilidad y atención.'
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/584121716058?text=${encodeURIComponent(lines)}`;
    
    // Open WhatsApp directly in new window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-[#0A1F4D]/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative z-10 w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-white/80 overflow-hidden my-auto"
          >
            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Split Modal Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
              
              {/* Left Column: Clean Left Visual Panel */}
              <div className="md:col-span-5 bg-gradient-to-br from-[#033CA0] via-[#0A2A6B] to-[#0F7A33] p-6 sm:p-8 text-white flex flex-col justify-center relative overflow-hidden">
                {/* Background glowing ambient light circles */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#6CC24A]/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#5BB2F5]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-light leading-tight">
                    Solicitud de <br />
                    <span className="font-normal text-[#6CC24A]">Atención Médica</span>
                  </h3>

                  <p className="text-xs sm:text-sm font-light text-sky-100/90 leading-relaxed">
                    Estamos listos para brindarte asistencia personalizada en la comodidad de tu hogar o en nuestra red de clínicas.
                  </p>
                </div>
              </div>

              {/* Right Column: Fresh Interactive Form (7 cols) */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-center bg-slate-50/50">
                {isSubmitted ? (
                  <div className="py-6 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#6CC24A]/20 text-[#0F7A33] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10 animate-bounce" />
                    </div>
                    <h3 className="text-xl font-light text-[#0A2A6B]">
                      ¡Solicitud Registrada!
                    </h3>
                    <p className="text-xs text-slate-600 font-light max-w-sm mx-auto leading-relaxed">
                      Gracias, <strong className="font-normal text-[#033CA0]">{patientName}</strong>. Nuestro equipo de coordinación médica se pondrá en contacto contigo al <strong className="font-normal text-[#033CA0]">{patientPhone}</strong> en minutos.
                    </p>

                    <div className="bg-white p-4 rounded-2xl border border-slate-200 text-left text-xs text-slate-600 space-y-1.5 shadow-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Servicio:</span>
                        <span className="font-medium text-[#0A2A6B]">
                          {SERVICES.find(s => s.id === service)?.title || service}
                        </span>
                      </div>
                      {doctor && (
                        <div className="flex justify-between">
                          <span className="text-slate-400">Médico:</span>
                          <span className="font-medium text-[#0A2A6B]">{doctor}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-slate-400">Modalidad:</span>
                        <span className="font-medium text-[#0A2A6B]">
                          {locationType === 'home' ? 'Atención en el Hogar' : 'Consulta en Centro Médico'}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                      <a
                        href={`https://wa.me/584121716058?text=${encodeURIComponent(
                          `🩺 *SOLICITUD DE ATENCIÓN MÉDICA - ÁVILA GPS*\n` +
                          `👤 *Paciente:* ${patientName}\n` +
                          `📞 *Teléfono:* ${patientPhone}\n` +
                          `🏥 *Servicio:* ${SERVICES.find(s => s.id === service)?.title || service}\n` +
                          (doctor ? `👨‍⚕️ *Especialista:* ${doctor}\n` : '') +
                          `📍 *Modalidad:* ${locationType === 'home' ? 'Atención en el Hogar' : 'Consulta en Consultorio'}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-green-gradient px-6 py-2.5 rounded-full text-xs font-medium tracking-wide shadow-md flex items-center justify-center gap-2"
                      >
                        <span>Abrir WhatsApp (0412-1716058)</span>
                      </a>
                      <button
                        onClick={resetAndClose}
                        className="px-6 py-2.5 rounded-full text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 transition shadow-sm"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Servicio Requerido *
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-[#0A2A6B] focus:ring-2 focus:ring-[#6CC24A] outline-none transition shadow-sm"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Location type choice */}
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Modalidad de Atención
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setLocationType('home')}
                          className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs transition ${
                            locationType === 'home'
                              ? 'bg-[#033CA0]/10 border-[#033CA0] text-[#033CA0] font-medium'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <MapPin className="w-3.5 h-3.5 text-[#6CC24A]" />
                          En el Hogar
                        </button>
                        <button
                          type="button"
                          onClick={() => setLocationType('clinic')}
                          className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs transition ${
                            locationType === 'clinic'
                              ? 'bg-[#033CA0]/10 border-[#033CA0] text-[#033CA0] font-medium'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5 text-[#033CA0]" />
                          En Consultorio
                        </button>
                      </div>
                    </div>

                    {/* Patient Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-600 mb-1">
                          Nombre del Paciente *
                        </label>
                        <div className="relative">
                          <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            placeholder="Nombre y Apellido"
                            className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-[#0A2A6B] focus:ring-2 focus:ring-[#6CC24A] outline-none transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-600 mb-1">
                          Teléfono (WhatsApp) *
                        </label>
                        <div className="relative">
                          <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="tel"
                            required
                            value={patientPhone}
                            onChange={(e) => setPatientPhone(e.target.value)}
                            placeholder="0412-0000000"
                            className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-[#0A2A6B] focus:ring-2 focus:ring-[#6CC24A] outline-none transition"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Cédula & Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-600 mb-1">
                          Cédula de Identidad
                        </label>
                        <input
                          type="text"
                          value={patientId}
                          onChange={(e) => setPatientId(e.target.value)}
                          placeholder="V-12.345.678"
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-[#0A2A6B] focus:ring-2 focus:ring-[#6CC24A] outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-600 mb-1">
                          Fecha Preferida
                        </label>
                        <input
                          type="date"
                          value={appointmentDate}
                          onChange={(e) => setAppointmentDate(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-[#0A2A6B] focus:ring-2 focus:ring-[#6CC24A] outline-none transition"
                        />
                      </div>
                    </div>

                    {/* Doctor selection (Optional) */}
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Especialista de preferencia (Opcional)
                      </label>
                      <select
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-[#0A2A6B] focus:ring-2 focus:ring-[#6CC24A] outline-none transition"
                      >
                        <option value="">-- Triaje por Ávila GPS --</option>
                        {TEAM.map((doc) => (
                          <option key={doc.id} value={doc.name}>
                            {doc.name} ({doc.specialty})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={resetAndClose}
                        className="px-4 py-2.5 rounded-full text-xs text-slate-500 hover:bg-slate-200 transition"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="btn-green-gradient px-6 py-2.5 rounded-full text-xs font-normal text-white shadow-md flex items-center gap-1.5"
                      >
                        <span>Confirmar Solicitud</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
