import {
  rentalTrailerCompactImg,
  rentalCommercialSkidImg,
  rentalIndustrialHeavyImg,
  greaves500Img,
} from '../../assets/images';

export interface RentalPackage {
  id: string;
  name: string;
  duration: string;
  badge?: string;
  description: string;
  points: string[];
  buttonLabel: string;
}

export interface RentalFleetItem {
  id: string;
  capacityRange: string;
  title: string;
  subtitle: string;
  image: string;
  targetLoads: string;
  mobility: string;
  fuelEfficiency: string;
  buttonLabel: string;
}

export interface RentalInclusionItem {
  id: string;
  title: string;
  description: string;
}

export interface RentalFaqItem {
  question: string;
  answer: string;
}

export const RENTAL_PACKAGES: RentalPackage[] = [
  {
    id: 'emergency-event',
    name: 'Emergency & Event',
    duration: 'Daily / 1-7 Days Rental',
    description: 'Ideal for film shoots, weddings, exhibitions, data server downtime, or sudden commercial blackout emergency in Hyderabad.',
    points: [
      'Same-day instant mobilization',
      'Technician and operator included',
      'Temporary AMF & cable connection',
    ],
    buttonLabel: 'BOOK EVENT',
  },
  {
    id: 'short-term',
    name: 'Short-Term Hire',
    duration: 'Weekly / 1-4 Weeks',
    description: 'Engineered for construction units, industrial plant maintenance shutdowns, bridge testing, and site commissioning testing.',
    points: [
      'Flexible weekly extension options',
      'Servicing and lube support included',
      'Dedicated trailer/trolley mobile fleet',
    ],
    buttonLabel: 'HIRE WEEKLY',
  },
  {
    id: 'long-term',
    name: 'Long-Term Lease',
    duration: 'Monthly to Annual (1-5 Years)',
    badge: 'MOST POPULAR',
    description: 'Enterprise solution for IT campuses, healthcare networks, SEZ manufacturing units, and infrastructure power plants.',
    points: [
      'Full preventive maintenance included',
      'Dedicated spare parts backup on site',
      'Discounted kVA tariffs with high SLA',
    ],
    buttonLabel: 'GET ENTERPRISE QUOTE',
  },
  {
    id: 'standby-peaking',
    name: 'Standby & Peaking',
    duration: 'Seasonal / On-Demand',
    description: 'For high-season power deficits in summer heat peaks, seasonal agricultural cold storage, and grid power outages.',
    points: [
      'Pay only for active running hours',
      'Guaranteed zero-delay arrival',
      'Escalated priority hotline dispatch',
    ],
    buttonLabel: 'RESERVE STANDBY',
  },
];

export const RENTAL_FLEET: RentalFleetItem[] = [
  {
    id: 'fleet-5-30',
    capacityRange: '5 - 30 kVA',
    title: 'Compact Mobile Fleet',
    subtitle: 'Compact, trailer-driven portable generators for mobile and on-demand power.',
    image: rentalTrailerCompactImg,
    targetLoads: 'Small offices, film shoots, retail, clinics',
    mobility: 'Road trailer / trolley mounted',
    fuelEfficiency: 'Ultra-efficient 1.8 - 4.2 L/hr',
    buttonLabel: 'RENT 5 - 30 kVA',
  },
  {
    id: 'fleet-35-125',
    capacityRange: '35 - 125 kVA',
    title: 'Mid-Size Commercial Fleet',
    subtitle: 'Diesel gensets equipped with integrated CPCB-IV acoustic soundproof canopies.',
    image: rentalCommercialSkidImg,
    targetLoads: 'Commercial buildings, banquet halls, hospitals',
    mobility: 'Heavy skid or truck mounted',
    fuelEfficiency: 'Economical common rail electronic FIP',
    buttonLabel: 'RENT 35 - 125 kVA',
  },
  {
    id: 'fleet-140-500',
    capacityRange: '140 - 500 kVA',
    title: 'Heavy Industrial Fleet',
    subtitle: 'Continuous heavy-duty prime power sets for manufacturing plants and continuous loads.',
    image: rentalIndustrialHeavyImg,
    targetLoads: 'Manufacturing units, infra, data centers',
    mobility: 'Heavy-duty steel container / plinth',
    fuelEfficiency: 'High-torque turbocharged fuel metering',
    buttonLabel: 'RENT 140 - 500 kVA',
  },
  {
    id: 'fleet-600-2000',
    capacityRange: '600 - 2000 kVA',
    title: 'Mega Containerized Fleet',
    subtitle: 'Multi-megawatt synchronized power solutions for large-scale enterprise operations.',
    image: greaves500Img,
    targetLoads: 'IT parks, hospitals, grid substations, mining',
    mobility: 'Multi-set synchronized container plants',
    fuelEfficiency: 'Electronic governor sync automation',
    buttonLabel: 'RENT 600 - 2000 kVA',
  },
];

