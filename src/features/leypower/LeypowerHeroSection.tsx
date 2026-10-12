import React from 'react';
import { ArrowRight, Download, Cpu, Gauge, Clock, ShieldCheck } from 'lucide-react';
import { leypowerGenImg } from '../../assets/images';

interface LeypowerHeroSectionProps {
  onOpenQuoteModal: (modelName?: string, capacity?: string) => void;
  onOpenBrochureModal: () => void;
}

export const LeypowerHeroSection: React.FC<LeypowerHeroSectionProps> = ({
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  return (
    <section className="bg-[#F8F9FF] py-12 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading, Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* OEM Authorised Tag */}
            <div className="inline-flex items-center gap-2 bg-[#00163D] text-white px-3 py-1.5 rounded-[3px] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D97706]" />
              <span className="font-karla font-bold text-xs uppercase tracking-wider">
                OEM AUTHORISED SUPPLY &amp; COMMISSIONING PARTNER
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#00163D] uppercase tracking-tight">
                Authorized Ashok Leyland{' '}
                <span className="text-[#385BAB]">LEYPOWER Generator</span>{' '}
                Suppliers in Hyderabad
              </h1>
              <p className="font-karla text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Heavy-duty prime, continuous and standby power solutions powered by legendary Ashok Leyland H-Series and Neptune platforms (10 kVA to 2250 kVA). Engineered for lowest fuel consumption, high ambient tolerance, and relentless industrial uptime across Telangana and Andhra Pradesh.
              </p>
            </div>

            {/* 3 Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-white border border-slate-200 rounded-[4px] p-3 shadow-2xs flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-[#385BAB] shrink-0" />
                <span className="font-karla font-bold text-xs text-[#00163D]">
                  4-Cylinder Turbo Engine
                </span>
              </div>
              <div className="bg-white border border-slate-200 rounded-[4px] p-3 shadow-2xs flex items-center gap-2.5">
                <Gauge className="w-4 h-4 text-[#D97706] shrink-0" />
                <span className="font-karla font-bold text-xs text-[#00163D]">
                  190 g/kWh Low Fuel SFC
                </span>
              </div>
              <div className="bg-white border border-slate-200 rounded-[4px] p-3 shadow-2xs flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-karla font-bold text-xs text-[#00163D]">
                  2-Hour Breakdown SLA
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Ashok Leyland LEYPOWER 62.5 kVA', '62.5 kVA')}
                className="inline-flex items-center gap-2 bg-[#00163D] hover:bg-[#0A1D3F] text-white font-rubik font-bold text-xs sm:text-sm px-6 py-3.5 rounded-[4px] shadow-sm transition-all uppercase tracking-wider cursor-pointer"
              >
                <span>REQUEST FACTORY QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenBrochureModal}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#00163D] border border-slate-300 font-rubik font-bold text-xs sm:text-sm px-5 py-3.5 rounded-[4px] shadow-2xs transition-all uppercase tracking-wider cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#385BAB]" />
                <span>DOWNLOAD LEYPOWER CATALOGUE</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Preview Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[6px] border border-slate-200 shadow-md overflow-hidden">
              {/* Card Top Dark Bar */}
              <div className="bg-[#0A1D3F] px-4 py-2.5 flex items-center justify-between text-white border-b border-[#0F2B5C]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-karla font-bold text-xs uppercase tracking-wider text-slate-200">
                    LIVE HYDERABAD DEPOT UNIT
                  </span>
                </div>
                <span className="font-karla font-bold text-xs text-[#D97706] tracking-wider">
                  MODEL: AL-62.5 kVA
                </span>
              </div>

              {/* Generator Image Stage */}
              <div className="p-4 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center min-h-[260px]">
                <img
                  src={leypowerGenImg}
                  alt="Ashok Leyland LEYPOWER 62.5 kVA Silent DG Set"
                  className="max-h-[250px] w-auto object-contain transition-transform duration-300 hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* 4-Parameter Technical Grid */}
              <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 border-t border-slate-200 bg-slate-50/50">
                <div className="p-3 space-y-0.5">
                  <span className="block font-karla text-[10px] uppercase font-bold text-slate-500">
                    Acoustic Sound Level
                  </span>
                  <span className="block font-rubik font-bold text-xs text-[#00163D]">
                    &lt; 75 dBA @ 1m
                  </span>
                </div>
                <div className="p-3 space-y-0.5">
                  <span className="block font-karla text-[10px] uppercase font-bold text-slate-500">
                    Fuel Consumption Rate
                  </span>
                  <span className="block font-rubik font-bold text-xs text-[#00163D]">
                    190 g/kWh Prime
                  </span>
                </div>
                <div className="p-3 space-y-0.5">
                  <span className="block font-karla text-[10px] uppercase font-bold text-slate-500">
                    Governor System
                  </span>
                  <span className="block font-rubik font-bold text-xs text-[#00163D]">
                    Electronic A1 Class
                  </span>
                </div>
                <div className="p-3 space-y-0.5">
                  <span className="block font-karla text-[10px] uppercase font-bold text-slate-500">
                    Standard Controller
                  </span>
                  <span className="block font-rubik font-bold text-xs text-[#00163D]">
                    Micro-Controller AMF
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-[#EFF4FF] px-4 py-2.5 flex items-center justify-between text-[11px] font-karla text-slate-700 border-t border-slate-200">
                <div className="flex items-center gap-1.5 font-bold text-[#00163D]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>CPCB IV+ Approved Acoustic Canopy Enclosure</span>
                </div>
                <span className="text-slate-500 font-mono text-[10px]">
                  DEPOT SERIAL: HYD-AL-2026-0412
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
