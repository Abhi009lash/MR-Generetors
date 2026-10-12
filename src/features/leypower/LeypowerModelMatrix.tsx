import React, { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import {
  LEYPOWER_MODELS_COMPACT,
  LEYPOWER_MODELS_STANDARD,
  LEYPOWER_MODELS_HEAVY,
  type LeypowerModelItem,
} from './leypowerData';

interface LeypowerModelMatrixProps {
  onOpenQuoteModal: (modelName?: string, capacity?: string) => void;
}

type TabType = 'compact' | 'standard' | 'heavy';

export const LeypowerModelMatrix: React.FC<LeypowerModelMatrixProps> = ({
  onOpenQuoteModal,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('compact');

  const models: LeypowerModelItem[] =
    activeTab === 'compact'
      ? LEYPOWER_MODELS_COMPACT
      : activeTab === 'standard'
      ? LEYPOWER_MODELS_STANDARD
      : LEYPOWER_MODELS_HEAVY;

  return (
    <section className="bg-[#F8F9FF] py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
            KVA POWER DECK
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] uppercase tracking-tight">
            ASHOK LEYLAND LEYPOWER MODEL MATRIX
          </h2>
          <p className="font-karla text-xs sm:text-sm text-slate-600 leading-relaxed">
            Explore prime &amp; standby power generation sets tailored for commercial realty, hospitals, and heavy industrial plants.
          </p>
        </div>

        {/* 3 Interactive Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setActiveTab('compact')}
            className={`px-4 sm:px-5 py-2.5 rounded-[4px] font-rubik font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'compact'
                ? 'bg-[#00163D] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            COMPACT COMMERCIAL (10 - 40 kVA)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('standard')}
            className={`px-4 sm:px-5 py-2.5 rounded-[4px] font-rubik font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'standard'
                ? 'bg-[#00163D] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            STANDARD INDUSTRIAL &amp; REALTY (62.5 - 250 kVA)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('heavy')}
            className={`px-4 sm:px-5 py-2.5 rounded-[4px] font-rubik font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'heavy'
                ? 'bg-[#00163D] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            HEAVY HIGH-HORSEPOWER (320 - 2250 kVA)
          </button>
        </div>

        {/* 3 Cards Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((m) => (
            <div
              key={m.id}
              className="bg-white border border-slate-200 rounded-[6px] p-6 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#385BAB] hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                {/* Title & Badge */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="space-y-0.5">
                    <h3 className="font-rubik font-bold text-lg text-[#00163D]">
                      {m.name}
                    </h3>
                    <span className="font-karla text-xs text-slate-500 font-semibold">
                      Prime Rating: {m.kwRating}
                    </span>
                  </div>
                  <span className="bg-[#E5EEFF] text-[#00163D] font-rubik font-bold text-xs px-2.5 py-1 rounded-[3px] shrink-0 border border-[#CCDFFF]">
                    {m.kvaRating}
                  </span>
                </div>

                {/* Specs List */}
                <div className="space-y-2 text-xs font-karla text-slate-700">
                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Engine Platform:</span>
                    <span className="font-semibold text-[#00163D] text-right truncate max-w-[170px]">{m.engineModel}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Configuration:</span>
                    <span className="font-semibold text-[#00163D]">{m.cylinders}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Voltage &amp; Phase:</span>
                    <span className="font-semibold text-[#00163D]">{m.voltagePhase}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Fuel Tank:</span>
                    <span className="font-semibold text-[#00163D]">{m.fuelTank}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Controller:</span>
                    <span className="font-semibold text-[#00163D] text-right truncate max-w-[170px]">{m.controller}</span>
                  </div>
                </div>

                {/* Applications Box */}
                <div className="bg-[#EFF4FF] p-3 rounded-[4px] border border-[#D6E4FF] space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#00163D] uppercase font-karla">
                    <Layers className="w-3.5 h-3.5 text-[#385BAB]" />
                    <span>Ideal Applications</span>
                  </div>
                  <p className="font-karla text-xs text-slate-600 leading-snug">
                    {m.idealApplications}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(m.name, m.kvaRating)}
                  className="font-karla font-bold text-xs text-[#385BAB] hover:text-[#00163D] transition-colors cursor-pointer"
                >
                  View Full Tech Specs
                </button>

                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(m.name, m.kvaRating)}
                  className="inline-flex items-center gap-1.5 bg-[#00163D] hover:bg-[#0A1D3F] text-white font-rubik font-bold text-xs px-4 py-2 rounded-[4px] shadow-2xs transition-all uppercase tracking-wider cursor-pointer"
                >
                  <span>ENQUIRE NOW</span>
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
