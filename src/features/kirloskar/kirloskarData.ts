export interface KirloskarGensetModel {
  id: string;
  name: string;
  kvaRating: string;
  badge: string;
  tag: string;
  category: 'light-commercial' | 'commercial-industrial' | 'mega-power';
  subtitle: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface KirloskarBenchmark {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'wind' | 'globe' | 'gauge' | 'shield' | 'volume' | 'clock';
}

export interface KirloskarComparisonRow {
  rating: string;
  engineModel: string;
  cylinderConfig: string;
  aspiration: string;
  fuelRate: string;
  baseTank: string;
  noiseLevel: string;
  isFlagship?: boolean;
}

export interface KirloskarFaqItem {
  question: string;
  answer: string;
}

export const KIRLOSKAR_CATALOG_MODELS: KirloskarGensetModel[] = [
  {
    id: 'koel-15',
    name: 'Kirloskar 15 kVA Silent DG Set',
    kvaRating: '15 kVA',
    badge: '15 kVA (12 kW)',
    tag: 'AIR & WATER OPTIONS',
    category: 'light-commercial',
    subtitle: 'Rugged prime power for bank branches, telecom cell towers, diagnostic centers, and petrol pumps.',
    specs: [
      { label: 'Engine Family', value: 'KOEL EA16 / HA294 Series' },
      { label: 'Cooling Type', value: 'Air-Cooled or Liquid Option' },
      { label: 'Fuel Rate (75%)', value: '3.1 Litres / Hour' },
      { label: 'Digital Controller', value: 'KG545 Microprocessor Digital' },
      { label: 'Acoustic Sound', value: '< 75 dBA @ 1m CPCB IV+' },
    ],
  },
  {
    id: 'koel-45',
    name: 'Kirloskar 45 kVA KOEL Green DG',
    kvaRating: '45 kVA',
    badge: '45 kVA (36 kW)',
    tag: 'COMMERCIAL PRIME',
    category: 'light-commercial',
    subtitle: 'Water-cooled, heavy flywheel power solution built for restaurants, showrooms, labs, and commercial towers.',
    specs: [
      { label: 'Engine Family', value: 'KOEL 3R1040 Series' },
      { label: 'Cooling Type', value: 'Water Cooled Heavy Radiator' },
      { label: 'Fuel Rate (75%)', value: '8.2 Litres / Hour' },
      { label: 'Digital Controller', value: 'DeepSea / KG AMF Ready' },
      { label: 'Acoustic Sound', value: '< 75 dBA @ 1m CPCB IV+' },
    ],
  },
  {
    id: 'koel-82-5',
    name: 'Kirloskar 82.5 kVA Turbocharged DG',
    kvaRating: '82.5 kVA',
    badge: '82.5 kVA (66 kW)',
    tag: 'HEALTHCARE READY',
    category: 'commercial-industrial',
    subtitle: 'High transient response workhorse designed for hospitals, hotels, educational campuses, and mid-sized factories.',
    specs: [
      { label: 'Engine Family', value: 'KOEL 4R1040T Turbocharged' },
      { label: 'Cooling Type', value: 'Water Cooled 50°C Radiator' },
      { label: 'Fuel Rate (75%)', value: '14.8 Litres / Hour' },
      { label: 'Digital Controller', value: 'KG745 Auto-Sync Ready' },
      { label: 'Acoustic Sound', value: '< 75 dBA @ 1m CPCB IV+' },
    ],
  },
  {
    id: 'koel-125',
    name: 'Kirloskar 125 kVA Industrial Power Genset',
    kvaRating: '125 kVA',
    badge: '125 kVA (100 kW)',
    tag: 'HEAVY INDUSTRIAL',
    category: 'commercial-industrial',
    subtitle: 'Robust 6-cylinder powerplant engineered for continuous prime duty in manufacturing plants and multi-story IT hubs.',
    specs: [
      { label: 'Engine Family', value: 'KOEL 6R1080T Industrial' },
      { label: 'Cooling Type', value: 'Water Cooled Tropicalized' },
      { label: 'Fuel Rate (75%)', value: '22.4 Litres / Hour' },
      { label: 'Digital Controller', value: 'Deep Sea / Kirloskar KG545' },
      { label: 'Acoustic Sound', value: '< 75 dBA @ 1m CPCB IV+' },
    ],
  },
  {
    id: 'koel-250',
    name: 'Kirloskar 250 kVA Flagship Heavy-Duty',
    kvaRating: '250 kVA',
    badge: '250 kVA (200 kW)',
    tag: 'FLAGSHIP PRIME',
    category: 'commercial-industrial',
    subtitle: 'High torque backup with electronic governor and single-step 100% block load pickup for critical manufacturing operations.',
    specs: [
      { label: 'Engine Family', value: 'KOEL SL9088TA Series' },
      { label: 'Cooling Type', value: 'AFT Turbocharged Aftercooled' },
      { label: 'Fuel Rate (75%)', value: '44.5 Litres / Hour' },
      { label: 'Digital Controller', value: 'KG945 Telematics & AMF' },
      { label: 'Acoustic Sound', value: '< 75 dBA @ 1m CPCB IV+' },
    ],
  },
  {
    id: 'koel-500-5200',
    name: 'Kirloskar 500 kVA - 5200 kVA Mega-Power Series',
    kvaRating: '500 - 5200 kVA',
    badge: '500 - 5200 kVA',
    tag: 'MULTI-MEGAWATT',
    category: 'mega-power',
    subtitle: 'Multi-megawatt power plant installations featuring DV series V-engines, synchronized parallel buses, and automated SCADA control.',
    specs: [
      { label: 'Engine Family', value: 'KOEL DV Series V-Engines' },
      { label: 'Cooling Type', value: 'Separate Circuit Aftercooling' },
      { label: 'Fuel Rate (75%)', value: '89.0 Litres/hr (500 kVA Base)' },
      { label: 'Digital Controller', value: 'Master Bus Synchronizing PLC' },
      { label: 'Canopy', value: '< 75 dBA @ 1m / ISO Container' },
    ],
  },
];

export const KIRLOSKAR_BENCHMARKS: KirloskarBenchmark[] = [
  {
    id: 'air-water',
    title: 'Choice of Air & Water Cooled',
    subtitle: 'VERSATILE COOLING PLATFORMS',
    description:
      'India’s only manufacturer offering both air-cooled for rugged quarry, stone crushing, and remote construction sites, and water-cooled for high-load urban commercial towers.',
    iconName: 'wind',
  },
  {
    id: 'install-base',
    title: 'Over 1 Million Active Units Worldwide',
    subtitle: 'PROVEN GLOBAL RELIABILITY',
    description:
      'An installed base of over 1,000,000 generators running across industrial processing plants, commercial malls, colleges, defense establishments, and telecom networks globally.',
    iconName: 'globe',
  },
  {
    id: 'inspection',
    title: "Lloyd's/Dynamometer Factory Inspection",
    subtitle: '100% SINGLE-STEP LOAD PICKUP',
    description:
      '100% component-level validation for alternators, radiators, and diesel engines ensures zero-lag transient load pick-up when large chiller compressors or lift motors kick in.',
    iconName: 'gauge',
  },
  {
    id: 'cpcb',
    title: 'CPCB IV+ Emission Compliant',
    subtitle: 'LATEST STATUTORY ENVIRONMENT CERTIFICATION',
    description:
      'Next-generation common-rail fuel injection combined with DOC/DPF emission treatment guarantees minimal soot, high fuel burn efficiency, and full compliance with Central Pollution Control Board IV+ standards.',
    iconName: 'shield',
  },
  {
    id: 'soundproofing',
    title: 'Best-in-Class Soundproofing Enclosure',
    subtitle: '< 75 dBA @ 1 METRE CANOPY',
    description:
      'Galvanized pre-treated sheet steel acoustic enclosure with a 9-tank phosphate pre-treatment, electro-powder coating, and high-density rockwool insulation engineered to resist extreme tropical weathering.',
    iconName: 'volume',
  },
  {
    id: 'sla',
    title: '2-Hour Emergency Service SLA',
    subtitle: 'RAPID HYDERABAD DISPATCH SQUAD',
    description:
      'Direct regional support with dedicated field engineering squads stationed in Sanath Nagar, Balanagar, Cherlapally, Katedan, and Patancheru delivering guaranteed sub-2-hour on-site response.',
    iconName: 'clock',
  },
];

export const KIRLOSKAR_COMPARISON_MATRIX: KirloskarComparisonRow[] = [
  {
    rating: '15 kVA / 12 kW',
    engineModel: 'KOEL EA16 / HA294',
    cylinderConfig: '1/2 In-Line',
    aspiration: 'Naturally Aspirated / Air-Cooled',
    fuelRate: '3.1 L/hr',
    baseTank: '65 Litres',
    noiseLevel: '< 75 dBA @ 1m',
  },
  {
    rating: '45 kVA / 36 kW',
    engineModel: 'KOEL 3R1040 Series',
    cylinderConfig: '3 In-Line',
    aspiration: 'Naturally Aspirated / Water-Cooled',
    fuelRate: '8.2 L/hr',
    baseTank: '120 Litres',
    noiseLevel: '< 75 dBA @ 1m',
  },
  {
    rating: '82.5 kVA / 66 kW',
    engineModel: 'KOEL 4R1040T',
    cylinderConfig: '4 In-Line',
    aspiration: 'Turbocharged Water-Cooled',
    fuelRate: '14.8 L/hr',
    baseTank: '180 Litres',
    noiseLevel: '< 75 dBA @ 1m',
  },
  {
    rating: '125 kVA / 100 kW',
    engineModel: 'KOEL 6R1080T',
    cylinderConfig: '6 In-Line',
    aspiration: 'Turbocharged Water-Cooled',
    fuelRate: '22.4 L/hr',
    baseTank: '250 Litres',
    noiseLevel: '< 75 dBA @ 1m',
  },
  {
    rating: '250 kVA / 200 kW',
    engineModel: 'KOEL SL9088TA',
    cylinderConfig: '6 In-Line',
    aspiration: 'Turbocharged Aftercooled',
    fuelRate: '44.5 L/hr',
    baseTank: '450 Litres',
    noiseLevel: '< 75 dBA @ 1m',
    isFlagship: true,
  },
  {
    rating: '500 kVA / 400 kW',
    engineModel: 'KOEL DV8 Series',
    cylinderConfig: '8 Vee Type',
    aspiration: 'Turbocharged Aftercooled',
    fuelRate: '89.0 L/hr',
    baseTank: '750 Litres',
    noiseLevel: '< 75 dBA @ 1m',
    isFlagship: true,
  },
  {
    rating: '1010 - 5200 kVA',
    engineModel: 'KOEL DV12 / Multi-DG',
    cylinderConfig: '12/16 Vee Type',
    aspiration: 'Turbocharged Quad Intercooled',
    fuelRate: '180+ L/hr',
    baseTank: 'Bulk Day Tank',
    noiseLevel: '< 75 dBA @ 1m',
    isFlagship: true,
  },
];

export const KIRLOSKAR_FAQS: KirloskarFaqItem[] = [
  {
    question: 'Should I choose an air-cooled or water-cooled Kirloskar Genset?',
    answer:
      'Air-cooled Kirloskar gensets (HA/EA series) require no radiator coolant or water supply, making them virtually maintenance-free and ideal for harsh, dusty outdoor settings such as stone crushers, road construction, and mobile trailers. Water-cooled KOEL Green units (R1040 / 6R / SL series) are recommended for enclosed commercial basements, hospital setups, and factories where precise thermal control and ultra-quiet acoustics are paramount.',
  },
  {
    question: 'Are all supplied sets compliant with latest CPCB IV+ emission standards?',
    answer:
      'Yes. Every Kirloskar generator supplied and commissioned by M.R Generators is certified by ARAI under the latest CPCB IV+ emission regime. They feature electronic Common Rail Direct Injection (CRDi), advanced Diesel Oxidation Catalysts (DOC), and soundproof canopy enclosures that guarantee sound emissions below 75 dBA at 1 meter distance.',
  },
  {
    question: 'What is the recommended service interval for KOEL Green engines?',
    answer:
      'Kirloskar KOEL Green engines feature extended 500-hour lube oil and filter service intervals when operated with genuine Kirloskar K-Oil Premium 15W40 and OEM filters. Our factory-backed AMC packages cover routine 500-hour B-checks, emergency breakdown dispatch, and statutory health certification.',
  },
  {
    question: 'How quickly can emergency service take place across Hyderabad?',
    answer:
      'M.R Generators operates round-the-clock emergency mobile engineering squads dispatched from our central depot at Sanath Nagar. We guarantee an on-site technician response within 2 hours across all industrial hubs including Balanagar, Cherlapally, Katedan, Patancheru, and Medchal.',
  },
];
