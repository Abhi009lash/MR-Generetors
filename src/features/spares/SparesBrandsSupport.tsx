import React from 'react';
import { Cpu, ShieldCheck } from 'lucide-react';
import { SUPPORTED_OEM_BRANDS, type SpareBrand } from './sparesData';

interface SparesBrandsSupportProps {
  onSelectBrand?: (brandName: string) => void;
}

export const SparesBrandsSupport: React.FC<SparesBrandsSupportProps> = ({
  onSelectBrand,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#DC2626] block">
            ALL MAJOR OEM BRANDS MAINTAINED IN READY STOCK
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] tracking-tight">
            SUPPORTED OEM ENGINE &amp; ALTERNATOR BRANDS
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            We stock genuine parts cataloged directly to factory part numbers for all major power platforms deployed in commercial and industrial establishments:
          </p>
        </div>

        {/* 10 Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {SUPPORTED_OEM_BRANDS.map((brand: SpareBrand) => (
            <div
              key={brand.name}
              onClick={() => onSelectBrand?.(brand.name)}
              className="bg-[#F8F9FF] border border-slate-200 rounded-xl p-4 text-center hover:border-[#00163D] hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 mx-auto flex items-center justify-center text-[#00163D] group-hover:scale-105 transition-transform">
                  <Cpu className="w-5 h-5 text-[#00163D]" />
                </div>
                <h3 className="font-rubik font-bold text-xs sm:text-sm text-[#00163D] group-hover:text-[#DC2626] transition-colors leading-tight">
                  {brand.name}
                </h3>
                <p className="font-karla text-[11px] text-slate-500 leading-tight">
                  {brand.category}
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-200/60 flex items-center justify-center gap-1 text-[10px] font-rubik font-bold uppercase text-emerald-700">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>{brand.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
