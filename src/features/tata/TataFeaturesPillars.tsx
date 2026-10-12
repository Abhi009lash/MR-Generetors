import React from 'react';
import { Truck, Wind, Shield, Wrench, Cpu, Flame } from 'lucide-react';
import { TATA_ENGINEERING_PILLARS, type TataEngineeringPillar } from './tataData';

const getPillarIcon = (iconName: TataEngineeringPillar['iconName']) => {
  switch (iconName) {
    case 'truck':
      return <Truck className="w-6 h-6 text-[#00163D]" />;
    case 'wind':
      return <Wind className="w-6 h-6 text-[#385BAB]" />;
    case 'shield':
      return <Shield className="w-6 h-6 text-[#00163D]" />;
    case 'wrench':
      return <Wrench className="w-6 h-6 text-[#D32F2F]" />;
    case 'cpu':
      return <Cpu className="w-6 h-6 text-[#00163D]" />;
    case 'flame':
      return <Flame className="w-6 h-6 text-[#047857]" />;
  }
};

export const TataFeaturesPillars: React.FC = () => {
  return (
    <section className="bg-[#F8F9FF] py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-slate-200">
          <div className="space-y-2 max-w-xl">
            <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
              ENGINEERING DISTINCTIONS
            </span>
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
              NOTABLE ENGINEERING FEATURES &amp; TECHNICAL ADVANTAGES
            </h2>
          </div>

          <p className="font-karla text-sm text-slate-600 max-w-lg leading-relaxed">
            Why leading manufacturing plants, hospitals, and commercial infrastructure in Hyderabad choose Tata diesel generator sets.
          </p>
        </div>

        {/* 6-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TATA_ENGINEERING_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-[2px] border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-5 hover:border-[#385BAB] transition-all hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-[2px] bg-[#E5EEFF] flex items-center justify-center">
                  {getPillarIcon(pillar.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-rubik font-bold text-lg text-[#00163D] leading-snug">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="font-karla text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Badge Tag */}
              <div className="pt-2">
                <div className="p-2 bg-[#F4F6F9] rounded-[2px] text-center">
                  <span className="font-karla font-bold text-[11px] text-[#00163D] uppercase tracking-wider block">
                    {pillar.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
