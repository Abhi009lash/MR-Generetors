import React, { useRef, useState, useEffect } from 'react';
import { EicherBreadcrumbBar } from './EicherBreadcrumbBar';
import { EicherHeroSection } from './EicherHeroSection';
import { EicherFeaturesPillars } from './EicherFeaturesPillars';
import { EicherCatalogSection } from './EicherCatalogSection';
import { EicherComparisonMatrix } from './EicherComparisonMatrix';
import { EicherTurnkeyServices } from './EicherTurnkeyServices';
import { EicherQuoteFormSection } from './EicherQuoteFormSection';
import { EicherFaqSection } from './EicherFaqSection';

interface EicherPageProps {
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
  onOpenQuoteModal?: (modelName?: string, capacity?: string) => void;
  onOpenBrochureModal?: () => void;
}

export const EicherPage: React.FC<EicherPageProps> = ({
  onNavigateHome,
  onNavigateProducts,
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  const [selectedCapacity, setSelectedCapacity] = useState<string>('62.5 kVA');
  const [activeFilter, setActiveFilter] = useState<'all' | 'retail-commercial' | 'office-healthcare' | 'industrial-heavy'>('all');
  const quoteSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Eicher Diesel Generators (30 kVA to 125 kVA) | M.R Generators Hyderabad';
  }, []);

  const scrollToQuote = (capacity?: string) => {
    if (capacity) {
      setSelectedCapacity(capacity);
    }
    const elem = document.getElementById('eicher-quote');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal('Eicher Diesel Generator', capacity);
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
      <EicherBreadcrumbBar
        onNavigateHome={onNavigateHome}
        onNavigateProducts={onNavigateProducts}
        activeFilter={activeFilter}
        onSelectFilter={(cat) => {
          setActiveFilter(cat);
          const elem = document.getElementById('eicher-lineup');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Hero Section */}
      <EicherHeroSection
        onOpenQuoteModal={(cap) => scrollToQuote(cap)}
        onOpenBrochureModal={onOpenBrochureModal}
      />

      {/* 3. 6 Volvo Group & Eicher Motors Advantage Pillars */}
      <EicherFeaturesPillars />

      {/* 4. Eicher Silent Generator Lineup Catalog (30 kVA - 125 kVA) */}
      <EicherCatalogSection
        onSelectModel={handleSelectModel}
        initialFilter={activeFilter}
      />

      {/* 5. Side-by-Side Specs Comparison Matrix */}
      <EicherComparisonMatrix onRequestTechMatrix={() => scrollToQuote('Tech Matrix Request')} />

      {/* 6. Turnkey Installation, CEIG Approvals & AMC */}
      <EicherTurnkeyServices />

      {/* 7. Direct Factory Quote & Load Sizing Form */}
      <div ref={quoteSectionRef}>
        <EicherQuoteFormSection initialCapacity={selectedCapacity} />
      </div>

      {/* 8. Frequently Asked Questions */}
      <EicherFaqSection />
    </div>
  );
};
