import React from 'react';
import { ShieldCheck, PhoneCall, Zap, Award, Clock } from 'lucide-react';
import { HeroShowcaseCard } from './HeroShowcaseCard';
import { PowerRequirementFinder } from '../calculator/PowerRequirementFinder';
import { StatsStrip } from '../stats/StatsStrip';
import type { SizingRequirement } from '../../types';
import { APP_CONFIG } from '../../core/config';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onRequirementSelect: (req: SizingRequirement) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal,
  onRequirementSelect,
}) => {
  return (
    <section className="relative bg-[#00163D] text-white overflow-hidden pt-8 pb-12 sm:pb-16 select-none">
      {/* Subtle industrial background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-8 sm:space-y-10">
        {/* Status / Breadcrumb Overline */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-karla font-bold uppercase tracking-wider">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#3A1418] rounded-[2px] text-[#F87171] border border-red-500/20">
            <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
            <span>24X7 EMERGENCY POWER DISPATCH</span>
          </div>

          <span className="text-slate-500 hidden sm:inline">|</span>

          <div className="flex items-center gap-1.5 text-brand-amber">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-amber shrink-0" />
            <span className="text-white">AUTHORISED DEALERS FOR GREAVES POWER</span>
          </div>

          <span className="text-slate-500 hidden md:inline">|</span>

          <span className="text-slate-300 font-normal hidden md:inline">
            Telangana &amp; Andhra Pradesh
          </span>
        </div>

        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Copy, Badges, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-rubik font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.12] tracking-[-1px] text-white">
              Best Diesel Generator Sales<br />
              &amp; Suppliers in Hyderabad
            </h1>

            <p className="font-karla text-sm sm:text-base md:text-[17px] text-slate-300 leading-relaxed max-w-2xl font-normal">
              Powering critical infrastructure, major industries, commercial hubs &amp; premier healthcare facilities with high-performance DG sets from <strong className="text-white font-bold">5 kVA to 2000 kVA</strong>. Operating with unwavering engineering precision since 2014.
            </p>

            {/* Core Feature Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[#0E203C] border border-white/10 text-white text-xs font-karla font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-amber shrink-0" />
                <span>CPCB IV+ COMPLIANT</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[#0E203C] border border-white/10 text-white text-xs font-karla font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-brand-amber shrink-0" />
                <span>100% GENUINE OEM UNITS</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[#0E203C] border border-white/10 text-white text-xs font-karla font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>2-HOUR ON-SITE SLA</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[2px] bg-[#7E9CF7] hover:bg-[#93AEFF] text-[#00163D] font-karla font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-[#00163D]" />
                <span>FIND MY DG SET</span>
              </button>

              <a
                href={`tel:${APP_CONFIG.phonePrimary}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[2px] bg-[#D32F2F] hover:bg-[#E03838] text-white font-karla font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>24/7 SUPPORT: {APP_CONFIG.phonePrimary}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Product Card */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroShowcaseCard />
          </div>
        </div>

        {/* Embedded Sizing & Model Selector Card */}
        <div className="pt-2">
          <PowerRequirementFinder onRequirementSelect={onRequirementSelect} />
        </div>

        {/* Stats & Credibility Strip on Seamless Navy Background */}
        <div className="pt-2">
          <StatsStrip />
        </div>
      </div>
    </section>
  );
};
