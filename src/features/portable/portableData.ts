export interface PortableGensetModel {
  id: string;
  name: string;
  kvaRating: string;
  kwRating: string;
  category: 'compact' | 'towable' | 'sync-plants';
  badge: string;
  tag: string;
  subtitle: string;
  engineBrand: string;
  soundLevel: string;
  fuelType: string;
  mobilityFormat: string;
  specs: { label: string; value: string }[];
}

export interface PortableBenchmarkItem {
  id: string;
  title: string;
  description: string;
  primaryTag: string;
  secondaryTag: string;
  secondaryTagColor?: string;
  iconName: 'Volume2' | 'Droplets' | 'Zap' | 'Cpu' | 'Truck' | 'Clock';
}

export interface PortableComparisonRow {
  model: string;
  engine: string;
  alternator: string;
  kvaKw: string;
  fuelType: string;
  soundAt7m: string;
  mobilityType: string;
}

export interface PortableApplicationItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Tv' | 'LifeBuoy' | 'Radio' | 'Activity' | 'Construction' | 'Sparkles';
}

export interface PortableFaqItem {
  question: string;
  answer: string;
}

export const PORTABLE_BENCHMARKS: PortableBenchmarkItem[] = [
  {
    id: 'acoustic-capsule',
    title: 'Super-Silent Acoustic Capsule Enclosure',
    description:
      'High-attenuation aerodynamic capsule engineered with non-combustible high-density rockwool acoustic baffling, multi-stage labyrinth exhaust routing, and anti-vibration elastomeric mountings yielding sub-62 dBA operations.',
    primaryTag: 'ACOUSTIC FLOOR: < 62 dBA',
    secondaryTag: 'LABYRINTH EXHAUST',
    iconName: 'Volume2',
  },
  {
    id: 'water-cooling',
    title: 'Total Water Cooling Architecture',
    description:
      'Unlike air-cooled units that de-rate in severe summer temperatures, both the internal combustion engine and alternator feature complete closed-circuit liquid cooling for continuous 100% load retention in 50°C ambients.',
    primaryTag: 'COOLING: CLOSED-CIRCUIT',
    secondaryTag: '100% LOAD AT 50°C',
    iconName: 'Droplets',
  },
  {
    id: 'agt-inverter',
    title: 'Advanced AGT Series DC & Inverter Tech',
    description:
      'Integrated variable speed alternator architecture with direct high-current DC battery charging. Automatically matches engine RPM to instantaneous electrical load, saving up to 35% fuel compared to fixed 1500 RPM gensets.',
    primaryTag: 'INVERTER SINE-WAVE',
    secondaryTag: 'VARIABLE SPEED RPM',
    iconName: 'Zap',
  },
  {
    id: 'microprocessor-avr',
    title: 'Microprocessor Voltage Regulation',
    description:
      'Solid-state digital AVR regulating output to within ±0.5% with pure sine-wave synthesis (<2% Total Harmonic Distortion). Safe for broadcast transmitters, mobile MRI vans, data acquisition rigs, and telecom rectifiers.',
    primaryTag: 'REGULATION: ±0.5%',
    secondaryTag: 'THD < 2% LAB QUALITY',
    iconName: 'Cpu',
  },
  {
    id: 'road-towing',
    title: 'High-Mobility Chassis & Road Towing',
    description:
      'Equipped with German AL-KO rubber torsion axles, override braking, RTO road lighting kit, multi-point crane lifting lugs, forklift pockets, and rugged all-terrain pneumatic tires certified for highway speed towing.',
    primaryTag: 'AXLES: AL-KO GERMAN',
    secondaryTag: 'HIGHWAY SPEED TOWABLE',
    iconName: 'Truck',
  },
  {
    id: 'rapid-response',
    title: '24/7 Rapid Emergency Response',
    description:
      'Centralized mobilization from our Hyderabad ESI Depot with dedicated prime-movers ready to roll in under 120 minutes. Supported by factory-trained mobile technicians and onboard bulk fuel delivery.',
    primaryTag: 'DISPATCH: < 120 MINS',
    secondaryTag: 'EMERGENCY TOW FLEET',
    secondaryTagColor: '#D32F2F',
    iconName: 'Clock',
  },
];

