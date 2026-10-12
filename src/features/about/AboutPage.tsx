import React from 'react';
import { AboutBreadcrumb } from './AboutBreadcrumb';
import { AboutHeroSection } from './AboutHeroSection';
import { AboutHeritageSection } from './AboutHeritageSection';
import { AboutOemStandardsSection } from './AboutOemStandardsSection';
import { AboutVisionMissionValues } from './AboutVisionMissionValues';
import { AboutLeadershipSection } from './AboutLeadershipSection';
import { AboutConsultationCallout } from './AboutConsultationCallout';

interface AboutPageProps {
  onOpenBrochureModal: () => void;
  onOpenQuoteModal: () => void;
  onNavigateHome?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenBrochureModal,
  onOpenQuoteModal,
  onNavigateHome,
}) => {
  return (
    <div className="w-full flex flex-col bg-[#F8F9FF]">
      {/* 1. Sub-Banner & Breadcrumb */}
      <AboutBreadcrumb onNavigateHome={onNavigateHome} />

      {/* 2. Hero Section with 6 Trust Metrics */}
      <AboutHeroSection onOpenBrochureModal={onOpenBrochureModal} />

      {/* 3. Decade of Heritage & Circular Lifecycle Graphic */}
      <AboutHeritageSection />

      {/* 4. OEM Dealership & Technical Standards Banner */}
      <AboutOemStandardsSection />

      {/* 5. Vision, Mission & Core Values Grid */}
      <AboutVisionMissionValues />

      {/* 6. Executive Technical Leadership */}
      <AboutLeadershipSection />

      {/* 7. Turnkey Consultation Callout */}
      <AboutConsultationCallout onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
};
