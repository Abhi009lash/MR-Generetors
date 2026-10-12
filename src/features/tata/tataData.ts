export interface TataGensetModel {
  id: string;
  kva: string;
  kw: string;
  name: string;
  description: string;
  engineModel: string;
  aspiration: string;
  cylinders: string;
  displacement: string;
  noiseLevel: string;
  fuelTankLitres: string;
  application: string;
  isFlagship?: boolean;
  maxTorque?: string;
  fuelSystem?: string;
  standardController?: string;
}

export interface TataEngineeringPillar {
  id: string;
  number: string;
  title: string;
  description: string;
  badge: string;
  iconName: 'truck' | 'wind' | 'shield' | 'wrench' | 'cpu' | 'flame';
}

export interface TataComparisonRow {
  parameter: string;
  m25: string;
  m35: string;
  m62: string;
  m82: string;
  m100: string;
  isHighlight?: boolean;
}

export const TATA_CATALOG_MODELS: TataGensetModel[] = [
  {
    id: 'tata-25-kva',
    kva: '25 kVA',
    kw: '20 kWe',
    name: 'Tata 25 kVA Silent DG Set',
    description: 'Ultra-reliable 4-cylinder naturally aspirated heavy-duty configuration for continuous primary or emergency power.',
    engineModel: 'Tata 497 NA',
    aspiration: 'Naturally Aspirated',
    cylinders: '4 Cylinder Inline',
    displacement: '2.96 Litres Direct Injection',
    noiseLevel: '< 75 dBA @ 1m (CPCB IV+)',
    fuelTankLitres: '100 Litres Internal',
    application: 'Commercial Clinics, Retail Outlets & Branch Banks',
  },
  {
    id: 'tata-35-kva',
    kva: '35 kVA',
    kw: '28 kWe',
    name: 'Tata 35 kVA Silent DG Set',
    description: 'Turbocharged 4-cylinder engine providing instantaneous load pickup with whisper-quiet residential attenuation.',
    engineModel: 'Tata 497 TC',
    aspiration: 'Turbocharged',
    cylinders: '4 Cylinder Inline',
    displacement: '2.96 Litres Intercooled',
    noiseLevel: '< 75 dBA @ 1m (CPCB IV+)',
    fuelTankLitres: '120 Litres Internal',
    application: 'Supermarkets, Petrol Pumps & Educational Labs',
  },
  {
    id: 'tata-62-kva',
    kva: '62.5 kVA',
    kw: '50 kWe',
    name: 'Tata 62.5 kVA Heavy-Duty Genset',
    description: 'Harmonized 6-cylinder powerplant engineered for commercial vehicle endurance with exceptional block torque.',
    engineModel: 'Tata 697 NA',
    aspiration: 'Naturally Aspirated',
    cylinders: '6 Cylinder Inline',
    displacement: '5.67 Litres Heavy Duty Block',
    noiseLevel: '< 75 dBA @ 1m (CPCB IV+)',
    fuelTankLitres: '180 Litres Internal',
    application: 'Medium Manufacturing, Cold Storages & Warehouses',
  },
  {
    id: 'tata-82-kva',
    kva: '82.5 kVA',
    kw: '66 kWe',
    name: 'Tata 82.5 kVA Industrial Power Unit',
    description: 'Equipped with tropicalized cooling radiators designed for non-stop summer operation in infrastructure projects.',
    engineModel: 'Tata 697 TC',
    aspiration: 'Turbocharged Heavy Duty',
    cylinders: '6 Cylinder Inline',
    displacement: '5.67 Litres Turbocharged',
    noiseLevel: '< 75 dBA @ 1m (CPCB IV+)',
    fuelTankLitres: '220 Litres Internal',
    application: 'Private Hospitals, Tech Parks & Construction Sites',
  },
  {
    id: 'tata-100-kva',
    kva: '100 kVA',
    kw: '80 kWe',
    name: 'Tata 100 kVA Heavy Industrial Flagship Power Station',
    description: 'The apex of the Tata series lineup. Powered by the intercooled 6-cylinder engine architecture built for continuous factory production loads, multi-floor hospital networks, and mission-critical installations.',
    engineModel: 'Tata 697 TCIC',
    aspiration: 'Turbocharged Intercooled (TCIC)',
    cylinders: '6 Cylinder Inline Heavy Commercial',
    displacement: '5.67 Litres Heavy Block',
    maxTorque: '380 Nm @ 1500 RPM',
    fuelSystem: 'Rotary FIP with Mechanical/Electronic Gov',
    noiseLevel: '< 75 dBA @ 1m (CPCB IV+ Soundproof)',
    fuelTankLitres: '250 Litres Base Frame',
    standardController: 'Deep Sea / ComAp AMF Controller',
    application: 'Continuous Factory Loads, Multi-Floor Hospitals & Metro Sites',
    isFlagship: true,
  },
];

