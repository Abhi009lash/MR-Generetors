import React from 'react';
import { ArrowRight, FileText, CheckCircle2, ShieldCheck, Zap, Phone, Volume2 } from 'lucide-react';
import { rentalHeroNightImg } from '../../assets/images';
import { APP_CONFIG } from '../../core/config';

interface PortableHeroSectionProps {
  onOpenQuoteModal: (capacity?: string) => void;
  onOpenBrochureModal?: () => void;
}

export const PortableHeroSection: React.FC<PortableHeroSectionProps> = ({
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  return (
    <section className="bg-[#00163D] text-white py-12 lg:py-16 border-b border-[#0F2B5C] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#E5EEFF] text-[#00163D] px-3 py-1 rounded-[2px] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
                <span className="font-karla font-bold text-xs uppercase tracking-wider">
                  PORTABLE, TOWABLE &amp; SUPER-SILENT POWER DIVISION
                </span>
              </div>

              <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                MOBILE &amp; PORTABLE GENERATORS <br />
                <span className="text-[#DAE2FF] text-2xl sm:text-3xl lg:text-4xl font-normal block pt-1">
                  (1 kVA TO 125 kVA)
                </span>
              </h1>

              <p className="font-karla font-bold text-sm sm:text-base text-slate-200">
                Heavy-duty, quiet, towable and portable diesel &amp; petrol generator power for Hyderabad &amp; Telangana operations.
              </p>

              <p className="font-karla text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                For broadcast units, disaster relief, emergency services, events, infrastructure field sites, and locations where standard stationary generators cannot access, M.R Generators provides specialized agile mobile generators from 1 kVA to 125 kVA engineered for ultra-low noise, rapid road towing, and severe environmental resilience.
              </p>
            </div>

            {/* 4 Feature Points (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-karla text-slate-300 pt-1">
              <div className="flex items-start gap-2 bg-[#0F2B5C]/60 p-2.5 rounded-[2px] border border-white/10">
                <Volume2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-semibold">Super-Silent Capsule:</strong>
                  Sub-62 dBA acoustic sound floor @ 7m with labyrinth exhaust.
                </span>
              </div>
              <div className="flex items-start gap-2 bg-[#0F2B5C]/60 p-2.5 rounded-[2px] border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-semibold">Dual Water Cooling:</strong>
                  Both engine &amp; alternator liquid-cooled for 100% load at 50°C.
                </span>
              </div>
              <div className="flex items-start gap-2 bg-[#0F2B5C]/60 p-2.5 rounded-[2px] border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-semibold">German AL-KO Chassis:</strong>
                  Rubber torsion axle, override brakes &amp; highway RTO lighting.
                </span>
              </div>
              <div className="flex items-start gap-2 bg-[#0F2B5C]/60 p-2.5 rounded-[2px] border border-white/10">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-semibold">Pure Sine Inverter &amp; AVR:</strong>
                  ±0.5% microprocessor voltage regulation with &lt; 2% THD.
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Mobile & Portable DG Set')}
                className="h-12 px-6 bg-[#D32F2F] hover:bg-red-700 text-white font-rubik font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <span>REQUEST MOBILE GENERATOR QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenBrochureModal}
                className="h-12 px-6 bg-[#00163D] hover:bg-[#0F2B5C] border border-white/30 text-white font-rubik font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>DOWNLOAD MOBILE SPECS PDF</span>
              </button>
            </div>

            {/* SLA Helpline */}
            <p className="font-karla text-xs text-slate-300 flex items-center gap-2 pt-1">
              <Phone className="w-3.5 h-3.5 text-[#D97706]" />
              <span>24/7 Rapid Towed Dispatch:</span>
              <a href={`tel:${APP_CONFIG.phonePrimary}`} className="text-white font-bold hover:underline">
                +91 {APP_CONFIG.phonePrimary}
              </a>
              <span className="text-slate-400 hidden sm:inline">— Mobilized within 120 minutes</span>
            </p>
          </div>

          {/* Right Column: Hero Visual Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[4px] overflow-hidden border border-white/20 shadow-2xl bg-[#07152E]">
              <div className="relative h-72 sm:h-84 w-full overflow-hidden">
                <img
                  src={rentalHeroNightImg}
                  alt="Mobile Towable Generator Unit Hyderabad"
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00163D] via-transparent to-transparent opacity-85" />
                
                {/* Floating Top Tag */}
                <div className="absolute top-3 left-3 bg-[#00163D]/95 backdrop-blur-xs rounded-[2px] px-3 py-1.5 border border-white/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-karla text-[11px] uppercase font-bold text-white tracking-wider">
                    TELANGANA RTO TOW-CERTIFIED
                  </span>
                </div>

                <div className="absolute top-3 right-3 bg-[#D32F2F] text-white px-2.5 py-1 rounded-[2px] text-[10px] font-rubik font-bold uppercase tracking-wider">
                  READY STOCK IN HYD
                </div>

                {/* Bottom Overlay Description */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h3 className="font-rubik font-bold text-base text-white leading-tight drop-shadow">
                    All-Terrain Road Towable Acoustic Unit
                  </h3>
                  <p className="font-karla text-xs text-slate-200 mt-0.5">
                    1 kVA - 125 kVA High Mobility Fleet | Sanath Nagar Depot
                  </p>
                </div>
              </div>

              {/* Card Footer Metric Strip */}
              <div className="p-3.5 bg-[#0F2B5C] flex items-center justify-between text-xs font-karla border-t border-white/10">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Zap className="w-4 h-4" />
                  <span>120m Rapid Site Dispatch</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Volume2 className="w-4 h-4" />
                  <span>&lt; 62 dBA Super-Silent Floor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
