export type ClientSector = 'all' | 'pharma' | 'government' | 'realestate' | 'hospitality' | 'retail';

export interface ClientItem {
  id: string;
  name: string;
  badge: string;
  sector: 'pharma' | 'government' | 'realestate' | 'hospitality' | 'retail';
  sectorLabel: string;
  capacityKva: string;
  location: string;
  description: string;
  featureHighlight: string;
  contractType: string;
  logoType: string;
  colorTheme: 'red' | 'blue' | 'navy' | 'amber' | 'green';
  keywords: string;
}

export interface SectorFilterOption {
  key: ClientSector;
  label: string;
}

export interface InstitutionalPartnerItem {
  code: string;
  name: string;
  colorScheme: 'primary' | 'secondary' | 'hazard' | 'container' | 'amber';
}
