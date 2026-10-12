import React from 'react';
import { Truck, Fuel, Zap, ArrowRight } from 'lucide-react';
import { RENTAL_FLEET, type RentalFleetItem } from './rentalsData';

interface RentalFleetGridProps {
  onRentCapacity: (capacity: string) => void;
}

export const RentalFleetGrid: React.FC<RentalFleetGridProps> = ({
  onRentCapacity,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-slate-200 select-none" id="rental-fleet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
            RESIDENTIAL, COMMERCIAL &amp; INDUSTRIAL FLEET
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] tracking-tight">
            DIESEL GENERATOR RENTAL FLEET BY CAPACITY
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            All generator rentals feature acoustic sound-proof canopies compliant with Central Pollution Control Board (CPCB-IV+) norms.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RENTAL_FLEET.map((item: RentalFleetItem) => (
            <div
              key={item.id}
              className="bg-[#F8F9FF] border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo with Overlay Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 bg-[#00163D] text-white px-2.5 py-1 rounded text-xs font-rubik font-bold tracking-wider shadow-sm">
                    {item.capacityRange}
                  </div>
                  <div className="absolute bottom-2.5 right-3 bg-white/90 backdrop-blur-xs text-[#00163D] px-2 py-0.5 rounded text-[10px] font-rubik font-bold uppercase tracking-wider">
                    SILENT CPCB-IV+
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-rubik font-bold text-base text-[#00163D] leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-karla text-xs text-slate-600 leading-relaxed">
                    {item.subtitle}
                  </p>

                  {/* Spec Sheet */}
                  <div className="pt-3 border-t border-slate-200/80 space-y-2 text-xs font-karla text-slate-700">
                    <div className="flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold text-[11px] uppercase">Target Loads:</strong>
                        <span>{item.targetLoads}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Truck className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold text-[11px] uppercase">Mobility:</strong>
                        <span>{item.mobility}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Fuel className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold text-[11px] uppercase">Fuel Efficiency:</strong>
                        <span>{item.fuelEfficiency}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => onRentCapacity(item.capacityRange)}
                  className="w-full h-11 rounded-lg bg-[#00163D] hover:bg-[#0F2B5C] text-white font-rubik font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs active:scale-98"
                >
                  <span>{item.buttonLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
