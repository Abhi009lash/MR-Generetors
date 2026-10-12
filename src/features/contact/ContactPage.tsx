import React from 'react';
import { ContactAlertStrip } from './ContactAlertStrip';
import { ContactHeroHeader } from './ContactHeroHeader';
import { ConsultationFormCard } from './ConsultationFormCard';
import { DirectDirectoryCard } from './DirectDirectoryCard';
import { FacilityMapSection } from './FacilityMapSection';
import { RapidResponseZones } from './RapidResponseZones';
import { WhatsAppCtaBanner } from './WhatsAppCtaBanner';

interface ContactPageProps {
  onNavigateHome: () => void;
  onOpenQuoteModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-[#F8F9FF] select-none min-h-screen">
      {/* 1. Top Emergency Response Alert Strip */}
      <ContactAlertStrip onOpenSizing={onOpenQuoteModal} />

      {/* 2. Technical Header & Status Hero */}
      <ContactHeroHeader onNavigateHome={onNavigateHome} />

      {/* 3. Dual-Column Engagement Hub */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Fast Dispatch Form */}
          <div className="lg:col-span-7">
            <ConsultationFormCard />
          </div>

          {/* Right Column: Corporate Depot & Directory Cards */}
          <div className="lg:col-span-5">
            <DirectDirectoryCard />
          </div>
        </div>

        {/* 4. Facility Visual & Interactive Map Section */}
        <FacilityMapSection onOpenBookingModal={onOpenQuoteModal} />
      </div>

      {/* 5. Hyderabad Rapid Response Zones (Under 2-Hour SLA) */}
      <RapidResponseZones />

      {/* 6. Instant Messaging Banner */}
      <WhatsAppCtaBanner />
    </div>
  );
};
