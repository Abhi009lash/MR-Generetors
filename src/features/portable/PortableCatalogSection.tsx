import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PORTABLE_CATALOG_MODELS, type PortableGensetModel } from './portableData';
import {
  rentalTrailerCompactImg,
  rentalHeroNightImg,
  rentalCommercialSkidImg,
  rentalIndustrialHeavyImg,
  leypowerGenImg,
  generators1Img,
} from '../../assets/images';

interface PortableCatalogSectionProps {
  onSelectModel: (modelName: string, kva: string) => void;
  initialFilter?: 'all' | 'compact' | 'towable' | 'sync-plants';
}

const modelImageMap: Record<string, string> = {
  'agt-3000': generators1Img,
  'honda-eu70is': rentalTrailerCompactImg,
  'yanmar-15kva': rentalCommercialSkidImg,
  'greaves-30kva': rentalHeroNightImg,
  'panda-60kva': leypowerGenImg,
  'plant-125kva': rentalIndustrialHeavyImg,
};

export const PortableCatalogSection: React.FC<PortableCatalogSectionProps> = ({
  onSelectModel,
  initialFilter = 'all',
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'compact' | 'towable' | 'sync-plants'>(initialFilter);

  const filteredModels = PORTABLE_CATALOG_MODELS.filter((model: PortableGensetModel) => {
    if (activeTab === 'all') return true;
    return model.category === activeTab;
  });

  return (
    <section id="portable-lineup" className="bg-white py-16 lg:py-20 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header + Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="space-y-2 max-w-xl">
            <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
              OFFICIAL LINEUP
            </span>
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] tracking-tight uppercase">
              Explore Mobile &amp; Portable Genset Lineup
            </h2>
            <p className="font-karla text-sm text-[#44464F]">
              Compact hand-carry, trailer-mounted and high-output synchronized power solutions ready for rapid road deployment.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EFF4FF] rounded-[2px] self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#00163D]'
              }`}
            >
              ALL (1 - 125 kVA)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('compact')}
              className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'compact'
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#00163D]'
              }`}
            >
              1 - 10 kVA COMPACT
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('towable')}
              className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'towable'
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#00163D]'
              }`}
            >
              15 - 45 kVA TOWABLE
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('sync-plants')}
              className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'sync-plants'
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#00163D]'
              }`}
            >
              62.5 - 125 kVA SYNC PLANTS
            </button>
          </div>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((m: PortableGensetModel) => {
            const imgSrc = modelImageMap[m.id] || rentalHeroNightImg;
            return (
              <div
                key={m.id}
                className="bg-white border border-slate-200 rounded-[4px] overflow-hidden shadow-xs flex flex-col justify-between hover:border-[#385BAB] hover:shadow-md transition-all group"
              >
                {/* Image Stage */}
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={m.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-[#00163D]/90 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-[2px] text-[10px] font-rubik font-bold uppercase tracking-wider">
                    {m.badge}
                  </div>

                  <div className="absolute top-3 right-3 bg-[#E5EEFF] text-[#00163D] px-2 py-0.5 rounded-[2px] text-[10px] font-karla font-bold uppercase tracking-wider">
                    {m.tag}
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-slate-200 font-karla">
                    <span className="font-bold text-white">{m.kvaRating} / {m.kwRating}</span>
                    <span className="text-emerald-300 font-semibold">{m.soundLevel}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
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
                        m.category === 'sync-plants'
                          ? 'bg-[#D32F2F] hover:bg-red-700 text-white'
                          : 'bg-[#00163D] hover:bg-[#0F2B5C] text-white'
                      }`}
                    >
                      <span>REQUEST MOBILE QUOTE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
