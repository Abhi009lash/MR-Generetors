import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { TATA_CATALOG_MODELS } from './tataData';

interface TataCatalogSectionProps {
  onSelectModel: (modelName: string, kva: string) => void;
}

export const TataCatalogSection: React.FC<TataCatalogSectionProps> = ({
  onSelectModel,
}) => {
  const [filter, setFilter] = useState<'all' | 'small' | 'large'>('all');

  const filteredModels = TATA_CATALOG_MODELS.filter((m) => {
    if (filter === 'small') return m.kva === '25 kVA' || m.kva === '35 kVA';
    if (filter === 'large') return m.kva === '62.5 kVA' || m.kva === '82.5 kVA' || m.kva === '100 kVA';
    return true;
  });

  const standardModels = filteredModels.filter((m) => !m.isFlagship);
  const flagshipModel = filteredModels.find((m) => m.isFlagship);

  return (
    <section className="bg-white py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header + Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-slate-200">
          <div className="space-y-2 max-w-xl">
            <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
              PRODUCT SPECIFICATIONS
            </span>
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
              TATA DIESEL GENERATOR LINEUP (25 kVA TO 100 kVA)
            </h2>
            <p className="font-karla text-sm text-slate-600">
              Factory-calibrated soundproof acoustic DG sets powered by Tata commercial vehicle engine platforms.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#E5EEFF] rounded-[2px] shrink-0 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#00163D]'
              }`}
            >
              ALL MODELS
            </button>
            <button
              type="button"
              onClick={() => setFilter('small')}
              className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                filter === 'small'
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#00163D]'
              }`}
            >
              25 — 35 kVA
            </button>
            <button
              type="button"
              onClick={() => setFilter('large')}
              className={`px-3 py-1.5 rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                filter === 'large'
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#00163D]'
              }`}
            >
              62.5 — 100 kVA
            </button>
          </div>
        </div>

        {/* Standard Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardModels.map((m) => (
            <div
              key={m.id}
              className="bg-[#F4F6F9] border border-slate-200 rounded-[2px] p-6 shadow-xs flex flex-col justify-between space-y-5 hover:border-[#385BAB] transition-all"
            >
              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="font-rubik font-bold text-2xl text-white bg-[#00163D] px-2.5 py-1 rounded-[2px]">
                    {m.kva}
                  </span>
                  <span className="font-karla font-bold text-xs text-[#00163D] bg-[#E5EEFF] px-2.5 py-1 rounded-[2px] uppercase tracking-wider">
                    PRIME {m.kw}
                  </span>
                </div>

                <div>
                  <h3 className="font-rubik font-bold text-lg text-[#00163D]">
                    {m.name}
                  </h3>
                  <p className="font-karla text-xs text-slate-600 mt-1 leading-relaxed">
                    {m.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="space-y-1.5 font-karla text-xs">
                  <div className="flex justify-between p-2 bg-white rounded-[2px]">
                    <span className="text-slate-500">Engine Platform</span>
                    <span className="font-bold text-[#00163D]">{m.engineModel}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white rounded-[2px]">
                    <span className="text-slate-500">Cylinders &amp; Displacement</span>
                    <span className="font-bold text-[#00163D]">{m.cylinders}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white rounded-[2px]">
                    <span className="text-slate-500">Canopy Sound Level</span>
                    <span className="font-bold text-[#00163D]">{m.noiseLevel}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white rounded-[2px]">
                    <span className="text-slate-500">Fuel Tank Volume</span>
                    <span className="font-bold text-[#00163D]">{m.fuelTankLitres}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white rounded-[2px]">
                    <span className="text-slate-500">Typical Usage</span>
                    <span className="font-bold text-[#00163D] truncate max-w-[180px]">{m.application}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold font-karla">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>IN DEPOT STOCK</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectModel(m.name, m.kva)}
                  className="px-4 py-2 bg-[#00163D] hover:bg-[#0F2B5C] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer"
                >
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Flagship 100 kVA Wide Showcase Card */}
        {flagshipModel && (
          <div className="bg-[#F4F6F9] border-2 border-[#D32F2F]/40 rounded-[2px] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="font-rubik font-bold text-2xl text-white bg-[#D32F2F] px-3 py-1 rounded-[2px]">
                  {flagshipModel.kva}
                </span>
                <span className="font-karla font-bold text-xs text-white bg-[#0A1D3F] px-3 py-1 rounded-[2px] uppercase tracking-wider">
                  FLAGSHIP TATA INDUSTRIAL
                </span>
                <span className="font-karla font-bold text-xs text-[#00163D] bg-[#E5EEFF] px-2.5 py-1 rounded-[2px] uppercase tracking-wider">
                  PRIME {flagshipModel.kw}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00163D] bg-[#E5EEFF] px-3 py-1 rounded-[2px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>READY FOR SITE DISPATCH WITHIN 48 HOURS</span>
              </div>
            </div>

            <div>
              <h3 className="font-rubik font-bold text-xl sm:text-2xl text-[#00163D]">
                {flagshipModel.name}
              </h3>
              <p className="font-karla text-sm text-slate-600 mt-1 max-w-4xl leading-relaxed">
                {flagshipModel.description}
              </p>
            </div>

            {/* 6-Cell Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 font-karla text-xs">
              <div className="p-2.5 bg-white rounded-[2px] flex justify-between">
                <span className="text-slate-500">Engine Architecture</span>
                <span className="font-bold text-[#00163D]">{flagshipModel.engineModel}</span>
              </div>
              <div className="p-2.5 bg-white rounded-[2px] flex justify-between">
                <span className="text-slate-500">Displacement &amp; Block</span>
                <span className="font-bold text-[#00163D]">{flagshipModel.displacement}</span>
              </div>
              <div className="p-2.5 bg-white rounded-[2px] flex justify-between">
                <span className="text-slate-500">Peak Torque Output</span>
                <span className="font-bold text-[#00163D]">{flagshipModel.maxTorque}</span>
              </div>
              <div className="p-2.5 bg-white rounded-[2px] flex justify-between">
                <span className="text-slate-500">Injection &amp; Governor</span>
                <span className="font-bold text-[#00163D]">{flagshipModel.fuelSystem}</span>
              </div>
              <div className="p-2.5 bg-white rounded-[2px] flex justify-between">
                <span className="text-slate-500">Integrated Fuel Tank</span>
                <span className="font-bold text-[#00163D]">{flagshipModel.fuelTankLitres}</span>
              </div>
              <div className="p-2.5 bg-white rounded-[2px] flex justify-between">
                <span className="text-slate-500">Standard AMF Controller</span>
                <span className="font-bold text-[#00163D]">{flagshipModel.standardController}</span>
              </div>
            </div>

            {/* Flagship CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00163D] font-karla">
                <Zap className="w-4 h-4 text-[#D97706]" />
                <span>Heavy industrial production line ready &bull; Includes 2-year factory warranty</span>
              </div>

              <button
                type="button"
                onClick={() => onSelectModel(flagshipModel.name, flagshipModel.kva)}
                className="px-6 py-3 bg-[#D32F2F] hover:bg-red-700 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <span>REQUEST 100 kVA TECHNICAL PROPOSAL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
