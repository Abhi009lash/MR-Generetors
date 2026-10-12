import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { BrandItem } from '../../types';

interface BrandCardProps {
  brand: BrandItem;
  onSelect: (brand: BrandItem) => void;
}

export const BrandCard: React.FC<BrandCardProps> = ({ brand, onSelect }) => {
  return (
    <div className="bg-white rounded-lg p-5 sm:p-6 shadow-xs border border-slate-100 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md group">
      <div className="space-y-3">
        {/* Brand Name & Capacity Badge */}
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-rubik font-medium text-lg text-navy-950 group-hover:text-brand-blue transition-colors">
            {brand.name}
          </h3>
          <span className="px-2 py-1 bg-surface-light border border-slate-100 rounded-[2px] font-karla font-bold text-xs text-brand-blue shrink-0">
            {brand.kVaRange}
          </span>
        </div>

        {/* Description */}
        <p className="font-karla text-xs sm:text-sm text-industrial-textMuted leading-relaxed">
          {brand.description}
        </p>
      </div>

      {/* Action link */}
      <div className="pt-4 mt-3 border-t border-slate-50">
        <button
          onClick={() => onSelect(brand)}
          className="inline-flex items-center gap-1 font-karla font-bold text-xs uppercase tracking-wider text-brand-blue group-hover:text-navy-950 transition-colors"
        >
          <span>View Range &amp; Support</span>
          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
};
