import React, { useState } from 'react';
import { SparesHero } from './SparesHero';
import { SparesPromiseRibbon } from './SparesPromiseRibbon';
import { SparesCatalogGrid } from './SparesCatalogGrid';
import { SparesBrandsSupport } from './SparesBrandsSupport';
import { SparesTechniciansDepot } from './SparesTechniciansDepot';
import { SparesInquiryForm } from './SparesInquiryForm';
import { SparesFaqSection } from './SparesFaqSection';

interface SparesPageProps {
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onOpenQuoteModal: (category?: string) => void;
}

export const SparesPage: React.FC<SparesPageProps> = ({
  onNavigateHome,
  onNavigateServices,
  onOpenQuoteModal,
}) => {
  const [selectedCategoryForInquiry, setSelectedCategoryForInquiry] = useState('');

  const handleRequestPart = (categoryTitle: string) => {
    setSelectedCategoryForInquiry(categoryTitle);
    const formElem = document.getElementById('spares-inquiry');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenQuoteModal(categoryTitle);
    }
  };

  const handleScheduleFitment = () => {
    onOpenQuoteModal('On-Site Field Spares Fitment & Governor Tuning');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] text-slate-800">
      {/* 1. Hero Section & Metrics */}
      <SparesHero
        onOpenQuoteModal={() => onOpenQuoteModal('Generator Spare Parts & Accessories')}
        onNavigateHome={onNavigateHome}
        onNavigateServices={onNavigateServices}
      />

      {/* 2. The 4R Spares Promise Ribbon */}
      <SparesPromiseRibbon />

      {/* 3. Catalog Grid with 8 Component Cards */}
      <SparesCatalogGrid onRequestPart={handleRequestPart} />

      {/* 4. Supported OEM Brands */}
      <SparesBrandsSupport onSelectBrand={(brand) => handleRequestPart(`${brand} Spare Parts`)} />

      {/* 5. Trained Technicians & Depot Pickup Desk */}
      <SparesTechniciansDepot onScheduleFitment={handleScheduleFitment} />

      {/* 6. Spares Inquiry Form & 3-Step Process */}
      <SparesInquiryForm initialCategory={selectedCategoryForInquiry} />

      {/* 7. FAQs */}
      <SparesFaqSection />
    </div>
  );
};
