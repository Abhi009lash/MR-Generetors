import React from 'react';
import { Phone, Download, Clock, ShieldCheck, Award } from 'lucide-react';
import { serviceVanImg } from '../../assets/images';

interface ServicesHeroSectionProps {
  onOpenBookingModal: () => void;
  onOpenBrochureModal: () => void;
}

export const ServicesHeroSection: React.FC<ServicesHeroSectionProps> = ({
  onOpenBookingModal,
  onOpenBrochureModal,
}) => {
  return (
    <section className="bg-[#00163D] text-white py-12 lg:py-16 border-b border-[#0F2B5C] relative overflow-hidden select-none">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#131D3B_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-[#131D3B] text-[#D97706] border border-[#D97706]/30 px-3.5 py-1.5 rounded-[2px]">
              <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
              <span className="font-karla font-bold text-xs uppercase tracking-wider">
                OEM AUTHORISED SERVICE &amp; OVERHAUL DEPOT
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight uppercase tracking-tight">
                END-TO-END DIESEL GENERATOR MAINTENANCE, TURNKEY AMC &amp;{' '}
                <span className="text-[#D97706]">2-HOUR BREAKDOWN RESPONSE</span>
              </h1>
              <p className="font-karla text-sm sm:text-base text-[#DFE9FB] leading-relaxed max-w-2xl">
                Protect mission-critical industrial, commercial, and healthcare power assets. We provide factory-trained engineers, genuine OEM parts, CPCB IV+ compliance, and guaranteed 120-minute field response across Telangana &amp; Andhra Pradesh.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-red-700 text-white font-rubik font-bold text-xs sm:text-sm px-6 py-3.5 rounded-[2px] shadow-sm transition-all uppercase tracking-wider cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>BOOK EMERGENCY FIELD DISPATCH</span>
              </button>

              <button
                type="button"
                onClick={onOpenBrochureModal}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#00163D] font-rubik font-bold text-xs sm:text-sm px-6 py-3.5 rounded-[2px] shadow-sm transition-all uppercase tracking-wider cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#385BAB]" />
                <span>DOWNLOAD AMC COVERAGE MATRIX</span>
              </button>
            </div>

            {/* Micro Assurance Indicators */}
            <div className="flex flex-wrap items-center gap-5 pt-2 text-xs font-karla text-[#DFE9FB]">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#D97706]" />
                <span>&lt; 2 Hours Dispatch SLA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                <span>TSPCB / CPCB IV+ Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D97706]" />
                <span>Factory Certified Techs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hardware Preview Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#131D3B] border border-[#213568] rounded-[8px] p-3.5 space-y-3.5 shadow-2xl">
              {/* Image Frame with Badges */}
              <div className="relative rounded-[4px] overflow-hidden bg-[#0A1D3F] border border-white/5 aspect-video sm:aspect-auto sm:h-[260px] flex items-center justify-center">
                <img
                  src={serviceVanImg}
                  alt="M.R Generators Mobile Diagnostic Service Van and CPCB IV Unit"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="eager"
                />

                {/* Top Green Live Overlay */}
                <div className="absolute top-3 left-3 bg-[#00163D]/90 backdrop-blur-xs px-2.5 py-1 rounded-[2px] flex items-center gap-1.5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-karla font-bold text-[10px] text-white uppercase tracking-wider">
                    MOBILE DIAGNOSTIC VAN ACTIVE
                  </span>
                </div>

                {/* Bottom Red Badge */}
                <div className="absolute bottom-3 right-3 bg-[#D32F2F] text-white px-2.5 py-1 rounded-[2px] font-karla font-bold text-[10px] uppercase tracking-wider shadow-sm">
                  CPCB IV+ READY
                </div>
              </div>

              {/* Diagnostic Telemetry Sub-panel */}
              <div className="bg-[#00163D] p-3 rounded-[3px] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-karla">
                  <span className="text-[#DFE9FB] uppercase">FIELD READY DEPOT STATUS</span>
                  <span className="text-[#D97706] font-bold">98.8% FLEET DISPATCHED</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-[#0A1D3F] rounded-full overflow-hidden">
                  <div className="h-full bg-[#D97706] rounded-full w-[98.8%]" />
                </div>

                {/* 4 Telemetry tags */}
                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#DFE9FB] pt-1">
                  <span>OIL PRESSURE: OK</span>
                  <span>COOLANT: OPTIMAL</span>
                  <span>RPM: 1500 NOM</span>
                  <span>BATTERY: 26.4V</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
