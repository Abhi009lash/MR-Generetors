import React, { useRef, useState, useEffect } from 'react';
import { TataHeroSection } from './TataHeroSection';
import { TataMetricsRibbon } from './TataMetricsRibbon';
import { TataFeaturesPillars } from './TataFeaturesPillars';
import { TataCatalogSection } from './TataCatalogSection';
import { TataComparisonMatrix } from './TataComparisonMatrix';
import { TataTurnkeyServices } from './TataTurnkeyServices';
import { TataQuoteFormSection } from './TataQuoteFormSection';
import { TataTrustAndFaqSection } from './TataTrustAndFaqSection';

interface TataGensetsPageProps {
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
  onOpenQuoteModal?: (modelName?: string, capacity?: string) => void;
  onOpenBrochureModal?: () => void;
}

export const TataGensetsPage: React.FC<TataGensetsPageProps> = ({
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  const [selectedCapacity, setSelectedCapacity] = useState<string>('25 kVA');
  const quoteSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Tata Diesel Generators (25 kVA to 100 kVA) | M.R Generators Hyderabad';
  }, []);

  const scrollToQuote = (capacity?: string) => {
    if (capacity) {
      setSelectedCapacity(capacity);
    }
    const elem = document.getElementById('tata-quote');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal('Tata Diesel Generator', capacity);
    }
  };

  const handleSelectModel = (modelName: string, kva: string) => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal(modelName, kva);
    } else {
      scrollToQuote(kva);
    }
  };

  return (
    <div className="bg-[#F8F9FF] min-h-screen text-slate-800 flex flex-col">
      {/* 1. Hero Section */}

      {/* 2. Hero Section */}
      <TataHeroSection
        onOpenQuoteModal={(cap) => scrollToQuote(cap)}
        onOpenBrochureModal={onOpenBrochureModal || (() => scrollToQuote())}
      />

      {/* 3. Apex Engineering Metrics Ribbon */}
      <TataMetricsRibbon />

      {/* 4. 6 Notable Engineering Features & Technical Advantages */}
      <TataFeaturesPillars />

      {/* 5. Product Lineup & Capacity Catalog */}
      <TataCatalogSection onSelectModel={handleSelectModel} />

      {/* 6. Comparative Technical Matrix (Data Table) */}
      <TataComparisonMatrix />

      {/* 7. Turnkey Installation, Erection & Services */}
      <TataTurnkeyServices />

      {/* 8. Direct Inquiry & Instant Quotation Form */}
      <div ref={quoteSectionRef}>
        <TataQuoteFormSection initialCapacity={selectedCapacity} />
      </div>

      {/* 9. Trust Strip & Engineering FAQ / Site Load Study */}
      <TataTrustAndFaqSection onRequestAudit={() => scrollToQuote('Site Load Study')} />
    </div>
  );
};
