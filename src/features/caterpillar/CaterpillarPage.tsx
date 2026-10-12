import React, { useRef, useState, useEffect } from 'react';
import { CaterpillarBreadcrumbBar } from './CaterpillarBreadcrumbBar';
import { CaterpillarHeroSection } from './CaterpillarHeroSection';
import { CaterpillarBenchmarksSection } from './CaterpillarBenchmarksSection';
import { CaterpillarCatalogSection } from './CaterpillarCatalogSection';
import { CaterpillarComparisonMatrix } from './CaterpillarComparisonMatrix';
import { CaterpillarTurnkeyServices } from './CaterpillarTurnkeyServices';
import { CaterpillarQuoteFormSection } from './CaterpillarQuoteFormSection';
import { CaterpillarFaqSection } from './CaterpillarFaqSection';

interface CaterpillarPageProps {
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
  onOpenQuoteModal?: (modelName?: string, capacity?: string) => void;
  onOpenBrochureModal?: () => void;
}

export const CaterpillarPage: React.FC<CaterpillarPageProps> = ({
  onNavigateHome,
  onNavigateProducts,
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  const [selectedCapacity, setSelectedCapacity] = useState<string>('250 kVA');
  const [activeFilter, setActiveFilter] = useState<'all' | 'low-kva' | 'mid-kva' | 'high-kva'>('all');
  const quoteSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Caterpillar (CAT®) Diesel Generators (25 kVA to 1000 kVA) | M.R Generators Hyderabad';
  }, []);

  const scrollToQuote = (capacity?: string) => {
    if (capacity) {
      setSelectedCapacity(capacity);
    }
    const elem = document.getElementById('caterpillar-quote');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal('Caterpillar CAT Diesel Generator', capacity);
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
      <CaterpillarBreadcrumbBar
        onNavigateHome={onNavigateHome}
        onNavigateProducts={onNavigateProducts}
        activeFilter={activeFilter}
        onSelectFilter={(cat) => {
          setActiveFilter(cat);
          const elem = document.getElementById('caterpillar-lineup');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Hero Section */}
      <CaterpillarHeroSection
        onOpenQuoteModal={(cap) => scrollToQuote(cap)}
        onOpenBrochureModal={onOpenBrochureModal}
      />

      {/* 3. 6 Caterpillar Engineering Benchmarks */}
      <CaterpillarBenchmarksSection />

      {/* 4. Cat Generator Lineup Catalog (25 kVA - 1000 kVA) */}
      <CaterpillarCatalogSection
        onSelectModel={handleSelectModel}
        initialFilter={activeFilter}
      />

      {/* 5. Side-by-Side Specs Comparison Matrix */}
      <CaterpillarComparisonMatrix onRequestTechMatrix={() => scrollToQuote('Tech Matrix Request')} />

      {/* 6. Turnkey Installation, CEIG Approvals & AMC */}
      <CaterpillarTurnkeyServices />

      {/* 7. Direct Factory Quote & Load Sizing Form */}
      <div ref={quoteSectionRef}>
        <CaterpillarQuoteFormSection initialCapacity={selectedCapacity} />
      </div>

      {/* 8. Frequently Asked Questions */}
      <CaterpillarFaqSection />
    </div>
  );
};
