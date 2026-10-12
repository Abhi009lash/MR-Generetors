import React, { useRef, useState, useEffect } from 'react';
import { PortableComplianceBar } from './PortableComplianceBar';
import { PortableHeroSection } from './PortableHeroSection';
import { PortableMetricsStrip } from './PortableMetricsStrip';
import { PortableBrandBanner } from './PortableBrandBanner';
import { PortableArchitectureGrid } from './PortableArchitectureGrid';
import { PortableCatalogSection } from './PortableCatalogSection';
import { PortableComparisonMatrix } from './PortableComparisonMatrix';
import { PortableApplicationsSection } from './PortableApplicationsSection';
import { PortableQuoteFormSection } from './PortableQuoteFormSection';
import { PortableFaqSection } from './PortableFaqSection';

interface PortablePageProps {
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
  onOpenQuoteModal?: (modelName?: string, capacity?: string) => void;
  onOpenBrochureModal?: () => void;
}

export const PortablePage: React.FC<PortablePageProps> = ({
  onNavigateHome,
  onNavigateProducts,
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  const [selectedCapacity, setSelectedCapacity] = useState<string>('15 - 45 kVA');
  const quoteSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Mobile & Portable Generators (1 kVA to 125 kVA) | M.R Generators Hyderabad';
  }, []);

  const scrollToQuote = (capacity?: string) => {
    if (capacity) {
      setSelectedCapacity(capacity);
    }
    const elem = document.getElementById('portable-quote');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal('Mobile & Portable DG Set', capacity);
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
      {/* 1. Breadcrumbs & Compliance Bar */}
      <PortableComplianceBar
        onNavigateHome={onNavigateHome}
        onNavigateProducts={onNavigateProducts}
      />

      {/* 2. Hero Section */}
      <PortableHeroSection
        onOpenQuoteModal={(cap) => scrollToQuote(cap)}
        onOpenBrochureModal={onOpenBrochureModal}
      />

      {/* 3. 4-Metrics Strip */}
      <PortableMetricsStrip />

      {/* 4. Brand Standards Logo Banner */}
      <PortableBrandBanner />

      {/* 5. 6 Engineering Architecture Benchmarks */}
      <PortableArchitectureGrid />

      {/* 6. Explore Mobile & Portable Genset Lineup Catalog */}
      <PortableCatalogSection onSelectModel={handleSelectModel} />

      {/* 7. Side-by-Side Specs Powertrain Matrix */}
      <PortableComparisonMatrix onRequestTechMatrix={() => scrollToQuote('Mobile Powertrain Matrix')} />

      {/* 8. Where Rapid Mobile Power Makes the Critical Difference */}
      <PortableApplicationsSection />

      {/* 9. Direct Quotation & Sizing Form */}
      <div ref={quoteSectionRef}>
        <PortableQuoteFormSection initialCapacity={selectedCapacity} />
      </div>

      {/* 10. Frequently Asked Questions & Emergency Dispatch Strip */}
      <PortableFaqSection />
    </div>
  );
};
