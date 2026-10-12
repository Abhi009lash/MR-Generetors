import React from 'react';
import { LeypowerBreadcrumbBar } from './LeypowerBreadcrumbBar';
import { LeypowerHeroSection } from './LeypowerHeroSection';
import { LeypowerAdvantagesSection } from './LeypowerAdvantagesSection';
import { LeypowerStatsStrip } from './LeypowerStatsStrip';
import { LeypowerModelMatrix } from './LeypowerModelMatrix';
import { LeypowerCivilRoadmap } from './LeypowerCivilRoadmap';
import { LeypowerPartsSupport } from './LeypowerPartsSupport';
import { LeypowerRfqSection } from './LeypowerRfqSection';

interface LeypowerPageProps {
  onNavigateHome: () => void;
  onNavigateProducts?: () => void;
  onOpenQuoteModal: (modelName?: string, capacity?: string) => void;
  onOpenBrochureModal: () => void;
}

export const LeypowerPage: React.FC<LeypowerPageProps> = ({
  onNavigateHome,
  onNavigateProducts,
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  return (
    <div className="flex flex-col min-h-full">
      {/* 1. Top Screen Identification & Breadcrumb Bar */}
      <LeypowerBreadcrumbBar
        onNavigateHome={onNavigateHome}
        onNavigateProducts={onNavigateProducts}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* 2. Hero Engineering Section with Live Depot Unit Preview */}
      <LeypowerHeroSection
        onOpenQuoteModal={onOpenQuoteModal}
        onOpenBrochureModal={onOpenBrochureModal}
      />

      {/* 3. Key Engineering Advantages of LEYPOWER Powertrains */}
      <LeypowerAdvantagesSection />

      {/* 4. Stats Counter Strip */}
      <LeypowerStatsStrip />

      {/* 5. Ashok Leyland kVA Range & Model Matrix (Interactive Deck) */}
      <LeypowerModelMatrix onOpenQuoteModal={onOpenQuoteModal} />

      {/* 6. Turnkey Installation & Civil Engineering Roadmap */}
      <LeypowerCivilRoadmap />

      {/* 7. Genuine Leyparts® & Maintenance Service Support */}
      <LeypowerPartsSupport onOpenQuoteModal={onOpenQuoteModal} />

      {/* 8. Commercial Quotation & Sizing Form (RFQ) */}
      <LeypowerRfqSection />
    </div>
  );
};
