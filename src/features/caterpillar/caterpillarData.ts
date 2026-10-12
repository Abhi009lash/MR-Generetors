export interface CaterpillarGensetModel {
  id: string;
  name: string;
  kvaRating: string;
  badge: string;
  tag: string;
  category: 'low-kva' | 'mid-kva' | 'high-kva';
  engineModel: string;
  subtitle: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface CaterpillarBenchmark {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'cpu' | 'thermometer' | 'shield' | 'activity' | 'zap' | 'wrench';
}

export interface CaterpillarComparisonRow {
  rating: string;
  engineModel: string;
  cylinderDisp: string;
  aspiration: string;
  fuelRate: string;
  controlPanel: string;
  noiseLevel: string;
  isFlagship?: boolean;
}

export interface CaterpillarFaqItem {
  question: string;
  answer: string;
}

export const CATERPILLAR_CATALOG_MODELS: CaterpillarGensetModel[] = [
  {
    id: 'cat-de33',
    name: 'Cat® DE33GC Genset',
    kvaRating: '33 kVA',
    badge: '33 kVA (26.4 kW)',
    tag: 'COMMERCIAL PRIME',
    category: 'low-kva',
    engineModel: 'Cat® C3.3 Block',
    subtitle: 'Engineered for retail showrooms, telecommunications nodes, clinics, and regional bank branches requiring zero unplanned downtime.',
    specs: [
      { label: 'Engine Model', value: 'Cat® C3.3 Naturally Aspirated' },
      { label: 'Cylinders & Disp', value: '3-Cyl Inline / 3.3 Litres' },
      { label: 'Fuel Cons. (75%)', value: '5.7 Litres / Hour' },
      { label: 'Control System', value: 'Cat EMCP 4.1 Digital Controller' },
    ],
  },
  {
    id: 'cat-de65',
    name: 'Cat® DE65E0 Genset',
    kvaRating: '65 kVA',
    badge: '65 kVA (52 kW)',
    tag: 'HEALTHCARE READY',
    category: 'low-kva',
    engineModel: 'Cat® C3.3T Series',
    subtitle: 'Equipped with heavy turbocharging for critical refrigeration, cold chains, diagnostics, and continuous pharmaceutical warehouses.',
    specs: [
      { label: 'Engine Model', value: 'Cat® C3.3T Turbocharged' },
      { label: 'Cylinders & Disp', value: '3-Cyl Inline / 3.3 Litres' },
      { label: 'Fuel Cons. (75%)', value: '11.8 Litres / Hour' },
      { label: 'Control System', value: 'Cat EMCP 4.2B with Telematics' },
    ],
  },
  {
    id: 'cat-de110',
    name: 'Cat® DE110E2 Genset',
    kvaRating: '110 kVA',
    badge: '110 kVA (88 kW)',
    tag: 'COMMERCIAL TOWER',
    category: 'mid-kva',
    engineModel: 'Cat® C4.4 Powertrain',
    subtitle: 'Turbocharged aftercooled 4-cylinder engine with superior block load pickup for multi-floor commercial buildings and surgical centers.',
    specs: [
      { label: 'Engine Model', value: 'Cat® C4.4 Turbo Aftercooled' },
      { label: 'Cylinders & Disp', value: '4-Cyl Inline / 4.4 Litres' },
      { label: 'Fuel Cons. (75%)', value: '18.9 Litres / Hour' },
      { label: 'Control System', value: 'EMCP 4.2B + Modbus Integration' },
    ],
  },
  {
    id: 'cat-de250',
    name: 'Cat® DE250E0 Genset',
    kvaRating: '250 kVA',
    badge: '250 kVA (200 kW)',
    tag: 'INDUSTRIAL PRIME',
    category: 'mid-kva',
    engineModel: 'Cat® C7.1 Industrial',
    subtitle: 'Proven inline 6-cylinder powerplant engineered for continuous industrial manufacturing, high-torque plastic injection moulding, and stone quarries.',
    specs: [
      { label: 'Engine Model', value: 'Cat® C7.1 Turbo Aftercooled' },
      { label: 'Cylinders & Disp', value: '6-Cyl Inline / 7.01 Litres' },
      { label: 'Fuel Cons. (75%)', value: '42.2 Litres / Hour' },
      { label: 'Control System', value: 'Cat EMCP 4.2B Remote Telemetry' },
    ],
  },
  {
    id: 'cat-de500',
    name: 'Cat® DE500E0 Genset',
    kvaRating: '500 kVA',
    badge: '500 kVA (400 kW)',
    tag: 'CRITICAL DATACENTER',
    category: 'high-kva',
    engineModel: 'Cat® C13 ACERT™',
    subtitle: 'Heavy-duty power plant for multi-megawatt facilities, Tier-III data centers, multi-specialty hospitals, and high-speed railway infrastructure.',
    specs: [
      { label: 'Engine Model', value: 'Cat® C13 ACERT™ Technology' },
      { label: 'Cylinders & Disp', value: '6-Cyl Inline / 12.5 Litres' },
      { label: 'Fuel Cons. (75%)', value: '82.8 Litres / Hour' },
      { label: 'Control System', value: 'EMCP 4.4 Auto Synchronizing' },
    ],
  },
  {
    id: 'cat-de1000',
    name: 'Cat® DE1000GC Genset',
    kvaRating: '1000 kVA',
    badge: '1000 kVA (800 kW)',
    tag: 'FLAGSHIP MEGAWATT',
    category: 'high-kva',
    engineModel: 'Cat® C32 / C27 Series',
    subtitle: 'Flagship high-displacement generator delivering 100% single-step transient load response for heavy substations and refinery plants.',
    specs: [
      { label: 'Engine Model', value: 'Cat® C32 V-12 ACERT™ Block' },
      { label: 'Cylinders & Disp', value: '12-Cyl Vee / 32.1 Litres' },
      { label: 'Fuel Cons. (75%)', value: '164.2 Litres / Hour' },
      { label: 'Enclosure', value: 'Custom Acoustic ISO Container' },
    ],
  },
];

export const CATERPILLAR_BENCHMARKS: CaterpillarBenchmark[] = [
  {
    id: 'acert',
    title: 'Cat® ACERT™ Combustion Technology',
    subtitle: 'OPTIMIZED FUEL INJECTION & AIRFLOW',
    description:
      'Advanced electronic unit injection (EUI) and precision combustion chamber shaping deliver maximum horsepower per displacement litre while meeting strict emissions standards without sacrificing transient response.',
    iconName: 'cpu',
  },
  {
    id: 'ambient',
    title: 'Extreme Ambient Heat Mitigation (50°C)',
    subtitle: 'TROPICALIZED RADIATOR PACKAGES',
    description:
      'High-capacity oversized cooling cores and heavy pusher fans engineered to operate at full continuous output up to 50°C ambient temperatures in Hyderabad without power deration or overheating.',
    iconName: 'thermometer',
  },
  {
    id: 'soundproofing',
    title: 'Heavy-Gauge Soundproofing & BFO',
    subtitle: 'GALVANIZED STEEL ROBUST CANOPY',
    description:
      'Acoustic enclosures constructed with automotive-grade galvanized sheet steel, multi-stage powder coat baking, and dense fireproof thermal insulation achieving < 75 dBA acoustic compliance at 1 metre.',
    iconName: 'shield',
  },
  {
    id: 'telematics',
    title: 'Digital EMCP 4.2B / SCADA Telematics',
    subtitle: 'REMOTE FLEET DIAGNOSTICS & BMS',
    description:
      'Microprocessor controller with real-time digital monitoring, programmable protective relaying, Modbus RS485/Ethernet interfaces, and automatic generator synchronization for parallel bus setups.',
    iconName: 'activity',
  },
  {
    id: 'alternator',
    title: 'Kato/Cat Alternator with PMG Excitation',
    subtitle: 'CLASS H VACUUM PRESSURE IMPREGNATED',
    description:
      'Permanent Magnet Generator (PMG) provides sustained 300% short circuit capability for 10 seconds, safeguarding against heavy inrush currents during large motor starting and fault clearance.',
    iconName: 'zap',
  },
  {
    id: 'engineers',
    title: '24/7 Backed Hyderabad Field Engineers',
    subtitle: 'RAPID METROPOLITAN RESPONSE',
    description:
      'Dedicated local depot stocking genuine Cat oil filters, fuel separators, and Electronic Control Modules (ECM) with certified factory technicians dispatched within 2 hours across industrial zones.',
    iconName: 'wrench',
  },
];

export const CATERPILLAR_COMPARISON_MATRIX: CaterpillarComparisonRow[] = [
  {
    rating: '33 kVA / 26.4 kW',
    engineModel: 'Cat® C3.3',
    cylinderDisp: '3 Inline / 3.3 L',
    aspiration: 'Naturally Aspirated',
    fuelRate: '5.7 L/hr',
    controlPanel: 'Cat EMCP 4.1',
    noiseLevel: '< 75 dBA @ 1m',
  },
  {
    rating: '65 kVA / 52 kW',
    engineModel: 'Cat® C3.3T',
    cylinderDisp: '3 Inline / 3.3 L',
    aspiration: 'Turbocharged',
    fuelRate: '11.8 L/hr',
    controlPanel: 'Cat EMCP 4.2B',
    noiseLevel: '< 75 dBA @ 1m',
  },
  {
    rating: '110 kVA / 88 kW',
    engineModel: 'Cat® C4.4',
    cylinderDisp: '4 Inline / 4.4 L',
    aspiration: 'Turbocharged Aftercooled',
    fuelRate: '18.9 L/hr',
    controlPanel: 'Cat EMCP 4.2B',
    noiseLevel: '< 75 dBA @ 1m',
  },
  {
    rating: '250 kVA / 200 kW',
    engineModel: 'Cat® C7.1',
    cylinderDisp: '6 Inline / 7.01 L',
    aspiration: 'Turbocharged Aftercooled',
    fuelRate: '42.2 L/hr',
    controlPanel: 'Cat EMCP 4.2B',
    noiseLevel: '< 75 dBA @ 1m',
    isFlagship: true,
  },
  {
    rating: '500 kVA / 400 kW',
    engineModel: 'Cat® C13 ACERT™',
    cylinderDisp: '6 Inline / 12.5 L',
    aspiration: 'Turbocharged ATAAC',
    fuelRate: '82.8 L/hr',
    controlPanel: 'Cat EMCP 4.4 Sync',
    noiseLevel: '< 75 dBA @ 1m',
    isFlagship: true,
  },
  {
    rating: '1000 kVA / 800 kW',
    engineModel: 'Cat® C32 ACERT™',
    cylinderDisp: '12 Vee / 32.1 L',
    aspiration: 'Turbocharged Quad ATAAC',
    fuelRate: '164.2 L/hr',
    controlPanel: 'Cat EMCP 4.4 Master',
    noiseLevel: '< 75 dBA @ 1m',
    isFlagship: true,
  },
];

export const CATERPILLAR_FAQS: CaterpillarFaqItem[] = [
  {
    question: 'Why choose Caterpillar over standard low-cost diesel generator brands?',
    answer:
      'Caterpillar generators are built with heavy-displacement industrial blocks, structural forged crankshafts, and Kato Class-H PMG alternators capable of taking 100% single-step block load acceptance (NFPA 110 Class 10 compliant). They operate reliably under continuous prime load for 30,000+ hours with substantially higher resale valuation and lowest total cost of downtime.',
  },
  {
    question: 'Are Caterpillar generators compliant with latest Indian CPCB IV+ emission standards?',
    answer:
      'Yes. All new Caterpillar diesel generators supplied by M.R Generators comply strictly with Central Pollution Control Board (CPCB IV+) standards through precision ACERT electronic fuel metering, integrated oxidation catalysts, and heavy-gauge acoustic enclosures engineered under 75 dBA sound power levels.',
  },
  {
    question: 'What is the emergency dispatch time for Cat spare parts from your Hyderabad depot?',
    answer:
      'M.R Generators stocks fast-moving Cat primary and secondary fuel filters, lube filters, water separators, drive belts, and DeepSea/Cat EMCP controllers at our Sanath Nagar engineering warehouse. We guarantee dispatch within 2 hours across Hyderabad, Secunderabad, and outer Telangana industrial estates.',
  },
  {
    question: 'How does M.R Generators handle CEIG approvals and chimney erection?',
    answer:
      'Our in-house engineering team handles end-to-end statutory approvals: single-line electrical diagram submissions, fault calculation audits, chemical earthing testing, and physical liaison with the Chief Electrical Inspectorate of Government (CEIG), ensuring rapid legal energization of your genset asset.',
  },
];
