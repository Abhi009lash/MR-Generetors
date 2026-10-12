import React from 'react';
import { greaves82Img } from '../../assets/images';

export const HeroShowcaseCard: React.FC = () => {
  return (
    <div className="w-full max-w-lg lg:max-w-none bg-[#0D1E3A] border border-white/10 rounded-lg p-3 sm:p-4 shadow-2xl relative overflow-hidden">
      {/* Visual Image Container with Industrial Night Backdrop */}
      <div className="relative w-full h-64 sm:h-72 rounded-md overflow-hidden bg-gradient-to-b from-[#0B1A30] via-[#0D2242] to-[#081528] border border-white/10 flex items-center justify-center">
        {/* Atmospheric factory night light glow */}
        <div className="absolute top-2 left-6 w-3 h-3 rounded-full bg-yellow-200/80 blur-xs shadow-[0_0_15px_6px_rgba(253,224,71,0.5)]" />
        <div className="absolute top-8 right-12 w-2 h-2 rounded-full bg-yellow-200/60 blur-xs shadow-[0_0_12px_4px_rgba(253,224,71,0.4)]" />

        {/* Real Greaves Generator */}
        <img
          src={greaves82Img}
          alt="Greaves Power 82.5-500 kVA Silent Canopy"
          className="w-full h-full object-contain p-2 filter drop-shadow-2xl transition-transform duration-300 hover:scale-105"
        />

        {/* Image Bottom Overlay with Spotlight Engine & Silent Canopy Badge */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081528] via-[#081528]/85 to-transparent p-3 sm:p-4 flex items-end justify-between gap-2">
          <div>
            <span className="block font-karla font-bold text-[10px] sm:text-[11px] uppercase tracking-wider text-brand-amber">
              Spotlight Engine
            </span>
            <h3 className="font-rubik font-bold text-base sm:text-lg text-white leading-tight mt-0.5">
              Greaves Power 82.5–500 kVA
            </h3>
          </div>

          <span className="px-2.5 py-1 bg-[#102A54] border border-blue-400/30 text-white font-karla font-bold text-[10px] uppercase tracking-wider rounded-[2px] shadow-sm shrink-0">
            Silent Canopy
          </span>
        </div>
      </div>

      {/* 3-Column Spec Ribbon */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-3 pt-1">
        {/* Rating */}
        <div className="bg-[#09172E] border border-white/10 rounded-[2px] py-2 px-1 text-center">
          <span className="block font-karla text-[10px] uppercase tracking-wider font-bold text-slate-400">
            Rating
          </span>
          <span className="block font-rubik font-bold text-sm sm:text-base text-white mt-0.5">
            CPCB IV+
          </span>
        </div>

        {/* Range */}
        <div className="bg-[#09172E] border border-white/10 rounded-[2px] py-2 px-1 text-center">
          <span className="block font-karla text-[10px] uppercase tracking-wider font-bold text-slate-400">
            Range
          </span>
          <span className="block font-rubik font-bold text-sm sm:text-base text-white mt-0.5">
            5 - 2000 kVA
          </span>
        </div>

        {/* Dispatched */}
        <div className="bg-[#09172E] border border-white/10 rounded-[2px] py-2 px-1 text-center">
          <span className="block font-karla text-[10px] uppercase tracking-wider font-bold text-slate-400">
            Dispatched
          </span>
          <span className="block font-rubik font-bold text-sm sm:text-base text-brand-amber mt-0.5">
            In 24 Hrs
          </span>
        </div>
      </div>
    </div>
  );
};
