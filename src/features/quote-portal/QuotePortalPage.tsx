import React, { useState } from 'react';
import { QuotePortalHero } from './QuotePortalHero';
import { QuoteProformaForm } from './QuoteProformaForm';
import { QuoteLoadCalculator } from './QuoteLoadCalculator';
import { QuoteConsultationPanels } from './QuoteConsultationPanels';
import { QuoteValueProposition } from './QuoteValueProposition';
import { QuoteFaqSection } from './QuoteFaqSection';
import { QuoteBottomActionBar } from './QuoteBottomActionBar';

interface QuotePortalPageProps {
  onNavigateHome: () => void;
}

export const QuotePortalPage: React.FC<QuotePortalPageProps> = ({
  onNavigateHome,
}) => {
  const [selectedCapacity, setSelectedCapacity] = useState<string>('');
  const [calculationNotes, setCalculationNotes] = useState<string>('');

  const handleApplySizing = (rating: string, notes: string) => {
    setSelectedCapacity(rating);
    setCalculationNotes(notes);
    const formElement = document.getElementById('proforma-builder');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] flex flex-col">
      {/* 1. Hero with Status Ribbon, Outage Card, and Badges */}
      <QuotePortalHero onNavigateHome={onNavigateHome} />

      {/* 2. Main Two-Column Quotation Workspace */}
      <section className="py-10 px-4 sm:px-6 lg:px-12 select-none">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Proforma Builder Form (7 Cols) */}
            <div id="proforma-builder" className="lg:col-span-7">
              <QuoteProformaForm
                externalCapacity={selectedCapacity}
                externalNotes={calculationNotes}
              />
            </div>

            {/* Right Column: Sizing Calculator & Evidence Panels (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <QuoteLoadCalculator onApplySizing={handleApplySizing} />
              <QuoteConsultationPanels />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engineering & Sizing Standards */}
      <QuoteValueProposition />

      {/* 4. Frequently Asked Questions */}
      <QuoteFaqSection />

      {/* 5. Bottom Tender Drawing Strip */}
      <QuoteBottomActionBar />
    </div>
  );
};

export default QuotePortalPage;
