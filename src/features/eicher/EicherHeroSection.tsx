import React from 'react';
import { Phone, ArrowRight, Download, Fuel, Clock } from 'lucide-react';
import { eicherDgHeroImg } from '../../assets/images';
import { APP_CONFIG } from '../../core/config';

interface EicherHeroSectionProps {
  onOpenQuoteModal: (capacity?: string) => void;
  onOpenBrochureModal?: () => void;
}

export const EicherHeroSection: React.FC<EicherHeroSectionProps> = ({
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  return (
    <section className="bg-white py-12 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 bg-[#F4F6F9] border border-slate-200 px-3.5 py-1.5 rounded-[2px]">
              <span className="w-1.5 h-3 bg-[#D32F2F] rounded-xs" />
              <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#00163D]">
                AUTHORISED DEALER &amp; GENSET OEM INTEGRATION | VECV - VOLVO EICHER POWERTRAIN
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl text-[#00163D] tracking-tight uppercase leading-tight">
                EICHER DIESEL
              </h1>
              <span className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#D32F2F] tracking-tight block">
                GENERATORS (30 kVA TO 125 kVA)
              </span>
            </div>

            {/* Subtitle / Paragraph */}
            <div className="space-y-3 font-karla text-sm text-slate-600 leading-relaxed">
              <p>
                The Eicher diesel genset portfolio, manufactured by VECV — a joint venture between Volvo Group and Eicher Motors — delivers an exceptional balance of continuous heavy-duty reliability, class-leading fuel economy, low running and maintenance costs, and unmatched spare parts accessibility across India. Leveraging European engineering standards combined with Indian operating conditions, Eicher engines provide industry-best uptime for commercial real estate, educational institutions, healthcare clinics, retail complexes, and harsh industrial environments throughout Telangana and Andhra Pradesh.
              </p>
              <p className="text-xs text-slate-500">
                M.R Generators provides complete supply, certified erection, acoustic installation, pollution control board liaisoning, and round-the-clock emergency field engineering assistance across Hyderabad, Secunderabad, and peripheral industrial zones including Patancheru, Cherlapally, Jeedimetla, and Katedan.
              </p>
            </div>

            {/* 4 Stat Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-karla">
              <div className="bg-[#F8F9FF] border border-slate-200 p-3 rounded-[2px] text-center">
                <span className="font-rubik font-bold text-lg text-[#00163D] block">30 - 125 kVA</span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">PRIME RATINGS</span>
              </div>

              <div className="bg-[#F8F9FF] border border-slate-200 p-3 rounded-[2px] text-center">
                <span className="font-rubik font-bold text-lg text-[#00163D] block">&lt; 75 dBA</span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">SILENT CANOPY</span>
              </div>

              <div className="bg-[#F8F9FF] border border-slate-200 p-3 rounded-[2px] text-center">
                <span className="font-rubik font-bold text-lg text-emerald-600 block">CPCB IV+</span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">EMISSION CERTIFIED</span>
              </div>

              <div className="bg-[#F8F9FF] border border-slate-200 p-3 rounded-[2px] text-center">
                <span className="font-rubik font-bold text-lg text-[#385BAB] block">1500+</span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">LOCAL ASSETS</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('30 - 125 kVA')}
                className="h-12 px-6 bg-[#00163D] hover:bg-[#0F2B5C] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>REQUEST EICHER SIZING &amp; QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${APP_CONFIG.phonePrimary}`}
                className="h-12 px-5 bg-[#D32F2F] hover:bg-red-700 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>+91 {APP_CONFIG.phonePrimary}</span>
              </a>

              {onOpenBrochureModal && (
                <button
                  type="button"
                  onClick={onOpenBrochureModal}
                  className="h-12 px-4 bg-white hover:bg-slate-50 border border-slate-300 text-[#00163D] font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-500" />
                  <span>DOWNLOAD BROCHURE</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Hero Visual Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-900 shadow-xl relative group">
              <img
                src={eicherDgHeroImg}
                alt="Eicher Commercial Silent Diesel Generator"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
              />

              {/* Tag Over Image */}
              <div className="absolute top-3 left-3 bg-[#D32F2F] text-white px-2.5 py-1 rounded-[2px] text-[10px] font-karla font-bold uppercase tracking-wider">
                VECV - Commercial | Eicher 82.5 kVA
              </div>

              {/* Caption Under Image */}
              <div className="bg-[#0A1D3F]/95 backdrop-blur-xs p-3.5 border-t border-white/10 text-white font-karla">
                <p className="text-xs leading-snug">
                  <strong className="text-white">VECV Commercial Variable Housing Canopy</strong> Engineered for silent ambient sound damping &amp; compliant CPCB-IV+ air standards.
                </p>
              </div>
            </div>

            {/* 2 Sub-Badges Below Visual */}
            <div className="grid grid-cols-2 gap-3 font-karla">
              <div className="p-3 bg-[#EFF4FF] border border-[#CCDFFF] rounded-[2px] flex items-center gap-2.5">
                <Fuel className="w-4 h-4 text-[#D32F2F] shrink-0" />
                <span className="text-xs font-bold text-[#00163D] leading-tight">
                  Lowest in Class Fuel Consumption
                </span>
              </div>

              <div className="p-3 bg-[#EFF4FF] border border-[#CCDFFF] rounded-[2px] flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-[#00163D] leading-tight">
                  Over 5,000+ Hours TCO Warranty
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
