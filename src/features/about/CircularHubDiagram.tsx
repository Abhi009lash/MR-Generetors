import React from 'react';
import { aboutEcosystemImg } from '../../assets/images';

export const CircularHubDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 flex flex-col items-center select-none">
      <div className="px-3 py-1 bg-brand-softBlue rounded-[2px] text-brand-blue font-karla font-bold text-xs uppercase tracking-wider mb-2">
        One-Stop Solution
      </div>
      <h3 className="font-rubik font-semibold text-lg sm:text-xl text-navy-950 text-center mb-4">
        M.R Generators Ecosystem
      </h3>

      {/* Authentic High-Res Circular Solution Ecosystem Image */}
      <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center p-2">
        <img
          src={aboutEcosystemImg}
          alt="M.R Generators One Stop Solution Ecosystem"
          className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-105"
        />
      </div>

      <p className="font-karla text-xs sm:text-sm text-slate-500 text-center mt-4 max-w-sm">
        Comprehensive single-point lifecycle support for enterprise power across Telangana &amp; Andhra Pradesh.
      </p>
    </div>
  );
};
