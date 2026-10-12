import {
  sparesFiltrationImg,
  sparesCoolingImg,
  sparesFuelInjectImg,
  sparesElectricalAvrImg,
  sparesAmfPanelsImg,
  sparesStartingSysImg,
  sparesOverhaulKitImg,
  sparesCanopyExhaustImg,
} from '../../assets/images';

export interface SpareComponentCategory {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  bulletPoints: string[];
  buttonLabel: string;
}

export interface SpareBrand {
  name: string;
  category: string;
  badge: string;
}

export interface SpareFaqItem {
  question: string;
  answer: string;
}

export const SPARES_CATEGORIES: SpareComponentCategory[] = [
  {
    id: 'filtration',
    title: 'Filtration & Lube Systems',
    image: sparesFiltrationImg,
    subtitle: 'High-efficiency particulate filtration ensuring longer engine life and oil longevity.',
    bulletPoints: [
      'Heavy-duty OEM lube & fuel filters',
      'Donaldson/Fleetguard bypass filters',
      'Spin-on spin-off oil separators',
      'Fuel-water separator elements',
    ],
    buttonLabel: 'FIND FILTRATION PARTS →',
  },
  {
    id: 'cooling',
    title: 'Cooling & Radiator Systems',
    image: sparesCoolingImg,
    subtitle: 'Engineered heat rejection for heavy-power applications under severe thermal loads.',
    bulletPoints: [
      'Heavy-duty copper/brass radiators',
      'Centrifugal coolant circulation pumps',
      'Anti-freeze/glycol chemical premixes',
      'Expansion tanks and hose sets',
    ],
    buttonLabel: 'BROWSE COOLING PARTS →',
  },
  {
    id: 'fuel-injection',
    title: 'Fuel Injection & Governing',
    image: sparesFuelInjectImg,
    subtitle: 'Calibrated fuel micro-injection ensuring precise 50 Hz frequency output and fuel efficiency.',
    bulletPoints: [
      'Fuel Injection Pumps (FIP) Bosch/Mico',
      'Mechanical & electronic governor units',
      'Fuel injectors and micro-fuel nozzles',
      'Solenoid valves and sensor feedback',
    ],
    buttonLabel: 'EXPLORE FUEL PARTS →',
  },
  {
    id: 'electrical-avr',
    title: 'Electrical, AVR & Alternator',
    image: sparesElectricalAvrImg,
    subtitle: 'Voltage stabilization circuits and heavy-duty excitation diodes for steady grid power.',
    bulletPoints: [
      'Digital & analog AVRs (SX460, AS440)',
      'Rotating rectifier & surge suppressors',
      'Class H insulation alternator windings',
      'Solenoids and alternator exciter coils',
    ],
    buttonLabel: 'BROWSE ELECTRICAL →',
  },
  {
    id: 'amf-controllers',
    title: 'AMF Panels & Controllers',
    image: sparesAmfPanelsImg,
    subtitle: 'Next-generation load-synchronized controllers and automated fail-over management.',
    bulletPoints: [
      'Deep Sea/ComAp digital controllers',
      'Automatic transfer switches (ATS)',
      'Battery charger float trickle units',
      'Phase and sync sensing relays',
    ],
    buttonLabel: 'FIND CONTROL PARTS →',
  },
  {
    id: 'starting-battery',
    title: 'Starting & Battery Systems',
    image: sparesStartingSysImg,
    subtitle: 'Reliable starting hardware delivering required cranking amps even in winter cold-starts.',
    bulletPoints: [
      '12V/24V heavy-duty starter motors',
      'Engine charging alternators',
      'High-cranking maintenance-free batteries',
      'Solenoid switches and battery leads',
    ],
    buttonLabel: 'EXPLORE STARTING →',
  },
  {
    id: 'overhaul-kits',
    title: 'Engine Overhaul Kits',
    image: sparesOverhaulKitImg,
    subtitle: 'Factory-tolerance component rebuild kits for overhaul jobs.',
    bulletPoints: [
      'Piston assemblies and cylinder liners',
      'Main and connecting rod bearings',
      'Complete engine overhaul gasket kits',
      'Turbocharger rebuild assemblies (Holset)',
    ],
    buttonLabel: 'BROWSE OVERHAUL →',
  },
  {
    id: 'canopy-exhaust',
    title: 'Canopy & Exhaust Spares',
    image: sparesCanopyExhaustImg,
    subtitle: 'CPCB-IV+ conform acoustic hardware for high heat rejection and vibration isolation.',
    bulletPoints: [
      'Residential and critical silencers',
      'Flexible stainless steel bellow joints',
      'Heavy-duty AVMs (anti-vibration mounts)',
      'Soundproof canopy insulation foam',
    ],
    buttonLabel: 'BROWSE HARDWARE →',
  },
];

export const SUPPORTED_OEM_BRANDS: SpareBrand[] = [
  { name: 'TATA MOTORS', category: 'Diesel & Gas Gensets', badge: 'OEM Authorised' },
  { name: 'ASHOK LEYLAND', category: 'LEYPOWER Prime & Standby', badge: 'Factory Partner' },
  { name: 'KIRLOSKAR (KOEL)', category: 'Green & Chhota Chilli', badge: 'Certified Stock' },
  { name: 'GREAVES POWER', category: 'CPCB-IV+ Industrial', badge: 'Primary Dealership' },
  { name: 'CATERPILLAR (CAT)', category: 'Heavy Industrial Power', badge: 'Genuine Sourced' },
  { name: 'CUMMINS ENGINES', category: 'B, C, N & K Series Engines', badge: 'Fleetguard Partner' },
  { name: 'PERKINS ENGINES', category: '400 to 4000 Series', badge: 'UK OEM Quality' },
  { name: 'DEUTZ ENGINES', category: 'Air-Cooled & Liquid-Cooled', badge: 'Industrial Spec' },
  { name: 'VOLVO / SCANIA', category: 'Heavy-Duty Commercial', badge: 'Genuine Imports' },
  { name: 'STAMFORD ALTERNATORS', category: 'AVRs & Rectifiers', badge: 'OEM Excitation' },
];

export const SPARES_FAQS: SpareFaqItem[] = [
  {
    question: 'How do you guarantee spare part authenticity?',
    answer:
      'Every single component supplied by M.R Generators comes directly through factory authorized channel distributions (Greaves, Cummins, Fleetguard, Stamford, Ashok Leyland). Parts are delivered with verifiable OEM part numbers, security tamper-evident seals, and manufacturer batch warranty certificates.',
  },
  {
    question: 'How rapidly can you deliver to industrial zones in Hyderabad?',
    answer:
      'We operate a dedicated 24/7 delivery van fleet covering all major industrial clusters including HITEC City, Jeedimetla, Patancheru, Cherlapally, Katedan, Nacharam, Gachibowli, and Shamshabad within 2 to 4 hours of emergency dispatch request.',
  },
  {
    question: 'Do you offer reconditioned or exchange components?',
    answer:
      'Yes. For critical high-value assemblies like Turbochargers, Fuel Injection Pumps (FIP), and Alternator AVR control panels, we offer certified reconditioned exchange units tested under full resistive load banks, saving up to 40% on replacement downtime.',
  },
  {
    question: 'Can your engineering team install the part on-site?',
    answer:
      'Absolutely. Our factory-trained field service technicians can accompany the dispatch van to perform on-site fitment, calibration, governor tuning, and load testing ensuring first-time-right installation under official warranty.',
  },
];
