export interface CumminsGensetModel {
  id: string;
  name: string;
  kvaRange: string;
  badge: string;
  tag: string;
  category: 'commercial' | 'industrial' | 'high-horsepower';
  engineModel: string;
  subtitle: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface CumminsPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'zap' | 'cpu' | 'shield' | 'trending-down' | 'layers' | 'clock';
}

export interface CumminsComparisonRow {
  kva: string;
  engineModel: string;
  cylinders: string;
  displacement: string;
  aspiration: string;
  governor: string;
  fuelRate: string;
  baseTank: string;
  rpm: string;
  isFlagship?: boolean;
}

export interface CumminsFaqItem {
  question: string;
  answer: string;
}

export const CUMMINS_CATALOG_MODELS: CumminsGensetModel[] = [
  {
    id: 'cummins-25-30',
    name: 'Cummins 25 kVA / 30 kVA DG Set',
    kvaRange: '15 - 35 kVA',
    badge: '15 - 35 kVA',
    tag: 'COMMERCIAL PRIME',
    category: 'commercial',
    engineModel: 'X2.5 / X2.7 Series Engine',
    subtitle: 'X2.5 / X2.7 Series Engine & Silent Canopy',
    specs: [
      { label: 'Engine Platform', value: 'Cummins X2.5TA / X2.7' },
      { label: 'Voltage / Phase', value: '415 V, 3 Phase / 50 Hz' },
      { label: 'Fuel Tank Volume', value: '75 Litres Integral' },
      { label: 'Acoustic Sound', value: '< 75 dBA @ 1 Metre CPCB IV+' },
    ],
  },
  {
    id: 'cummins-62-82',
    name: 'Cummins 62.5 kVA / 82.5 kVA DG Set',
    kvaRange: '50 - 82.5 kVA',
    badge: '50 - 82.5 kVA',
    tag: 'HEAVY COMMERCIAL',
    category: 'commercial',
    engineModel: '4BTA3.9-G2 Series',
    subtitle: '4BTA3.9-G2 Turbocharged Aftercooled Heavy Duty Block',
    specs: [
      { label: 'Engine Family', value: '4-Cylinder In-line Turbocharged' },
      { label: 'Digital Controller', value: 'PowerCommand® 1.1 / PS0600' },
      { label: 'Continuous Power', value: '50 kW / 66 kW Prime' },
      { label: 'Emission Standard', value: 'CPCB IV+ Approved' },
    ],
  },
  {
    id: 'cummins-125',
    name: 'Cummins 125 kVA DG SET',
    kvaRange: '100 - 125 kVA',
    badge: '100 - 125 kVA',
    tag: 'MID INDUSTRIAL',
    category: 'commercial',
    engineModel: '6BT5.9-G2 Engine',
    subtitle: '6BT5.9-G2 Robust 6-Cylinder Engine & Canopy',
    specs: [
      { label: 'Engine Rating', value: '6BT5.9 Heavy-Duty 6-Cyl' },
      { label: 'Aspiration', value: 'Turbocharged Charge Air Cooled' },
      { label: 'Governing Class', value: 'Electronic Isochronous' },
      { label: 'Radiator System', value: 'Standard Tropical 50°C' },
    ],
  },
  {
    id: 'cummins-250',
    name: 'Cummins 250 kVA Industrial DG Set',
    kvaRange: '160 - 250 kVA',
    badge: '160 - 250 kVA',
    tag: 'HEAVY INDUSTRIAL',
    category: 'industrial',
    engineModel: '6CTAA8.3 Series',
    subtitle: '6CTAA8.3 Series High-Displacement Industrial Workhorse',
    specs: [
      { label: 'Engine Model', value: 'Cummins 6CTAA8.3-G2' },
      { label: 'Fuel Injection', value: 'Rotary In-line Bosch / Delphi' },
      { label: 'Dry Weight', value: '2,650 kg Soundproof Canopy' },
      { label: 'Monitoring System', value: 'PS0600 Advanced Digital Metering' },
    ],
  },
  {
    id: 'cummins-500',
    name: 'Cummins 500 kVA Flagship Genset',
    kvaRange: '320 - 500 kVA',
    badge: '320 - 500 kVA',
    tag: 'ENTERPRISE FLAGSHIP',
    category: 'industrial',
    engineModel: 'QSX15 Series Electronic',
    subtitle: 'QSX15 Full Authority Electronic Engine for Critical IT & Hospitals',
    specs: [
      { label: 'Engine Family', value: 'Cummins QSX15-G8 (15 Litre)' },
      { label: 'Electronic Control', value: 'Full Authority Quantum ECM' },
      { label: 'Fuel Tank Option', value: '900 Litre Sub-Base' },
      { label: 'Paralleling Support', value: 'PowerCommand® 3.3 Ready' },
    ],
  },
  {
    id: 'cummins-megawatt',
    name: 'Cummins Megawatt Power Platform',
    kvaRange: '750 - 3750 kVA',
    badge: '750 - 3750 kVA',
    tag: 'HIGH-HORSEPOWER MEGA',
    category: 'high-horsepower',
    engineModel: 'QSK60 / QST30 Platform',
    subtitle: 'QSK60 / QST30 High Horsepower Substation Synchronized Packages',
    specs: [
      { label: 'Engine Family', value: 'Cummins QSK60 / QST30' },
      { label: 'Cylinder Setup', value: '16 / 12 Cylinder V-Configuration' },
      { label: 'Synchronizing', value: 'Grid Parallel / Multiple Generators' },
      { label: 'Substation Services', value: 'Turnkey EPC Civil, Exhaust & Statutory' },
    ],
  },
];

