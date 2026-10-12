export interface ServiceCapabilityItem {
  id: string;
  category: string;
  title: string;
  description: string;
  spec1: string;
  spec2: string;
  linkText: string;
  isEmergency?: boolean;
}

export interface AmcComparisonRow {
  deliverable: string;
  nonComprehensive: string;
  comprehensive: string;
  isHighlight?: boolean;
}

export interface ServiceProtocolStep {
  stepNumber: string;
  badge: string;
  title: string;
  description: string;
  checkpoints: string[];
  category: string;
  isOverhaul?: boolean;
}

export interface ServiceBrandItem {
  id: string;
  name: string;
  description: string;
  spec: string;
}

export const SERVICE_CAPABILITIES: ServiceCapabilityItem[] = [
  {
    id: 'amc-contracts',
    category: 'PREVENTIVE COVERAGE',
    title: 'COMPREHENSIVE & NON-COMP AMC',
    description: 'Scheduled A-Check, B-Check, C-Check & D-Check preventative service visits, 24/7 unlimited breakdown callouts, round-the-clock priority dispatcher assignment, and logbook auditing.',
    spec1: 'Guaranteed 2-Hour Breakdown Response',
    spec2: 'Scheduled Periodic Fluid & Filter Health Reports',
    linkText: 'VIEW AMC TIERS & PRICING',
  },
  {
    id: 'emergency-breakdown',
    category: 'CRITICAL DISPATCH',
    title: '24/7 EMERGENCY BREAKDOWN SQUAD',
    description: 'Dedicated mobile field response vans loaded with Cummins & KOEL diagnostic scan tools, bypass control cables, mobile fuel transfer pumps, and factory technicians ready to restore prime power.',
    spec1: 'Rapid Night & Weekend Dispatch Service',
    spec2: 'Mobile Bypass Cables & Fuel Transfer Support',
    linkText: 'CALL EMERGENCY HOTLINE',
    isEmergency: true,
  },
  {
    id: 'engine-overhaul',
    category: 'MECHANICAL RESTORATION',
    title: 'TOP & MAJOR ENGINE OVERHAULS',
    description: 'Precision cylinder head reconditioning, piston & liner renewals, crankshaft journal grinding, valve seating, and turbocharger rebuilding backed by factory tolerances and post-assembly load test certificates.',
    spec1: '100% Resistive Load-Bank Signoff Certificate',
    spec2: 'Engine Tolerances Restored to OEM Factory Spec',
    linkText: 'OVERHAUL SCOPE SPECIFICATION',
  },
  {
    id: 'alternator-rewinding',
    category: 'ELECTRICAL ROTATING',
    title: 'ALTERNATOR REWINDING & REPAIR',
    description: 'Complete stator and rotor rewinding using dual-coat copper wire, Class H vacuum pressure impregnation (VPI), digital AVR calibration, rotating diode bridge tests, and certified 1000V Megger insulation testing.',
    spec1: 'Class H VPI Insulation & Dynamic Balancing',
    spec2: 'Megger & High-Potential Dielectric Certified',
    linkText: 'ALTERNATOR SERVICE DETAILS',
  },
  {
    id: 'amf-sync-panels',
    category: 'AUTOMATION & TELEMETRY',
    title: 'AMF & AUTO-SYNC CONTROL PANELS',
    description: 'Auto Mains Failure (AMF) control retrofitting, DeepSea & ComAp controller logic programming, motorized ACB/MCCB servicing, phase interlocking, and parallel load-sharing multi-genset synchronization.',
    spec1: 'DeepSea, ComAp & WoodWard Controller Experts',
    spec2: 'Multi-Megawatt Bus-Coupler Synchronization',
    linkText: 'PANEL RETROFIT SPEC SHEET',
  },
  {
    id: 'acoustic-canopy',
    category: 'STATUTORY & NOISE CONTROL',
    title: 'ACOUSTIC TREATMENT & EXHAUST',
    description: 'Soundproofing canopy refurbishing with high-density rockwool and perforated metal sheet cladding, residential-grade exhaust silencer fabrication, vibration isolation mounting, and statutory chimney extensions.',
    spec1: 'CPCB IV+ Acoustic Attenuation (< 75 dBA @ 1m)',
    spec2: 'TSPCB Certified Chimney Fabrication',
    linkText: 'ACOUSTIC COMPLIANCE AUDIT',
  },
];

