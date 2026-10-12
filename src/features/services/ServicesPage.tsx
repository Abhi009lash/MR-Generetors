import React, { useRef, useEffect } from 'react';
import { ServicesBreadcrumbBanner } from './ServicesBreadcrumbBanner';
import { ServicesHeroSection } from './ServicesHeroSection';
import { ServicesStatsStrip } from './ServicesStatsStrip';
import { ServicesCapabilitiesGrid } from './ServicesCapabilitiesGrid';
import { ServicesAmcComparisonTable } from './ServicesAmcComparisonTable';
import { ServicesProtocolSection } from './ServicesProtocolSection';
import { ServicesOemBrandsSection } from './ServicesOemBrandsSection';
import { ServicesWarehouseSection } from './ServicesWarehouseSection';
import { ServicesBookingHotlinePanel } from './ServicesBookingHotlinePanel';
import { ServicesBookingForm } from './ServicesBookingForm';

interface ServicesPageProps {
  onNavigate: (page: 'home' | 'about' | 'products' | 'leypower' | 'services' | 'contact') => void;
  onOpenConsultationModal?: () => void;
  onOpenBrochureModal?: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultationModal,
  onOpenBrochureModal,
}) => {
  const bookingSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Services & AMC | MR Generators - 24/7 Breakdown, Overhauls & Genuine Spares';
  }, []);

  const scrollToBooking = () => {
    if (bookingSectionRef.current) {
      bookingSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenConsultationModal) {
      onOpenConsultationModal();
    }
  };

  return (
    <div className="bg-[#F8F9FF] min-h-screen text-slate-800 flex flex-col">
      {/* 1. Breadcrumb Banner */}
      <ServicesBreadcrumbBanner onNavigateHome={() => onNavigate('home')} />

      {/* 2. Hero Section */}
      <ServicesHeroSection
        onOpenBookingModal={scrollToBooking}
        onOpenBrochureModal={onOpenBrochureModal || scrollToBooking}
      />

      {/* 3. Tech Spec / Stats Ribbon */}
      <ServicesStatsStrip />

      {/* 4. Six Engineering Verticals */}
      <ServicesCapabilitiesGrid
        onSelectService={() => scrollToBooking()}
      />

      {/* 5. AMC Matrix Comparison */}
      <ServicesAmcComparisonTable
        onRequestAmcQuote={scrollToBooking}
      />

      {/* 6. 4-Tier Preventative Protocol */}
      <ServicesProtocolSection />

      {/* 7. Supported OEM Engines */}
      <ServicesOemBrandsSection
        onNavigateToLeypower={() => onNavigate('leypower')}
        onSelectBrand={() => scrollToBooking()}
      />

      {/* 8. 10,000 sq.ft Warehouse Showcase */}
      <ServicesWarehouseSection />

      {/* 9. Dispatch & Booking Section */}
      <section
        ref={bookingSectionRef}
        id="service-booking"
        className="bg-white py-16 lg:py-20 border-t border-slate-200 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Hotline Column */}
            <div className="lg:col-span-5">
              <ServicesBookingHotlinePanel />
            </div>

            {/* Right Dispatch Form Column */}
            <div className="lg:col-span-7">
              <ServicesBookingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