export const CUMMINS_PILLARS: CumminsPillar[] = [
  {
    id: 'load-pickup',
    title: 'Instant 1-Step 100% Load Pick-Up',
    subtitle: '< 10-SECOND CRITICAL BACKUP',
    description:
      'Meets transient response requirements of ISO 8528-5 Class G3. Essential for surgical operation theatres, emergency data centre cooling, and tier-4 heavy infrastructure where power interruption is unacceptable.',
    iconName: 'zap',
  },
  {
    id: 'microprocessor',
    title: 'PowerCommand® Microprocessor',
    subtitle: 'DIGITAL SYSTEM MONITORING',
    description:
      'State-of-the-art microprocessor controller provides complete digital metering, protective relaying, engine status, single-point monitoring, fault diagnostics, and integrated Paralleling/PLC synchronization interfaces.',
    iconName: 'cpu',
  },
  {
    id: 'canopy',
    title: 'High-Performance Acoustic Canopy',
    subtitle: '< 75 dBA SOUND-ATTENUATED',
    description:
      'Factory built galvanised sheet steel acoustic canopy engineered with weather-proof insulation to minimize noise and operate under extreme tropical temperatures with integrated base fuel tank.',
    iconName: 'shield',
  },
  {
    id: 'tco',
    title: 'Lowest Total Cost of Ownership (TCO)',
    subtitle: 'EXTENDED SERVICE INTERVALS',
    description:
      '500+ hour preventative service intervals with genuine Fleetguard filtration, lower lube oil consumption, and proven 20,000+ hour rebuild life cycle delivering predictable operating expenditures.',
    iconName: 'trending-down',
  },
  {
    id: 'single-source',
    title: 'Single-Source Accountability',
    subtitle: '100% FACTORY INTEGRATED',
    description:
      'Engine, alternator, radiator, and control logic are fully manufactured and assembled under Cummins specifications, preventing mismatches between third-party components and multiple warranty vendors.',
    iconName: 'layers',
  },
  {
    id: 'rapid-dispatch',
    title: '2-Hour Rapid Mobilisation',
    subtitle: 'ON-FIELD DISPATCH HYDERABAD',
    description:
      'Dedicated engineering vans dispatched from Sanath Nagar and Mallapur central depots ready to respond within 2 to 4 hours across Hyderabad industrial belts for emergency breakdown support.',
    iconName: 'clock',
  },
];

