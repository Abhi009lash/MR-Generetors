export const APP_CONFIG = {
  companyName: 'M.R GENERATORS',
  tagline: 'POWERING CRITICAL INFRASTRUCTURE SINCE 2014',
  establishedYear: 2014,
  phonePrimary: '8977778811',
  phoneSecondary: '9014902266',
  phoneLandline: '040-48547105',
  email: 'info@mrgenerators.com',
  address: {
    line1: 'Plot No. 12, IDA Mallapur',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500076',
    full: 'Plot No. 12, IDA Mallapur, Hyderabad - 500076, Telangana',
  },
  hours: '24/7 365 Days Emergency Support',
  certifications: [
    'Authorised Greaves Power Dealership',
    'CPCB IV+ Emission Certified',
    'ISO 9001:2015 Compliant Services',
  ],
  capacityRange: {
    min: 5,
    max: 2000,
  },
} as const;

export const CAPACITY_OPTIONS = [
  '5 kVA - 30 kVA (Commercial & Retail)',
  '35 kVA - 82.5 kVA (Clinics & Hospitality)',
  '100 kVA - 250 kVA (Industrial & IT Parks)',
  '320 kVA - 750 kVA (Manufacturing & Hospitals)',
  '1000 kVA - 2000 kVA (Mega Plants & Substations)',
] as const;

export const APPLICATION_OPTIONS = [
  'New DG Set Purchase',
  'Industrial Manufacturing',
  'Hospital & Critical Healthcare',
  'Data Center & IT Campus',
  'Commercial Complex & Malls',
  'Turnkey Substation / Synchronized DG Sets',
  'Rental & Standby Contingency',
] as const;
