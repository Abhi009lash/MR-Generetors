export interface FlagshipProduct {
  id: string;
  name: string;
  model: string;
  capacityKva: number;
  kvaCategory: '5-62.5' | '82.5-160' | '200-500' | '750-2000';
  brandCategory: 'greaves' | 'cummins';
  sectorCategory: 'healthcare' | 'it-data' | 'manufacturing' | 'commercial';
  tag: string;
  badge: string;
  badgeColor: 'amber' | 'red';
  description: string;
  specs: Array<{ label: string; value: string }>;
  keyBadges: string[];
}

export const FLAGSHIP_PRODUCTS: FlagshipProduct[] = [
  {
    id: 'greaves-82-5',
    name: 'GREAVES POWER 82.5 KVA',
    model: 'MODEL: GEP 82.5 CPCB IV+',
    capacityKva: 82.5,
    kvaCategory: '82.5-160',
    brandCategory: 'greaves',
    sectorCategory: 'commercial',
    tag: '82.5 kVA PRIME',
    badge: 'FAST MOVER',
    badgeColor: 'amber',
    description: 'Engineered with 4-cylinder water-cooled turbo engine, digital micro-controller, class A1 electronic governor, and integrated 180-liter base fuel reservoir.',
    specs: [
      { label: 'Acoustic Enclosure', value: '< 75 dBA @ 1 Metre' },
      { label: 'Voltage & Phase', value: '415 V, 3-Phase, 50 Hz' },
      { label: 'Cooling Medium', value: 'Liquid Radiator Cooled' },
      { label: 'Alternator Make', value: 'Brushless IP23 / Class H' },
    ],
    keyBadges: ['CPCB IV+ CERTIFIED', 'CLASS A1 GOVERNOR', '180L BASE TANK'],
  },
  {
    id: 'greaves-500',
    name: 'GREAVES POWER 500 KVA',
    model: 'MODEL: GEP 500 INDUSTRIAL CPCB IV+',
    capacityKva: 500,
    kvaCategory: '200-500',
    brandCategory: 'greaves',
    sectorCategory: 'manufacturing',
    tag: '500 kVA HEAVY PRIME',
    badge: 'HIGH DEMAND',
    badgeColor: 'red',
    description: 'Built for non-stop industrial prime running, heavy production plants, IT data center corridors, and large campus infrastructure with smart telemetry monitoring.',
    specs: [
      { label: 'Aspiration', value: 'Turbocharged Aftercooled' },
      { label: 'Starting System', value: '24V DC Electric Auto Start' },
      { label: 'Overload Factor', value: '110% Overload for 1 Hour' },
      { label: 'Fuel System', value: 'Electronic Common Rail' },
    ],
    keyBadges: ['SMART TELEMETRY', 'HEAVY DUTY RADIATOR', 'DUAL FILTRATION'],
  },
  {
    id: 'greaves-125',
    name: 'GREAVES POWER 125 KVA',
    model: 'MODEL: GEP 125 COMMERCIAL',
    capacityKva: 125,
    kvaCategory: '82.5-160',
    brandCategory: 'greaves',
    sectorCategory: 'healthcare',
    tag: '125 kVA COMMERCIAL',
    badge: 'CPCB IV+ READY',
    badgeColor: 'amber',
    description: 'High thermal efficiency compact footprint standby DG set with quick step-load acceptance and ultra-quiet residential noise dampening package.',
    specs: [
      { label: 'Fuel Efficiency', value: 'Optimized g/kWh SFC' },
      { label: 'Governor', value: 'Isochronous Electronic' },
      { label: 'Acoustics', value: '< 75 dBA @ 1m (CPCB IV+)' },
      { label: 'Warranty', value: '2 Years OEM Standard' },
    ],
    keyBadges: ['COMPACT FOOTPRINT', 'RAPID LOAD ACCEPTANCE', 'LOW VIBRATION'],
  },
  {
    id: 'greaves-250',
    name: 'GREAVES POWER 250 KVA',
    model: 'MODEL: GEP 250 INDUSTRIAL',
    capacityKva: 250,
    kvaCategory: '200-500',
    brandCategory: 'greaves',
    sectorCategory: 'manufacturing',
    tag: '250 kVA INDUSTRIAL',
    badge: 'FACTORY DIRECT STOCK',
    badgeColor: 'amber',
    description: 'Multi-cylinder turbocharged aftercooled powertrain delivering robust power output under high ambient operating temperatures up to 50°C.',
    specs: [
      { label: 'Engine Cylinders', value: '6 Inline Water Cooled' },
      { label: 'Fuel Tank', value: '450 Litres Heavy Base' },
      { label: 'Emission Norms', value: 'CPCB IV+ Approved' },
      { label: 'Control Module', value: 'DeepSea / Greaves Micro' },
    ],
    keyBadges: ['50°C AMBIENT RATED', 'EXTENDED OIL INTERVALS', 'ISOLATED BASE'],
  },
  {
    id: 'greaves-57',
    name: 'GREAVES POWER 57 KVA',
    model: 'MODEL: GEP 57 COMPACT SILENT',
    capacityKva: 57,
    kvaCategory: '5-62.5',
    brandCategory: 'greaves',
    sectorCategory: 'commercial',
    tag: '57 kVA COMPACT',
    badge: 'READY IN HYDERABAD',
    badgeColor: 'amber',
    description: 'Compact canopy engineering suited for clinics, bank headquarters, fuel stations, and residential complexes requiring immediate acoustic attenuation.',
    specs: [
      { label: 'Acoustic Class', value: 'ISO 8528 Compliant Canopied' },
      { label: 'Electric Start', value: '12V Solenoid & Battery' },
      { label: 'Phase Output', value: '3-Phase 415V / 1-Phase Opt' },
      { label: 'Fuel Rate', value: 'High Mileage Eco-Curve' },
    ],
    keyBadges: ['RESIDENTIAL SILENT', 'SINGLE / THREE PHASE', 'WALL-MOUNT ATS READY'],
  },
  {
    id: 'cummins-1500',
    name: 'CUMMINS INDIA 1500 KVA',
    model: 'MODEL: CUMMINS QSK50 V16 SUBSTATION',
    capacityKva: 1500,
    kvaCategory: '750-2000',
    brandCategory: 'cummins',
    sectorCategory: 'it-data',
    tag: '1500 kVA SUBSTATION',
    badge: 'TURNKEY COMMISSIONED',
    badgeColor: 'red',
    description: 'Engineered with Cummins high-horsepower V16 diesel powertrain, synchronized multi-megawatt busbar switchgear integration, and CEIG approval documentation.',
    specs: [
      { label: 'Engine Make', value: 'Cummins High-Horsepower' },
      { label: 'Paralleling', value: 'Auto Synchronizing PLC' },
      { label: 'Cooling', value: 'Heavy Remote / Mounted Rad' },
      { label: 'Compliance', value: 'CPCB IV+ / CEIG Norms' },
    ],
    keyBadges: ['MULTI-MEGAWATT READY', 'BUSBAR SYNCHRONIZED', 'CEIG LIAISON INCLUDED'],
  },
];
