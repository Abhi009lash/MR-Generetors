export type CapacityUnit = 'kVA';

export interface ProductItem {
  id: string;
  name: string;
  capacityKva: number;
  tag: string;
  badge: string;
  description: string;
  spec1Label: string;
  spec1Value: string;
  spec2Label: string;
  spec2Value: string;
  priceNote: string;
  imageType: '82.5' | '500' | '125' | '250' | '57';
}

export interface BrandItem {
  id: string;
  name: string;
  kVaRange: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  designation: string;
  quote: string;
  rating: number;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  capacity: string;
  application: string;
  location: string;
  message: string;
  agreeTerms: boolean;
}

export interface SizingRequirement {
  capacityKva: string;
  application: string;
  location: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message: string;
}
