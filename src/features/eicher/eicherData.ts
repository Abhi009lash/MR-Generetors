export interface EicherGensetModel {
  id: string;
  name: string;
  kvaRating: string;
  badge: string;
  tag: string;
  category: 'retail-commercial' | 'office-healthcare' | 'industrial-heavy';
  engineModel: string;
  subtitle: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface EicherPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'wind' | 'volume' | 'activity' | 'gauge' | 'wrench' | 'award';
}

export interface EicherComparisonRow {
  rating: string;
  engineModel: string;
  cylinders: string;
  displacement: string;
  aspiration: string;
  fuelRate: string;
  fuelTank: string;
  rpm: string;
  isFlagship?: boolean;
}

export interface EicherFaqItem {
  question: string;
  answer: string;
}

export const EICHER_CATALOG_MODELS: EicherGensetModel[] = [
  {
    id: 'eicher-30',
    name: 'Eicher 30 kVA Silent DG Set',
    kvaRating: '30 kVA',
    badge: '30 kVA (24 kW)',
    tag: 'COMMERCIAL SILENT',
    category: 'retail-commercial',
    engineModel: 'Eicher E324 Engine Block',
    subtitle: 'Compact and economical prime-rated DG set for small retail spaces, clinics, fuel pumps, and bank branches.',
    specs: [
      { label: 'Engine Model', value: 'Eicher E324 Engine Block' },
      { label: 'Cylinders & Disp', value: '3-Cyl Inline / 2.94 Litres' },
      { label: 'Fuel Rate (75%)', value: '5.8 Litres / Hour' },
      { label: 'Sound Level', value: '< 75 dBA @ 1 Metre CPCB IV+' },
    ],
  },
  {
    id: 'eicher-45',
    name: 'Eicher 45 kVA Silent DG Set',
    kvaRating: '45 kVA',
    badge: '45 kVA (36 kW)',
    tag: 'RETAIL & CLINIC',
    category: 'retail-commercial',
    engineModel: 'Eicher E334 TCI Series',
    subtitle: 'Medium-duty prime power with smooth 3-cylinder block, engineered for continuous operation in restaurants, diagnostic labs, and retail outlets.',
    specs: [
      { label: 'Engine Model', value: 'Eicher E334 TCI Series' },
      { label: 'Cylinders & Disp', value: '3-Cyl Inline / 2.94 Litres' },
      { label: 'Fuel Rate (75%)', value: '8.4 Litres / Hour' },
      { label: 'Base Fuel Tank', value: '120 Litres Integral' },
    ],
  },
  {
    id: 'eicher-62-5',
    name: 'Eicher 62.5 kVA Turbocharged DG',
    kvaRating: '62.5 kVA',
    badge: '62.5 kVA (50 kW)',
    tag: 'HEALTHCARE READY',
    category: 'office-healthcare',
    engineModel: 'Eicher E483 TCI Heavy-Duty',
    subtitle: 'Turbocharged aftercooled 4-cylinder engine ideal for nursing homes, private hospitals, commercial showrooms, and medium-scale educational institutions.',
    specs: [
      { label: 'Engine Model', value: 'Eicher E483 TCI Heavy-Duty' },
      { label: 'Cylinders & Disp', value: '4-Cyl Inline / 3.29 Litres' },
      { label: 'Fuel Rate (75%)', value: '11.6 Litres / Hour' },
      { label: 'Controller', value: 'DeepSea / SmartGen AMF' },
    ],
  },
  {
    id: 'eicher-82-5',
    name: 'Eicher 82.5 kVA Heavy-Duty DG',
    kvaRating: '82.5 kVA',
    badge: '82.5 kVA (66 kW)',
    tag: 'COMMERCIAL WORKHORSE',
    category: 'office-healthcare',
    engineModel: 'Eicher E483 TCI-HD Industrial',
    subtitle: 'High-torque block designed for high ambient tropical conditions, commercial towers, warehousing, and cold chain refrigeration hubs.',
    specs: [
      { label: 'Engine Model', value: 'Eicher E483 TCI-HD Industrial' },
      { label: 'Cylinders & Disp', value: '4-Cyl Inline / 3.29 Litres' },
      { label: 'Fuel Rate (75%)', value: '15.2 Litres / Hour' },
      { label: 'Cooling System', value: 'Heavy Duty Radiator 50°C Ambient' },
    ],
  },
  {
    id: 'eicher-100',
    name: 'Eicher 100 kVA Power Genset',
    kvaRating: '100 kVA',
    badge: '100 kVA (80 kW)',
    tag: 'INDUSTRIAL PRIME',
    category: 'industrial-heavy',
    engineModel: 'Eicher E494 TCI High Power',
    subtitle: 'Robust prime-load power solution for manufacturing plants, heavy printing presses, food processing units, and multi-storey commercial buildings.',
    specs: [
      { label: 'Engine Model', value: 'Eicher E494 TCI High Power' },
      { label: 'Cylinders & Disp', value: '4-Cyl Inline / 3.77 Litres' },
      { label: 'Fuel Rate (75%)', value: '18.5 Litres / Hour' },
      { label: 'Controller', value: 'AMF Auto Transfer Ready' },
    ],
  },
  {
    id: 'eicher-125',
    name: 'Eicher 125 kVA Flagship Heavy-Duty',
    kvaRating: '125 kVA',
    badge: '125 kVA (100 kW)',
    tag: 'FLAGSHIP INDUSTRIAL',
    category: 'industrial-heavy',
    engineModel: 'Eicher E494 Turbocharged Intercooled',
    subtitle: 'Flagship high-performance generator with high overload reserve capacity for continuous heavy manufacturing, hospitals, and construction infrastructure.',
    specs: [
      { label: 'Engine Model', value: 'Eicher E494 Turbocharged Intercooled' },
      { label: 'Cylinders & Disp', value: '4-Cyl Inline / 3.77 Litres' },
      { label: 'Fuel Rate (75%)', value: '22.8 Litres / Hour' },
      { label: 'Fuel Tank Option', value: '250 Litre Base Tank Mounted' },
    ],
  },
];

