import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { TEAM, SPECIALTY_CATEGORIES } from '../data/constants';
import { Search, Calendar, Stethoscope } from 'lucide-react';

interface EquipoMedicoProps {
  onOpenAppointment: (serviceId?: string, doctorName?: string) => void;
}

export const EquipoMedico: React.FC<EquipoMedicoProps> = ({ onOpenAppointment }) => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (categoryParam && SPECIALTY_CATEGORIES.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredDoctors = useMemo(() => {
    return TEAM.filter((doc) => {
      const matchesCategory =
        selectedCategory === 'Todas' || doc.category === selectedCategory;
      const matchesSearch =
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full space-y-12 pb-20">
      {/* Page Header */}
      <PageHeader
        title={
          <>
            Especialistas en <br />
            <span className="font-normal text-[#6CC24A]">cada área de la salud</span>
          </>
        }
        subtitle="Conoce a nuestros médicos altamente cualificados dedicados a cuidar tu salud con calidez humana y rigor profesional."
      />

      {/* Filter and Search Toolbar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white/80 backdrop-blur-md border border-white rounded-3xl p-6 shadow-xl space-y-5">
          
          {/* Top Row: Search Input */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre o especialidad médica..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-200 bg-white text-xs text-[#0A2A6B] placeholder-slate-400 focus:ring-2 focus:ring-[#6CC24A] focus:border-transparent outline-none transition"
            />
          </div>

          {/* Category Tabs Pill Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {SPECIALTY_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs transition-all ${
                    isSelected
                      ? 'bg-[#033CA0] text-white font-medium shadow-md'
                      : 'text-slate-600 hover:text-[#033CA0] hover:bg-white/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Doctor Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-16 bg-white/50 backdrop-blur-md rounded-3xl border border-slate-100 p-8">
            <Stethoscope className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-light text-[#0A2A6B] mb-1">
              No se encontraron médicos
            </h3>
            <p className="text-xs text-slate-500 font-light">
              Intenta cambiar los términos de búsqueda o el filtro de especialidad.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredDoctors.map((doc) => (
                <motion.div
                  key={doc.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between"
                >
                  <div>
                    {/* Doctor Photo */}
                    <div className="h-56 w-full overflow-hidden relative">
                      <img
                        src={doc.photo}
                        alt={doc.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A6B]/80 via-transparent to-transparent opacity-50" />
                      
                      <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-md text-[#033CA0] px-2.5 py-1 rounded-full text-[10px] font-normal shadow-sm">
                        {doc.category}
                      </span>
                    </div>

                    {/* Doctor Info */}
                    <div className="p-5 space-y-2">
                      <h3 className="text-sm font-normal text-[#0A2A6B] group-hover:text-[#033CA0] transition-colors leading-snug">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-light text-[#6CC24A] flex items-center gap-1.5">
                        <Stethoscope className="w-3.5 h-3.5" />
                        <span>{doc.specialty}</span>
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => onOpenAppointment('', doc.name)}
                      className="w-full py-2.5 rounded-full text-xs font-normal border border-[#033CA0]/30 text-[#033CA0] hover:bg-[#033CA0] hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Agendar Cita</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>
    </div>
  );
};
