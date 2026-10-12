import React from 'react';
import { Award, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

export interface FilterState {
  kvaRange: string;
  brand: string;
  sector: string;
}

interface SalesProductsHeroProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onResetFilters: () => void;
}

export const SalesProductsHero: React.FC<SalesProductsHeroProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
}) => {
  const kvaOptions = [
    { label: 'ALL KVA', value: 'all' },
    { label: '5–50 KVA', value: '5-50' },
    { label: '50–125 KVA', value: '50-125' },
    { label: '125–500 KVA', value: '125-500' },
    { label: '500–2000 KVA', value: '500-2000' },
  ];

  const brandOptions = [
    { label: 'ALL MAKES', value: 'all' },
    { label: 'GREAVES POWER', value: 'greaves' },
    { label: 'CUMMINS', value: 'cummins' },
    { label: 'KIRLOSKAR', value: 'kirloskar' },
    { label: 'TATA', value: 'tata' },
    { label: 'LEYPOWER', value: 'leypower' },
  ];

  const sectorOptions = [
    { label: 'ALL SECTORS', value: 'all' },
    { label: 'HEALTHCARE / ICU', value: 'healthcare' },
    { label: 'IT / DATA CENTER', value: 'it-data' },
    { label: 'MANUFACTURING', value: 'manufacturing' },
    { label: 'COMMERCIAL', value: 'commercial' },
  ];

  return (
    <section className="bg-[#0A1D3F] text-white pt-8 pb-0 border-b border-white/10 select-none relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D97706]/10 border border-[#D97706]/40 rounded-[2px]">
            <Award className="w-3.5 h-3.5 text-[#D97706]" />
            <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#D97706]">
              AUTHORIZED INDUSTRIAL DG SET CHANNEL PARTNER
            </span>
          </div>

          <div className="inline-flex items-center px-3 py-1 bg-[#D32F2F] text-white rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider shadow-xs">
            CPCB IV+ EMISSION COMPLIANT
          </div>
        </div>

        {/* Hero Title & Rapid Dispatch Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Headline (8 cols) */}
          <div className="lg:col-span-8 space-y-3">
            <h1 className="font-rubik font-black text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] text-white uppercase tracking-tight">
              BEST DIESEL GENERATOR SALES &amp; TECHNICAL SUPPLY IN HYDERABAD
            </h1>
            <p className="font-karla text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Authorized CPCB IV+ Greaves Power generators and enterprise multi-brand standby DG sets ranging from 5 kVA to 2000 kVA with end-to-end turnkey installation across Telangana &amp; Andhra Pradesh.
            </p>
          </div>

          {/* Rapid Dispatch Logistics (4 cols) */}
          <div className="lg:col-span-4 space-y-2 lg:pl-6">
            <span className="block font-karla font-bold text-[11px] uppercase tracking-widest text-slate-400">
              RAPID DISPATCH LOGISTICS
            </span>

            <div className="flex flex-wrap items-baseline gap-2.5">
              <span className="font-rubik font-bold text-xl sm:text-2xl text-white">
                Hyderabad Depot Stock
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#D97706] font-karla font-bold text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
                <span>READY TO SHIP</span>
              </span>
            </div>

            <div className="flex items-center gap-4 pt-1 font-karla text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                <span>CEIG Approved</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                <span>OEM Spares In-Stock</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Technical Capacity & Brand Filter Matrix Box */}
        <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-7 border border-slate-100 text-slate-800 space-y-5">
          {/* Box Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#00163D]" />
              <h3 className="font-karla font-bold text-xs uppercase tracking-wider text-[#00163D]">
                TECHNICAL CAPACITY &amp; BRAND FILTER MATRIX
              </h3>
            </div>

            <button
              type="button"
              onClick={onResetFilters}
              className="text-xs font-karla font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            >
              CLEAR FILTERS
            </button>
          </div>

          {/* 3 Columns Filter Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. KVA POWER OUTPUT */}
            <div className="space-y-2">
              <label className="block font-karla font-bold text-[11px] uppercase tracking-wider text-slate-500">
                1. KVA POWER OUTPUT
              </label>
              <div className="flex flex-wrap gap-1.5">
                {kvaOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => onFilterChange({ ...filters, kvaRange: opt.value })}
                    className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                      filters.kvaRange === opt.value
                        ? 'bg-[#00163D] text-white shadow-xs'
                        : 'bg-[#E5EEFF] hover:bg-[#D5E4FF] text-[#00163D]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. OEM ENGINE BRAND */}
            <div className="space-y-2">
              <label className="block font-karla font-bold text-[11px] uppercase tracking-wider text-slate-500">
                2. OEM ENGINE BRAND
              </label>
              <div className="flex flex-wrap gap-1.5">
                {brandOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => onFilterChange({ ...filters, brand: opt.value })}
                    className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                      filters.brand === opt.value
                        ? 'bg-[#00163D] text-white shadow-xs'
                        : 'bg-[#E5EEFF] hover:bg-[#D5E4FF] text-[#00163D]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. DEPLOYMENT SECTOR */}
            <div className="space-y-2">
              <label className="block font-karla font-bold text-[11px] uppercase tracking-wider text-slate-500">
                3. DEPLOYMENT SECTOR
              </label>
              <div className="flex flex-wrap gap-1.5">
                {sectorOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => onFilterChange({ ...filters, sector: opt.value })}
                    className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                      filters.sector === opt.value
                        ? 'bg-[#00163D] text-white shadow-xs'
                        : 'bg-[#E5EEFF] hover:bg-[#D5E4FF] text-[#00163D]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Column Technical Spec Metric Ribbon */}
      <div className="border-t border-white/10 mt-10 py-6 bg-[#0A1D3F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="block font-rubik font-black text-xl sm:text-2xl text-[#D97706] tracking-tight">
              5 kVA – 2000 kVA
            </span>
            <span className="block font-karla font-bold text-[11px] uppercase tracking-wider text-slate-300">
              CONTINUOUS CAPACITY SPAN
            </span>
          </div>

          <div className="space-y-1">
            <span className="block font-rubik font-black text-xl sm:text-2xl text-white tracking-tight">
              &lt; 75 dBA @ 1m
            </span>
            <span className="block font-karla font-bold text-[11px] uppercase tracking-wider text-slate-300">
              ACOUSTIC CPCB IV+ CERTIFIED
            </span>
          </div>

          <div className="space-y-1">
            <span className="block font-rubik font-black text-xl sm:text-2xl text-[#D97706] tracking-tight">
              15-Min Response
            </span>
            <span className="block font-karla font-bold text-[11px] uppercase tracking-wider text-slate-300">
              COMMERCIAL QUOTATION DISPATCH
            </span>
          </div>

          <div className="space-y-1">
            <span className="block font-rubik font-black text-xl sm:text-2xl text-white tracking-tight">
              100% In-House
            </span>
            <span className="block font-karla font-bold text-[11px] uppercase tracking-wider text-slate-300">
              TURNKEY ERECTION &amp; CEIG HANDOVER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
