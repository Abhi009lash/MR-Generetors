import React from 'react';
import { ShieldCheck, Download, MapPin, Zap } from 'lucide-react';
import { tataDgHeroImg } from '../../assets/images';

interface TataHeroSectionProps {
  onOpenQuoteModal: (capacity?: string) => void;
  onOpenBrochureModal: () => void;
}

export const TataHeroSection: React.FC<TataHeroSectionProps> = ({
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  return (
    <section className="bg-white py-10 lg:py-14 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 bg-[#0A1D3F] text-white px-3.5 py-1.5 rounded-[2px]">
              <Zap className="w-3.5 h-3.5 text-[#D97706]" />
              <span className="font-karla font-bold text-xs uppercase tracking-wider">
                COMMERCIAL-GRADE HEAVY VEHICLE ENGINE ROBUSTNESS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl text-[#00163D] uppercase tracking-tight leading-tight">
              TATA DIESEL GENERATORS (25 kVA TO 100 kVA)
            </h1>

            {/* Subtitle */}
            <p className="font-karla text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Engineered with proven Tata 407 and 1610 series commercial vehicle diesel blocks, delivering extreme overload tolerance, superior fuel economy, and instant spare parts accessibility across Telangana and Andhra Pradesh.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('25 - 100 kVA')}
                className="h-12 px-6 bg-[#D32F2F] hover:bg-red-700 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all shadow-sm active:scale-98 cursor-pointer flex items-center gap-2"
              >
                <span>GET INSTANT TATA GENSET QUOTATION</span>
              </button>

              <button
                type="button"
                onClick={onOpenBrochureModal}
                className="h-12 px-5 bg-[#00163D] hover:bg-[#0F2B5C] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all shadow-sm active:scale-98 cursor-pointer flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD TATA BROCHURE (PDF)</span>
              </button>
            </div>

            {/* Dispatch Assurance Pill */}
            <div className="inline-flex items-center gap-2 bg-[#EFF4FF] border border-[#CCDFFF] text-[#00163D] px-3.5 py-2 rounded-[2px] text-xs font-karla font-bold">
              <MapPin className="w-4 h-4 text-[#D32F2F] shrink-0" />
              <span>Same-day inspection &amp; 48-hour delivery across Hyderabad industrial clusters</span>
            </div>

            {/* 3 Highlight Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#F8F9FF] border border-slate-200 p-3 rounded-[2px]">
                <span className="block font-karla font-bold text-[10px] text-slate-500 uppercase tracking-wider">
                  PROVEN TRUCK BLOCKS
                </span>
                <span className="font-rubik font-bold text-sm text-[#00163D] mt-0.5 block">
                  4 &amp; 6 Cylinder Robust
                </span>
              </div>

              <div className="bg-[#F8F9FF] border border-slate-200 p-3 rounded-[2px]">
                <span className="block font-karla font-bold text-[10px] text-slate-500 uppercase tracking-wider">
                  EMISSIONS COMPLIANCE
                </span>
                <span className="font-rubik font-bold text-sm text-[#00163D] mt-0.5 block">
                  CPCB IV+ Ready
                </span>
              </div>

              <div className="bg-[#F8F9FF] border border-slate-200 p-3 rounded-[2px]">
                <span className="block font-karla font-bold text-[10px] text-slate-500 uppercase tracking-wider">
                  SPARES AVAILABILITY
                </span>
                <span className="font-rubik font-bold text-sm text-[#00163D] mt-0.5 block">
                  Over 500+ Stockists
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols) Image Card */}
          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-xl bg-slate-900 relative group">
              <img
                src={tataDgHeroImg}
                alt="Tata 697 TCIC Series 100 kVA Silent DG Set"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
              />

              {/* Bottom Telemetry Overlay Banner */}
              <div className="bg-[#00163D]/95 backdrop-blur-xs border-t border-white/10 px-5 py-3.5 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-[#88A9FE] font-karla">
                    FLAGSHIP PLATFORM
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-white tracking-tight font-rubik">
                    Tata 697 TCIC Series
                  </span>
                </div>

                <div className="bg-[#2563EB] text-white font-extrabold text-xl sm:text-2xl px-3.5 py-1 rounded-[4px] shadow-md font-rubik">
                  100 kVA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
