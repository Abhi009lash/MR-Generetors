import React, { useState } from 'react';
import { MahindraHero } from './MahindraHero';
import { MahindraBenchmarks } from './MahindraBenchmarks';
import { MahindraCatalog } from './MahindraCatalog';
import { MahindraComparisonMatrix } from './MahindraComparisonMatrix';
import { MahindraTurnkeyServices } from './MahindraTurnkeyServices';
import { MahindraQuoteSection } from './MahindraQuoteSection';
import { MahindraFaqSection } from './MahindraFaqSection';
import { MahindraEmergencyBar } from './MahindraEmergencyBar';

interface MahindraPageProps {
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
  onOpenQuoteModal: (modelName?: string, capacity?: string) => void;
  onOpenBrochureModal: () => void;
}

export const MahindraPage: React.FC<MahindraPageProps> = ({
  onNavigateHome,
  onNavigateProducts,
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  const [selectedCapacity, setSelectedCapacity] = useState('45 - 82.5 kVA');

  const scrollToQuote = () => {
    const el = document.getElementById('mahindra-quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenQuoteModal('Mahindra Powerol DG Set', selectedCapacity);
    }
  };

  const handleSelectModel = (modelName: string, capacity: string) => {
    setSelectedCapacity(capacity);
    onOpenQuoteModal(modelName, capacity);
  };

  const handleSelectCapacity = (capacity: string) => {
    setSelectedCapacity(capacity);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] text-slate-800">
      {/* 1. Hero Banner, Metrics & Right Photo Card */}
      <MahindraHero
        onOpenQuoteModal={scrollToQuote}
        onOpenBrochureModal={onOpenBrochureModal}
        onNavigateHome={onNavigateHome}
        onNavigateProducts={onNavigateProducts}
      />

      {/* 2. Engineering Architecture & Technical Benchmarks */}
      <MahindraBenchmarks />

      {/* 3. Mahindra Powerol Genset Catalog (5 kVA to 500 kVA) */}
      <MahindraCatalog
        onOpenQuoteModal={handleSelectModel}
        onOpenBrochureModal={onOpenBrochureModal}
      />

      {/* 4. Powertrain & Fuel Efficiency Comparison Matrix */}
      <MahindraComparisonMatrix
        onOpenQuoteModal={handleSelectCapacity}
      />

      {/* 5. Turnkey Installation, CPCB Approvals & AMC Services */}
      <MahindraTurnkeyServices
        onSelectService={(serv) => handleSelectCapacity(`Turnkey: ${serv}`)}
      />

      {/* 6. Request Instant Mahindra DG Proposal & Load Audit */}
      <MahindraQuoteSection initialCapacity={selectedCapacity} />

      {/* 7. Frequently Asked Questions */}
      <MahindraFaqSection />

      {/* 8. Emergency Breakdown Strip */}
      <MahindraEmergencyBar />
    </div>
  );
};
