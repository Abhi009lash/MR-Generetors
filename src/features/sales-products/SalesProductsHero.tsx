import React from 'react';
import { Sparkles, ShieldCheck, Truck, Shield, Gauge, Volume2, Clock, Users } from 'lucide-react';

export const SalesProductsHero: React.FC = () => {
  return (
    <section className="bg-[#0A1D3F] text-white relative overflow-hidden select-none">
      {/* Background radial and linear gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B5C] via-transparent to-[#131D3B] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-6 relative z-10 space-y-8">
        {/* Overline Metadata Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded-[2px] text-[#D97706] font-karla font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>AUTHORISED GREAVES DEALERSHIP &amp; OEM DISTRIBUTOR</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#D32F2F] text-white rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CPCB IV+ EMISSION READY</span>
          </div>
        </div>

        {/* Headline + Rapid Dispatch Logistics Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Headline (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-[44px] leading-tight lg:leading-[54px] uppercase tracking-tight text-white">
              BEST DIESEL GENERATOR SALES &amp; TECHNICAL SUPPLY IN HYDERABAD
            </h1>
            <p className="font-karla text-base sm:text-lg text-[#DFE9FB] max-w-3xl leading-relaxed">
              Authorised Greaves Power generator sales, installation, commissioning and genuine parts depot. Hyderabad's authoritative diesel power systems partner since 2014.
            </p>
          </div>

          {/* Rapid Dispatch Logistics Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#131D3B] border border-white/10 rounded-[4px] p-4 sm:p-5 shadow-sm space-y-3">
            <span className="block font-karla font-bold text-xs uppercase tracking-wider text-[#C4C6D0]">
              RAPID DISPATCH LOGISTICS
            </span>

            <div className="flex items-center justify-between gap-2">
              <span className="font-rubik font-semibold text-lg sm:text-xl text-white">
                Hyderabad Depot Stock
              </span>
              <div className="flex items-center gap-1.5 text-[#D97706] font-karla font-bold text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
                <span>READY FOR DISPATCH</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-1 font-karla text-xs sm:text-sm text-[#DFE9FB]">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Same-Day Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Factory Load-Bank Tested</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Spec Metric Ribbon */}
      <div className="bg-[#131D3B] border-t border-white/10 py-5 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-[#D97706]">
              <Gauge className="w-4 h-4" />
              <span className="font-rubik font-bold text-xl sm:text-2xl text-[#D97706]">5 kVA - 2000 kVA</span>
            </div>
            <span className="block font-karla font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#C4C6D0]">
              FULL INDUSTRIAL SPECTRUM
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-white">
              <Volume2 className="w-4 h-4 text-[#D97706]" />
              <span className="font-rubik font-bold text-xl sm:text-2xl text-white">&lt; 75 dBA @ 1m</span>
            </div>
            <span className="block font-karla font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#C4C6D0]">
              CPCB IV+ ACOUSTIC ENCLOSURE
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-[#D97706]">
              <Clock className="w-4 h-4" />
              <span className="font-rubik font-bold text-xl sm:text-2xl text-[#D97706]">15-Min Responses</span>
            </div>
            <span className="block font-karla font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#C4C6D0]">
              HYDERABAD ENGINEERING DESK
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-white">
              <Users className="w-4 h-4 text-[#D97706]" />
              <span className="font-rubik font-bold text-xl sm:text-2xl text-white">1000+ In-Service</span>
            </div>
            <span className="block font-karla font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#C4C6D0]">
              ACROSS TELANGANA &amp; AP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
