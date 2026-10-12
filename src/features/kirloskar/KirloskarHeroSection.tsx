import React from 'react';
import { Phone, ArrowRight, Download, CheckCircle2, ShieldCheck } from 'lucide-react';
import { kirloskarDgHeroImg } from '../../assets/images';
import { APP_CONFIG } from '../../core/config';

interface KirloskarHeroSectionProps {
  onOpenQuoteModal: (capacity?: string) => void;
  onOpenBrochureModal?: () => void;
}

export const KirloskarHeroSection: React.FC<KirloskarHeroSectionProps> = ({
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  return (
    <section className="bg-white py-12 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Tag Pill */}
            <div className="inline-flex items-center gap-2 bg-[#E6F4EA] border border-[#B7E1CD] px-3.5 py-1.5 rounded-[2px]">
              <span className="w-1.5 h-3 bg-[#0D652D] rounded-xs" />
              <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#0D652D]">
                KOEL GREEN AUTHORISED SALES &amp; SERVICE PARTNER | INDIA'S LARGEST SELLING GENERATOR BRAND
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl text-[#00163D] tracking-tight uppercase leading-tight">
                KIRLOSKAR KOEL GREEN
              </h1>
              <span className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0D652D] tracking-tight block">
                DIESEL GENERATORS (15 kVA TO 5200 kVA)
              </span>
            </div>

            {/* Subtitle / Paragraphs */}
            <div className="space-y-3 font-karla text-sm text-slate-600 leading-relaxed">
              <p>
                Kirloskar Oil Engines Limited (KOEL Green) is India’s benchmark diesel generator manufacturer, providing unmatched fuel efficiency, robust operational longevity, and rugged performance across thousands of industrial facilities, healthcare campuses, multi-megawatt IT parks, and defense establishments throughout Telangana and Andhra Pradesh.
              </p>
              <p className="text-xs text-slate-500">
                Backed by complete factory-authorized inventory, certified civil foundation installation, soundproof acoustic canopy integration, and rapid 2-hour emergency technician response across Hyderabad, Secunderabad, Patancheru, Balanagar, and Cherlapally industrial corridors.
              </p>
            </div>

            {/* 4 Stat Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-karla">
              <div className="bg-[#F8F9FF] border border-slate-200 p-3 rounded-[2px] text-center">
                <span className="font-rubik font-bold text-lg text-[#00163D] block">15 - 5200</span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">kVA PRIME/STANDBY</span>
              </div>

              <div className="bg-[#F8F9FF] border border-slate-200 p-3 rounded-[2px] text-center">
                <span className="font-rubik font-bold text-lg text-[#0D652D] block">1 Million+</span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">ACTIVE UNITS WORLDWIDE</span>
              </div>

              <div className="bg-[#F8F9FF] border border-slate-200 p-3 rounded-[2px] text-center">
                <span className="font-rubik font-bold text-lg text-[#385BAB] block">Air &amp; Water</span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">COOLED ENGINE RANGE</span>
              </div>

              <div className="bg-[#F8F9FF] border border-slate-200 p-3 rounded-[2px] text-center">
                <span className="font-rubik font-bold text-lg text-amber-700 block">100+ Yrs</span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">ENGINEERING HERITAGE</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('15 - 5200 kVA')}
                className="h-12 px-6 bg-[#D32F2F] hover:bg-red-700 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>REQUEST KIRLOSKAR QUOTATION &amp; SIZING</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${APP_CONFIG.phonePrimary}`}
                className="h-12 px-5 bg-[#00163D] hover:bg-[#0F2B5C] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 {APP_CONFIG.phonePrimary}</span>
              </a>

              {onOpenBrochureModal && (
                <button
                  type="button"
                  onClick={onOpenBrochureModal}
                  className="h-12 px-4 bg-white hover:bg-slate-50 border border-slate-300 text-[#00163D] font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-500" />
                  <span>BROCHURE</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Hero Visual Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-900 shadow-xl relative group">
              <img
                src={kirloskarDgHeroImg}
                alt="Kirloskar KOEL Green Commercial Diesel Generator"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
              />

              {/* Tag Over Image */}
              <div className="absolute top-3 left-3 bg-[#0D652D] text-white px-2.5 py-1 rounded-[2px] text-[10px] font-karla font-bold uppercase tracking-wider">
                KOEL Green Heavy Commercial | Central Yard
              </div>

              {/* Caption Under Image */}
              <div className="bg-[#0A1D3F]/95 backdrop-blur-xs p-3.5 border-t border-white/10 text-white font-karla">
                <div className="flex items-center justify-between pb-1">
                  <h4 className="font-rubik font-bold text-sm text-white">Hyderabad Central Yard</h4>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-[2px] border border-emerald-500/30">
                    READY STOCK
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  Factory-assembled acoustic silent canopy sets ready for direct dispatch, slab erection, and immediate commissioning across Telangana.
                </p>
              </div>
            </div>

            {/* 2 Sub-Badges Below Visual */}
            <div className="grid grid-cols-2 gap-3 font-karla">
              <div className="p-3 bg-[#E6F4EA] border border-[#B7E1CD] rounded-[2px] flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D652D] shrink-0" />
                <span className="text-xs font-bold text-[#0D652D] leading-tight">
                  Air &amp; Water Cooled Available
                </span>
              </div>

              <div className="p-3 bg-[#EFF4FF] border border-[#CCDFFF] rounded-[2px] flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#385BAB] shrink-0" />
                <span className="text-xs font-bold text-[#00163D] leading-tight">
                  Factory Commissioned Tested
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