export const EICHER_PILLARS: EicherPillar[] = [
  {
    id: 'supercharging',
    title: 'Advanced Supercharging & Air',
    subtitle: 'ENGINE THERMAL STABILITY',
    description:
      'High volumetric efficiency through tuned intake manifolds, dynamic intercooling, and precision turbochargers designed for high ambient temperatures up to 50°C and elevation without derating.',
    iconName: 'wind',
  },
  {
    id: 'nvh',
    title: 'Low Vibration & Noise Reduction (NVH)',
    subtitle: '< 75 dBA CANOPY SILENCING',
    description:
      'Dynamically balanced crankshafts, high-rigidity deep-skirt crankcase, and custom rubber anti-vibration engine mount pads suppress resonance, protecting internal alternator stator windings and sensitive instrumentation.',
    iconName: 'volume',
  },
  {
    id: 'transient',
    title: 'Superior Transient Load Pickup',
    subtitle: 'INSTANT RECOVERY IN < 10 SECONDS',
    description:
      'Rapid governor response and optimized high-displacement cylinder geometry ensure instantaneous single-step load pick-up capability, eliminating voltage dips when large inductive motors or air-conditioning systems kick in.',
    iconName: 'activity',
  },
  {
    id: 'fuel',
    title: 'Best-in-Class Fuel Economy',
    subtitle: 'UP TO 18% FUEL SAVINGS',
    description:
      'Proven mechanical and electronic inline fuel injection pumps with calibrated micro-spray injectors deliver superior thermal efficiency, reducing fuel expenses by up to 18% compared to standard competitors in the 30-125 kVA range.',
    iconName: 'gauge',
  },
  {
    id: 'spares',
    title: '100% Raw Spare Parts Availability',
    subtitle: '10,000+ READY STOCK ITEMS',
    description:
      'Extensive Indian automotive and industrial presence means all consumable parts, filters, fuel pumps, and structural gaskets are stocked at competitive automotive pricing, preventing prolonged maintenance delays.',
    iconName: 'wrench',
  },
  {
    id: 'durability',
    title: 'Unmatched Durability & Longevity',
    subtitle: '15,000+ HOURS B-10 LIFE',
    description:
      'Heavy-duty cast iron alloy cylinder heads, replaceable wet-type cylinder liners, and high-strength forged steel crankshafts ensure a verified 15,000+ hour operational lifespan prior to major overhauls.',
    iconName: 'award',
  },
];

