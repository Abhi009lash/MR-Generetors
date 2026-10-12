import React from 'react';
import { ShieldCheck, PhoneCall, ArrowDown, Award, Zap } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { HeroShowcaseCard } from './HeroShowcaseCard';
import { APP_CONFIG } from '../../core/config';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <section className="relative bg-navy-900 text-white overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24">
      {/* Industrial Atmospheric Backing Glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-lightBlue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-80 bg-brand-amber/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Status / Breadcrumb Overline */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 text-xs font-karla font-bold uppercase tracking-wider">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-red/20 rounded-[2px] text-brand-red border border-brand-red/30">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span>Emergency Power Dispatch</span>
          </div>

          <span className="text-slate-500 hidden sm:inline">/</span>

          <div className="flex items-center gap-1.5 text-brand-softBlue">
            <Award className="w-3.5 h-3.5 text-brand-amber shrink-0" />
            <span>Authorised Dealer for Greaves Generators</span>
          </div>

          <span className="text-slate-500 hidden md:inline">/</span>

          <span className="text-brand-softBlue/80 hidden md:inline">
            Capacities: 5 kVA - 2000 kVA
          </span>
        </div>

        {/* Main Hero Split: Left Copy & Right Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-rubik font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.15] tracking-[-1.2px] text-white">
              Best Diesel Generator Sales &amp; Suppliers in Hyderabad
            </h1>

            <p className="font-karla text-base sm:text-lg text-brand-softBlue/90 leading-relaxed max-w-2xl font-normal">
              Powering critical infrastructure, major industries, commercial hubs &amp; premier healthcare facilities with high-performance DG sets from 5 kVA to 2000 kVA. Operating with unwavering engineering precision since 2014.
            </p>

            {/* Core Feature Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-navy-850 border border-white/10 text-brand-softBlue text-xs font-karla font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-amber shrink-0" />
                <span>CPCB IV+ Compliant</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-navy-850 border border-white/10 text-brand-softBlue text-xs font-karla font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-brand-amber shrink-0" />
                <span>100% Genuine OEM Parts</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-navy-850 border border-white/10 text-brand-softBlue text-xs font-karla font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-brand-red shrink-0" />
                <span>Rapid Service: 24/7</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a href="#products">
                <Button
                  variant="accent"
                  size="lg"
                  rightIcon={<ArrowDown className="w-4 h-4" />}
                >
                  Explore DG Sets
                </Button>
              </a>

              <a href={`tel:${APP_CONFIG.phonePrimary}`}>
                <Button
                  variant="emergency"
                  size="lg"
                  leftIcon={<PhoneCall className="w-4 h-4" />}
                >
                  24/7 Emergency Dispatch
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Product Card */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroShowcaseCard onOpenQuoteModal={onOpenQuoteModal} />
          </div>
        </div>
      </div>
    </section>
  );
};
