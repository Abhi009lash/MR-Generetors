import React from 'react';
import { Wind, VolumeX, Activity, Gauge, Wrench, Award } from 'lucide-react';
import { EICHER_PILLARS, type EicherPillar } from './eicherData';

const getPillarIcon = (name: EicherPillar['iconName']) => {
  switch (name) {
    case 'wind':
      return <Wind className="w-5 h-5 text-[#385BAB]" />;
    case 'volume':
      return <VolumeX className="w-5 h-5 text-[#385BAB]" />;
    case 'activity':
      return <Activity className="w-5 h-5 text-[#385BAB]" />;
    case 'gauge':
      return <Gauge className="w-5 h-5 text-[#385BAB]" />;
    case 'wrench':
      return <Wrench className="w-5 h-5 text-[#385BAB]" />;
    case 'award':
      return <Award className="w-5 h-5 text-[#385BAB]" />;
    default:
      return <Award className="w-5 h-5 text-[#385BAB]" />;
  }
};

export const EicherFeaturesPillars: React.FC = () => {
  return (
    <section className="bg-[#F8F9FF] py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header */}
        <div className="space-y-2 max-w-3xl">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
            EUROPEAN ENGINEERING &amp; LOCAL RELIABILITY
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
            The Volvo Group &amp; Eicher Motors Advantage
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            Formed through the VECV joint venture, Eicher industrial gensets inherit the pedigree of Volvo Group's robust engineering standards with local Indian commercial vehicle parts support and pricing.
          </p>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EICHER_PILLARS.map((pillar: EicherPillar) => (
            <div
              key={pillar.id}
              className="bg-white border border-slate-200 rounded-[2px] p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#385BAB] hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[2px] bg-[#E5EEFF] flex items-center justify-center">
                  {getPillarIcon(pillar.iconName)}
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
