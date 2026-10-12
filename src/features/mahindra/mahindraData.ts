import {
  rentalTrailerCompactImg,
  rentalCommercialSkidImg,
  rentalIndustrialHeavyImg,
  sparesHeroEngineImg,
  greaves500Img,
  greaves250Img,
} from '../../assets/images';

export interface MahindraProduct {
  id: string;
  name: string;
  category: 'compact' | 'commercial' | 'industrial';
  capacityBadge: string;
  phaseBadge: string;
  image: string;
  description: string;
  engineModel: string;
  primeRating: string;
  noiseLevel: string;
  fuelTank: string;
}

export interface MahindraBenchmark {
  id: string;
  title: string;
  description: string;
}

export interface MahindraComparisonRow {
  capacity: string;
  engineModel: string;
  cylinders: string;
  aspiration: string;
  fuelConsumption75: string;
  oilSump: string;
  noiseLevel: string;
}

export interface MahindraTurnkeyService {
  id: string;
  title: string;
  description: string;
}

export interface MahindraFaq {
  question: string;
  answer: string;
}

export const MAHINDRA_BENCHMARKS: MahindraBenchmark[] = [
  {
    id: 'mpower',
    title: 'Mahindra mPOWER & mNEO Powertrains',
    description:
      'Equipped with proven Mahindra automotive-grade engines, the mPOWER and mNEO series deliver class-leading fuel economy, low vibration, and superior thermal efficiency for demanding environments.',
  },
  {
    id: 'heat-dissipation',
    title: 'Optimum Heat Dissipation (50°C Heavy Radiator)',
    description:
      'Designed for tropical operating conditions, heavy-duty radiators ensure continuous full-load output without deration even during extreme Telangana summer ambient temperatures up to 50°C.',
  },
  {
    id: 'acoustic',
    title: 'Heavy-Gauge Acoustic Enclosures',
    description:
      'Fabricated from high-grade galvanized steel with 9-tank pretreatment and powder-coat finish, providing corrosion resistance, fire-retardant acoustic foam dampening, and noise attenuation to <75 dBA @ 1m.',
  },
  {
    id: 'amf-telematics',
    title: 'Eco-Integrated AMF & Telematics Dashboard',
    description:
      'Intelligent micro-controller-based Auto Mains Failure (AMF) panels with remote genset monitoring, fault logging, auto start/stop, and real-time load telemetry via cloud IoT dashboard.',
  },
  {
    id: 'class-h',
    title: 'Class H Alternator with Low THD',
    description:
      'Brushless, four-pole, self-excited alternators with Class H insulation, vacuum pressure impregnation (VPI), and total harmonic distortion (THD) <3%, safe for sensitive IT loads.',
  },
  {
    id: 'warranty',
    title: 'Comprehensive Pan-India Warranty Support',
    description:
      'Every Mahindra Powerol generator is backed by comprehensive manufacturer warranty, supported by M.R Generators factory-trained technicians and genuine parts depots across Hyderabad.',
  },
];

