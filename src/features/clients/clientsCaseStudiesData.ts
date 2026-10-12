export interface ClientCaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  capacity: string;
  metricLabel: string;
  metricValue: string;
  metricColor?: string;
  specLabel: string;
  specValue: string;
  status: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ClientTestimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  rating: number;
}

export interface AssuranceCard {
  id: string;
  title: string;
  description: string;
  iconName: 'verified_user' | 'speed' | 'handshake';
}

export const CASE_STUDIES: ClientCaseStudy[] = [
  {
    id: 'bharat-biotech-campus',
    category: 'Pharma & Vaccine Security',
    title: 'Bharat Biotech Vaccine Campus',
    description:
      'Turnkey installation of dual 1,250 kVA Cummins/Greaves power soundproof units engineered with automated load-dependent start-stop and bus-coupler logic for critical cold storage and bioreactor isolation.',
    capacity: 'Dual 1,250 kVA (2.5 MVA)',
    metricLabel: 'Transfer Delay:',
    metricValue: '< 9.4 Seconds AMF',
    metricColor: 'text-[#D32F2F]',
    specLabel: 'Acoustic Spec:',
    specValue: '< 70 dBA at 1 Meter',
    status: 'Status: Operational (Active 24x7 AMC)',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDrwln8YhoYnURcVGIWkYRwLZCfXbrLKK80q75raPvPwmcBmh_oJuHDLcAYXLjhkczAEM-lvXEmtQVj7Ku5hZoCEimjX_cfjz5mnX4sYPNElFMlO4JrZaa6XJ9q0SSpIx0mYnbgFnFX439FqweYXn8Cre096aEJGbxbSv9JKHPSAaiP14Wls91lCcAs0jFWdPNixoZf7Ua6vPjGmBW8XVi0XyauRJJy41S3f_LfAYfYRxLCxbl62ORG6Q',
    imageAlt:
      'Bharat Biotech vaccine manufacturing campus with synchronized heavy diesel generators encased in acoustic soundproof enclosures',
  },
  {
    id: 'telangana-water-works',
    category: 'State Irrigation & PSU',
    title: 'Telangana Water Works & River Board',
    description:
      'Rapid turnkey mobilization of heavy trailer-mounted acoustic generators across river lift irrigation sites during high-demand regional grid line relocations with dedicated 24/7 on-site operator support.',
    capacity: 'Multiple 500 kVA Mobile Sets',
    metricLabel: 'Deployment Time:',
    metricValue: '< 4 Hours Emergency SLA',
    metricColor: 'text-[#385BAB]',
    specLabel: 'Configuration:',
    specValue: 'All-Terrain Mobile Trailer',
    status: 'Status: Active Emergency Support',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVFlJd26jxVvghFT0hpKQ5KQqnMzXd0KlYiKd1DVp7sQQf5IwMDHnutzmqPXXu5oHyzUL5E8iFrJ_khfPbiKTa0NFjRVlKlJzRoVtssje9uKfwInkrbosAeM9_bjtjKRLz6-GysXcszaXBpDztTtsuIBiPjrrPm3mpmKls3iQ6y-Jl42aySy6E1kehuXKyI9YnJZxjVh156Rm3pxeAopHBdYsHXnKVRsqxujEqmhXiEKvI2dkk3L7kjg',
    imageAlt:
      'Heavy mobile trailer mounted diesel generator deployed at Telangana irrigation water project site',
  },
  {
    id: 'jayabheri-commercial-hub',
    category: 'Commercial High-Rise',
    title: 'Jayabheri Tech Commercial Hub',
    description:
      'Complex basement installation involving 40-meter vertical acoustic exhaust ducting through service shafts, underground 5,000-liter bulk diesel fuel transfer line, and high-frequency noise dampening.',
    capacity: '1,500 kVA Prime Standby',
    metricLabel: 'Rooftop Stack:',
    metricValue: '40-Meter Vertical Duct',
    specLabel: 'Fuel Resilience:',
    specValue: '72-Hour Continuous Run',
    status: 'Status: Commissioned & Fully Certified',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC7nMv1vVEglD-V_2xVYQSgGXWjGOzpCXr_C1qJPON4SMg-xy5hG-AS-xlJa26YgGZUiJSlBS6NZQudupgIOunjvZkkIQs9ZmRARyWadIwoQVsClT2NN2oJtOS3kVW_ZMkQyl9JkgmjksL_jC6_M5oKohJ5PsiCVqORHtGjGBOTxbBxBTA2aZlSczYgVelI7fIcLKsgtuiVNI5Ojn9Ku7lp4r_WF8fuvIhHWlQLe9_Pohyyw2ph2GpwQA',
    imageAlt:
      'Modern high rise commercial tower in Hyderabad with engineered basement diesel powerhouse',
  },
];

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'test-1',
    author: 'Rahul',
    designation: 'Enterprise AMC Client',
    quote:
      'We are taking service from MR Generator since last few years. The service team and admin team response is too good. Highly recommended!',
    rating: 5,
  },
  {
    id: 'test-2',
    author: 'Alluri Narayanaraju',
    designation: 'Industrial Facility Lead',
    quote:
      'Super response. Service engineer was very professional and resolved our plant power issue swiftly with genuine OEM filters and quick rewiring.',
    rating: 5,
  },
  {
    id: 'test-3',
    author: 'Gowtham Kumar',
    designation: 'Commercial Project Director',
    quote:
      'Very genuine service. Quality product both rental and purchase. Rental generators delivered seamlessly at reasonable prices with no delay.',
    rating: 5,
  },
  {
    id: 'test-4',
    author: 'Supreet Kumar',
    designation: 'Chief Electrical Engineer',
    quote:
      'M.R GENERATORS team of engineers is immensely knowledgeable on technical aspects. Extended complete support during our turnkey setup.',
    rating: 5,
  },
];

export const ASSURANCE_CARDS: AssuranceCard[] = [
  {
    id: 'assure-1',
    title: 'ISO 9001:2015 Operations',
    description: 'Calibrated load-bank testing up to 110% rating prior to customer site handover.',
    iconName: 'verified_user',
  },
  {
    id: 'assure-2',
    title: '60-Min Emergency Dispatch',
    description: 'Rapid intervention teams based at our Hyderabad depot with mobile testing gear.',
    iconName: 'speed',
  },
  {
    id: 'assure-3',
    title: 'OEM Certified Spares',
    description: '100% genuine factory filters, belts, AMF relays, and digital governors in stock.',
    iconName: 'handshake',
  },
];
