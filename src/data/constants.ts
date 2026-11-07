/**
 * ÁVILA GPS - Data Constants
 * Management Professional Health Ávila C.A.
 */

export const LOGO_SRC = '/logo.png';
export const HERO_BG_BASE = '/hero-bg-base.png';
export const HERO_DOCTOR_PNG = '/doctor-transparent.png';
export const HERO_DOCTOR_IMAGE = '/doctor-transparent.png';
export const CLINIC_BG_IMAGE = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200';
export const TELEMEDICINE_PHONE_IMAGE = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800';
export const PORQUE_ELIGERNOS_IMAGE = 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=1000';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  color: string;
  badge?: string;
  image?: string;
  details?: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'covid-protocol',
    title: 'Protocolo COVID',
    shortDesc: 'Prevención, tratamiento y seguimiento en su hogar.',
    fullDesc: 'Nuestro equipo de médicos y enfermeras son especialistas en descarte, tratamiento y prevención del COVID-19. Garantizamos a nuestros afiliados atención inmediata y seguimiento en su hogar.',
    iconName: 'ShieldAlert',
    color: 'from-blue-400 to-indigo-500',
    details: [
      'Descarte rápido y pruebas moleculares a domicilio',
      'Esquema de tratamiento bajo supervisión médica continua',
      'Monitoreo constante de saturación de oxígeno y signos vitales',
      'Concentradores de oxígeno y soporte respiratorio si se requiere'
    ],
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'telemedicine',
    title: 'Telemedicina',
    shortDesc: 'Atención 12 h/7 días por llamadas y chat online.',
    fullDesc: 'Accede a nuestros servicios de telemedicina 12 h/7 días, a través de nuestras líneas telefónicas y chat online para recibir atención médica inmediata desde cualquier lugar.',
    iconName: 'Smartphone',
    color: 'from-sky-400 to-blue-600',
    badge: '12h / 7 días',
    details: [
      'Videollamadas en alta definición con médicos de guardia',
      'Recéptas digitales enviadas directamente a tu teléfono o e-mail',
      'Orientación y triaje médico inmediato para ti y tu familia',
      'Historial de consultas sincronizado en plataforma segura'
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'lab-home',
    title: 'Toma de muestras en casa',
    shortDesc: 'Laboratorio a domicilio con resultados digitales.',
    fullDesc: 'Ofrecemos el servicio de toma de muestras de laboratorio a domicilio para la realización de perfiles de laboratorio y pruebas especiales, con envío de resultados por correo electrónico o WhatsApp.',
    iconName: 'FlaskConical',
    color: 'from-emerald-400 to-teal-600',
    details: [
      'Personal bioanalista altamente capacitado y certificado',
      'Perfiles de rutina, perfil 20, tiroideo, hormonal y marcadores',
      'Resultados digitales en menos de 24 horas vía correo o WhatsApp',
      'Toma de muestras pediátricas y geriátricas con cuidado especializado'
    ],
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'home-consultations',
    title: 'Consultas en el hogar',
    shortDesc: 'Unidades médicas, tratamientos y recomendaciones.',
    fullDesc: 'Brindamos asistencia médica las 24 horas; contamos con unidades de avance médicas para urgencias o patologías comunes. Nuestro servicio incluye la colocación de tratamiento vía oral, intramuscular, endovenosa, nebulización o hidratación. Además, proporcionamos recomendaciones médicas, indicaciones o referencias con especialistas.',
    iconName: 'HomePlus',
    color: 'from-green-400 to-emerald-600',
    details: [
      'Unidades médicas de avance equipadas para emergencias',
      'Administración de medicamentos EV, IM, nebulizaciones e hidratación',
      'Evaluación física completa por médico cirujano o especialista',
      'Remisión rápida a centros quirúrgicos si se detecta complicación'
    ],
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'primary-care',
    title: 'Atención primaria en salud',
    shortDesc: 'Control y prevención de enfermedades.',
    fullDesc: 'Ofrecemos a nuestros afiliados acceso garantizado con profesionales médicos para el control y prevención de enfermedades. Además, contamos con centros de imágenes y laboratorios bioclínicos, a través de aliados estratégicos en diversas ciudades del país.',
    iconName: 'HeartHandshake',
    color: 'from-blue-500 to-cyan-600',
    details: [
      'Evaluación clínica integral y despistaje preventivo',
      'Control de pacientes crónicos (Hipertensión, Diabetes, etc.)',
      'Acceso preferencial a centros de imágenes (Rayos X, Eco, Tomografía)',
      'Planes de salud familiares y corporativos a medida'
    ],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'medicine-delivery',
    title: 'Delivery de medicamentos',
    shortDesc: 'Suministro a través de una llamada.',
    fullDesc: 'Nuestros afiliados podrán contar con el suministro de medicamentos a través de una llamada telefónica con entrega rápida y directa en su residencia u oficina.',
    iconName: 'Pill',
    color: 'from-teal-400 to-emerald-500',
    details: [
      'Despacho de medicamentos agudos y de tratamiento continuo',
      'Inventario garantizado con cadenas farmacéuticas aliadas',
      'Entrega express con cadena de frío garantizada para insulinas y biológicos',
      'Descuentos exclusivos para afiliados Ávila GPS'
    ],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'elective-surgeries',
    title: 'Cirugías electivas y especialidades',
    shortDesc: 'Intervenciones quirúrgicas programadas y diagnósticos.',
    fullDesc: 'Coordinación completa para intervenciones quirúrgicas electivas en centros de salud aliados de primer nivel, acompañamiento pre y postoperatorio y valoraciones médicas especializadas.',
    iconName: 'Activity',
    color: 'from-indigo-500 to-blue-700',
    details: [
      'Evaluación preanestésica y riesgo cardiovascular',
      'Habitaciones clínicas equipadas y quirófanos de tecnología avanzada',
      'Seguimiento médico postoperatorio personalizado',
      'Convenios de cobertura directa con aseguradoras'
    ],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
  }
];

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  category: string;
  photo: string;
}