export const MAHINDRA_PRODUCTS: MahindraProduct[] = [
  {
    id: 'mahindra-5-15',
    name: 'Mahindra Powerol 5 kVA - 15 kVA Silent DG Set',
    category: 'compact',
    capacityBadge: '5 - 15 kVA',
    phaseBadge: 'SINGLE / 3 PHASE',
    image: rentalTrailerCompactImg,
    description:
      'Ideal for telecom towers, clinics, retail showrooms, and residential villas requiring whisper-silent standby power.',
    engineModel: 'Mahindra mPower Single/Twin Cyl',
    primeRating: '5 - 15 kVA / 4 - 12 kW',
    noiseLevel: '< 75 dBA @ 1m',
    fuelTank: '40 - 65 Liters',
  },
  {
    id: 'mahindra-20-40',
    name: 'Mahindra Powerol 20 kVA - 40 kVA Silent DG Set',
    category: 'compact',
    capacityBadge: '20 - 40 kVA',
    phaseBadge: '3 PHASE 415V',
    image: rentalCommercialSkidImg,
    description:
      'Purpose-engineered for supermarkets, bank branches, small office spaces, and commercial fuel stations.',
    engineModel: 'Mahindra 3-Cylinder mNEO',
    primeRating: '20 - 40 kVA / 16 - 32 kW',
    noiseLevel: '< 75 dBA @ 1m',
    fuelTank: '75 - 120 Liters',
  },
  {
    id: 'mahindra-45-82-5',
    name: 'Mahindra Powerol 45 kVA - 82.5 kVA Commercial DG Set',
    category: 'commercial',
    capacityBadge: '45 - 82.5 kVA',
    phaseBadge: 'CPCB-IV+ COMPLIANT',
    image: greaves250Img,
    description:
      'Best-in-class power density and fuel efficiency for hospitals, multi-story apartments, hotels, and education institutes.',
    engineModel: 'Mahindra 4-Cylinder Turbocharged',
    primeRating: '45 - 82.5 kVA / 36 - 66 kW',
    noiseLevel: '< 75 dBA @ 1m',
    fuelTank: '140 - 200 Liters',
  },
  {
    id: 'mahindra-100-160',
    name: 'Mahindra Powerol 100 kVA - 160 kVA Industrial Heavy DG Set',
    category: 'commercial',
    capacityBadge: '100 - 160 kVA',
    phaseBadge: 'HEAVY DUTY',
    image: rentalIndustrialHeavyImg,
    description:
      'Robust workhorse for manufacturing facilities, cold storage warehouses, pharma labs, and commercial high-rises.',
    engineModel: 'Mahindra 4/6-Cyl Aftercooled',
    primeRating: '100 - 160 kVA / 80 - 128 kW',
    noiseLevel: '< 75 dBA @ 1m',
    fuelTank: '220 - 350 Liters',
  },
  {
    id: 'mahindra-200-320',
    name: 'Mahindra Powerol 200 kVA - 320 kVA High-Horsepower DG Set',
    category: 'industrial',
    capacityBadge: '200 - 320 kVA',
    phaseBadge: 'PRIME POWER',
    image: sparesHeroEngineImg,
    description:
      'High displacement prime power generation for continuous duty across process industries, heavy fabrication, and data centers.',
    engineModel: 'Mahindra 6-Cyl Turbo-Intercooled',
    primeRating: '200 - 320 kVA / 160 - 256 kW',
    noiseLevel: '< 75 dBA @ 1m',
    fuelTank: '450 - 650 Liters',
  },
  {
    id: 'mahindra-380-500',
    name: 'Mahindra Powerol 380 kVA - 500 kVA Mega Industrial DG Set',
    category: 'industrial',
    capacityBadge: '380 - 500 kVA',
    phaseBadge: 'MEGA INDUSTRIAL',
    image: greaves500Img,
    description:
      'Flagship heavy-power generator with electronic common rail governing, designed for massive industrial infrastructure and turnkey plant operations.',
    engineModel: 'Mahindra Heavy High-Output CRDi',
    primeRating: '380 - 500 kVA / 304 - 400 kW',
    noiseLevel: '< 75 dBA @ 1m',
    fuelTank: '750 - 990 Liters',
  },
];