export const PORTABLE_CATALOG_MODELS: PortableGensetModel[] = [
  {
    id: 'agt-3000',
    name: 'AGT 3000 Compact Inverter',
    kvaRating: '3 kVA',
    kwRating: '2.8 kW',
    category: 'compact',
    badge: '3 kVA INVERTER',
    tag: 'HAND-CARRY / TROLLEY',
    subtitle: 'Ultralight pure sine-wave inverter generator for outside sound recording and field labs.',
    engineBrand: 'Honda OHV Commercial 4-Stroke',
    soundLevel: '58 dBA @ 7m (Whisper-Quiet)',
    fuelType: 'Petrol / Clean E20 Ready',
    mobilityFormat: 'Integral Castor Wheels & Telescopic Handle',
    specs: [
      { label: 'Engine Platform', value: 'Honda GX200 Commercial' },
      { label: 'Output Voltage', value: '230V 1-Phase Pure Sine' },
      { label: 'Fuel Tank / Runtime', value: '12 Liters / 9.5 Hours' },
      { label: 'Weight & Enclosure', value: '38 kg Ultra-Compact Capsule' },
    ],
  },
  {
    id: 'honda-eu70is',
    name: 'Honda EU70is Portable Silent',
    kvaRating: '7 kVA',
    kwRating: '5.5 kW',
    category: 'compact',
    badge: '7 kVA EFI SILENT',
    tag: 'HIGH-OUTPUT TROLLEY',
    subtitle: 'Electronic Fuel Injection (EFI) quiet power for mobile surgical clinics and live outside broadcasting.',
    engineBrand: 'Honda GX390 EFI Overhead Valve',
    soundLevel: '60 dBA @ 7m',
    fuelType: 'Petrol EFI Low-Emission',
    mobilityFormat: 'Heavy-Duty 2-Wheel Pneumatic Trolley',
    specs: [
      { label: 'Alternator Format', value: 'Microprocessor Digital Inverter' },
      { label: 'Frequency Stability', value: '±0.1 Hz Computer Grade' },
      { label: 'Electric Starting', value: 'Key Switch + Wireless Remote' },
      { label: 'Acoustic Shell', value: 'Double-Walled Soundproof Core' },
    ],
  },
  {
    id: 'yanmar-15kva',
    name: 'Yanmar 15 kVA Road-Towable Diesel',
    kvaRating: '15 kVA',
    kwRating: '12 kW',
    category: 'towable',
    badge: '15 kVA TOWABLE',
    tag: 'SINGLE-AXLE TRAILER',
    subtitle: 'Compact water-cooled industrial diesel unit mounted on road trailer with RTO lighting.',
    engineBrand: 'Yanmar 3TNV88 Liquid-Cooled Diesel',
    soundLevel: '62 dBA @ 7m',
    fuelType: 'Diesel (CPCB IV+ Eco-Approved)',
    mobilityFormat: 'AL-KO Rubber Torsion Axle + Override Brakes',
    specs: [
      { label: 'Engine Displacement', value: '1.64 Liters 3-Cylinder' },
      { label: 'Alternator Excitation', value: 'Brushless AVR Controlled' },
      { label: 'Fuel Base Capacity', value: '75 Liters (18 Hours Run)' },
      { label: 'Chassis Compliance', value: 'Highway Speed RTO Certified' },
    ],
  },
  {
    id: 'greaves-30kva',
    name: 'Greaves 30 kVA Acoustic Trailer',
    kvaRating: '30 kVA',
    kwRating: '24 kW',
    category: 'towable',
    badge: '30 kVA HEAVY TOW',
    tag: 'DUAL-AXLE ALL-TERRAIN',
    subtitle: 'Rugged construction & disaster relief trailer-mounted genset with rapid AMF integration.',
    engineBrand: 'Greaves G-Series Heavy-Duty Diesel',
    soundLevel: '63 dBA @ 7m',
    fuelType: 'Diesel (Low BSFC)',
    mobilityFormat: 'Twin-Axle Balanced Leaf Spring Chassis',
    specs: [
      { label: 'Cooling System', value: 'Pressurized Heavy Tropical Radiator' },
      { label: 'Voltage Regulation', value: '±1.0% Digital Smart AVR' },
      { label: 'Braking & Hitch', value: 'Inertia Override + 50mm Ball Hitch' },
      { label: 'Emergency Illumination', value: 'External Mast Light Receptacle' },
    ],
  },
  {
    id: 'panda-60kva',
    name: 'Panda 60 kVA Super-Silent Mobile',
    kvaRating: '60 kVA',
    kwRating: '48 kW',
    category: 'sync-plants',
    badge: '60 kVA VARIABLE RPM',
    tag: 'ENCLOSED PRIME MOVER',
    subtitle: 'Variable-speed water-cooled synchronous power plant for luxury events and telecom transmission.',
    engineBrand: 'Kubota / Perkins Industrial 4-Cylinder',
    soundLevel: '61 dBA @ 7m (Super-Quiet)',
    fuelType: 'Diesel Common Rail Direct Injection',
    mobilityFormat: 'Heavy Commercial Towable Enclosure',
    specs: [
      { label: 'Speed Range', value: '1200 - 2400 RPM Adaptive Load' },
      { label: 'Total Harmonic Distortion', value: '< 1.8% Studio Grade' },
      { label: 'Dual Liquid Cooling', value: 'Alternator & Block Full Water-Cooled' },
      { label: 'Telematics Module', value: 'Live 4G GPS, Fuel & Load Telemetry' },
    ],
  },
  {
    id: 'plant-125kva',
    name: '125 kVA Mobile Substation Plant',
    kvaRating: '125 kVA',
    kwRating: '100 kW',
    category: 'sync-plants',
    badge: '125 kVA MOBILE PLANT',
    tag: 'MULTI-AXLE TRUCK TOWED',
    subtitle: 'Self-contained emergency mobile power plant with auto-synchronizing panel and auxiliary switchgear.',
    engineBrand: 'Cummins 6BTAA / Tata Turbocharged',
    soundLevel: '65 dBA @ 7m',
    fuelType: 'Heavy Diesel Fuel CPCB IV+',
    mobilityFormat: 'Multi-Axle Heavy Road Trailer with Air Brakes',
    specs: [
      { label: 'Synchronizing Facility', value: 'Paralleling Controller with Motorized MCCB' },
      { label: 'Cable Management', value: 'Motorized 50m Heavy Feeder Drum' },
      { label: 'Fuel Autonomy', value: '350 Liters Internal Bulk Cell (24h)' },
      { label: 'Transit Classification', value: 'National Highway Heavy Transport' },
    ],
  },
];

