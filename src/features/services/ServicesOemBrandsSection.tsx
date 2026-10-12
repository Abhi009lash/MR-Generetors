import React from 'react';
import { Cpu, ArrowRight } from 'lucide-react';
import { SERVICE_BRANDS, type ServiceBrandItem } from './servicesData';

interface ServicesOemBrandsSectionProps {
  onNavigateToLeypower?: () => void;
  onSelectBrand?: (brandName: string) => void;
}

export const ServicesOemBrandsSection: React.FC<ServicesOemBrandsSectionProps> = ({
  onNavigateToLeypower,
  onSelectBrand,
}) => {
  return (
    <section className="bg-[#F8F9FF] py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="space-y-2 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#D97706] rounded-[2px]" />
            <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
              OEM BRAND SPECIALIZATION
            </span>
          </div>

          <h2 className="font-rubik font-semibold text-2xl sm:text-3xl text-[#00163D] uppercase tracking-tight">
            FACTORY-TRAINED EXPERTISE ACROSS ALL MAJOR POWERTRAINS
          </h2>

          <p className="font-karla text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our mobile technicians carry specialized diagnostic toolkits, scan cables, and OEM calibration algorithms for every major generator engine manufacturer.
          </p>
        </div>

        {/* 8 Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICE_BRANDS.map((brand: ServiceBrandItem) => {
            const isLeyland = brand.id === 'leyland';
            return (
              <div
                key={brand.id}
                onClick={() => {
                  if (isLeyland && onNavigateToLeypower) {
                    onNavigateToLeypower();
                  } else if (onSelectBrand) {
                    onSelectBrand(brand.name);
                  }
                }}
                className={`bg-white rounded-[4px] p-5 shadow-xs border border-slate-200 flex flex-col justify-between space-y-4 transition-all ${
                  isLeyland
                    ? 'cursor-pointer hover:border-[#00163D] hover:shadow-md ring-1 ring-[#385BAB]/15'
                    : 'hover:border-[#385BAB]'
                }`}
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-[2px] bg-[#DFE9FB] flex items-center justify-center text-[#00163D]">
                    <Cpu className="w-5 h-5" />
                  </div>

                  <h3 className="font-rubik font-semibold text-lg text-[#00163D]">
                    {brand.name}
                  </h3>

                  <p className="font-karla text-xs text-slate-600 leading-relaxed">
                    {brand.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-karla font-bold text-[10px] uppercase tracking-wider text-[#385BAB]">
                    {brand.spec}
                  </span>
                  {isLeyland && (
                    <span className="inline-flex items-center text-[11px] font-karla font-bold text-[#D97706] hover:underline gap-1">
                      <span>VIEW</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