export const MAHINDRA_COMPARISON_MATRIX: MahindraComparisonRow[] = [
  {
    capacity: '5 - 15 kVA',
    engineModel: 'Mahindra mPower Single/Twin',
    cylinders: '1 / 2',
    aspiration: 'Naturally Aspirated',
    fuelConsumption75: '1.4 - 3.2 L/hr',
    oilSump: '3.5 - 6.5 Liters',
    noiseLevel: '< 75 dBA',
  },
  {
    capacity: '20 - 40 kVA',
    engineModel: 'Mahindra 3-Cyl mNEO',
    cylinders: '3 Cyl',
    aspiration: 'Turbocharged',
    fuelConsumption75: '4.8 - 8.5 L/hr',
    oilSump: '8.5 - 11 Liters',
    noiseLevel: '< 75 dBA',
  },
  {
    capacity: '45 - 82.5 kVA',
    engineModel: 'Mahindra 4-Cyl mPower',
    cylinders: '4 Cyl',
    aspiration: 'Turbocharged Intercooled',
    fuelConsumption75: '10.2 - 17.5 L/hr',
    oilSump: '13 - 16 Liters',
    noiseLevel: '< 75 dBA',
  },
  {
    capacity: '100 - 160 kVA',
    engineModel: 'Mahindra Heavy 4/6-Cyl Series',
    cylinders: '4 / 6 Cyl',
    aspiration: 'Turbocharged Aftercooled',
    fuelConsumption75: '21.0 - 34.0 L/hr',
    oilSump: '18 - 24 Liters',
    noiseLevel: '< 75 dBA',
  },
  {
    capacity: '200 - 320 kVA',
    engineModel: 'Mahindra High-HP Electronic Series',
    cylinders: '6 Cyl',
    aspiration: 'CRDi Electronic Turbocharged',
    fuelConsumption75: '42.0 - 68.0 L/hr',
    oilSump: '28 - 38 Liters',
    noiseLevel: '< 75 dBA',
  },
  {
    capacity: '380 - 500 kVA',
    engineModel: 'Mahindra Heavy CRDi Flagship Series',
    cylinders: '6 Cyl Multi-Valve',
    aspiration: 'Twin Turbo Intercooled',
    fuelConsumption75: '82.0 - 105.0 L/hr',
    oilSump: '45 - 60 Liters',
    noiseLevel: '< 75 dBA',
  },
];

export const MAHINDRA_TURNKEY_SERVICES: MahindraTurnkeyService[] = [
  {
    id: 'civil',
    title: 'Civil Foundation & Anti-Vibration Plinths',
    description:
      'Design and structural execution of reinforced concrete foundation plinths and anti-vibration mountings (AVMs) isolated from building structures.',
  },
  {
    id: 'electrical',
    title: 'CEA & Discom Electrical Cabling',
    description:
      'Heavy-duty copper/aluminum LT power cabling, cable tray fabrication, earthing grids as per IS 3043, and statutory electrical inspectorate approvals.',
  },
  {
    id: 'amf',
    title: 'AMF Panels & Auto-Synchronizing',
    description:
      'Custom automated switchgear, Automatic Mains Failure panels, auto-changeover contactors, and multi-genset load sharing controllers.',
  },
  {
    id: 'amc',
    title: 'Comprehensive Mahindra AMC',
    description:
      'Annual Maintenance Contracts covering routine servicing, CPCB emission compliance, 24/7 breakdown callouts, and genuine Mahindra spare parts replenishment.',
  },
];

export const MAHINDRA_FAQS: MahindraFaq[] = [
  {
    question: 'Why choose Mahindra Powerol over competing generator brands in Hyderabad?',
    answer:
      'Mahindra Powerol generators feature automotive-engineered common rail diesel engines delivering up to 25% lower fuel consumption, lower vibration levels, and exceptionally high torque response. Combined with M.R Generators authorized dealership support, Hyderabad customers receive direct factory pricing, immediate inventory dispatch, and factory-trained technicians.',
  },
  {
    question: 'Are all Mahindra generators compliant with latest CPCB-IV+ emission norms?',
    answer:
      'Yes. The entire Mahindra Powerol portfolio from 5 kVA to 500 kVA is fully certified and compliant with Central Pollution Control Board (CPCB-IV+) environmental guidelines, featuring advanced exhaust aftertreatment and particulate filtration.',
  },
  {
    question: 'How fast can M.R Generators dispatch and commission a unit from the Hyderabad yard?',
    answer:
      'We maintain live inventory of high-demand Mahindra Powerol capacities (15 kVA to 125 kVA) at our Hyderabad depot. Standard units can be delivered same-day and commissioned within 24 to 48 hours, including AMF panel termination and load trials.',
  },
  {
    question: 'Does M.R Generators handle statutory CEA / CEIG approvals and electrical safety inspection?',
    answer:
      'Yes. Our turnkey EPC engineering team manages end-to-end electrical liaisoning, earth resistance certification (IS 3043), chimney height validation, and formal Chief Electrical Inspector to Government (CEIG / CEA) drawing approvals across Telangana.',
  },
];