export const EICHER_COMPARISON_MATRIX: EicherComparisonRow[] = [
  {
    rating: '30 kVA / 24 kW',
    engineModel: 'Eicher E324 Block',
    cylinders: '3 In-Line',
    displacement: '2.94 L',
    aspiration: 'Naturally Aspirated',
    fuelRate: '5.8 L/hr',
    fuelTank: '100 Litres',
    rpm: '1500',
  },
  {
    rating: '45 kVA / 36 kW',
    engineModel: 'Eicher E334 TCI',
    cylinders: '3 In-Line',
    displacement: '2.94 L',
    aspiration: 'Turbocharged Intercooled',
    fuelRate: '8.4 L/hr',
    fuelTank: '120 Litres',
    rpm: '1500',
  },
  {
    rating: '62.5 kVA / 50 kW',
    engineModel: 'Eicher E483 TCI Series',
    cylinders: '4 In-Line',
    displacement: '3.29 L',
    aspiration: 'Turbocharged Aftercooled',
    fuelRate: '11.6 L/hr',
    fuelTank: '150 Litres',
    rpm: '1500',
  },
  {
    rating: '82.5 kVA / 66 kW',
    engineModel: 'Eicher E483 TCI-HD',
    cylinders: '4 In-Line',
    displacement: '3.29 L',
    aspiration: 'Turbocharged Aftercooled',
    fuelRate: '15.2 L/hr',
    fuelTank: '180 Litres',
    rpm: '1500',
  },
  {
    rating: '100 kVA / 80 kW',
    engineModel: 'Eicher E494 TCI High Power',
    cylinders: '4 In-Line',
    displacement: '3.77 L',
    aspiration: 'Turbocharged Intercooled',
    fuelRate: '18.5 L/hr',
    fuelTank: '220 Litres',
    rpm: '1500',
    isFlagship: true,
  },
  {
    rating: '125 kVA / 100 kW',
    engineModel: 'Eicher E494 Heavy Duty',
    cylinders: '4 In-Line',
    displacement: '3.77 L',
    aspiration: 'Turbocharged Intercooled',
    fuelRate: '22.8 L/hr',
    fuelTank: '250 Litres',
    rpm: '1500',
    isFlagship: true,
  },
];

export const EICHER_FAQS: EicherFaqItem[] = [
  {
    question: 'What are the key advantages of choosing Eicher over other diesel generators in the 30 kVA to 125 kVA range?',
    answer:
      'Eicher diesel generators, manufactured under the Volvo Eicher Commercial Vehicles (VECV) joint venture, offer up to 18% lower diesel fuel consumption due to optimized combustion chamber geometry, longer 500-hour lube service intervals, and significantly cheaper, widely available automotive-volume spare parts across India.',
  },
  {
    question: 'How does the VECV partnership between Volvo Group and Eicher benefit the design and performance of Eicher Gensets?',
    answer:
      'The Volvo Group partnership brings advanced European engine design principles, high-strength metallurgical metallurgy, strict NVH (Noise, Vibration, Harshness) damping, and global quality control standards, resulting in heavy block load acceptance and over 15,000+ hour operating life prior to major engine overhauls.',
  },
  {
    question: 'Are these Eicher Gensets fully compliant with latest CPCB IV+ emission standards?',
    answer:
      'Yes. All new Eicher generators supplied by M.R Generators comply strictly with the Ministry of Environment, Forest & Climate Change (MoEFCC) CPCB IV+ regulations, featuring specialized diesel oxidation catalysts (DOC), soundproof acoustic enclosures under 75 dBA at 1 metre, and tamper-evident OEM certification labels.',
  },
  {
    question: 'What is the typical genset commissioning timeline in Hyderabad and surrounding districts?',
    answer:
      'We maintain standard 30 kVA, 62.5 kVA, 82.5 kVA, and 125 kVA silent canopy units in ready stock at our Sanath Nagar engineering depot. Delivery and civil foundation placement are typically executed within 24 to 48 hours across Hyderabad and Secunderabad.',
  },
];
