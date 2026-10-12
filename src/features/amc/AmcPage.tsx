import React, { useState } from 'react';
import { AmcHero } from './AmcHero';
import { AmcTiers } from './AmcTiers';
import { AmcOverhaulProtocols } from './AmcOverhaulProtocols';
import { AmcErectionWorks } from './AmcErectionWorks';
import { AmcOemSpectrum } from './AmcOemSpectrum';
import { AmcRapidFleetSection } from './AmcRapidFleetSection';
import { AmcInquiryForm } from './AmcInquiryForm';
import { AmcFaqSection } from './AmcFaqSection';
import { AmcEmergencyStrip } from './AmcEmergencyStrip';

interface AmcPageProps {
  onNavigateHome: () => void;
  onOpenQuoteModal: (tierName?: string) => void;
}

export const AmcPage: React.FC<AmcPageProps> = ({
  onNavigateHome,
  onOpenQuoteModal,
}) => {
  const [selectedTier, setSelectedTier] = useState('Semi-Comprehensive AMC');
  const [selectedProtocol, setSelectedProtocol] = useState('');

  const scrollToInquiry = () => {
    const el = document.getElementById('amc-inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenQuoteModal(selectedTier);
    }
  };

  const handleSelectTier = (tierName: string) => {
    setSelectedTier(tierName);
    scrollToInquiry();
  };

  const handleSelectProtocol = (protocolName: string) => {
    setSelectedProtocol(protocolName);
    scrollToInquiry();
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] text-slate-800">
      {/* 1. Hero Banner, Metrics & Right Photo Card */}
      <AmcHero
        onOpenAuditForm={scrollToInquiry}
        onNavigateHome={onNavigateHome}
      />

      {/* 2. Tailored Annual Contractual Tiers (3 Cards) */}
      <AmcTiers onSelectTier={handleSelectTier} />

      {/* 3. Engine Overhauling & Service Protocols (4 Cards) */}
      <AmcOverhaulProtocols onRequestOverhaul={handleSelectProtocol} />

      {/* 4. Turnkey Erection & Installation Works (6 Cards) */}
      <AmcErectionWorks onSelectErection={handleSelectProtocol} />

      {/* 5. Multi-Brand OEM Support Spectrum (10 Brands) */}
      <AmcOemSpectrum onSelectBrand={(brand) => handleSelectProtocol(`${brand} Engine Service`)} />

      {/* 6. Rapid Response Fleet & Depot Hub Map */}
      <AmcRapidFleetSection onDispatchClick={scrollToInquiry} />

      {/* 7. Request Free Genset/AMC Audit & Quotation Form */}
      <AmcInquiryForm
        initialTier={selectedTier}
        initialProtocol={selectedProtocol}
      />

      {/* 8. Frequently Asked Questions (5 Accordions) */}
      <AmcFaqSection />

      {/* 9. Direct Emergency Breakdown Strip */}
      <AmcEmergencyStrip />
    </div>
  );
};