export const RENTAL_OEM_BRANDS = [
  { name: 'TATA MOTORS', range: '25 - 125 kVA' },
  { name: 'CUMMINS', range: '30 - 2000 kVA' },
  { name: 'ASHOK LEYLAND', range: '10 - 250 kVA' },
  { name: 'KIRLOSKAR (KOEL)', range: '5 - 600 kVA' },
  { name: 'GREAVES POWER', range: '10 - 500 kVA' },
  { name: 'CATERPILLAR (CAT)', range: '250 - 2000 kVA' },
  { name: 'PERKINS', range: '10 - 2000 kVA' },
  { name: 'STAMFORD', range: 'High Excitation' },
];

export const RENTAL_INCLUSIONS: RentalInclusionItem[] = [
  {
    id: 'canopy',
    title: '100% Soundproof Acoustic Enclosure',
    description: 'CPCB-IV compliant acoustic canopies designed to maintain sound emissions below statutory threshold at 1-meter distance, ideal for urban hospitals and residential areas.',
  },
  {
    id: 'operators',
    title: 'Certified Operators & Pilots',
    description: 'Licensed technicians and trained DG operators available for round-the-clock operations and on-site servicing requirements.',
  },
  {
    id: 'fuel',
    title: 'Fuel Management & Auxiliary Tanks',
    description: 'Complete fuel management solution with on-site fuel monitoring and extended runtime auxiliary diesel supply connectivity.',
  },
  {
    id: 'cables',
    title: 'Power Cables & AMF Panels',
    description: 'Heavy-duty copper flexible cabling, junction boxes, and automated transfer switches (ATS / AMF) included for seamless power fail-over during outages.',
  },
  {
    id: 'guarantee',
    title: 'No Breakdown Guarantee',
    description: '100% replacement guarantee if your generator encounters operational breakdown during rental period with immediate field van dispatch within 2 hours.',
  },
  {
    id: 'transport',
    title: 'Turnkey Transport & Crane Rigging',
    description: 'Complete logistics handled by M.R Generators fleet vans, trailers, and professional crane rigging crew for challenging installation sites.',
  },
];

export const RENTAL_FAQS: RentalFaqItem[] = [
  {
    question: 'How quickly can a rental generator be deployed to my site in Hyderabad?',
    answer: 'For standard applications within GHMC limits (HITEC City, Jeedimetla, Shamshabad, Cherlapally, Gachibowli), we offer emergency dispatch within 2 to 4 hours from our SR Nagar depot. For custom multi-megawatt setups or synchronized setups, deployment takes 12 to 24 hours depending on crane access.',
  },
  {
    question: 'Is a trained operator and electrical personnel included in the rental agreement?',
    answer: 'Yes. We offer both self-managed equipment rentals and fully-manned packages with certified DG operators and field electrical engineers on 8-hour, 12-hour, or round-the-clock 24/7 rotating shifts.',
  },
  {
    question: 'What happens if one of the rental generators fails during operation?',
    answer: 'We operate under a zero-breakdown guarantee. In the rare event of mechanical or electrical disruption, our mobile rapid emergency van reaches your site within 2 hours. If issue is not resolvable on-site, a backup replacement generator is mobilized immediately at no additional cost.',
  },
  {
    question: 'What documents and site preparations are required to hire a generator?',
    answer: 'Commercial clients need GST registration, purchase order, and identity proof. Site-wise, a level hard-standing ground (concrete/paver/soil), clear access for delivery trucks, and proper ventilation clearance around the exhaust must be provided.',
  },
];