export const CUMMINS_COMPARISON_MATRIX: CumminsComparisonRow[] = [
  {
    kva: '25 kVA',
    engineModel: 'X2.5TA-G1',
    cylinders: '3 In-Line',
    displacement: '2.5 L',
    aspiration: 'Turbocharged Charge Air Cooled',
    governor: 'Mechanical / Electronic Gov',
    fuelRate: '4.8 L/hr',
    baseTank: '70 L',
    rpm: '1500',
  },
  {
    kva: '62.5 kVA',
    engineModel: '4BTA3.9-G2',
    cylinders: '4 In-Line',
    displacement: '3.9 L',
    aspiration: 'Turbocharged Aftercooled',
    governor: 'Electronic Isochronous',
    fuelRate: '11.2 L/hr',
    baseTank: '150 L',
    rpm: '1500',
  },
  {
    kva: '125 kVA',
    engineModel: '6BT5.9-G2',
    cylinders: '6 In-Line',
    displacement: '5.9 L',
    aspiration: 'Turbocharged Charge Air Cooled',
    governor: 'Electronic Isochronous',
    fuelRate: '22.4 L/hr',
    baseTank: '250 L',
    rpm: '1500',
  },
  {
    kva: '250 kVA',
    engineModel: '6CTAA8.3-G2',
    cylinders: '6 In-Line',
    displacement: '8.3 L',
    aspiration: 'Turbocharged Aftercooled',
    governor: 'Electronic ECM',
    fuelRate: '44.8 L/hr',
    baseTank: '450 L',
    rpm: '1500',
  },
  {
    kva: '500 kVA',
    engineModel: 'QSX15-G8 Full Electronic',
    cylinders: '6 In-Line',
    displacement: '15.0 L',
    aspiration: 'Heavy-Duty Turbo Aftercooled',
    governor: 'Full Electronic Quantum ECM',
    fuelRate: '88.5 L/hr',
    baseTank: '850 L',
    rpm: '1500',
    isFlagship: true,
  },
  {
    kva: '1500 kVA',
    engineModel: 'QSK50-G4 / QSK60',
    cylinders: 'V-16',
    displacement: '50.3 L',
    aspiration: 'Twin Turbocharged Aftercooled',
    governor: 'Full Digital Authority',
    fuelRate: '265 L/hr',
    baseTank: 'Custom Bulk Tank',
    rpm: '1500',
    isFlagship: true,
  },
];

export const CUMMINS_FAQS: CumminsFaqItem[] = [
  {
    question: 'Why are Cummins DG sets preferred for healthcare, data centres, and pharma facilities?',
    answer:
      'Cummins engines deliver rapid 1-step 100% transient load pick-up within 10 seconds (ISO 8528-5 G3 standard compliance). Combined with the PowerCommand® digital governor, they eliminate frequency fluctuation and harmonic distortions, providing seamless medical surgical and server rack safety.',
  },
  {
    question: 'Are all Cummins DG sets supplied by M.R Generators CPCB IV+ compliant?',
    answer:
      'Yes, all new generation Cummins DG sets provided by M.R Generators comply strictly with Ministry of Environment, Forest and Climate Change (MoEFCC) CPCB IV+ emission standards, incorporating after-treatment catalysts and ultra-silent acoustic canopy attenuation.',
  },
  {
    question: 'Can M.R Generators handle CEIG approvals and chimney fabrication?',
    answer:
      'Yes. Our turnkey EPC engineering division handles electrical schematic drawings, CEIG (Chief Electrical Inspectorate to Government) liaisoning, structural vibration plinth civil works, TSPCB air consent, and MS/SS acoustic chimney fabrication as a single turnkey contract.',
  },
  {
    question: 'What is your emergency dispatch turnaround for unexpected breakdowns?',
    answer:
      'We maintain dedicated diagnostic vans and certified Cummins engineers on 24/7 duty at our Sanath Nagar depot and Mallapur hub, ensuring field technician arrival within 2 to 4 hours anywhere across Hyderabad and Secunderabad industrial clusters.',
  },
];
