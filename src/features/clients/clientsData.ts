import type { ClientItem, ClientSector, SectorFilterOption, InstitutionalPartnerItem } from './clientsTypes';
import { CLIENTS_PART_1 } from './clientsPart1';
import { CLIENTS_PART_2 } from './clientsPart2';

export type { ClientItem, ClientSector, SectorFilterOption, InstitutionalPartnerItem };

export const SECTOR_FILTERS: SectorFilterOption[] = [
  { key: 'all', label: 'All Sectors (24)' },
  { key: 'pharma', label: 'Pharma & Life Sciences' },
  { key: 'government', label: 'Government & PSU' },
  { key: 'realestate', label: 'Real Estate & Infrastructure' },
  { key: 'hospitality', label: 'Hospitality & Tech Hubs' },
  { key: 'retail', label: 'Retail Chains & Commercial' },
];

export const CLIENT_ITEMS: ClientItem[] = [
  ...CLIENTS_PART_1,
  ...CLIENTS_PART_2,
];

export const INSTITUTIONAL_PARTNERS: InstitutionalPartnerItem[] = [
  { code: 'AH', name: 'Alekhya Homes', colorScheme: 'primary' },
  { code: 'AB', name: 'Ashoka Builders', colorScheme: 'secondary' },
  { code: 'MB', name: 'Modi Builders', colorScheme: 'hazard' },
  { code: 'SI', name: 'Siddhartha Infra', colorScheme: 'container' },
  { code: 'VR', name: 'Vasudeva Realtors', colorScheme: 'amber' },
  { code: 'FG', name: 'Fortune Group', colorScheme: 'primary' },
  { code: 'TI', name: 'Trishala Infra', colorScheme: 'secondary' },
  { code: 'PG', name: 'Peerless Group', colorScheme: 'hazard' },
  { code: 'SA', name: 'Skyla Serviced Apartments', colorScheme: 'container' },
  { code: 'MM', name: 'Mantra Mall', colorScheme: 'hazard' },
  { code: 'NA', name: 'NA Architects', colorScheme: 'primary' },
  { code: 'JH', name: 'Jubilee Hills International Centre', colorScheme: 'secondary' },
  { code: 'GV', name: 'GVPR Engineers', colorScheme: 'primary' },
  { code: 'FL', name: 'Frontier Lifeline', colorScheme: 'hazard' },
  { code: 'BB', name: 'The Big Bull Lounge', colorScheme: 'amber' },
  { code: 'SR', name: 'SR Group', colorScheme: 'primary' },
];
