import React, { useState } from 'react';
import { SalesProductsHero } from './SalesProductsHero';
import { SpecificationFilterPanel, type FilterState } from './SpecificationFilterPanel';
import { FlagshipGreavesLineup } from './FlagshipGreavesLineup';
import { TurnkeySubstationSection } from './TurnkeySubstationSection';
import { MultiBrandCatalogGrid } from './MultiBrandCatalogGrid';
import { TurnkeyCommissioningWalkthrough } from './TurnkeyCommissioningWalkthrough';
import { SalesFastTrackQuoteSection } from './SalesFastTrackQuoteSection';

interface SalesProductsPageProps {
  onOpenQuoteModal: (modelName?: string, capacity?: string) => void;
  onOpenBrochureModal: () => void;
  onNavigateToLeypower?: () => void;
}

export const SalesProductsPage: React.FC<SalesProductsPageProps> = ({
  onOpenQuoteModal,
  onOpenBrochureModal,
  onNavigateToLeypower,
}) => {
  const [filters, setFilters] = useState<FilterState>({
    kvaRange: 'all',
    brand: 'all',
    sector: 'all',
  });

  const handleResetFilters = () => {
    setFilters({
      kvaRange: 'all',
      brand: 'all',
      sector: 'all',
    });
  };

  return (
    <div className="bg-[#F8F9FF] min-h-screen">
      {/* 1. Hero Header & Metric Ribbon */}
      <SalesProductsHero />

      {/* 2. Interactive Multi-Attribute Filter Panel */}
      <div className="px-4 sm:px-6 lg:px-12">
        <SpecificationFilterPanel
          filters={filters}
          onFilterChange={setFilters}
          onReset={handleResetFilters}
        />
      </div>

      {/* 3. Flagship Greaves Power Lineup (CPCB IV+) */}
      <FlagshipGreavesLineup
        filters={filters}
        onOpenQuoteModal={onOpenQuoteModal}
        onOpenBrochureModal={onOpenBrochureModal}
        onResetFilters={handleResetFilters}
      />

      {/* 4. Turnkey Multi-Megawatt Substation & Synchronized DG Sets */}
      <TurnkeySubstationSection
        onOpenConsultationModal={() =>
          onOpenQuoteModal('Turnkey Substation & DG Sets', '1000 - 2000 kVA')
        }
      />

      {/* 5. Authorized Multi-Brand DG Sets & Spares Grid */}
      <MultiBrandCatalogGrid
        onSelectBrand={(brandName, kvaRange) =>
          onOpenQuoteModal(`${brandName} DG Set`, kvaRange)
        }
        onNavigateToLeypower={onNavigateToLeypower}
      />

      {/* 6. Turnkey 4-Step Engineering Walkthrough */}
      <TurnkeyCommissioningWalkthrough />

      {/* 7. Fast-Track Sizing & Price Quote Section */}
      <SalesFastTrackQuoteSection />
    </div>
  );
};
