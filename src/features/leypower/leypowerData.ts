export interface LeypowerModelItem {
  id: string;
  name: string;
  kvaRating: string;
  kwRating: string;
  engineModel: string;
  cylinders: string;
  voltagePhase: string;
  fuelTank: string;
  controller: string;
  idealApplications: string;
}

export interface LeypowerAdvantageItem {
  id: string;
  category: string;
  title: string;
  description: string;
  specHighlight: string;
  iconName: 'zap' | 'shield' | 'checkCircle' | 'activity';
}

export const LEYPOWER_ADVANTAGES: LeypowerAdvantageItem[] = [
  {
    id: 'electronic-engine',
    category: 'POWERTRAIN INTEGRATION',
    title: 'In-Cylinder Electronic Engine',
    description: 'Modern common rail & in-cylinder electronic injection with optimized combustion chambers for instant block load acceptance without voltage dipping.',
    specHighlight: 'Up to 80% First Step Load Acceptance',
    iconName: 'zap',
  },
  {
    id: 'rugged-block',
    category: 'DURABILITY MATRIX',
    title: 'Rugged High-Torque Block',
    description: 'Heavy cast-iron monoblock designed for 50°C high ambient temperature operations without derating in demanding Indian operating conditions.',
    specHighlight: '50°C Ambient Tropicalized Radiator',
    iconName: 'shield',
  },
  {
    id: 'after-treatment',
    category: 'EMISSION COMPLIANCE',
    title: 'Advanced After-Treatment',
    description: 'Compact DOC + DPF / SCR catalytic architecture delivering zero visible smoke and meeting stringent CPCB IV+ national emission mandates.',
    specHighlight: 'CPCB IV+ Zero Visible Smoke Certified',
    iconName: 'checkCircle',
  },
  {
    id: 'lowest-tco',
    category: 'OPERATIONAL EFFICIENCY',
    title: 'Lowest Lifetime TCO',
    description: 'Extended 500-hour lube oil drain intervals paired with best-in-class specific fuel consumption rate (190 g/kWh) driving drastic lifecycle savings.',
    specHighlight: '500 Hours Lube Oil Drain Interval',
    iconName: 'activity',
  },
];

export const LEYPOWER_MODELS_COMPACT: LeypowerModelItem[] = [
  {
    id: 'al-10',
    name: 'Ashok Leyland AL-10 kVA',
    kvaRating: '10 kVA',
    kwRating: '8 kW',
    engineModel: 'AL 2-Cyl Industrial Diesel',
    cylinders: '2-Cylinder Water-Cooled',
    voltagePhase: '230V / 415V, 3-Phase',
    fuelTank: '65 Litres In-Base',
    controller: 'DSE / AMF Microcontroller',
    idealApplications: 'Diagnostic Clinics, Retail Outlets, Fuel Stations, Telecom Towers',
  },
  {
    id: 'al-25',
    name: 'Ashok Leyland AL-25 kVA',
    kvaRating: '25 kVA',
    kwRating: '20 kW',
    engineModel: 'AL 3-Cyl Turbocharged',
    cylinders: '3-Cylinder In-Line Turbo',
    voltagePhase: '415V, 3-Phase, 50Hz',
    fuelTank: '80 Litres In-Base',
    controller: 'Digital DSE Auto-Start AMF',
    idealApplications: 'Commercial Showrooms, Branch Offices, Restaurants, Small Workshops',
  },
  {
    id: 'al-40',
    name: 'Ashok Leyland AL-40 kVA',
    kvaRating: '40 kVA',
    kwRating: '32 kW',
    engineModel: 'AL 4-Cyl H-Series Turbo',
    cylinders: '4-Cylinder H-Series Platform',
    voltagePhase: '415V, 3-Phase, 50Hz',
    fuelTank: '100 Litres In-Base',
    controller: 'Smart AMF Controller with RS485',
    idealApplications: 'Gated Communities, Supermarkets, Boutique Hotels, Manufacturing Units',
  },
];

