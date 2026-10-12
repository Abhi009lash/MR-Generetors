import React from 'react';
import { Shield } from 'lucide-react';
import { PORTABLE_BRAND_STANDARDS } from './portableData';

export const PortableBrandBanner: React.FC = () => {
  return (
    <section className="bg-[#E5EEFF] py-6 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Left Text */}
          <div className="flex items-center gap-2.5 text-[#44464F] max-w-lg">
            <Shield className="w-5 h-5 text-[#00163D] shrink-0" />
            <span className="font-karla font-bold text-xs sm:text-sm uppercase tracking-wider leading-snug">
              Engineered with leading OEM powertrains &amp; certified to global compliance standards
            </span>
          </div>

          {/* Right OEM Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {PORTABLE_BRAND_STANDARDS.map((brand) => (
              <div
                key={brand}
                className="bg-white shadow-2xs border border-slate-200/60 rounded-[2px] px-3 py-1.5 font-karla font-bold text-xs text-[#00163D] uppercase tracking-wider"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
