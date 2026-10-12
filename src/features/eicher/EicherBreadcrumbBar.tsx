import React from 'react';

interface EicherBreadcrumbBarProps {
  onNavigateHome?: () => void;
  onNavigateProducts?: () => void;
  activeFilter?: string;
  onSelectFilter?: (category: 'all' | 'retail-commercial' | 'office-healthcare' | 'industrial-heavy') => void;
}

export const EicherBreadcrumbBar: React.FC<EicherBreadcrumbBarProps> = ({
  activeFilter = 'all',
  onSelectFilter,
}) => {
  return (
    <div className="bg-white border-b border-slate-200 select-none py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-karla text-xs text-slate-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Factory direct delivery, civil installation &amp; CPCB IV+ testing across Telangana &amp; Andhra Pradesh</span>
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
              ALL (30 - 125 kVA)
            </button>
            <button
              type="button"
              onClick={() => onSelectFilter?.('retail-commercial')}
              className={`px-3 py-1 rounded-[2px] font-karla font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'retail-commercial'
                  ? 'bg-[#00163D] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              30 - 45 kVA RETAIL
            </button>
            <button
              type="button"
              onClick={() => onSelectFilter?.('office-healthcare')}
              className={`px-3 py-1 rounded-[2px] font-karla font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'office-healthcare'
                  ? 'bg-[#00163D] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              62.5 - 82.5 kVA CLINICS
            </button>
            <button
              type="button"
              onClick={() => onSelectFilter?.('industrial-heavy')}
              className={`px-3 py-1 rounded-[2px] font-karla font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'industrial-heavy'
                  ? 'bg-[#00163D] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              100 - 125 kVA INDUSTRIAL
            </button>
          </div>
        </div>
      </div>
  );
};