export const LEYPOWER_MODELS_STANDARD: LeypowerModelItem[] = [
  {
    id: 'al-62-5',
    name: 'Ashok Leyland AL-62.5 kVA',
    kvaRating: '62.5 kVA',
    kwRating: '50 kW',
    engineModel: 'AL H-Series 4-Cyl Turbo Intercooled',
    cylinders: '4-Cylinder Turbocharged Aftercooled',
    voltagePhase: '415V, 3-Phase, 50Hz',
    fuelTank: '150 Litres Heavy Duty',
    controller: 'DeepSea DSE 6120 AMF MKII',
    idealApplications: 'Mid-Rise Residential Towers, IT Offices, Hospitals, Cold Storage',
  },
  {
    id: 'al-125',
    name: 'Ashok Leyland AL-125 kVA',
    kvaRating: '125 kVA',
    kwRating: '100 kW',
    engineModel: 'AL H-Series 6-Cyl Turbocharged',
    cylinders: '6-Cylinder Heavy Monoblock',
    voltagePhase: '415V, 3-Phase, 50Hz',
    fuelTank: '250 Litres Heavy Duty',
    controller: 'Intelligent AMF with Remote Telemetry',
    idealApplications: 'Manufacturing Plants, Malls, Multi-Specialty Clinics, Data Centers',
  },
  {
    id: 'al-250',
    name: 'Ashok Leyland AL-250 kVA',
    kvaRating: '250 kVA',
    kwRating: '200 kW',
    engineModel: 'AL Neptune 6-Cyl CRDi Engine',
    cylinders: '6-Cylinder Common Rail Turbo Intercooled',
    voltagePhase: '415V, 3-Phase, 50Hz',
    fuelTank: '400 Litres Heavy Duty',
    controller: 'Advanced Digital Sync & Load Share Controller',
    idealApplications: 'Heavy Engineering, Pharmaceuticals, Commercial Complexes, Substations',
  },
];

export const LEYPOWER_MODELS_HEAVY: LeypowerModelItem[] = [
  {
    id: 'al-380',
    name: 'Ashok Leyland AL-380 kVA',
    kvaRating: '380 kVA',
    kwRating: '304 kW',
    engineModel: 'AL Neptune Heavy Industrial Block',
    cylinders: '6-Cylinder CRDi High-Torque',
    voltagePhase: '415V, 3-Phase, 50Hz',
    fuelTank: '600 Litres External Compatible',
    controller: 'DeepSea DSE 8610 Auto-Synchronizing',
    idealApplications: 'Cement Plants, Steel Fabricators, Heavy Infrastructure, Multi-MW Arrays',
  },
  {
    id: 'al-500',
    name: 'Ashok Leyland AL-500 kVA',
    kvaRating: '500 kVA',
    kwRating: '400 kW',
    engineModel: 'AL Neptune High-Horsepower Platform',
    cylinders: '6-Cylinder Twin-Turbo Intercooled',
    voltagePhase: '415V / 11kV Grid Compatible',
    fuelTank: '850 Litres Bulk Tank Ready',
    controller: 'Full Digital Dual-Mains AMF & Paralleling',
    idealApplications: 'Process Industries, Major Hospitals, Tech Parks, Data Warehouses',
  },
  {
    id: 'al-1010',
    name: 'Ashok Leyland AL-1010+ kVA',
    kvaRating: '1010 kVA',
    kwRating: '808 kW',
    engineModel: 'AL Multi-Engine Synchronized Array',
    cylinders: 'Multi-Block High-Speed Heavy Industrial',
    voltagePhase: '415V / 3.3kV / 11kV Substation',
    fuelTank: 'Integrated Daily Service + Bulk Day Tank',
    controller: 'Master Grid Synchronizing & Load-Management SCADA',
    idealApplications: 'Multi-Megawatt Campus Substations, Heavy Mining, Critical Infrastructure',
  },
];