export const SPECIALTY_CATEGORIES = [
  'Todas',
  'Medicina General',
  'Pediatría',
  'Cardiología',
  'Traumatología',
  'Ginecología',
  'Cirugía',
  'Medicina Interna',
  'Otras Especialidades'
];

export const TEAM: Doctor[] = [
  // Medicina General
  { id: '1', name: 'Dra. Marian Canelón', specialty: 'Medicina General', category: 'Medicina General', photo: 'https://images.unsplash.com/photo-1594824813571-24a69832266a?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Dr. Rafael Uzcátegui', specialty: 'Medicina General', category: 'Medicina General', photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Dra. Geraimar Avendaño', specialty: 'Medicina General', category: 'Medicina General', photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400' },
  { id: '4', name: 'Dra. Karla Andrade', specialty: 'Medicina General', category: 'Medicina General', photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=400' },
  { id: '5', name: 'Dra. Amelia Torres', specialty: 'Medicina General', category: 'Medicina General', photo: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400' },

  // Pediatría & Infantil
  { id: '6', name: 'Dra. Keila Abreu', specialty: 'Pediatría', category: 'Pediatría', photo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400' },
  { id: '7', name: 'Dra. Crisdelis Cobarrubia', specialty: 'Pediatría', category: 'Pediatría', photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400' },
  { id: '8', name: 'Dra. Norelvis Anselmi', specialty: 'Pediatría', category: 'Pediatría', photo: 'https://images.unsplash.com/photo-1614608682850-e04149611416?auto=format&fit=crop&q=80&w=400' },
  { id: '9', name: 'Dra. Yaritza Araujo', specialty: 'Pediatría', category: 'Pediatría', photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400' },
  { id: '10', name: 'Dra. Kelly Santos', specialty: 'Neonatólogo-Pediatra', category: 'Pediatría', photo: 'https://images.unsplash.com/photo-1594824813571-24a69832266a?auto=format&fit=crop&q=80&w=400' },
  { id: '11', name: 'Dr. Rubén Quille', specialty: 'Cirugía Pediátrica', category: 'Pediatría', photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400' },
  { id: '12', name: 'Dr. Douglas Olivero', specialty: 'Neumonólogo Infantil', category: 'Pediatría', photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400' },

  // Cardiología
  { id: '13', name: 'Dr. Nilo Valbuena', specialty: 'Cardiología', category: 'Cardiología', photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400' },
  { id: '14', name: 'Dra. Anabel Cols', specialty: 'Cardiología', category: 'Cardiología', photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400' },
  { id: '15', name: 'Dr. Juan Parada', specialty: 'Cirujano Cardiovascular', category: 'Cardiología', photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400' },

  // Traumatología & Cirugía
  { id: '16', name: 'Dr. Jorge Graterol', specialty: 'Traumatología', category: 'Traumatología', photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400' },
  { id: '17', name: 'Dra. Neyarit Díaz', specialty: 'Cirugía General', category: 'Cirugía', photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=400' },
  { id: '18', name: 'Dr. Oswaldo Guzmán', specialty: 'Cirugía General', category: 'Cirugía', photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400' },
  { id: '19', name: 'Dra. Roshlin Riascos', specialty: 'Cirugía General', category: 'Cirugía', photo: 'https://images.unsplash.com/photo-1594824813571-24a69832266a?auto=format&fit=crop&q=80&w=400' },

  // Ginecología
  { id: '20', name: 'Dra. Dayana Paredes', specialty: 'Ginecología y Obstetricia', category: 'Ginecología', photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400' },
  { id: '21', name: 'Dra. Yuly Peña', specialty: 'Ginecología', category: 'Ginecología', photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400' },
  { id: '22', name: 'Dra. Ana Romero', specialty: 'Ginecología', category: 'Ginecología', photo: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400' },
  { id: '23', name: 'Dra. Karla Bencomo', specialty: 'Ginecología', category: 'Ginecología', photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=400' },
  { id: '24', name: 'Dr. Andrés Martínez', specialty: 'Ginecología', category: 'Ginecología', photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400' },
  { id: '25', name: 'Dra. Luisel Flores', specialty: 'Ginecología', category: 'Ginecología', photo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400' },

  // Medicina Interna & Otras
  { id: '26', name: 'Dra. Kellim Gómez', specialty: 'Medicina Interna', category: 'Medicina Interna', photo: 'https://images.unsplash.com/photo-1594824813571-24a69832266a?auto=format&fit=crop&q=80&w=400' },
  { id: '27', name: 'Dra. Magly Ruíz', specialty: 'Medicina Interna', category: 'Medicina Interna', photo: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400' },
  { id: '28', name: 'Dr. Rafael Abreu', specialty: 'Medicina Ocupacional', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400' },
  { id: '29', name: 'Dr. Luis Pimentel', specialty: 'Neurocirujano', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400' },
  { id: '30', name: 'Dra. Alcira Corredor', specialty: 'Oftalmología', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400' },
  { id: '31', name: 'Dra. Martha Corredor', specialty: 'Oftalmología', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400' },
  { id: '32', name: 'Dra. Vanessa Buitrago', specialty: 'Oftalmología', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=400' },
  { id: '33', name: 'Dr. Pedro Armando González', specialty: 'Urología', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400' },
  { id: '34', name: 'Dra. Sofía Carrillo', specialty: 'Gastroenterología', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400' },
  { id: '35', name: 'Yuliana Carrillo Esposito', specialty: 'Gastroenterología', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1594824813571-24a69832266a?auto=format&fit=crop&q=80&w=400' },
  { id: '36', name: 'Dra. Rosaura Trejo', specialty: 'Nefrología', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400' },
  { id: '37', name: 'Dra. Josefa Esposito', specialty: 'Nefrología', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400' },
  { id: '38', name: 'Dr. Germán Cols', specialty: 'Neurología', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400' },
  { id: '39', name: 'Dra. Isabel Victora', specialty: 'Neurología', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=400' },
  { id: '40', name: 'Dra. Mariela Chiquito', specialty: 'Otorrinolaringología', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400' },
  { id: '41', name: 'Dr. Arturo Licitra', specialty: 'Otorrinolaringología', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400' },
  { id: '42', name: 'Dra. Enid Pérez', specialty: 'Neumonólogo de Adultos', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1594824813571-24a69832266a?auto=format&fit=crop&q=80&w=400' },
  { id: '43', name: 'Psicóloga Nataly Juárez', specialty: 'Psicología', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400' },
  { id: '44', name: 'Psicóloga Brisneidy Segovia', specialty: 'Psicología', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400' },
  { id: '45', name: 'Lcda. Rudy Gonzales', specialty: 'Nutricionista', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400' },
  { id: '46', name: 'Dra. Fátima Capozzoli', specialty: 'Médico Ecografista', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=400' },
  { id: '47', name: 'Dra. Ana Menolascina', specialty: 'Médico Microbiólogo', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400' },
  { id: '48', name: 'Grupo Odontológico Torres (GOT)', specialty: 'Odontología Integral', category: 'Otras Especialidades', photo: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400' }
];

export const CLIENTS = [
  { name: 'Latitud Seguros', sector: 'Aseguradora' },
  { name: 'Seguros Miranda', sector: 'Aseguradora' },
  { name: 'Seguros Altamira', sector: 'Aseguradora' },
  { name: 'Seguros Venezuela', sector: 'Aseguradora' },
  { name: 'Mapfre', sector: 'Aseguradora Internacional' },
  { name: 'Banco de Venezuela (BDV)', sector: 'Banca & Finanzas' },
  { name: 'Banco Bicentenario del Pueblo', sector: 'Banca & Finanzas' },
  { name: 'Seguros La Previsora', sector: 'Aseguradora' },
  { name: 'Seguros Constitución', sector: 'Aseguradora' },
  { name: 'Cuidamed', sector: 'Servicios de Salud' },
  { name: 'Grupo Nueve Once', sector: 'Atención Médica' },
  { name: 'Redyplan', sector: 'Planes de Salud' },
  { name: 'Hispana de Seguros', sector: 'Aseguradora' },
  { name: 'Cemento Andino', sector: 'Industria' },
  { name: 'El Poder de la Limpieza', sector: 'Comercial' },
  { name: 'Makroval', sector: 'Distribución' },
  { name: 'Valera Import', sector: 'Comercio Exterior' },
  { name: 'Super Max Hipermercado', sector: 'Retail' },
  { name: 'Inversiones y Distribuciones Mi Ángel', sector: 'Comercial' },
  { name: 'U.E. Colegio Privado Cristóbal de Mendoza', sector: 'Educación' },
  { name: 'Fi-ven', sector: 'Servicios' },
  { name: 'Palpitar Trujillano', sector: 'Medios de Comunicación' },
  { name: 'Haz Médica', sector: 'Salud' },
  { name: 'Grupo Odontológico Torres (GOT)', sector: 'Salud Odontológica' },
  { name: 'Porcelanatos y Cerámicas Valera', sector: 'Construcción' },
  { name: 'Grupo Figue', sector: 'Corporativo' },
  { name: 'Clínica Dental Cyty Dent Plus', sector: 'Salud Dental' },
  { name: 'Won Motors S.A.', sector: 'Automotriz' }
];

export const ALLIES = [
  { name: 'Clínica UGA', city: 'Valera', tag: 'Centro Hospitalario' },
  { name: 'Centro Clínico de Cirugía JGH', city: 'Valera', tag: 'Cirugía Especializada' },
  { name: 'Centro Médico Las Acacias', city: 'Valera', tag: 'Atención Integral' },
  { name: 'Centro Médico Quirúrgico Carvajal C.A.', city: 'Carvajal', tag: 'Quirófano & Hospitalización' },
  { name: 'Laboratorio de Microbiología Rosa Mística', city: 'Valera', tag: 'Microbiología & Análisis' },
  { name: 'Rehabilser', city: 'Valera', tag: 'Fisioterapia & Rehabilitación' },
  { name: 'Laboratorio Clínico Ramar', city: 'Valera', tag: 'Laboratorio de Rutina' },
  { name: 'Óptica en Línea', city: 'Valera', tag: 'Salud Visual' },
  { name: 'Grupo Odontológico Torres (GOT)', city: 'Valera', tag: 'Odontología Especializada' },
  { name: 'Centro Ocular Corredor', city: 'Valera', tag: 'Oftalmología Avanzada' },
  { name: 'Anhelab C.A. Laboratorio Clínico', city: 'Valera', tag: 'Pruebas Especiales' }
];

export const CONTACT_INFO = {
  address: 'Av. Bolívar entre calles 18 y 19, C.C. Las Acacias, Local 10-A, Valera, estado Trujillo.',
  schedule: 'Lunes a viernes de 7:00 am a 5:00 pm',
  phone1: '0412-1716058',
  phone2: '0271-2310949',
  whatsappNumber: '584121716058',
  email: 'gpsavila2@gmail.com',
  instagram: '@gpsavila.ve',
  instagramUrl: 'https://instagram.com/gpsavila.ve',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.568128389658!2d-70.61394132415174!3d9.318464990754898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e63283289ba10ed%3A0xb35a75bd839df451!2sC.C.%20Las%20Acacias!5e0!3m2!1ses!2sve!4v1700000000000!5m2!1ses!2sve'
};

export const RECAUDOS = {
  titular: [
    'Copia de la cédula de identidad del titular de la póliza',
    'Copia del carnet laboral del titular de la póliza',
    'Constancia de trabajo vigente (no mayor a 3 meses de emitida)'
  ],
  beneficiarios: [
    'Copia de la cédula de identidad del titular de la póliza',
    'Copia del carnet laboral del titular de la póliza',
    'Constancia de trabajo vigente (no mayor a 3 meses de emitida)',
    'Copia de la partida de nacimiento (para hijos/menores) o cédula del beneficiario'
  ]
};

export const STATS = [
  { value: 15, suffix: '+', label: 'Años de Experiencia', desc: 'Líderes en gestión médica profesional' },
  { value: 24, suffix: '/7', label: 'Atención Continua', desc: 'Médicos disponibles en todo momento' },
  { value: 45, suffix: '+', label: 'Especialistas Médicos', desc: 'Cuerpo profesional capacitado' },
  { value: 28, suffix: '+', label: 'Empresas Aliadas', desc: 'Confían en nuestra cobertura' }
];
