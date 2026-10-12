import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CumminsBreadcrumbBarProps {
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
  activeFilter?: string;
  onSelectFilter?: (category: 'all' | 'commercial' | 'industrial' | 'high-horsepower') => void;
}

export const CumminsBreadcrumbBar: React.FC<CumminsBreadcrumbBarProps> = ({
  onNavigateHome,
  onNavigateProducts,
  activeFilter = 'all',
  onSelectFilter,
}) => {
  return (
    <div className="bg-[#F8F9FF] border-b border-slate-200 select-none">
      {/* Top Breadcrumb Path */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3">
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
            CUMMINS DIESEL GENERATORS
          </span>
        </div>
      </div>

      {/* Sub-Ribbon with Fast Categories */}
      <div className="bg-white border-t border-slate-200/80 py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-karla text-xs text-slate-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Factory direct supply, testing and commissioning across Telangana &amp; Andhra Pradesh</span>
          </p>

          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 md:pb-0">
            <button
              type="button"
              onClick={() => onSelectFilter?.('all')}
              className={`px-3 py-1 rounded-[2px] font-karla font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-[#00163D] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              ALL RATINGS
            </button>
            <button
              type="button"
              onClick={() => onSelectFilter?.('commercial')}
              className={`px-3 py-1 rounded-[2px] font-karla font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'commercial'
                  ? 'bg-[#00163D] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              COMMERCIAL 15-125 kVA
            </button>
            <button
              type="button"
              onClick={() => onSelectFilter?.('industrial')}
              className={`px-3 py-1 rounded-[2px] font-karla font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'industrial'
                  ? 'bg-[#00163D] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              INDUSTRIAL 160-500 kVA
            </button>
            <button
              type="button"
              onClick={() => onSelectFilter?.('high-horsepower')}
              className={`px-3 py-1 rounded-[2px] font-karla font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'high-horsepower'
                  ? 'bg-[#00163D] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              MEGA-POWER 750-3750 kVA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
