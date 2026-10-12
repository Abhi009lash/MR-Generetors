import React, { useRef, useState, useEffect } from 'react';
import { KirloskarBreadcrumbBar } from './KirloskarBreadcrumbBar';
import { KirloskarHeroSection } from './KirloskarHeroSection';
import { KirloskarBenchmarksSection } from './KirloskarBenchmarksSection';
import { KirloskarCatalogSection } from './KirloskarCatalogSection';
import { KirloskarComparisonMatrix } from './KirloskarComparisonMatrix';
import { KirloskarTurnkeyServices } from './KirloskarTurnkeyServices';
import { KirloskarQuoteFormSection } from './KirloskarQuoteFormSection';
import { KirloskarFaqSection } from './KirloskarFaqSection';

interface KirloskarPageProps {
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
  onOpenQuoteModal?: (modelName?: string, capacity?: string) => void;
  onOpenBrochureModal?: () => void;
}

export const KirloskarPage: React.FC<KirloskarPageProps> = ({
  onNavigateHome,
  onNavigateProducts,
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  const [selectedCapacity, setSelectedCapacity] = useState<string>('82.5 kVA');
  const [activeFilter, setActiveFilter] = useState<'all' | 'light-commercial' | 'commercial-industrial' | 'mega-power'>('all');
  const quoteSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Kirloskar KOEL Green Diesel Generators (15 kVA to 5200 kVA) | M.R Generators Hyderabad';
  }, []);

  const scrollToQuote = (capacity?: string) => {
    if (capacity) {
      setSelectedCapacity(capacity);
    }
    const elem = document.getElementById('kirloskar-quote');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal('Kirloskar KOEL Green DG Set', capacity);
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
      {/* 1. Breadcrumbs & Sub-Ribbon */}
      <KirloskarBreadcrumbBar
        onNavigateHome={onNavigateHome}
        onNavigateProducts={onNavigateProducts}
        activeFilter={activeFilter}
        onSelectFilter={(cat) => {
          setActiveFilter(cat);
          const elem = document.getElementById('kirloskar-lineup');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Hero Section */}
      <KirloskarHeroSection
        onOpenQuoteModal={(cap) => scrollToQuote(cap)}
        onOpenBrochureModal={onOpenBrochureModal}
      />

      {/* 3. 6 KOEL Green Engineering Benchmarks */}
      <KirloskarBenchmarksSection />

      {/* 4. Kirloskar Generator Lineup (15 kVA - 5200 kVA) */}
      <KirloskarCatalogSection
        onSelectModel={handleSelectModel}
        initialFilter={activeFilter}
      />

      {/* 5. Side-by-Side Specs Powertrain Matrix */}
      <KirloskarComparisonMatrix onRequestTechMatrix={() => scrollToQuote('Tech Matrix Request')} />

      {/* 6. Turnkey Installation, CEIG Approvals & AMC */}
      <KirloskarTurnkeyServices />

      {/* 7. Direct Factory Quote & Load Sizing Form */}
      <div ref={quoteSectionRef}>
        <KirloskarQuoteFormSection initialCapacity={selectedCapacity} />
      </div>

      {/* 8. Frequently Asked Questions & Emergency Strip */}
      <KirloskarFaqSection />
    </div>
  );
};