export const PORTABLE_COMPARISON_MATRIX: PortableComparisonRow[] = [
  {
    model: 'AGT 3000 Inverter',
    engine: 'Honda GX200 OHV',
    alternator: 'Digital Pure Sine Inverter',
    kvaKw: '3 kVA / 2.8 kW',
    fuelType: 'Petrol',
    soundAt7m: '58 dBA',
    mobilityType: 'Hand-Carry / Trolley',
  },
  {
    model: 'Honda EU70is Silent',
    engine: 'Honda GX390 EFI',
    alternator: 'Microprocessor Inverter',
    kvaKw: '7 kVA / 5.5 kW',
    fuelType: 'Petrol EFI',
    soundAt7m: '60 dBA',
    mobilityType: 'Wheel Trolley',
  },
  {
    model: 'Yanmar 15 kVA Diesel',
    engine: 'Yanmar 3TNV88 Liquid',
    alternator: 'Brushless Synchronous AVR',
    kvaKw: '15 kVA / 12 kW',
    fuelType: 'Diesel',
    soundAt7m: '62 dBA',
    mobilityType: 'AL-KO Single Axle',
  },
  {
    model: 'Greaves 30 kVA Trailer',
    engine: 'Greaves G-Series 4-Cyl',
    alternator: 'Mecc Alte / Stamford Class H',
    kvaKw: '30 kVA / 24 kW',
    fuelType: 'Diesel',
    soundAt7m: '63 dBA',
    mobilityType: 'Twin-Axle Road Trailer',
  },
  {
    model: 'Panda 60 kVA Synchronous',
    engine: 'Kubota CRDi Turbo',
    alternator: 'Permanent Magnet Synchronous',
    kvaKw: '60 kVA / 48 kW',
    fuelType: 'Diesel',
    soundAt7m: '61 dBA',
    mobilityType: 'Commercial Towable',
  },
  {
    model: '125 kVA Mobile Substation',
    engine: 'Cummins 6BTAA / Tata',
    alternator: 'Stamford Industrial PMG',
    kvaKw: '125 kVA / 100 kW',
    fuelType: 'Diesel',
    soundAt7m: '65 dBA',
    mobilityType: 'Multi-Axle Heavy Trailer',
  },
];

