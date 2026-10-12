import React from 'react';
import { ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import { sparesHeroEngineImg } from '../../assets/images';
import { APP_CONFIG } from '../../core/config';

interface SparesHeroProps {
  onOpenQuoteModal: () => void;
  onNavigateHome: () => void;
  onNavigateServices: () => void;
}

export const SparesHero: React.FC<SparesHeroProps> = ({
  onOpenQuoteModal,
  onNavigateHome,
  onNavigateServices,
}) => {
  return (
    <div className="bg-[#0A1D3F] text-white pt-6 pb-12 sm:pb-16 border-b border-[#0F2B5C] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Breadcrumb & Tag */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-karla">
          <button
            type="button"
            onClick={onNavigateHome}
            className="hover:text-amber-400 text-slate-300 font-bold transition-colors cursor-pointer uppercase"
          >
            HOME
          </button>
          <span className="text-slate-500">&gt;</span>
          <button
            type="button"
            onClick={onNavigateServices}
            className="hover:text-amber-400 text-slate-300 font-bold transition-colors cursor-pointer uppercase"
          >
            SERVICES &amp; MAINTENANCE
          </button>
          <span className="text-slate-500">&gt;</span>
          <span className="px-2.5 py-0.5 rounded text-[11px] font-rubik font-bold uppercase tracking-wider bg-[#DC2626] text-white">
            GENUINE OEM SPARE PARTS - DEPOT HYDERABAD
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Best Diesel Generator <br />
              <span className="text-[#FBBF24]">Spares &amp; Accessories</span> <br />
              in Hyderabad
            </h1>

            <p className="font-karla text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              M.R Generators delivers genuine generator spares under our <strong>4R Promise</strong>: The right quality, in the right quantity, at the right place, and at the right time. We eliminate critical enterprise downtime with guaranteed OEM-sourced new and reconditioned parts, rapid depot dispatch, and factory-trained diagnostic technicians.
            </p>

            {/* 4 Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-[#131D3B] border border-white/10 rounded-lg p-3 text-center space-y-0.5">
                <span className="block font-rubik font-bold text-lg text-amber-400">100%</span>
                <span className="block font-karla text-[10px] text-slate-300 uppercase font-semibold leading-tight">
                  Genuine OEM Parts Direct from Factory
                </span>
              </div>
              <div className="bg-[#131D3B] border border-white/10 rounded-lg p-3 text-center space-y-0.5">
                <span className="block font-rubik font-bold text-lg text-white">10,000+</span>
                <span className="block font-karla text-[10px] text-slate-300 uppercase font-semibold leading-tight">
                  In-Stock Ready to Dispatch
                </span>
              </div>
              <div className="bg-[#131D3B] border border-white/10 rounded-lg p-3 text-center space-y-0.5">
                <span className="block font-rubik font-bold text-lg text-emerald-400">&lt; 2-4 Hr</span>
                <span className="block font-karla text-[10px] text-slate-300 uppercase font-semibold leading-tight">
                  Emergency Dispatch Telangana &amp; AP
                </span>
              </div>
              <div className="bg-[#131D3B] border border-white/10 rounded-lg p-3 text-center space-y-0.5">
                <span className="block font-rubik font-bold text-lg text-amber-400">24x7</span>
                <span className="block font-karla text-[10px] text-slate-300 uppercase font-semibold leading-tight">
                  365 Days Ready Dispatch Yard
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
                <span>REQUEST SPARE PART QUOTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${APP_CONFIG.phonePrimary}`}
                className="h-12 px-6 bg-white hover:bg-slate-100 text-[#00163D] font-rubik font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <Phone className="w-4 h-4 text-[#DC2626]" />
                <span>EMERGENCY DESK: +91 {APP_CONFIG.phonePrimary}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Engine Photo Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#00163D]">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={sparesHeroEngineImg}
                  alt="Diesel Generator Engine Spares Depot Hyderabad"
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D3F] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 bg-[#00163D]/90 backdrop-blur-xs rounded-lg p-2.5 border border-white/10 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-rubik text-[10px] uppercase font-bold text-white tracking-wider">
                    FACTORY AUTHORISED GENUINE SPARES - TELANGANA DEPOT
                  </span>
                </div>
              </div>

              {/* 3 Pills Below Photo */}
              <div className="p-4 grid grid-cols-3 gap-2 bg-[#131D3B] text-center border-t border-white/10">
                <div className="space-y-0.5">
                  <span className="font-rubik font-bold text-xs text-amber-400 block">100% OEM</span>
                  <span className="font-karla text-[10px] text-slate-300 block">Original certified parts</span>
                </div>
                <div className="space-y-0.5 border-x border-white/10 px-1">
                  <span className="font-rubik font-bold text-xs text-emerald-400 block">2-4 Hr Dispatch</span>
                  <span className="font-karla text-[10px] text-slate-300 block">Rapid Telangana</span>
                </div>
                <div className="space-y-0.5">
                  <span className="font-rubik font-bold text-xs text-sky-400 block">OEM Trained</span>
                  <span className="font-karla text-[10px] text-slate-300 block">24x7 technician assist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
