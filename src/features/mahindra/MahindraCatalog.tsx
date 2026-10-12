import React, { useState } from 'react';
import { ArrowRight, Download, Fuel, Volume2, Cpu, Zap } from 'lucide-react';
import { MAHINDRA_PRODUCTS, type MahindraProduct } from './mahindraData';

interface MahindraCatalogProps {
  onOpenQuoteModal: (modelName: string, capacity: string) => void;
  onOpenBrochureModal: () => void;
}

export const MahindraCatalog: React.FC<MahindraCatalogProps> = ({
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'compact' | 'commercial' | 'industrial'>('all');

  const filteredProducts = MAHINDRA_PRODUCTS.filter((prod) => {
    if (activeTab === 'all') return true;
    return prod.category === activeTab;
  });

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FF] border-t border-slate-200 select-none" id="mahindra-catalog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
              PROVEN FLEET SIZING &amp; READY STOCK
            </span>
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] tracking-tight">
              Mahindra Powerol Genset Catalog (5 kVA to 500 kVA)
            </h2>
            <p className="font-karla text-sm text-slate-600 leading-relaxed">
              Select from our curated portfolio of ready-to-dispatch gensets, engineered for immediate site deployment.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-rubik font-bold uppercase transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ALL (5 - 500 kVA)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('compact')}
              className={`px-3 py-1.5 rounded-lg text-xs font-rubik font-bold uppercase transition-colors cursor-pointer ${
                activeTab === 'compact'
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              COMPACT (5 - 30 kVA)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('commercial')}
              className={`px-3 py-1.5 rounded-lg text-xs font-rubik font-bold uppercase transition-colors cursor-pointer ${
                activeTab === 'commercial'
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              COMMERCIAL (40 - 125 kVA)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('industrial')}
              className={`px-3 py-1.5 rounded-lg text-xs font-rubik font-bold uppercase transition-colors cursor-pointer ${
                activeTab === 'industrial'
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              INDUSTRIAL (160 - 500 kVA)
            </button>
          </div>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod: MahindraProduct) => (
            <div
              key={prod.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Product Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                  <div className="absolute top-3 left-3 bg-[#DC2626] text-white px-2.5 py-1 rounded text-xs font-rubik font-bold tracking-wider shadow-sm">
                    {prod.capacityBadge}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#00163D] px-2 py-0.5 rounded text-[10px] font-rubik font-bold uppercase tracking-wider">
                    {prod.phaseBadge}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <h3 className="font-rubik font-bold text-base text-[#00163D] leading-tight">
                    {prod.name}
                  </h3>
                  <p className="font-karla text-xs text-slate-600 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Spec Sheet */}
                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs font-karla text-slate-700">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[#385BAB] shrink-0" />
                      <span><strong>Engine:</strong> {prod.engineModel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span><strong>Rating:</strong> {prod.primeRating}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span><strong>Noise:</strong> {prod.noiseLevel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span><strong>Fuel Tank:</strong> {prod.fuelTank}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(prod.name, prod.capacityBadge)}
                  className="h-10 rounded-lg bg-[#DC2626] hover:bg-red-700 text-white font-rubik font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-xs active:scale-98"
                >
                  <span>GET BEST PRICE</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  type="button"
                  onClick={onOpenBrochureModal}
                  className="h-10 rounded-lg bg-[#EFF4FF] hover:bg-slate-200 text-[#00163D] font-rubik font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-2xs active:scale-98"
                >
                  <Download className="w-3 h-3 text-[#385BAB]" />
                  <span>SPEC SHEET</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
