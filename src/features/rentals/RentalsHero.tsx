import React from 'react';
import { ArrowRight, Phone, CheckCircle2, Zap } from 'lucide-react';
import { rentalHeroNightImg } from '../../assets/images';
import { APP_CONFIG } from '../../core/config';

interface RentalsHeroProps {
  onOpenQuoteModal: () => void;
  onNavigateHome: () => void;
}

export const RentalsHero: React.FC<RentalsHeroProps> = ({
  onOpenQuoteModal,
  onNavigateHome,
}) => {
  return (
    <div className="bg-[#0A1D3F] text-white pt-6 pb-12 sm:pb-16 border-b border-[#0F2B5C] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Top Breadcrumbs & Tag */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-karla">
          <button
            type="button"
            onClick={onNavigateHome}
            className="hover:text-amber-400 text-slate-300 font-bold transition-colors cursor-pointer uppercase"
          >
            HOME
          </button>
          <span className="text-slate-500">&gt;</span>
          <span className="text-slate-300 font-bold uppercase">BUSINESS VERTICALS</span>
          <span className="text-slate-500">&gt;</span>
          <span className="px-2.5 py-0.5 rounded text-[11px] font-rubik font-bold uppercase tracking-wider bg-[#DC2626] text-white">
            24/7 EMERGENCY &amp; TEMPORARY DIESEL GENERATOR RENTALS IN TELANGANA
          </span>
        </div>

        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              TOP GENERATOR RENTAL <br />
              <span className="text-[#FBBF24]">SERVICES IN HYDERABAD</span>
            </h1>

            <p className="font-karla text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              M.R Generators, established in 2008, has been providing reliable power solutions in field diesel generator rental spaces for more than <strong>15+ years</strong>. Recognized among the Top Generator Rental Services in Hyderabad, we are one of the leading diesel generator hire agencies in the region. We hire out silent diesel generator power sets, portable generators, and prime sourcing from <strong>5 kVA to 2000 kVA</strong> from Tata, Cummins, Ashok Leyland, Greaves, and Kirloskar.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="h-12 px-6 bg-[#00163D] hover:bg-[#0F2B5C] border border-white/30 text-white font-rubik font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <span>REQUEST RENTAL QUOTE</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <a
                href={`tel:${APP_CONFIG.phonePrimary}`}
                className="h-12 px-6 bg-[#DC2626] hover:bg-red-700 text-white font-rubik font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <Phone className="w-4 h-4" />
                <span>EMERGENCY RENTAL: +91 {APP_CONFIG.phonePrimary}</span>
              </a>
            </div>

            {/* 3 Checkpoints */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-karla text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Same-Day Delivery &amp; Installation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Factory-Maintained Silent DG Sets
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero Maintenance &amp; Fuel Support Option
              </span>
            </div>
          </div>

          {/* Right Column: Night Fleet Image Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#00163D]">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={rentalHeroNightImg}
                  alt="Industrial Diesel Generator Rental Depot Hyderabad"
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D3F] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3 bg-[#00163D]/90 backdrop-blur-xs rounded-md px-3 py-1 border border-white/20 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-rubik text-[10px] uppercase font-bold text-white tracking-wider">
                    24/7 TELANGANA INDUSTRIAL RENTAL DEPOT
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-[#DC2626] text-white px-2.5 py-0.5 rounded text-[10px] font-rubik font-bold uppercase tracking-wider">
                  FAST MOBILIZATION
                </div>
              </div>

              {/* 3 Metrics Bottom Bar */}
              <div className="p-4 grid grid-cols-3 gap-2 bg-[#131D3B] text-center border-t border-white/10">
                <div className="space-y-0.5">
                  <span className="font-rubik font-bold text-xs text-amber-400 block">5 TO 2000 kVA</span>
                  <span className="font-karla text-[10px] text-slate-300 block uppercase">Rental Capacity</span>
                </div>
                <div className="space-y-0.5 border-x border-white/10 px-1">
                  <span className="font-rubik font-bold text-xs text-emerald-400 block">&lt; 2-4 Hrs</span>
                  <span className="font-karla text-[10px] text-slate-300 block uppercase">Dispatch Response</span>
                </div>
                <div className="space-y-0.5">
                  <span className="font-rubik font-bold text-xs text-sky-400 block">&gt; 200 UNITS</span>
                  <span className="font-karla text-[10px] text-slate-300 block uppercase">Ready In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Metric Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
          <div className="bg-[#131D3B] border border-white/10 rounded-xl p-4 text-center space-y-1">
            <span className="block font-rubik font-bold text-xl sm:text-2xl text-amber-400">5 - 2000 kVA</span>
            <span className="block font-karla text-xs text-slate-300 uppercase font-semibold">
              RENTAL FLEET CAPACITY
            </span>
          </div>
          <div className="bg-[#131D3B] border border-white/10 rounded-xl p-4 text-center space-y-1">
            <span className="block font-rubik font-bold text-xl sm:text-2xl text-white">15+ Years</span>
            <span className="block font-karla text-xs text-slate-300 uppercase font-semibold">
              TELANGANA RENTAL RECORD
            </span>
          </div>
          <div className="bg-[#131D3B] border border-white/10 rounded-xl p-4 text-center space-y-1">
            <span className="block font-rubik font-bold text-xl sm:text-2xl text-emerald-400">&lt; 2-4 Hours</span>
            <span className="block font-karla text-xs text-slate-300 uppercase font-semibold">
              RAPID SITE MOBILIZATION
            </span>
          </div>
          <div className="bg-[#131D3B] border border-white/10 rounded-xl p-4 text-center space-y-1">
            <span className="block font-rubik font-bold text-xl sm:text-2xl text-amber-400">24x7 Support</span>
            <span className="block font-karla text-xs text-slate-300 uppercase font-semibold">
              ON-SITE TECHNICIANS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
