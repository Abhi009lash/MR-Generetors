import React from 'react';
import { Phone, ArrowRight, Download, CheckCircle2 } from 'lucide-react';
import { catDgHeroImg } from '../../assets/images';
import { APP_CONFIG } from '../../core/config';

interface CaterpillarHeroSectionProps {
  onOpenQuoteModal: (capacity?: string) => void;
  onOpenBrochureModal?: () => void;
}

export const CaterpillarHeroSection: React.FC<CaterpillarHeroSectionProps> = ({
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  return (
    <section className="bg-[#00163D] text-white py-12 lg:py-16 border-b border-slate-800 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Tag Pill */}
            <div className="inline-flex items-center gap-2 bg-[#0A1D3F] border border-amber-500/30 px-3.5 py-1.5 rounded-[2px]">
              <span className="w-1.5 h-3 bg-amber-500 rounded-xs" />
              <span className="font-karla font-bold text-xs uppercase tracking-wider text-amber-400">
                HEAVY-DUTY PRIME &amp; HIGH INDUSTRIAL RANGE
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
                CATERPILLAR (CAT®)
              </h1>
              <span className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-amber-400 tracking-tight block">
                DIESEL GENERATORS (25 kVA TO 1000 kVA)
              </span>
            </div>

            {/* Subtitle / Description */}
            <p className="font-karla text-sm text-slate-300 leading-relaxed">
              Global benchmark for heavy-duty prime power systems. Ranging from mission-critical IT datacenters, multi-specialty hospitals, and heavy steel fabrication to continuous pharmaceutical processing units, Caterpillar delivers unmatched reliability in harsh tropical environments across Telangana and Andhra Pradesh.
            </p>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-karla text-xs">
              <div className="bg-[#0A1D3F] border border-white/10 p-3 rounded-[2px] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-200">100% Block Load acceptance capability for inductive commercial/industrial motors</span>
              </div>
              <div className="bg-[#0A1D3F] border border-white/10 p-3 rounded-[2px] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-200">Heavy-duty cast iron block engineered for high ambient temperatures without deration</span>
              </div>
              <div className="bg-[#0A1D3F] border border-white/10 p-3 rounded-[2px] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-200">Rugged soundproofing high-tensile acoustic enclosure with stainless hardware</span>
              </div>
              <div className="bg-[#0A1D3F] border border-white/10 p-3 rounded-[2px] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-200">40+ Years proven industrial track record with Kato/Cat alternators and PMG excitation</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('25 - 1000 kVA')}
                className="h-12 px-6 bg-[#D32F2F] hover:bg-red-700 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>REQUEST CATERPILLAR QUOTATION &amp; SIZING</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${APP_CONFIG.phonePrimary}`}
                className="h-12 px-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+91 {APP_CONFIG.phonePrimary}</span>
              </a>

              {onOpenBrochureModal && (
                <button
                  type="button"
                  onClick={onOpenBrochureModal}
                  className="h-12 px-4 bg-transparent hover:bg-white/10 border border-white/20 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-300" />
                  <span>SPEC SHEET</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Hero Visual Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-lg overflow-hidden border border-white/10 bg-slate-900 shadow-2xl relative group">
              <img
                src={catDgHeroImg}
                alt="Caterpillar Industrial Heavy Diesel Generator"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
              />

              {/* Tag Over Image */}
              <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 px-2.5 py-1 rounded-[2px] text-[10px] font-karla font-bold uppercase tracking-wider">
                Cat® DE500E0 Substation Installation
              </div>

              {/* Caption Under Image */}
              <div className="bg-[#0A1D3F]/95 backdrop-blur-xs p-3.5 border-t border-white/10 text-white font-karla">
                <p className="text-xs text-slate-300 leading-snug">
                  <strong className="text-white">Heavy RCC Substation Plinth</strong> Engineered with spring vibration dampers, external fuel day tanks, and synchronized automatic paralleling switchgear.
                </p>
              </div>
            </div>

            {/* 4 Stat Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-karla text-center">
              <div className="p-2.5 bg-[#0A1D3F] border border-white/10 rounded-[2px]">
                <span className="font-rubik font-bold text-base text-amber-400 block">25 - 1000 kVA</span>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">INDUSTRIAL PRIME</span>
              </div>
              <div className="p-2.5 bg-[#0A1D3F] border border-white/10 rounded-[2px]">
                <span className="font-rubik font-bold text-base text-white block">&lt; 75 dBA</span>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">SILENT CANOPY</span>
              </div>
              <div className="p-2.5 bg-[#0A1D3F] border border-white/10 rounded-[2px]">
                <span className="font-rubik font-bold text-base text-emerald-400 block">100% Load</span>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">TRANSIENT STEP</span>
              </div>
              <div className="p-2.5 bg-[#0A1D3F] border border-white/10 rounded-[2px]">
                <span className="font-rubik font-bold text-base text-amber-400 block">&lt; 4 Hours</span>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">TELANGANA SQUAD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
