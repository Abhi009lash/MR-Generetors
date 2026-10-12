import React from 'react';
import { VolumeX, UserCheck, Fuel, Cable, ShieldCheck, Truck } from 'lucide-react';
import { RENTAL_INCLUSIONS, type RentalInclusionItem } from './rentalsData';

export const RentalInclusions: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'canopy':
        return <VolumeX className="w-5 h-5 text-amber-400" />;
      case 'operators':
        return <UserCheck className="w-5 h-5 text-sky-400" />;
      case 'fuel':
        return <Fuel className="w-5 h-5 text-emerald-400" />;
      case 'cables':
        return <Cable className="w-5 h-5 text-amber-400" />;
      case 'guarantee':
        return <ShieldCheck className="w-5 h-5 text-red-400" />;
      default:
        return <Truck className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#00163D] text-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#D97706] block">
            COMPREHENSIVE RENTAL PACKAGE INCLUSIONS
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            WHAT IS INCLUDED WITH EVERY M.R GENERATORS RENTAL
          </h2>
          <p className="font-karla text-sm text-slate-300 leading-relaxed">
            We don’t drop off a machine and leave you stranded. We deliver full turnkey power delivery at your doorstep across AP &amp; Telangana.
          </p>
        </div>

        {/* 6 Inclusions Grid (3x2 on Large) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RENTAL_INCLUSIONS.map((item: RentalInclusionItem) => (
            <div
              key={item.id}
              className="bg-[#0A1D3F] border border-white/10 rounded-2xl p-6 shadow-md hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getIcon(item.id)}
                </div>
                <h3 className="font-rubik font-bold text-base text-white leading-snug">
                  {item.title}
                </h3>
                <p className="font-karla text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