export const PORTABLE_APPLICATIONS: PortableApplicationItem[] = [
  {
    id: 'broadcast-film',
    title: 'Broadcast & Outdoor Film Shooting',
    description:
      'Sub-62 dBA silent audio floor allowing clean sync-sound recording directly next to production vans without rumbling background acoustic pollution.',
    iconName: 'Tv',
  },
  {
    id: 'disaster-relief',
    title: 'Disaster Relief & Flood Control',
    description:
      'High ground-clearance all-terrain trailers deploying emergency submersible de-watering pumps, high-intensity LED floodlights, and medical field stations.',
    iconName: 'LifeBuoy',
  },
  {
    id: 'telecom-towers',
    title: 'Telecom Tower & Cellular Stations',
    description:
      'Fast-tow DC 48V charging and 3-phase AC replenishment restoring remote hilltop repeater masts and base stations during regional grid failures.',
    iconName: 'Radio',
  },
  {
    id: 'healthcare-clinics',
    title: 'Healthcare / Mobile Clinics',
    description:
      'Computer-grade pure sine-wave AC power safe for diagnostic mobile CT scan vans, mobile digital X-ray units, ultrasound labs, and cryogenic vaccine cold storage.',
    iconName: 'Activity',
  },
  {
    id: 'infrastructure-work',
    title: 'Infrastructure & Highway Construction',
    description:
      'Towable heavy power for night highway milling, bridge deck pouring, borehole drilling rigs, and mobile welding workshops moving progressively along work zones.',
    iconName: 'Construction',
  },
  {
    id: 'vip-events',
    title: 'VIP Events & Precision Exhibitions',
    description:
      'Twin synchronized mobile sets running in active N+1 redundancy for sports arena feeds, large audio-visual stages, outdoor royal galas, and national expos.',
    iconName: 'Sparkles',
  },
];

export const PORTABLE_FAQS: PortableFaqItem[] = [
  {
    question: 'What makes these mobile generators quieter than standard diesel generators?',
    answer:
      'Unlike standard commercial canopy gensets that radiate sound directly through perimeter louvers, our mobile and portable units utilize aerodynamic capsule enclosures packed with non-combustible high-density rockwool acoustic baffling, multi-stage labyrinth exhaust routing, elastomeric engine-to-chassis vibration dampers, and liquid-cooled alternators that eliminate noisy cooling fan blades.',
  },
  {
    question: 'Can these mobile generators run continuously 24/7 or only for backup?',
    answer:
      'All our mobile diesel units (15 kVA to 125 kVA) feature 100% prime-rated water-cooled industrial powertrains designed for non-stop continuous 24/7 running in up to 50°C ambient temperatures. Internal oversized base fuel tanks provide between 14 to 24 hours of autonomous run-time per fill, supplemented by external quick-connect auxiliary bulk fuel ports.',
  },
  {
    question: 'What driving licenses or towing approvals are needed for towable generators?',
    answer:
      'Our single-axle and dual-axle trailers are fully certified and engineered with genuine German AL-KO axles, inertia overrun brakes, safety breakaway chains, and complete RTO-compliant 12V/24V tail and indicator lighting. They can be safely towed behind standard utility vehicles, pickups, or tractors on public roads across Telangana and Andhra Pradesh.',
  },
  {
    question: 'How fast can you dispatch a mobile generator to site in Hyderabad or Telangana?',
    answer:
      'We maintain prime-ready hitched mobile generators at our central Sanath Nagar / ESI Hyderabad Depot with dedicated towing trucks standing by 24/7/365. For emergency situations across Greater Hyderabad (HITEC City, Gachibowli, Shamshabad, Secunderabad, Medchal), our target site mobilization SLA is under 120 minutes from confirmation.',
  },
];

export const PORTABLE_BRAND_STANDARDS: string[] = [
  'HONDA SIEL',
  'GREAVES COTTON',
  'KOHLER POWER',
  'YANMAR DIESEL',
  'BRIGGS & STRATTON',
  'CPCB IV+',
  'ISO 8528',
];
