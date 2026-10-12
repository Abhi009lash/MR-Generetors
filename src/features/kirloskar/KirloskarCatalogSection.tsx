import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { KIRLOSKAR_CATALOG_MODELS, type KirloskarGensetModel } from './kirloskarData';

interface KirloskarCatalogSectionProps {
  onSelectModel: (modelName: string, kva: string) => void;
  initialFilter?: 'all' | 'light-commercial' | 'commercial-industrial' | 'mega-power';
}

export const KirloskarCatalogSection: React.FC<KirloskarCatalogSectionProps> = ({
  onSelectModel,
  initialFilter = 'all',
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'light-commercial' | 'commercial-industrial' | 'mega-power'>(initialFilter);

  const filteredModels = KIRLOSKAR_CATALOG_MODELS.filter((model: KirloskarGensetModel) => {
    if (activeTab === 'all') return true;
    return model.category === activeTab;
  });

  return (
    <section id="kirloskar-lineup" className="bg-[#F8F9FF] py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header + Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="space-y-2 max-w-xl">
            <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#0D652D] block">
              AUTHORIZED KOEL LINEUP
            </span>
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
              Kirloskar KOEL Green Generator Lineup
            </h2>
            <p className="font-karla text-sm text-slate-600">
              Precision-engineered diesel generators for commercial towers, factories, market complexes, and synchronized critical loads.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#E6F4EA] rounded-[2px] self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#00163D]'
              }`}
            >
              ALL MODELS (15 - 5200 kVA)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('light-commercial')}
              className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'light-commercial'
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#00163D]'
              }`}
            >
              15 - 45 kVA LIGHT COMMERCIAL
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('commercial-industrial')}
              className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'commercial-industrial'
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#00163D]'
              }`}
            >
              62.5 - 250 kVA HEAVY PRIME
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('mega-power')}
              className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'mega-power'
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#00163D]'
              }`}
            >
              500 - 5200 kVA MEGA-POWER
            </button>
          </div>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((m: KirloskarGensetModel) => (
            <div
              key={m.id}
              className="bg-white border border-slate-200 rounded-[2px] p-6 shadow-xs flex flex-col justify-between space-y-5 hover:border-[#0D652D] hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between">
                  <span className="font-karla font-bold text-xs text-[#00163D] bg-[#E6F4EA] px-2.5 py-1 rounded-[2px] uppercase tracking-wider">
                    {m.badge}
                  </span>
                  <span className="font-karla font-bold text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-[2px] uppercase tracking-wider">
                    {m.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-rubik font-bold text-lg text-[#00163D]">
                    {m.name}
                  </h3>
                  <p className="font-karla text-xs text-slate-500 mt-1 leading-snug">
                    {m.subtitle}
                  </p>
                </div>

                {/* Specs Rows */}
                <div className="space-y-1.5 font-karla text-xs pt-2 border-t border-slate-100">
                  {m.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between p-2 bg-[#F8F9FF] rounded-[2px]">
                      <span className="text-slate-500">{spec.label}</span>
                      <span className="font-bold text-[#00163D] text-right truncate max-w-[200px]">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onSelectModel(m.name, m.kvaRating)}
                  className={`w-full h-11 font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                    m.category === 'mega-power'
                      ? 'bg-[#D32F2F] hover:bg-red-700 text-white'
                      : 'bg-[#00163D] hover:bg-[#0F2B5C] text-white'
                  }`}
                >
                  <span>GET INSTANT QUOTATION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
