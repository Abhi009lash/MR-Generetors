import React from 'react';

interface KirloskarBreadcrumbBarProps {
  onNavigateHome?: () => void;
  onNavigateProducts?: () => void;
  activeFilter?: string;
  onSelectFilter?: (category: 'all' | 'light-commercial' | 'commercial-industrial' | 'mega-power') => void;
}

export const KirloskarBreadcrumbBar: React.FC<KirloskarBreadcrumbBarProps> = ({
  activeFilter = 'all',
  onSelectFilter,
}) => {
  return (
    <div className="bg-white border-b border-slate-200 select-none py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-karla text-xs text-slate-600 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Kirloskar KOEL Green authorized sales, installation &amp; 24/7 service depot across Telangana &amp; AP</span>
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
            ALL (15 - 5200 kVA)
          </button>
          <button
            type="button"
            onClick={() => onSelectFilter?.('light-commercial')}
            className={`px-3 py-1 rounded-[2px] font-karla font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'light-commercial'
                ? 'bg-[#00163D] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            15 - 45 kVA LIGHT COMMERCIAL
          </button>
          <button
            type="button"
            onClick={() => onSelectFilter?.('commercial-industrial')}
            className={`px-3 py-1 rounded-[2px] font-karla font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'commercial-industrial'
                ? 'bg-[#00163D] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            62.5 - 250 kVA HEAVY PRIME
          </button>
          <button
            type="button"
            onClick={() => onSelectFilter?.('mega-power')}
            className={`px-3 py-1 rounded-[2px] font-karla font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'mega-power'
                ? 'bg-[#00163D] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            500 - 5200 kVA MEGA-POWER
          </button>
        </div>
      </div>
    </div>
  );
};
