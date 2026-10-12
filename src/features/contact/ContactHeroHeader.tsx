import React from 'react';
import { ChevronRight, Zap, Shield, Clock } from 'lucide-react';

interface ContactHeroHeaderProps {
  onNavigateHome: () => void;
}

export const ContactHeroHeader: React.FC<ContactHeroHeaderProps> = ({ onNavigateHome }) => {
  return (
    <section className="bg-[#0A1D3F] text-white pt-8 pb-12 border-b border-[#0F2B5C] relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-karla tracking-wider uppercase">
          <button
            type="button"
            onClick={onNavigateHome}
            className="text-[#C4C6D0] hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-bold"
          >
            HOME
          </button>
          <ChevronRight className="w-3 h-3 text-[#D97706]" />
          <span className="text-[#D97706] font-bold">CONTACT US &amp; TECHNICAL SUPPORT</span>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 text-[#D97706] font-karla font-bold text-xs uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
          <span>CONNECTING INFRASTRUCTURE DEMAND WITH DIESEL GENERATOR POWER</span>
        </div>

        {/* Main Grid: Headline on Left, 3 Metrics on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
              CONNECT WITH HYDERABAD'S TRUSTED STANDBY POWER SPECIALISTS
            </h1>
            <p className="font-karla text-sm sm:text-base text-[#DFE9FB] max-w-3xl leading-relaxed">
              Reach our central dispatch engineering hub for DG set sales, urgent emergency rental, AMC maintenance, or factory-genuine spare parts. Available 24 hours a day, 365 days a year.
            </p>
          </div>

          {/* 3 Metric Badges */}
          <div className="lg:col-span-4 bg-[#00163D]/80 border border-white/10 rounded-[2px] p-4 sm:p-5 grid grid-cols-3 gap-3 text-center backdrop-blur-xs">
            <div className="space-y-1">
              <div className="flex items-center justify-center text-[#D97706] mb-1">
                <Clock className="w-4 h-4" />
              </div>
              <span className="block font-rubik font-bold text-2xl sm:text-3xl text-white">
                120<span className="text-sm font-normal text-[#D97706]">m</span>
              </span>
              <span className="block font-karla font-bold text-[10px] uppercase tracking-wider text-[#C4C6D0] leading-tight">
                MAX HYDERABAD SLA
              </span>
            </div>

            <div className="space-y-1 border-x border-white/10 px-2">
              <div className="flex items-center justify-center text-[#D97706] mb-1">
                <Zap className="w-4 h-4" />
              </div>
              <span className="block font-rubik font-bold text-2xl sm:text-3xl text-white">
                5-2000
              </span>
              <span className="block font-karla font-bold text-[10px] uppercase tracking-wider text-[#C4C6D0] leading-tight">
                KVA RANGE READY
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center text-[#D97706] mb-1">
                <Shield className="w-4 h-4" />
              </div>
              <span className="block font-rubik font-bold text-2xl sm:text-3xl text-white">
                24/7
              </span>
              <span className="block font-karla font-bold text-[10px] uppercase tracking-wider text-[#C4C6D0] leading-tight">
                FIELD ENGINEERS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
