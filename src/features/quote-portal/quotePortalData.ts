export interface VerticalPill {
  id: string;
  label: string;
  icon: string;
}

export interface TurnkeyAddon {
  id: string;
  title: string;
  description: string;
}

export interface QuoteFaq {
  question: string;
  answer: string;
}

export const VERTICAL_PILLS: VerticalPill[] = [
  { id: 'Sales', label: 'Sales (New DG)', icon: 'shopping-cart' },
  { id: 'Rental Services', label: 'Rental Fleet', icon: 'truck' },
  { id: 'Spares & Accessories', label: 'OEM Spares', icon: 'wrench' },
  { id: 'AMC Services', label: 'AMC Support', icon: 'shield-check' },
  { id: 'Service & Repair', label: 'Repair/Overhaul', icon: 'settings' },
];

export const BRAND_OPTIONS = [
  'Any Recommendation (Best Value & Ready Stock)',
  'Tata Generators (Heavy Commercial)',
  'Cummins Generators (Global Prime Standard)',
  'Eicher Generators (High Fuel Efficiency)',
  'Ashok Leyland Generators (Industrial Robust)',
  'Mahindra Generators (Quiet CPCB IV+)',
  'Kirloskar Generators (KOEL Green Series)',
  'Caterpillar Generators (Mega Standby)',
  'Mobile / Portable Generators (Trailer Mounted)',
];

export const CAPACITY_OPTIONS = [
  '82.5 kVA - 125 kVA (Mid Industrial & Tech Hubs)',
  '5 kVA - 15 kVA (Retail & Clinic Backup)',
  '25 kVA - 62.5 kVA (Commercial Office & Petrol Pump)',
  '160 kVA - 250 kVA (Pharma Plant & Cold Storage)',
  '320 kVA - 500 kVA (Heavy Manufacturing)',
  '750 kVA - 2000 kVA (High-Rise & Multi-Megawatt)',
  'Help Me Calculate My Load (Conduct On-Site Sizing)',
];

export const TURNKEY_ADDONS: TurnkeyAddon[] = [
  {
    id: 'amf',
    title: 'AMF Auto Mains Failure Panel',
    description: 'Instant automatic changeover when TSSPDCL power cuts',
  },
  {
    id: 'plinth',
    title: 'RCC Plinth & Anti-Vibration Pads',
    description: 'Engineered foundation layout & heavy dampening',
  },
  {
    id: 'chimney',
    title: 'Exhaust MS Chimney & Cladding',
    description: 'Roof-top vertical flue run up to 30 meters with heat lagging',
  },
  {
    id: 'cabling',
    title: 'Armoured Copper/Aluminium Cabling',
    description: 'Cable trays, terminations, end-sealing & busduct linkages',
  },
  {
    id: 'ceig',
    title: 'CEIG Statutory & PCB Approvals',
    description: 'Chief Electrical Inspectorate Drawing & clearance facilitation',
  },
  {
    id: 'buyback',
    title: 'Old DG Set Exchange / Scrap Buyback',
    description: 'Instant trade-in discount offset for obsolete diesel plants',
  },
];

export const QUOTE_FAQS: QuoteFaq[] = [
  {
    question: 'How quickly will I receive the official proforma quotation?',
    answer:
      'Standard capacity ratings (15 kVA to 500 kVA) receive engineering proforma quotes within 15 to 30 minutes during working depot hours. For complex turnkey setups requiring customized exhaust chimney drawings, CEIG clearances, or multi-megawatt synchronizing panels, our lead engineer will call within 1 hour to finalize design requirements before emailing the proforma.',
  },
  {
    question: 'Do you offer a free on-site electrical inspection in Hyderabad?',
    answer:
      'Yes. For commercial and manufacturing facilities located within the Greater Hyderabad Municipal Corporation (GHMC) limits and neighboring industrial zones (Cherlapally, Jeedimetla, Patancheru, Shamshabad), we dispatch an electrical sizing engineer free of charge to log peak running load, inrush requirements, and physical plinth coordinates.',
  },
  {
    question: 'Can M.R Generators handle CEIG and PCB statutory clearances?',
    answer:
      'Absolutely. We provide complete turnkey statutory assistance including submission of single-line diagrams (SLD), earthing pit test certifications, acoustic CPCB IV+ compliance affidavits, and inspection liaison with the Chief Electrical Inspector to Government (CEIG) Telangana and Andhra Pradesh.',
  },
  {
    question: 'What payment terms and DG set financing options are supported?',
    answer:
      'We support direct bank NEFT/RTGS, corporate Letters of Credit (LC), and tie-ups with leading equipment financing institutions (HDFC, ICICI, Tata Capital) for eligible industrial entities. Rental solutions are billed on flexible 30-day billing cycles with advance mobilization deposit.',
  },
];
