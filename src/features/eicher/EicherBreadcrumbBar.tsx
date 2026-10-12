import React from 'react';
import { ChevronRight, ShieldCheck } from 'lucide-react';

interface EicherBreadcrumbBarProps {
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
  activeFilter?: string;
  onSelectFilter?: (category: 'all' | 'retail-commercial' | 'office-healthcare' | 'industrial-heavy') => void;
}

export const EicherBreadcrumbBar: React.FC<EicherBreadcrumbBarProps> = ({
  onNavigateHome,
  onNavigateProducts,
}) => {
  return (
    <div className="bg-[#F8F9FF] border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        {/* Breadcrumb Path */}
        <div className="flex items-center gap-1.5 text-xs font-karla text-slate-500">
          <button
            type="button"
            onClick={onNavigateHome}
            className="hover:text-[#00163D] transition-colors cursor-pointer font-bold uppercase"
          >
            HOME
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <button
            type="button"
            onClick={onNavigateProducts}
            className="hover:text-[#00163D] transition-colors cursor-pointer font-bold uppercase"
          >
            PRODUCTS
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-bold text-[#00163D] uppercase">
            EICHER DIESEL GENERATORS
          </span>
        </div>

        {/* Right Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[2px] bg-[#E5EEFF] border border-[#CCDFFF] text-[#00163D] text-[11px] font-karla font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D32F2F]" />
          <span>VECV - VOLVO EICHER POWERTRAIN CERTIFIED</span>
        </div>
      </div>
    </div>
  );
};
