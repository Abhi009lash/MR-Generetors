import React, { useRef, useState, useEffect } from 'react';
import { CumminsBreadcrumbBar } from './CumminsBreadcrumbBar';
import { CumminsHeroSection } from './CumminsHeroSection';
import { CumminsFeaturesPillars } from './CumminsFeaturesPillars';
import { CumminsCatalogSection } from './CumminsCatalogSection';
import { CumminsComparisonMatrix } from './CumminsComparisonMatrix';
import { CumminsTurnkeyServices } from './CumminsTurnkeyServices';
import { CumminsQuoteFormSection } from './CumminsQuoteFormSection';
import { CumminsFaqSection } from './CumminsFaqSection';

interface CumminsPageProps {
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
  onOpenQuoteModal?: (modelName?: string, capacity?: string) => void;
  onOpenBrochureModal?: () => void;
}

export const CumminsPage: React.FC<CumminsPageProps> = ({
  onNavigateHome,
  onNavigateProducts,
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  const [selectedCapacity, setSelectedCapacity] = useState<string>('125 kVA');
  const [activeFilter, setActiveFilter] = useState<'all' | 'commercial' | 'industrial' | 'high-horsepower'>('all');
  const quoteSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Cummins Diesel Generators (15 kVA to 3750 kVA) | M.R Generators Hyderabad';
  }, []);

  const scrollToQuote = (capacity?: string) => {
    if (capacity) {
      setSelectedCapacity(capacity);
    }
    const elem = document.getElementById('cummins-quote');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal('Cummins Diesel Generator', capacity);
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
      <CumminsBreadcrumbBar
        onNavigateHome={onNavigateHome}
        onNavigateProducts={onNavigateProducts}
        activeFilter={activeFilter}
        onSelectFilter={(cat) => {
          setActiveFilter(cat);
          const elem = document.getElementById('cummins-lineup');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Dark Navy Hero Section */}
      <CumminsHeroSection
        onOpenQuoteModal={(cap) => scrollToQuote(cap)}
        onOpenBrochureModal={onOpenBrochureModal}
      />

      {/* 3. 6 Engineering Advantages Pillars */}
      <CumminsFeaturesPillars />

      {/* 4. Cummins Diesel Generator Lineup Catalog */}
      <CumminsCatalogSection
        onSelectModel={handleSelectModel}
        initialFilter={activeFilter}
      />

      {/* 5. Technical Comparison & Powertrain Matrix */}
      <CumminsComparisonMatrix />

      {/* 6. Turnkey Installation, CEIG Approvals & AMC */}
      <CumminsTurnkeyServices />

      {/* 7. Direct Factory Quote & Sizing Form */}
      <div ref={quoteSectionRef}>
        <CumminsQuoteFormSection initialCapacity={selectedCapacity} />
      </div>

      {/* 8. FAQs & Urgent Support Strip */}
      <CumminsFaqSection />
    </div>
  );
};
