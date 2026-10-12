import React from 'react';
import { ArrowRight, FileText, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { rentalHeroNightImg } from '../../assets/images';

interface MahindraHeroProps {
  onOpenQuoteModal: () => void;
  onOpenBrochureModal: () => void;
  onNavigateHome?: () => void;
  onNavigateProducts?: () => void;
}

export const MahindraHero: React.FC<MahindraHeroProps> = ({
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  return (
    <div className="bg-[#0A1D3F] text-white pt-6 pb-12 sm:pb-16 border-b border-[#0F2B5C] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-rubik font-bold text-xs uppercase tracking-wider text-amber-400 block">
                AUTHORISED SALES &amp; ENGINEERING DIVISION
              </span>
              <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-rubik font-bold uppercase tracking-wider bg-[#DC2626] text-white">
                MAHINDRA POWEROL CPCB IV+ DIESEL SETS
              </span>
              <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight pt-1">
                MAHINDRA DIESEL GENERATORS <br />
                <span className="text-amber-400">(5 kVA TO 500 kVA)</span>
              </h1>
            </div>

            <p className="font-karla text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              As an authorized dealer for Mahindra Powerol diesel generators ranging from 5 kVA to 500 kVA, M.R Generators provides robust, fuel-efficient prime and standby power for commercial establishments, residential complexes, manufacturing units, hospitals, and infrastructure projects across Hyderabad &amp; Telangana. Engineered for high performance, low operating costs, and minimal emissions meeting stringent CPCB-IV+ guidelines.
            </p>

            {/* 4 Feature Points in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-karla text-slate-300 pt-1">
              <div className="flex items-start gap-2 bg-[#132C5E]/50 p-2.5 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-semibold">Ultra-Low Emissions:</strong>
                  CPCB IV+ compliant with advanced CRDi common rail injection.
                </span>
              </div>
              <div className="flex items-start gap-2 bg-[#132C5E]/50 p-2.5 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-semibold">Fuel Economy Benchmark:</strong>
                  Low operating cost with high torque rise automotive-grade engines.
                </span>
              </div>
              <div className="flex items-start gap-2 bg-[#132C5E]/50 p-2.5 rounded-lg border border-white/5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-semibold">100% Genuine OEM Dealership:</strong>
                  Full factory warranty with nationwide service &amp; parts network.
                </span>
              </div>
              <div className="flex items-start gap-2 bg-[#132C5E]/50 p-2.5 rounded-lg border border-white/5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-semibold">Rapid Deployment &amp; AMF:</strong>
                  Substation integration, acoustic canopies, and turnkey civil setup.
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="h-12 px-6 bg-[#DC2626] hover:bg-red-700 text-white font-rubik font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <span>REQUEST A BESPOKE MAHINDRA QUOTE: 5-500 kVA</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenBrochureModal}
                className="h-12 px-6 bg-[#00163D] hover:bg-[#0F2B5C] border border-white/30 text-white font-rubik font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>DOWNLOAD SPEC BROCHURE (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#00163D]">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={rentalHeroNightImg}
                  alt="Mahindra Powerol Diesel Generator Plant Hyderabad"
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D3F] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3 bg-[#00163D]/90 backdrop-blur-xs rounded-md px-3 py-1 border border-white/20 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-rubik text-[10px] uppercase font-bold text-white tracking-wider">
                    ENGINEERED BY MAHINDRA POWEROL
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h3 className="font-rubik font-bold text-sm text-white leading-tight drop-shadow">
                    CPCB-IV+ Ready Diesel Power Plant
                  </h3>
                  <p className="font-karla text-xs text-slate-300">
                    5 - 500 kVA High Torque Engineering Output
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#131D3B] flex items-center justify-between border-t border-white/10">
                <span className="font-rubik font-bold text-xs text-slate-300 uppercase">
                  READY STOCK IN HYDERABAD
                </span>
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="px-4 py-2 bg-[#D97706] hover:bg-[#B45309] text-white font-rubik font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  VIEW DEPOT STOCK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Metric Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
          <div className="bg-[#131D3B] border border-white/10 rounded-xl p-4 text-center space-y-1">
            <span className="block font-rubik font-bold text-xl sm:text-2xl text-amber-400">5 - 500 kVA</span>
            <span className="block font-karla text-xs text-slate-300 uppercase font-semibold">
              FULL CAPACITY RANGE
            </span>
          </div>
          <div className="bg-[#131D3B] border border-white/10 rounded-xl p-4 text-center space-y-1">
            <span className="block font-rubik font-bold text-xl sm:text-2xl text-emerald-400">&lt; 75 dBA</span>
            <span className="block font-karla text-xs text-slate-300 uppercase font-semibold">
              ACOUSTIC PERFORMANCE
            </span>
          </div>
          <div className="bg-[#131D3B] border border-white/10 rounded-xl p-4 text-center space-y-1">
            <span className="block font-rubik font-bold text-xl sm:text-2xl text-white">25% LESS</span>
            <span className="block font-karla text-xs text-slate-300 uppercase font-semibold">
              RUNNING FUEL CONSUMPTION
            </span>
          </div>
          <div className="bg-[#131D3B] border border-white/10 rounded-xl p-4 text-center space-y-1">
            <span className="block font-rubik font-bold text-xl sm:text-2xl text-amber-400">500+ Installed</span>
            <span className="block font-karla text-xs text-slate-300 uppercase font-semibold">
              ACROSS AP &amp; TELANGANA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
