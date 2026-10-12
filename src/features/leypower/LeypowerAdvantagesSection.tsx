import React from 'react';
import { Zap, Shield, CheckCircle2, Activity } from 'lucide-react';
import { LEYPOWER_ADVANTAGES, type LeypowerAdvantageItem } from './leypowerData';

const getIcon = (name: LeypowerAdvantageItem['iconName']) => {
  switch (name) {
    case 'zap':
      return <Zap className="w-5 h-5 text-[#385BAB]" />;
    case 'shield':
      return <Shield className="w-5 h-5 text-[#385BAB]" />;
    case 'checkCircle':
      return <CheckCircle2 className="w-5 h-5 text-[#385BAB]" />;
    case 'activity':
      return <Activity className="w-5 h-5 text-[#385BAB]" />;
    default:
      return <Zap className="w-5 h-5 text-[#385BAB]" />;
  }
};

export const LeypowerAdvantagesSection: React.FC = () => {
  return (
    <section className="bg-white py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
            PRECISION ENGINEERING
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] uppercase tracking-tight">
            PRECISION ENGINEERING BEHIND ASHOK LEYLAND LEYPOWER
          </h2>
          <p className="font-karla text-xs sm:text-sm text-slate-600 leading-relaxed">
            Heavy-duty engineering built to outlast extreme ambient conditions and continuous industrial cyclic loads.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEYPOWER_ADVANTAGES.map((adv) => (
            <div
              key={adv.id}
              className="bg-[#F8F9FF] border border-slate-200 rounded-[6px] p-6 flex flex-col justify-between space-y-5 hover:border-[#385BAB] hover:shadow-sm transition-all"
            >
              <div className="space-y-4">
                {/* Icon Box */}
                <div className="w-11 h-11 rounded-[6px] bg-[#E5EEFF] border border-[#CCDFFF] flex items-center justify-center">
                  {getIcon(adv.iconName)}
                </div>

                {/* Category & Title */}
                <div className="space-y-1">
                  <span className="font-karla font-bold text-[10px] uppercase tracking-wider text-[#D97706]">
                    {adv.category}
                  </span>
                  <h3 className="font-rubik font-bold text-base text-[#00163D] leading-snug">
                    {adv.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-karla text-xs text-slate-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>

              {/* Spec Highlight Badge */}
              <div className="pt-3 border-t border-slate-200">
                <span className="inline-block bg-white border border-slate-200 text-[#00163D] font-karla font-bold text-[11px] px-2.5 py-1 rounded-[3px] shadow-2xs">
                  {adv.specHighlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
