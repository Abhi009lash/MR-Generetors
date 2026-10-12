import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { AMC_TIERS, type AmcTierItem } from './amcData';

interface AmcTiersProps {
  onSelectTier: (tierName: string) => void;
}

export const AmcTiers: React.FC<AmcTiersProps> = ({ onSelectTier }) => {
  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FF] select-none" id="amc-tiers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
            TAILORED ANNUAL CONTRACTUAL TIERS
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] tracking-tight">
            Annual Maintenance Contract (AMC) Tiers
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            Select between labor-only oversight, consumable-inclusive maintenance, or comprehensive coverage inclusive of all major wear parts.
          </p>
        </div>

        {/* 3 Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {AMC_TIERS.map((tier: AmcTierItem) => {
            const isDark = tier.id === 'comprehensive';
            const isPopular = tier.isPopular;

            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative shadow-sm hover:shadow-md ${
                  isDark
                    ? 'bg-[#0A1D3F] text-white border border-[#132C5E]'
                    : isPopular
                    ? 'bg-white text-slate-800 border-2 border-[#1E40AF] ring-4 ring-[#1E40AF]/10'
                    : 'bg-white text-slate-800 border border-slate-200'
                }`}
              >
                {/* Popular Pill Badge */}
                {tier.badge && (
                  <div
                    className={`absolute -top-3.5 left-6 px-3 py-1 rounded-full text-[10px] font-rubik font-bold uppercase tracking-wider shadow-xs ${
                      isDark
                        ? 'bg-[#DC2626] text-white'
                        : isPopular
                        ? 'bg-[#1E40AF] text-white'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {tier.badge}
                  </div>
                )}

                <div className="space-y-4 pt-1">
                  <div>
                    <h3
                      className={`font-rubik font-bold text-xl sm:text-2xl leading-tight ${
                        isDark ? 'text-white' : 'text-[#00163D]'
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={`font-karla text-xs mt-2 leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {tier.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div
                    className={`pt-4 border-t space-y-3 ${
                      isDark ? 'border-white/10' : 'border-slate-100'
                    }`}
                  >
                    <span
                      className={`block font-rubik font-bold text-[11px] uppercase tracking-wider ${
                        isDark ? 'text-amber-400' : 'text-[#385BAB]'
                      }`}
                    >
                      SCOPE OF SERVICING:
                    </span>
                    <ul className="space-y-2.5 text-xs font-karla">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isDark
                                ? 'text-amber-400'
                                : isPopular
                                ? 'text-[#1E40AF]'
                                : 'text-emerald-600'
                            }`}
                          />
                          <span
                            className={`leading-snug ${
                              isDark ? 'text-slate-200' : 'text-slate-700'
                            }`}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-8">
                  <button
                    type="button"
                    onClick={() => onSelectTier(tier.name)}
                    className={`w-full h-12 rounded-lg font-rubik font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-98 ${
                      isDark
                        ? 'bg-[#D97706] hover:bg-[#B45309] text-white'
                        : isPopular
                        ? 'bg-[#1E40AF] hover:bg-[#1E3A8A] text-white'
                        : 'bg-[#EFF4FF] hover:bg-[#00163D] text-[#00163D] hover:text-white'
                    }`}
                  >
                    <span>{tier.buttonLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
