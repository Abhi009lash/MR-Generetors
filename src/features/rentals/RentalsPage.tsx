import React, { useState } from 'react';
import { RentalsHero } from './RentalsHero';
import { RentalPackages } from './RentalPackages';
import { RentalFleetGrid } from './RentalFleetGrid';
import { RentalBrands } from './RentalBrands';
import { RentalInclusions } from './RentalInclusions';
import { RentalInquiryForm } from './RentalInquiryForm';
import { RentalFaqSection } from './RentalFaqSection';
import { RentalEmergencyBar } from './RentalEmergencyBar';

interface RentalsPageProps {
  onNavigateHome: () => void;
  onOpenQuoteModal: (packageName?: string) => void;
}

export const RentalsPage: React.FC<RentalsPageProps> = ({
  onNavigateHome,
  onOpenQuoteModal,
}) => {
  const [selectedCapacity, setSelectedCapacity] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const scrollToInquiry = () => {
    const el = document.getElementById('rental-inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenQuoteModal();
    }
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName);
    scrollToInquiry();
  };

  const handleRentCapacity = (capacity: string) => {
    setSelectedCapacity(capacity);
    scrollToInquiry();
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] text-slate-800">
      {/* 1. Hero Banner, Metrics & Night Fleet Card */}
      <RentalsHero
        onOpenQuoteModal={() => onOpenQuoteModal('Diesel Generator Rental')}
        onNavigateHome={onNavigateHome}
      />

      {/* 2. Operational Rental Packages */}
      <RentalPackages onSelectPackage={handleSelectPackage} />

      {/* 3. Fleet Cards by Capacity */}
      <RentalFleetGrid onRentCapacity={handleRentCapacity} />

      {/* 4. Supported OEM Rental Brands */}
      <RentalBrands onSelectBrand={(brand) => handleRentCapacity(`${brand} Rental Fleet`)} />

      {/* 5. What is Included (6 Inclusions) */}
      <RentalInclusions />

      {/* 6. Rental Sizing & Instant Quotation Form */}
      <RentalInquiryForm
        initialCapacity={selectedCapacity}
        initialPackage={selectedPackage}
      />

      {/* 7. FAQs */}
      <RentalFaqSection />

      {/* 8. Emergency Dispatch Desk Strip */}
      <RentalEmergencyBar />
    </div>
  );
};
