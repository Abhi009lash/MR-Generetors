import React from 'react';

interface CaterpillarBreadcrumbBarProps {
  onNavigateHome?: () => void;
  onNavigateProducts?: () => void;
  activeFilter?: string;
  onSelectFilter?: (category: 'all' | 'low-kva' | 'mid-kva' | 'high-kva') => void;
}

export const CaterpillarBreadcrumbBar: React.FC<CaterpillarBreadcrumbBarProps> = ({
  activeFilter = 'all',
  onSelectFilter,
}) => {
  return (
    <div className="bg-white border-b border-slate-200 select-none py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-karla text-xs text-slate-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Heavy industrial Caterpillar diesel engines, ISO 8528 Class G3 transient load response, testing &amp; commissioning</span>
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
              ALL CAPACITIES
            </button>
            <button
              type="button"
              onClick={() => onSelectFilter?.('low-kva')}
              className={`px-3 py-1 rounded-[2px] font-karla font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'low-kva'
                  ? 'bg-[#00163D] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              25 - 65 kVA
            </button>
            <button
              type="button"
              onClick={() => onSelectFilter?.('mid-kva')}
              className={`px-3 py-1 rounded-[2px] font-karla font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'mid-kva'
                  ? 'bg-[#00163D] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              75 - 250 kVA
            </button>
            <button
              type="button"
              onClick={() => onSelectFilter?.('high-kva')}
              className={`px-3 py-1 rounded-[2px] font-karla font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'high-kva'
                  ? 'bg-[#00163D] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              300 - 1000 kVA
            </button>
          </div>
        </div>
      </div>
  );
};
