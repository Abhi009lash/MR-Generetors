import React from 'react';
import { BrandItem } from '../../types';
import { BrandCard } from './BrandCard';
import { BRANDS_DATA } from '../../core/data';

interface BrandsSectionProps {
  onSelectBrand: (brand: BrandItem) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({
  onSelectBrand,
}) => {
  return (
    <section id="brands" className="py-16 sm:py-20 lg:py-24 bg-surface-light border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex px-3 py-1 bg-brand-softBlue rounded-[2px] text-brand-blue font-karla font-bold text-xs uppercase tracking-wider">
            Multi-Brand Sales &amp; Service Portfolio
          </div>

          <h2 className="font-rubik font-semibold text-2xl sm:text-3xl lg:text-4xl text-navy-950 tracking-tight leading-tight">
            Comprehensive Sales, Spares &amp; Overhaul Support Across Major Brands
          </h2>

          <p className="font-karla text-sm sm:text-base text-industrial-textMuted leading-relaxed">
            Our certified field service engineers provide scheduled maintenance, major engine overhaul, genuine parts supply and emergency breakdown response for all market-leading diesel generator manufacturers.
          </p>
        </div>

        {/* 8 Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {BRANDS_DATA.map((brand) => (
            <BrandCard key={brand.id} brand={brand} onSelect={onSelectBrand} />
          ))}
        </div>
      </div>
    </section>
  );
};
