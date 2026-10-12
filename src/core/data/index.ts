import type { ProductItem, BrandItem, TestimonialItem } from '../../types';
import {
  greaves82Img,
  greaves500Img,
  greavesOpenCanopyImg,
  greaves250Img,
  greaves57Img,
} from '../../assets/images';

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'greaves-82-5',
    name: 'Greaves Power 82.5 kVA Silent DG Set',
    capacityKva: 82.5,
    tag: 'CPCB IV+',
    badge: '82.5 kVA',
    description:
      'Water-cooled 4-cylinder engine with integrated acoustic canopy and digital microprocessor controller.',
    spec1Label: 'Acoustics',
    spec1Value: '75 dBA @ 1m',
    spec2Label: 'Emission',
    spec2Value: 'CPCB IV+',
    priceNote: 'Price on Request',
    imageType: '82.5',
    imageSrc: greaves82Img,
  },
  {
    id: 'greaves-500',
    name: 'Greaves Power 500 kVA Industrial DG Set',
    capacityKva: 500,
    tag: 'PRIME POWER',
    badge: '500 kVA',
    description:
      'Heavy-duty prime power generator built for hospitals, data facilities, and large manufacturing plants.',
    spec1Label: 'Cooling',
    spec1Value: 'Radiator Water',
    spec2Label: 'Alternator',
    spec2Value: 'Brushless AVO',
    priceNote: 'Commercial Prime',
    imageType: '500',
    imageSrc: greaves500Img,
  },
  {
    id: 'greaves-125',
    name: 'Greaves Power 125 kVA Commercial DG Set',
    capacityKva: 125,
    tag: 'SILENT CANOPY',
    badge: '125 kVA',
    description:
      'Compact footprint canopy with high thermal efficiency and lowest total cost of ownership (TCO).',
    spec1Label: 'Start Type',
    spec1Value: 'AMF / Electric',
    spec2Label: 'Fuel Capacity',
    spec2Value: '250 Litres',
    priceNote: 'Best Price Offer',
    imageType: '125',
    imageSrc: greavesOpenCanopyImg,
  },
  {
    id: 'greaves-250',
    name: 'Greaves Power 250 kVA Industrial DG Set',
    capacityKva: 250,
    tag: 'HEAVY DUTY',
    badge: '250 kVA',
    description:
      'Multi-cylinder turbocharged aftercooled engine providing outstanding block loading capability.',
    spec1Label: 'Overload',
    spec1Value: '10% 1h in 12h',
    spec2Label: 'Governor',
    spec2Value: 'Electronic Class A1',
    priceNote: 'Inquire Cost',
    imageType: '250',
    imageSrc: greaves250Img,
  },
  {
    id: 'greaves-57',
    name: 'Greaves Power 57 kVA Silent Generator',
    capacityKva: 57,
    tag: 'LOW NOISE',
    badge: '57 kVA',
    description:
      'Ideal for restaurants, banking hubs, clinics, and fuel dispensing outlets requiring low noise operation.',
    spec1Label: 'Noise Rating',
    spec1Value: '< 75 dBA @ 1m',
    spec2Label: 'Fuel Rate',
    spec2Value: 'Low L/hr',
    priceNote: 'Ready Stock',
    imageType: '57',
    imageSrc: greaves57Img,
  },
];

export const BRANDS_DATA: BrandItem[] = [
  {
    id: 'tata',
    name: 'Tata Generators',
    kVaRange: '15 - 500 kVA',
    description:
      'Reputed for 40 years of impeccable history and adequate performance across demanding commercial conditions.',
  },
  {
    id: 'cummins',
    name: 'Cummins Generators',
    kVaRange: '15 - 2000 kVA',
    description:
      'Global benchmark for heavy power generation and continuous enterprise backup across mission-critical facilities.',
  },
  {
    id: 'kirloskar',
    name: 'Kirloskar KOEL',
    kVaRange: '5 - 1010 kVA',
    description:
      "KOEL Green is India's largest selling genset brand, backed by the century-old engineering legacy of Kirloskar Group.",
  },
  {
    id: 'ashok-leyland',
    name: 'Ashok Leyland LEYPOWER',
    kVaRange: '10 - 2250 kVA',
    description:
      'LEYPOWER delivers state-of-the-art engine, alternator and controller integration for demanding continuous loads.',
  },
  {
    id: 'mahindra',
    name: 'Mahindra Powerol',
    kVaRange: '5 - 625 kVA',
    description:
      'Robust fuel economy and rugged structural engineering trusted across telecommunications and commercial sectors.',
  },
  {
    id: 'eicher',
    name: 'Eicher Engines',
    kVaRange: '10 - 160 kVA',
    description:
      'Application engines low on noise, vibration and maintenance, delivering superior power across all load profiles.',
  },
  {
    id: 'cat',
    name: 'Caterpillar (CAT)',
    kVaRange: '250 - 2500 kVA',
    description:
      'Heavy industrial gensets for large construction, quarrying, and critical emergency grid backup applications.',
  },
  {
    id: 'portable',
    name: 'Mobile & Portable',
    kVaRange: '5 - 125 kVA',
    description:
      'Trailer-mounted and portable AC/DC generators for agile standby deployment, outdoor events, and film shoots.',
  },
];

export const REVIEWS_DATA: TestimonialItem[] = [
  {
    id: 'review-1',
    name: 'Ravi M.',
    designation: 'Industrial Plant Head',
    quote:
      'We are taking service from MR Generator since last few years. The service team and admin team response is too good. I highly recommended M.R GENERATORS for industrial power backup.',
    rating: 5,
  },
  {
    id: 'review-2',
    name: 'Siva Ramaprasad',
    designation: 'Commercial Facility Lead',
    quote:
      'Good service and response also nice. I called this company for the first time; super response, service engineer also very nice. Thank you M.R GENERATORS, very good service!',
    rating: 5,
  },
  {
    id: 'review-3',
    name: 'Charan T.',
    designation: 'Operations Supervisor',
    quote:
      'Excellent customer service, wide range of products, highly trustable company, very good location... Great and quick response on rental and standby power sets.',
    rating: 5,
  },
];