export const AMC_COMPARISON_ROWS: AmcComparisonRow[] = [
  {
    deliverable: 'Preventative Scheduled Visits',
    nonComprehensive: '4 Mandatory Quarterly Services',
    comprehensive: '12 Monthly Precision Checkups',
  },
  {
    deliverable: 'Emergency Breakdown Visits',
    nonComprehensive: 'Unlimited (Within 2 Hours SLA)',
    comprehensive: 'Unlimited (Priority #1 Dispatch)',
  },
  {
    deliverable: 'Consumable Spares (Filters/Oil)',
    nonComprehensive: 'Billed at Discounted OEM Rates',
    comprehensive: '100% Included (OEM Filters & Oil)',
    isHighlight: true,
  },
  {
    deliverable: 'Major Breakdown Spares (Pistons/AVR)',
    nonComprehensive: 'Client Purchase or Billed Separately',
    comprehensive: '100% Covered (Zero Additional Cost)',
    isHighlight: true,
  },
  {
    deliverable: 'Engine Health & Fluid Oil Testing',
    nonComprehensive: 'Basic Visual Inspection',
    comprehensive: 'Advanced Lab Spectrometric Oil Analysis',
  },
  {
    deliverable: 'Night & Public Holiday Cover',
    nonComprehensive: 'Standard On-Call Response',
    comprehensive: '24/7 Dedicated Field Technician on Standby',
  },
  {
    deliverable: 'Load-Bank Performance Testing',
    nonComprehensive: 'Available on Request',
    comprehensive: 'Annual 100% Resistive Load Test Included',
  },
];

export const SERVICE_PROTOCOL_STEPS: ServiceProtocolStep[] = [
  {
    stepNumber: '01',
    badge: 'DAILY / 50 HRS',
    title: 'A-CHECK PROTOCOL',
    description: 'Primary operational parameter verification and pre-ignition safety checks.',
    checkpoints: [
      'Lube oil dipstick level verification',
      'Radiator coolant level & hose check',
      'Battery specific gravity & terminal clean',
      'V-belt tension and fan alignment check',
    ],
    category: 'BASELINE PREVENTIVE',
  },
  {
    stepNumber: '02',
    badge: '300 - 500 HRS',
    title: 'B-CHECK SERVICE',
    description: 'Standard fluid drainage, multi-filtration renewal, and valve adjustments.',
    checkpoints: [
      'Engine lube oil drain & refill (15W40)',
      'Lube filter & bypass filter replacement',
      'Primary & secondary fuel filter renewal',
      'Air filter element replacement & cleaning',
    ],
    category: 'ROUTINE CONSUMABLES SWAP',
  },
  {
    stepNumber: '03',
    badge: '1,500 - 2,000 HRS',
    title: 'C-CHECK CALIBRATION',
    description: 'Deep calibration of injection fuel lines, turbo systems, and electrical Megger tests.',
    checkpoints: [
      'Fuel injector calibration & nozzle test',
      'PT pump pressure tuning & timing check',
      'Turbocharger axial & radial clearance',
      'Alternator stator & rotor insulation Megger',
    ],
    category: 'PRECISION CALIBRATION',
  },
  {
    stepNumber: '04',
    badge: '5,000 - 8,000 HRS',
    title: 'D-CHECK OVERHAUL',
    description: 'Complete powertrain disassembly, machining, and full dyno bench restoration.',
    checkpoints: [
      'Cylinder block degreasing & line boring',
      'Piston, ring, liner & bearing renewal',
      'Crankshaft journal precision regrinding',
      '100% full-step resistive load certification',
    ],
    category: 'FULL REMANUFACTURE',
    isOverhaul: true,
  },
];

export const SERVICE_BRANDS: ServiceBrandItem[] = [
  {
    id: 'tata',
    name: 'Tata Motors',
    description: 'Full service care for 15 kVA to 125 kVA Tata industrial gen-engines.',
    spec: 'TURBOCHARGED GENSETS',
  },
  {
    id: 'cummins',
    name: 'Cummins India',
    description: 'QSB, QSK, KTA series high-horsepower industrial overhauls & INSITE diagnostics.',
    spec: 'HIGH-HORSEPOWER CARE',
  },
  {
    id: 'leyland',
    name: 'Ashok Leyland',
    description: 'LEYPOWER specialized care from 10 kVA to 2250 kVA heavy-duty prime power.',
    spec: 'CRDI & H-SERIES PLATFORMS',
  },
  {
    id: 'kirloskar',
    name: 'Kirloskar (KOEL)',
    description: 'KOEL Green genuine filtration, head overhauls, and AMF panel synchronizers.',
    spec: 'KOEL GREEN AUTHORISED',
  },
  {
    id: 'mahindra',
    name: 'Mahindra Powerol',
    description: 'Telecom & commercial canopy maintenance, electronic governor calibration.',
    spec: 'POWEROL CERTIFIED TECHS',
  },
  {
    id: 'cat',
    name: 'Caterpillar (CAT)',
    description: 'Heavy megawatt power plants for infrastructure projects and hospital campuses.',
    spec: 'MULTI-MEGAWATT SPECIALISTS',
  },
  {
    id: 'eicher',
    name: 'Eicher Power',
    description: 'Rugged air-cooled & water-cooled industrial sets for industrial manufacturing.',
    spec: 'AIR & WATER COOLED',
  },
  {
    id: 'greaves',
    name: 'Greaves Cotton',
    description: 'Direct authorized depot care, CPCB IV+ compliance, and genuine kits.',
    spec: 'OEM AUTHORISED DEALERSHIP',
  },
];
