import React from 'react';
import { Cpu } from 'lucide-react';
import { RENTAL_OEM_BRANDS } from './rentalsData';

interface RentalBrandsProps {
  onSelectBrand?: (brand: string) => void;
}

export const RentalBrands: React.FC<RentalBrandsProps> = ({
  onSelectBrand,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FF] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
            AUTHORISED OEM FLEET COMPLIANCE
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] tracking-tight">
            AUTHORISED &amp; REPUTED OEM RENTAL BRANDS
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            Our rental fleet features genuine engines and alternators from leading global manufacturers, fully maintained and load-tested:
          </p>
        </div>

        {/* 8 Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {RENTAL_OEM_BRANDS.map((brand) => (
            <div
              key={brand.name}
              onClick={() => onSelectBrand?.(brand.name)}
              className="bg-white border border-slate-200 rounded-xl p-3.5 text-center shadow-2xs hover:shadow-sm hover:border-[#00163D] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="w-8 h-8 rounded-full bg-[#EFF4FF] mx-auto flex items-center justify-center text-[#00163D] group-hover:scale-105 transition-transform">
                  <Cpu className="w-4 h-4 text-[#385BAB]" />
                </div>
                <h3 className="font-rubik font-bold text-xs text-[#00163D] group-hover:text-[#DC2626] transition-colors leading-tight">
                  {brand.name}
                </h3>
              </div>
              <span className="block mt-2 pt-2 border-t border-slate-100 font-karla text-[10px] text-slate-500 font-semibold">
                {brand.range}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
