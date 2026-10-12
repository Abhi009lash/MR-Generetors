import React from 'react';
import { Package, Droplets, Cpu, ShieldAlert, Award } from 'lucide-react';
import { sparesWarehouseImg } from '../../assets/images';

export const ServicesWarehouseSection: React.FC = () => {
  return (
    <section className="bg-[#EFF4FF] py-14 lg:py-16 border-b border-[#D6E4FF] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-[#00163D] text-white rounded-[8px] p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#131D3B] text-[#D97706] border border-[#D97706]/30 px-3 py-1 rounded-[2px]">
                <Award className="w-4 h-4 text-[#D97706]" />
                <span className="font-karla font-bold text-xs uppercase tracking-wider">
                  10,000 SQ.FT CENTRAL DEPOT
                </span>
              </div>

              {/* Title & Copy */}
              <div className="space-y-2">
                <h2 className="font-rubik font-semibold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight">
                  100% GENUINE OEM SPARES &amp; CONSUMABLES
                </h2>
                <p className="font-karla text-xs sm:text-sm text-[#DFE9FB] leading-relaxed">
                  We never cut corners with counterfeit or recycled parts. Our 10,000 sq.ft Hyderabad engineering depot maintains active inventory for emergency night dispatches.
                </p>
              </div>

              {/* 3 Inventory Strips */}
              <div className="space-y-2.5">
                <div className="bg-[#131D3B] p-3 rounded-[2px] flex items-start gap-3 border border-white/5">
                  <Package className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <h3 className="font-karla font-bold text-xs uppercase text-white">
                      Fleetguard &amp; OEM Filtration Kits
                    </h3>
                    <p className="font-karla text-xs text-[#C4C6D0]">
                      Complete oil, diesel water separators, bypass, and air filters.
                    </p>
                  </div>
                </div>

                <div className="bg-[#131D3B] p-3 rounded-[2px] flex items-start gap-3 border border-white/5">
                  <Droplets className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <h3 className="font-karla font-bold text-xs uppercase text-white">
                      Lube Oil &amp; Specialized Coolants
                    </h3>
                    <p className="font-karla text-xs text-[#C4C6D0]">
                      Valvoline, Castrol, and OEM 15W40 CI-4/CK-4 engine lubricants in sealed drums.
                    </p>
                  </div>
                </div>

                <div className="bg-[#131D3B] p-3 rounded-[2px] flex items-start gap-3 border border-white/5">
                  <Cpu className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <h3 className="font-karla font-bold text-xs uppercase text-white">
                      Electrical Controllers &amp; Sensors
                    </h3>
                    <p className="font-karla text-xs text-[#C4C6D0]">
                      DSE, ComAp controllers, AVRs, magnetic pickups, actuators &amp; solenoids.
                    </p>
                  </div>
                </div>
              </div>

              {/* Red Guarantee Strip */}
              <div className="bg-[#620007] border border-red-700/40 p-3 rounded-[2px] flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-[#D97706] shrink-0" />
                <span className="font-karla font-bold text-xs text-white uppercase tracking-wide">
                  Zero Counterfeit Spares Guarantee: 100% OEM sealed packaging with batch traceability certificates.
                </span>
              </div>
            </div>

            {/* Right Column: Warehouse Image & Metrics (6 cols) */}
            <div className="lg:col-span-6 space-y-3">
              {/* Warehouse Image Frame */}
              <div className="relative rounded-[4px] overflow-hidden bg-[#0A1D3F] border border-white/10 aspect-video sm:aspect-auto sm:h-[300px]">
                <img
                  src={sparesWarehouseImg}
                  alt="M.R Generators 10,000 sq ft Spares Depot in Hyderabad"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />

                {/* Top/Bottom Badges */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#131D3B]/90 backdrop-blur-xs p-2.5 rounded-[2px] flex items-center justify-between border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-karla font-bold text-[11px] text-white uppercase tracking-wider">
                      READY FOR OVER-THE-COUNTER PICKUP
                    </span>
                  </div>
                  <span className="font-karla font-bold text-[11px] text-[#D97706] uppercase tracking-wider">
                    DEPOT OPEN 24/7
                  </span>
                </div>
              </div>

              {/* 3 Metric Boxes */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-[#131D3B] p-2.5 rounded-[2px] text-center border border-white/5 space-y-0.5">
                  <span className="block font-rubik font-bold text-lg text-[#D97706]">
                    12,000+
                  </span>
                  <span className="block font-karla font-bold text-[10px] text-[#DFE9FB] uppercase">
                    SKU ITEMS IN STOCK
                  </span>
                </div>
                <div className="bg-[#131D3B] p-2.5 rounded-[2px] text-center border border-white/5 space-y-0.5">
                  <span className="block font-rubik font-bold text-lg text-[#D97706]">
                    100%
                  </span>
                  <span className="block font-karla font-bold text-[10px] text-[#DFE9FB] uppercase">
                    GENUINE OEM CERTIFIED
                  </span>
                </div>
                <div className="bg-[#131D3B] p-2.5 rounded-[2px] text-center border border-white/5 space-y-0.5">
                  <span className="block font-rubik font-bold text-lg text-[#D97706]">
                    24/7
                  </span>
                  <span className="block font-karla font-bold text-[10px] text-[#DFE9FB] uppercase">
                    EMERGENCY COUNTER
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
