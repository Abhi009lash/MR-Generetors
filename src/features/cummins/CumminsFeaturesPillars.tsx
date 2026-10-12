import React from 'react';
import { Zap, Cpu, Shield, TrendingDown, Layers, Clock } from 'lucide-react';
import { CUMMINS_PILLARS, type CumminsPillar } from './cumminsData';

const getIcon = (iconName: CumminsPillar['iconName']) => {
  switch (iconName) {
    case 'zap':
      return <Zap className="w-5 h-5 text-[#385BAB]" />;
    case 'cpu':
      return <Cpu className="w-5 h-5 text-[#385BAB]" />;
    case 'shield':
      return <Shield className="w-5 h-5 text-[#385BAB]" />;
    case 'trending-down':
      return <TrendingDown className="w-5 h-5 text-[#385BAB]" />;
    case 'layers':
      return <Layers className="w-5 h-5 text-[#385BAB]" />;
    case 'clock':
      return <Clock className="w-5 h-5 text-[#385BAB]" />;
    default:
      return <Zap className="w-5 h-5 text-[#385BAB]" />;
  }
};

export const CumminsFeaturesPillars: React.FC = () => {
  return (
    <section className="bg-white py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header */}
        <div className="space-y-2 max-w-3xl">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
            WHY CHOOSE CUMMINS POWER GENERATION
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
            ENGINEERING ADVANTAGES OF CUMMINS POWER SYSTEMS
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            Each Cummins diesel engine block is engineered with durability for 24/7 heavy-duty continuous loads, featuring high torque, optimized fuel injection, and integrated system diagnostics for peak thermal efficiency.
          </p>
        </div>

        {/* 6 Pillars Grid (3x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUMMINS_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#F8F9FF] border border-slate-200 rounded-[2px] p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#385BAB] hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[2px] bg-[#E5EEFF] flex items-center justify-center">
                  {getIcon(pillar.iconName)}
                </div>

                <div>
                  <h3 className="font-rubik font-bold text-base text-[#00163D] leading-snug">
                    {pillar.title}
                  </h3>
                  <span className="font-karla font-bold text-[10px] text-[#385BAB] uppercase tracking-wider block mt-0.5">
                    {pillar.subtitle}
                  </span>
                </div>

                <p className="font-karla text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
