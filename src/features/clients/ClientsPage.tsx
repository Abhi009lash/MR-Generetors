import React from 'react';
import { ClientsHeroSection } from './ClientsHeroSection';
import { ClientsDirectorySection } from './ClientsDirectorySection';
import { ClientsCaseStudiesSection } from './ClientsCaseStudiesSection';
import { ClientsTestimonialsSection } from './ClientsTestimonialsSection';
import { ClientsAssuranceBanner } from './ClientsAssuranceBanner';
import { ClientsCtaSection } from './ClientsCtaSection';
import { ClientsOemStrip } from './ClientsOemStrip';

interface ClientsPageProps {
  onOpenQuoteModal: () => void;
  onNavigateHome: () => void;
  onNavigateContact?: () => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({
  onOpenQuoteModal,
  onNavigateContact,
}) => {
  return (
    <div className="min-h-screen bg-[#F8F9FF] flex flex-col">
      {/* 1. Hero Strip & Key Metrics */}
      <ClientsHeroSection />

      {/* 2. Interactive Directory with Sector Filters & Live Search */}
      <ClientsDirectorySection />

      {/* 3. Turnkey Project Engineering Case Studies */}
      <ClientsCaseStudiesSection />

      {/* 4. Client Testimonials & Verifications */}
      <ClientsTestimonialsSection />

      {/* 5. Technical Installation Assurance Banner */}
      <ClientsAssuranceBanner />

      {/* 6. Corporate Call to Action & Site Audit Desk */}
      <ClientsCtaSection
        onOpenQuoteModal={onOpenQuoteModal}
        onNavigateContact={onNavigateContact}
      />

      {/* 7. Authorized OEM Engineering Partner Ecosystem Strip */}
      <ClientsOemStrip />
    </div>
  );
};

export default ClientsPage;
