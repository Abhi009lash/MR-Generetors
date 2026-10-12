import React from 'react';
import { Cpu } from 'lucide-react';
import { AMC_OEM_BRANDS, type AmcOemBrand } from './amcData';

interface AmcOemSpectrumProps {
  onSelectBrand?: (brandName: string) => void;
}

export const AmcOemSpectrum: React.FC<AmcOemSpectrumProps> = ({
  onSelectBrand,
}) => {
  return (
    <section className="py-14 sm:py-20 bg-[#00163D] text-white select-none" id="amc-brands">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#D97706] block">
            AUTHORIZED OEM COMPLIANCE
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Multi-Brand OEM Support Spectrum
          </h2>
          <p className="font-karla text-sm text-slate-300 leading-relaxed">
            Factory-trained and OEM-certified service engineers handling every leading industrial diesel engine make in India:
          </p>
        </div>

        {/* 10 Brands Grid (5 cols on lg, 2 on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {AMC_OEM_BRANDS.map((brand: AmcOemBrand) => (
            <div
              key={brand.name}
              onClick={() => onSelectBrand?.(brand.name)}
              className="bg-[#0A1D3F] border border-white/10 rounded-xl p-4 text-center shadow-sm hover:border-[#FBBF24] hover:bg-[#102A59] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 mx-auto flex items-center justify-center text-[#FBBF24] group-hover:scale-105 transition-transform">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="font-rubik font-bold text-sm text-white group-hover:text-[#FBBF24] transition-colors leading-tight">
                  {brand.name}
                </h3>
              </div>
              <span className="block mt-2 pt-2 border-t border-white/10 font-karla text-[10px] text-slate-400 font-medium">
                {brand.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
