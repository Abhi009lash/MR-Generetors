import React from 'react';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';

export interface FilterState {
  kvaRange: string;
  brand: string;
  sector: string;
}

interface SpecificationFilterPanelProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onReset: () => void;
}

export const SpecificationFilterPanel: React.FC<SpecificationFilterPanelProps> = ({
  filters,
  onFilterChange,
  onReset,
}) => {
  const kvaOptions = [
    { label: 'ALL', value: 'all' },
    { label: '5-62.5 KVA', value: '5-62.5' },
    { label: '82.5-160 KVA', value: '82.5-160' },
    { label: '200-500 KVA', value: '200-500' },
    { label: '750-2000 KVA', value: '750-2000' },
  ];

  const brandOptions = [
    { label: 'ALL BRANDS', value: 'all' },
    { label: 'GREAVES POWER', value: 'greaves' },
    { label: 'CUMMINS', value: 'cummins' },
    { label: 'KIRLOSKAR', value: 'kirloskar' },
    { label: 'TATA', value: 'tata' },
    { label: 'ASHOK LEYLAND', value: 'ashok-leyland' },
  ];

  const sectorOptions = [
    { label: 'ALL SECTORS', value: 'all' },
    { label: 'HEALTHCARE & HOSPITALS', value: 'healthcare' },
    { label: 'IT & DATA CENTRES', value: 'it-data' },
    { label: 'MANUFACTURING & PHARMA', value: 'manufacturing' },
    { label: 'COMMERCIAL & REALTY', value: 'commercial' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-5 sm:p-6 -mt-8 relative z-20 max-w-7xl mx-auto space-y-5 select-none">
      {/* Filter Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-[#00163D]" />
          <h3 className="font-karla font-bold text-sm uppercase tracking-wider text-[#00163D]">
            ENGINEERING SPECIFICATION FILTER
          </h3>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-1.5 text-xs font-karla font-bold uppercase tracking-wider text-[#385BAB] hover:text-[#00163D] transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>RESET ALL FILTERS</span>
        </button>
      </div>

      {/* Filter Columns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 1. kVA Power Output */}
        <div className="space-y-2">
          <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-600">
            1. KVA POWER OUTPUT
          </label>
          <div className="flex flex-wrap gap-1.5">
            {kvaOptions.map((opt) => {
              const active = filters.kvaRange === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onFilterChange({ ...filters, kvaRange: opt.value })}
                  className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#00163D] text-white shadow-xs'
                      : 'bg-[#E5EEFF] hover:bg-[#D5E4FF] text-[#121C29]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. OEM Engine Brand */}
        <div className="space-y-2">
          <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-600">
            2. OEM ENGINE BRAND
          </label>
          <div className="flex flex-wrap gap-1.5">
            {brandOptions.map((opt) => {
              const active = filters.brand === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onFilterChange({ ...filters, brand: opt.value })}
                  className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#00163D] text-white shadow-xs'
                      : 'bg-[#E5EEFF] hover:bg-[#D5E4FF] text-[#121C29]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Deployment Sector */}
        <div className="space-y-2">
          <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-600">
            3. DEPLOYMENT SECTOR
          </label>
          <div className="flex flex-wrap gap-1.5">
            {sectorOptions.map((opt) => {
              const active = filters.sector === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onFilterChange({ ...filters, sector: opt.value })}
                  className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#00163D] text-white shadow-xs'
                      : 'bg-[#E5EEFF] hover:bg-[#D5E4FF] text-[#121C29]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
