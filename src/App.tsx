import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AppointmentModal } from './components/AppointmentModal';
import { Home } from './pages/Home';
import { Nosotros } from './pages/Nosotros';
import { Servicios } from './pages/Servicios';
import { EquipoMedico } from './pages/EquipoMedico';
import { Contacto } from './pages/Contacto';

// Helper component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedDoctorName, setSelectedDoctorName] = useState<string>('');

  const handleOpenAppointment = (serviceId: string = '', doctorName: string = '') => {
    setSelectedServiceId(serviceId);
    setSelectedDoctorName(doctorName);
    setAppointmentModalOpen(true);
  };

  return (
    <BrowserRouter>
      {/* Initial Loading Screen */}
      <Preloader />

      {/* Scroll to Top on Navigation */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#F4F8FC] text-[#0A2A6B] relative flex flex-col font-['Montserrat',sans-serif]">
        {/* Sticky Glass Pill Header */}
        <Header onOpenAppointment={() => handleOpenAppointment()} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home onOpenAppointment={handleOpenAppointment} />}
            />
            <Route
              path="/nosotros"
              element={<Nosotros onOpenAppointment={() => handleOpenAppointment()} />}
            />
            <Route
              path="/servicios"
              element={<Servicios onOpenAppointment={handleOpenAppointment} />}
            />
            <Route
              path="/equipo-medico"
              element={<EquipoMedico onOpenAppointment={handleOpenAppointment} />}
            />
            <Route
              path="/contacto"
              element={<Contacto />}
            />
            {/* Fallback to Home */}
            <Route
              path="*"
              element={<Home onOpenAppointment={handleOpenAppointment} />}
            />
          </Routes>
        </main>

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />

        {/* Global Appointment Request Modal */}
        <AppointmentModal
          isOpen={appointmentModalOpen}
          onClose={() => setAppointmentModalOpen(false)}
          initialServiceId={selectedServiceId}
          initialDoctorName={selectedDoctorName}
        />

        {/* Footer */}
        <Footer onOpenAppointment={() => handleOpenAppointment()} />
      </div>
    </BrowserRouter>
  );
}
