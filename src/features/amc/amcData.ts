export interface AmcTierItem {
  id: string;
  name: string;
  badge?: string;
  badgeType?: 'default' | 'recommended' | 'premium';
  description: string;
  features: string[];
  buttonLabel: string;
  isPopular?: boolean;
}

export interface AmcProtocolItem {
  id: string;
  code: string;
  title: string;
  intervalTag: string;
  items: string[];
}

export interface AmcErectionItem {
  id: string;
  title: string;
  description: string;
}

export interface AmcOemBrand {
  name: string;
  subtext: string;
}

export interface AmcFaqItem {
  question: string;
  answer: string;
}

export const AMC_TIERS: AmcTierItem[] = [
  {
    id: 'non-comprehensive',
    name: 'Non-Comprehensive AMC',
    badge: 'BASIC PREVENTIVE & ROUTINE',
    badgeType: 'default',
    description:
      'Ideal for organizations who maintain internal spare parts procurement budgets and seek expert routine technical management.',
    features: [
      'Scheduled 12-Month Periodical Preventive Inspections (Monthly/Quarterly)',
      "Routine 'A' Check Service (Engine Oil & Filter change labor included)",
      '24/7 Autonomous Emergency Breakdown Callouts (up to 6 emergency visits per annum)',
      'Battery condition, float electrolyte tests, starting current and terminal checks',
      'Safety trip simulation, AVR calibration & alternator performance testing',
      'Exhaust smoke, vibration, and tappet clearance diagnostics & service log reports',
    ],
    buttonLabel: 'REQUEST NON-COMPREHENSIVE QUOTE',
  },
  {
    id: 'semi-comprehensive',
    name: 'Semi-Comprehensive AMC',
    badge: 'MOST POPULAR / RECOMMENDED',
    badgeType: 'recommended',
    isPopular: true,
    description:
      'Combines preventive labor plus scheduled consumable replacement items (filters & lubricants) under a single planned cost structure.',
    features: [
      'All Non-Comprehensive services included',
      'Free supply of all OEM Lube Oil, Fuel and Air Filters for standard service cycles',
      'Radiator Coolant top-up and anti-freeze treatment replenishment',
      'Engine V-Belt, hose clamps, and valve cover gasket replacements as needed',
      'Zero billings for standard periodic servicing consumables',
      'Guaranteed response within 90 minutes across Hyderabad limits',
      'Detailed annual engine health dossier & CPCB-IV compliance testing certificate',
    ],
    buttonLabel: 'REQUEST SEMI-COMPREHENSIVE QUOTE',
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive AMC',
    badge: 'ZERO HEADACHE / ALL-INCLUSIVE',
    badgeType: 'premium',
    description:
      'Our complete ownership program. Everything is covered—labor, periodic consumables, and major mechanical / electrical failure replacements.',
    features: [
      'Total Zero-Risk DG Care: Complete replacement of worn engine & alternator components',
      'Complete lube oil, filters, belts, gaskets, hoses, fuel injectors & overhaul parts included',
      'Dedicated Resident Technician option for mission-critical IT / healthcare facilities',
      'Priority Emergency Escalation: Immediate technician dispatch within 30 minutes',
      'Free standby DG set support in case of prolonged overhaul downtime',
      'Turnkey insurance claim liaison support & statutory load audit certificates',
    ],
    buttonLabel: 'REQUEST COMPREHENSIVE AMC',
  },
];

export const AMC_OVERHAUL_PROTOCOLS: AmcProtocolItem[] = [
  {
    id: 'top-overhaul',
    code: 'A',
    title: 'Top Engine Overhaul',
    intervalTag: '3,000 - 5,000 RUN HOURS',
    items: [
      'Cylinder head de-carbonizing, valve grinding, seat replacement',
      'Fuel injector nozzle testing, calibration & ultrasonic cleaning',
      'Turbocharger inspection, axial/radial play adjustment & seal check',
      'Tappet setting, valve lash measurement & push rod alignment',
    ],
  },
  {
    id: 'major-overhaul',
    code: 'B',
    title: 'Major Engine Overhaul',
    intervalTag: '8,000 - 10,000 RUN HOURS',
    items: [
      'Complete engine strip-down, crankshaft magnetic particle test & polishing',
      'Cylinder liner, piston, piston rings & gudgeon pin replacement',
      'Main bearings, connecting rod big-end bearings, camshaft bush renewal',
      'Oil pump, water pump, and oil cooler rebuild with genuine OEM overhaul kits',
    ],
  },
  {
    id: 'alternator-rewinding',
    code: 'C',
    title: 'Alternator Rewinding & Stamping',
    intervalTag: 'INSULATION & ELECTRICAL',
    items: [
      'Complete Stator & Rotor coil rewinding with Class H vacuum pressure impregnation (VPI)',
      'Exciter armature rewinding, rotating diode bridge testing & surge suppression',
      'AVR dynamic voltage regulation load testing under balanced / unbalanced loading',
      'Shaft run-out inspection, bearing renewal & dynamic high-speed balancing',
    ],
  },
  {
    id: 'radiator-cooling',
    code: 'D',
    title: 'Radiator & Cooling System',
    intervalTag: 'THERMAL MANAGEMENT',
    items: [
      'Radiator core de-choking, ultrasonic chemical descaling & hydrostatic pressure testing',
      'Water pump impeller replacement, thermostat valve testing & renewal',
      'Intercooler cleaning, charge air piping pressure testing & silicone hose renewals',
      'Antifreeze & corrosion inhibitor treatment for long-life operation',
    ],
  },
];