export const TATA_ENGINEERING_PILLARS: TataEngineeringPillar[] = [
  {
    id: 'p1',
    number: '01',
    title: 'Proven Commercial Vehicle Engines (Tata 407 & 1610 Series)',
    description: 'The commercial vehicle truck engine series from 407 and 1610 of Tata Motors are tried & tested, stable, rugged, and built for million-kilometer heavy-duty endurance under harsh load fluctuations.',
    badge: 'MILLION-KM PROVEN TRUCK BLOCKS',
    iconName: 'truck',
  },
  {
    id: 'p2',
    number: '02',
    title: 'Homogeneous Canopy Design & Peak Summer Cooling',
    description: 'Engineered with at least 20% more cabin space compared to industry alternatives. Homogeneous airflow engineering enables maximum heat dissipation and lowest operating jacket water temperatures during extreme 45°C+ peak summers.',
    badge: '45°C AMBIENT THERMAL CAPACITY',
    iconName: 'wind',
  },
  {
    id: 'p3',
    number: '03',
    title: 'Heavy-Duty Rugged Frame & Structural Durability',
    description: 'Engineered with thick gauge heavy-duty sheet metal and robust structural chassis, adding structural weight for anti-vibration stability, physical protection, and prolonged outdoor operating life.',
    badge: 'SUPER-HEAVYWEIGHT STRUCTURAL CHASSIS',
    iconName: 'shield',
  },
  {
    id: 'p4',
    number: '04',
    title: '500+ Authorized Genuine Spares Network Across AP & Telangana',
    description: 'Easy maintenance forbearance with over 500 authorized genuine Tata Motors & M.R Generators spares stockists offering the lowest operating cost and fastest turnaround in the twin states.',
    badge: 'FASTEST ACCESS TO GENUINE PARTS',
    iconName: 'wrench',
  },
  {
    id: 'p5',
    number: '05',
    title: 'True 4 & 6 Cylinder Engine Architecture',
    description: 'Even for 30 kVA to 40 kVA gensets, Tata utilizes 4 & 6 cylinder harmonized engines — unlike underpowered, high-vibration 2 & 3 cylinder engines commonly offered by competitors.',
    badge: 'ZERO HIGH-VIBRATION ENGINE SHORTCUTS',
    iconName: 'cpu',
  },
  {
    id: 'p6',
    number: '06',
    title: 'Lowest Specific Fuel Consumption (SFC)',
    description: 'Direct injection mechanical/electronic governors tuned for optimized combustion, delivering lowest fuel consumption in the 25–100 kVA segment, drastically cutting monthly diesel overhead.',
    badge: 'UP TO 12% MONTHLY FUEL ECONOMY GAIN',
    iconName: 'flame',
  },
];

export const TATA_COMPARISON_MATRIX: TataComparisonRow[] = [
  { parameter: 'Engine Model', m25: '497 NA', m35: '497 TC', m62: '697 NA', m82: '697 TC', m100: '697 TCIC' },
  { parameter: 'Cylinder Count', m25: '4 Cyl Inline', m35: '4 Cyl Inline', m62: '6 Cyl Inline', m82: '6 Cyl Inline', m100: '6 Cyl Inline' },
  { parameter: 'Aspiration Type', m25: 'Naturally Aspirated', m35: 'Turbocharged', m62: 'Naturally Aspirated', m82: 'Turbocharged', m100: 'Turbo Intercooled' },
  { parameter: 'Displacement', m25: '2.96 Litres', m35: '2.96 Litres', m62: '5.67 Litres', m82: '5.67 Litres', m100: '5.67 Litres' },
  { parameter: 'Canopy Footprint (LxWxH mm)', m25: '2250 x 1050 x 1400', m35: '2400 x 1100 x 1500', m62: '3200 x 1200 x 1700', m82: '3400 x 1300 x 1800', m100: '3600 x 1350 x 1900' },
  { parameter: 'Fuel Tank Capacity', m25: '100 Litres', m35: '120 Litres', m62: '180 Litres', m82: '220 Litres', m100: '250 Litres' },
  { parameter: 'Emission Compliance', m25: 'CPCB IV+ Ready', m35: 'CPCB IV+ Ready', m62: 'CPCB IV+ Ready', m82: 'CPCB IV+ Ready', m100: 'CPCB IV+ Ready', isHighlight: true },
];

export const TATA_CLIENT_LOGOS = [
  { name: 'TATA PROJECTS', sub: 'EPC & METRO PACKAGES' },
  { name: 'CROMA', sub: 'RETAIL OUTLETS HYD' },
  { name: 'ASTRA POLY', sub: 'PIPES MANUFACTURING' },
  { name: 'BHARAT BIOTECH', sub: 'COLD CHAIN BACKUP' },
  { name: 'CPWD & R&B', sub: 'GOVT INFRASTRUCTURE' },
];
