import React from 'react';
import { Phone, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { cumminsDgHeroImg } from '../../assets/images';
import { APP_CONFIG } from '../../core/config';

interface CumminsHeroSectionProps {
  onOpenQuoteModal: (capacity?: string) => void;
  onOpenBrochureModal?: () => void;
}

export const CumminsHeroSection: React.FC<CumminsHeroSectionProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <section className="bg-[#00163D] text-white py-12 lg:py-16 border-b border-[#0F2B5C] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Description (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 bg-[#0A1D3F] border border-white/10 px-3.5 py-1.5 rounded-[2px]">
              <span className="w-1.5 h-3 bg-[#D97706] rounded-xs" />
              <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#DFE9FB]">
                CUMMINS DIESEL GENERATORS (INDIA)
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
                CUMMINS DIESEL GENERATORS
              </h1>
              <span className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#D97706] tracking-tight block">
                (15 kVA TO 3750 kVA)
              </span>
            </div>

            {/* Subtitle / Paragraph */}
            <div className="space-y-4 font-karla text-sm sm:text-base text-[#DFE9FB] leading-relaxed">
              <p>
                Cummins diesel generators have been powering all facets of reliable power for customers around the world from data centres and high-rise commercial complexes to industrial manufacturing plants. Engineered for quick cold starts, class-leading load acceptance and proven durability in harsh Indian climates, Cummins sets the benchmark for industrial power reliability and fuel efficiency.
              </p>
              <p className="text-xs sm:text-sm text-slate-300">
                Direct authorised supply, certified installations and OEM warranty backed field engineers based out of our Sanath Nagar engineering depot and parts distribution warehouse in Hyderabad.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('15 - 3750 kVA')}
                className="h-12 px-6 bg-[#D97706] hover:bg-[#B45309] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-md active:scale-98 cursor-pointer"
              >
                <span>REQUEST CUMMINS PRICING &amp; SIZING</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-karla text-slate-300">
                <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
                <a href={`tel:${APP_CONFIG.phonePrimary}`} className="hover:text-white font-bold transition-colors">
                  +91 {APP_CONFIG.phonePrimary}
                </a>
                <span>|</span>
                <a href={`tel:${APP_CONFIG.phoneSecondary}`} className="hover:text-white font-bold transition-colors">
                  +91 {APP_CONFIG.phoneSecondary}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & 4 Stat Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-lg overflow-hidden border border-white/15 bg-slate-900 shadow-2xl relative group">
              <img
                src={cumminsDgHeroImg}
                alt="Cummins 1500 kVA Containerized Heavy Industrial Generator Set"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
              />

              {/* Caption Under Image */}
              <div className="bg-[#0A1D3F]/95 backdrop-blur-xs p-3 border-t border-white/10">
                <p className="font-karla text-[11px] text-slate-300 leading-tight">
                  <strong className="text-white">Cummins 1500 kVA</strong> Containerized Heavy Industrial Generator Set (Dual Synchronized Installation)
                </p>
              </div>
            </div>

            {/* 4 Stat Badges Grid */}
            <div className="grid grid-cols-2 gap-2.5 font-karla">
              <div className="bg-[#0A1D3F] border border-white/10 p-3 rounded-[2px]">
                <div className="flex items-center gap-1.5 text-[#D97706] mb-1">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span className="font-rubik font-bold text-lg text-white">&lt; 10 SEC</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider block">
                  FULL LOAD TRANSIENT RESPONSE
                </span>
              </div>

              <div className="bg-[#0A1D3F] border border-white/10 p-3 rounded-[2px]">
                <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                  <span className="font-rubik font-bold text-lg text-white">15 - 3750 kVA</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider block">
                  PRIME &amp; STANDBY RATINGS
                </span>
              </div>

              <div className="bg-[#0A1D3F] border border-white/10 p-3 rounded-[2px]">
                <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="font-rubik font-bold text-lg text-white">CPCB IV+</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider block">
                  EMISSION CERTIFIED READY
                </span>
              </div>

              <div className="bg-[#0A1D3F] border border-white/10 p-3 rounded-[2px]">
                <div className="flex items-center gap-1.5 text-blue-400 mb-1">
                  <span className="font-rubik font-bold text-lg text-white">99.999%</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider block">
                  CRITICAL UPTIME IN HEALTHCARE &amp; IT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