export const AMC_ERECTION_WORKS: AmcErectionItem[] = [
  {
    id: 'earthing',
    title: 'Earthing & Grounding Systems',
    description:
      'Pipe / Chemical earthing for DG neutral and body as per IS 3043. Earth resistance checks, copper busbar interconnects and statutory testing certification.',
  },
  {
    id: 'cabling',
    title: 'Power Cabling & Busduct Interfacing',
    description:
      'Heavy-duty LT aluminium/copper power cables, perforated/ladder cable trays, fire-rated raceways, and busduct interfacing to main AMF and switchboards.',
  },
  {
    id: 'exhaust',
    title: 'Exhaust Piping, Chimney & Structural',
    description:
      'MS/SS heavy-duty exhaust line fabrication with mineral wool / glass wool thermal cladding, stainless bellows, and freestanding chimney support structures.',
  },
  {
    id: 'acoustic',
    title: 'Acoustic Enclosure Fabrication & Civil Works',
    description:
      'In-situ acoustic room treatment, sound attenuators, generator foundation reinforced civil plinths, and anti-vibration mountings (AVMs).',
  },
  {
    id: 'amf-sync',
    title: 'Automated AMF / Synchronizing Panels',
    description:
      'Supply, cabling, integration, and logic commissioning for Automatic Mains Failure (AMF), auto-changeover, and PLC-based multi-DG auto-synchronization.',
  },
  {
    id: 'fuel-piping',
    title: 'Fuel Piping & Bulk Tank Storage Systems',
    description:
      'MS / seamless fuel piping fabrication, daily service overhead fuel tanks, bulk storage underground/above-ground tanks with auto-transfer pumping systems.',
  },
];

export const AMC_OEM_BRANDS: AmcOemBrand[] = [
  { name: 'Kirloskar', subtext: 'Kirloskar Oil Engines' },
  { name: 'Cummins', subtext: 'Cummins India Fleet' },
  { name: 'Caterpillar', subtext: 'Cat Diesel Power' },
  { name: 'Yanmar / Perkins', subtext: 'Industrial Diesel' },
  { name: 'Kohler', subtext: 'SDMO & Kohler Power' },
  { name: 'Greaves Cotton', subtext: 'Greaves Fleet Care' },
  { name: 'Mahindra', subtext: 'Mahindra Powerol' },
  { name: 'Tata Motors', subtext: 'Tata Genset Care' },
  { name: 'Ashok Leyland', subtext: 'Leypower Diesel' },
  { name: 'Crompton / Stamford', subtext: 'Alternator Division' },
];

export const AMC_FAQS: AmcFaqItem[] = [
  {
    question: 'What is the difference between Non-Comprehensive and Comprehensive DG AMC?',
    answer:
      'Non-Comprehensive AMC covers 100% of routine periodic maintenance labor, emergency breakdown visits, and scheduled health audits, while replacement spare parts, filters, and lubricants are billed at pre-agreed OEM discount rates. Comprehensive AMC is an all-inclusive zero-risk plan where all standard filters, lubricants, routine wear items, and unexpected mechanical/electrical component failures are fully replaced at zero additional charge.',
  },
  {
    question: 'How quickly will a service team reach our site during an emergency breakdown in Hyderabad?',
    answer:
      'For clients with active M.R Generators AMC agreements in Hyderabad and Secunderabad, our emergency response vans mobilize immediately from our central SR Nagar/Vengal Rao Nagar depot. Our average arrival time within GHMC limits (HITEC City, Gachibowli, Jeedimetla, Patancheru, Cherlapally) is under 30 to 90 minutes.',
  },
  {
    question: 'Are spare parts and engine oil guaranteed to be OEM genuine?',
    answer:
      'Yes. As an authorized multi-brand sales and service dealership, we source all filters, lubricants, gaskets, injectors, and overhaul parts directly from authorized OEM supply chains (Tata, Cummins, Leypower, Greaves, Kirloskar). Every spare part is covered by genuine manufacturer warranty and full traceability certificates.',
  },
  {
    question: 'Do you perform load bank testing and assist in CPCB statutory stack certification?',
    answer:
      'Yes. We operate portable resistive load bank testing units (up to 2000 kVA) to conduct comprehensive 100% step-load trials, governor speed tests, and thermal heat runs. We also coordinate with certified environmental testing agencies to verify CPCB-IV+ acoustic levels and stack exhaust emission compliance.',
  },
  {
    question: 'Can you take over AMC for older or multi-brand generators currently maintained by others?',
    answer:
      'Absolutely. Our engineering team conducts a thorough pre-AMC physical health inspection, compression check, and electrical audit of your existing generator set before onboarding. We provide an itemized health report and seamlessly transition your generator to our proactive maintenance schedules.',
  },
];
